import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const source = fs.readFileSync(new URL('../js/prompt.js', import.meta.url), 'utf8');
function setup(overrides = {}) {
  const status = { textContent: '' };
  const button = { setAttribute() {}, disabled: false };
  const window = {
    screen: { availLeft: -1440, availTop: 25, availWidth: 1440, availHeight: 876 },
    resizeTo() {}, moveTo() {}, ...overrides,
  };
  const context = vm.createContext({
    window, navigator: {},
    document: {
      addEventListener() {},
      getElementById: id => ({ tileStatus: status, tileModeBtn: button })[id],
    },
  });
  vm.runInContext(source, context);
  return { context, status, button, run: code => vm.runInContext(code, context) };
}

test('tiles account for a monitor left of the primary display and the menu bar', () => {
  const { run } = setup();
  assert.deepEqual(JSON.parse(run('JSON.stringify([0,1,2,3].map(slot => tileBounds(slot)))')), [
    { left: -1440, top: 25, width: 720, height: 438 },
    { left: -720, top: 25, width: 720, height: 438 },
    { left: -1440, top: 463, width: 720, height: 438 },
    { left: -720, top: 463, width: 720, height: 438 },
  ]);
});

test('denied screen permission and refused resizing still permit manual tiling', async () => {
  const { run, button, status } = setup({
    getScreenDetails: async () => { throw new Error('denied'); },
    resizeTo() { throw new Error('not allowed'); },
  });
  await run('toggleTileMode()');
  assert.equal(run('tileMode'), true);
  assert.equal(button.disabled, false);
  assert.match(status.textContent, /macOS/);
  await run('toggleTileMode()');
  assert.equal(run('tileMode'), false);
});

test('blocked popup gives an actionable message', () => {
  const { run, status } = setup({ open: () => null });
  run('openTiledProvider(providers[0], "hello")');
  assert.match(status.textContent, /Allow popups/);
});

test('popup is detached and sized before provider navigation', () => {
  const events = [];
  const popup = {
    opener: {},
    document: { createElement: () => ({}), head: { appendChild: meta => {
      assert.equal(meta.content, 'no-referrer');
    } } },
    resizeTo: (width, height) => events.push(['size', width, height]),
    moveTo: (left, top) => events.push(['move', left, top]),
    location: { replace: url => {
      assert.equal(popup.opener, null);
      events.push(['navigate', url]);
    } },
  };
  const { run } = setup({ open: (url, target, features) => {
    assert.equal(url, 'about:blank');
    assert.match(features, /popup=yes/);
    return popup;
  } });
  run('openTiledProvider(providers[0], "hello & world")');
  assert.deepEqual(events, [
    ['size', 720, 438], ['move', -720, 25],
    ['navigate', 'https://chatgpt.com/?q=hello%20%26%20world'],
  ]);
});
