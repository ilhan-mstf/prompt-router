'use strict';

/* ── Provider definitions ───────────────────────────────────── */
const enc = s => encodeURIComponent(s);
const providers = [
  { id: 'chatgpt',    label: 'ChatGPT',    cls: 'pc-chatgpt',    url: q => `https://chatgpt.com/?q=${enc(q)}` },
  { id: 'claude',     label: 'Claude',      cls: 'pc-claude',     url: q => `https://claude.ai/new?q=${enc(q)}` },
  { id: 'gemini',     label: 'Gemini',      cls: 'pc-gemini',     url: q => `https://gemini.google.com/app?q=${enc(q)}` },
  { id: 'copilot',    label: 'Copilot',     cls: 'pc-copilot',    url: q => `https://copilot.microsoft.com/?q=${enc(q)}` },
  { id: 'perplexity', label: 'Perplexity',  cls: 'pc-perplexity', url: q => `https://www.perplexity.ai/search?q=${enc(q)}` },
  { id: 'lechat',     label: 'Le Chat',     cls: 'pc-lechat',     url: q => `https://chat.mistral.ai/chat?q=${enc(q)}` },
  { id: 'grok',       label: 'Grok',        cls: 'pc-grok',       url: q => `https://x.com/i/grok?text=${enc(q)}` },
  { id: 'deepseek',   label: 'DeepSeek',    cls: 'pc-deepseek',   url: q => `https://chat.deepseek.com/?q=${enc(q)}` },
];

/* ── Core functions ─────────────────────────────────────────── */
function getPrompt() { return document.getElementById('prompt').value.trim(); }

function openProvider(p) {
  const q = getPrompt();
  if (!q) { showToast(window.__TOAST_NO_PROMPT || 'Write a prompt first'); return; }
  const w = window.open(p.url(q), '_blank', 'noopener,noreferrer');
  if (!w) showToast(window.__TOAST_POPUP || 'Popup blocked \u2014 copy & paste instead');
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

/* ── Provider rendering ─────────────────────────────────────── */
function renderProviders(container, ariaPrefix) {
  if (!container) return;
  ariaPrefix = ariaPrefix || 'Open in';
  providers.forEach(p => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = `p-btn ${p.cls}`;
    btn.setAttribute('aria-label', `${ariaPrefix} ${p.label}`);
    btn.innerHTML = `<span class="p-dot" aria-hidden="true"></span><span class="p-name">${p.label}</span><span class="p-arrow" aria-hidden="true">&nearr;</span>`;
    btn.addEventListener('click', () => openProvider(p));
    li.appendChild(btn); container.appendChild(li);
  });
}

/* ── Language & Locale ──────────────────────────────────────── */
const lang = window.__LANG__ || 'en';
const locale = (typeof LOCALES !== 'undefined' ? LOCALES[lang] : null) || (typeof LOCALES !== 'undefined' ? LOCALES.en : {});
const templates = locale.templates || [];

/* ── DOM refs ────────────────────────────────────────────────── */
const promptEl    = document.getElementById('prompt');
const chipsEl     = document.getElementById('chips');
const providersEl = document.getElementById('providers');
const charCountEl = document.getElementById('charCount');
const copyBtn     = document.getElementById('copyBtn');
const saveBtn     = document.getElementById('saveBtn');
const clearBtnEl  = document.getElementById('clearBtn');
const libSection  = document.getElementById('lib-section');
const libList     = document.getElementById('lib-list');

/* ── UI Logic ────────────────────────────────────────────────── */
const TPL_PIN_KEY   = 'pr_pinned_tpls';
const CHIPS_VISIBLE = 3;
const LIB_VISIBLE   = 3;
const TITLE_MAX     = 30;
let activeTplLabel  = null;
let tplExpanded     = false;
let libExpanded     = false;

function getPinnedTpls() {
  try { return JSON.parse(localStorage.getItem(TPL_PIN_KEY)) || []; }
  catch { return []; }
}

const FOOTER_LINKS =
  `<a href="https://chatgpt.com" rel="noopener noreferrer" target="_blank">ChatGPT</a>, ` +
  `<a href="https://claude.ai" rel="noopener noreferrer" target="_blank">Claude</a>, ` +
  `<a href="https://gemini.google.com" rel="noopener noreferrer" target="_blank">Gemini</a>, ` +
  `<a href="https://copilot.microsoft.com" rel="noopener noreferrer" target="_blank">Copilot</a>, ` +
  `<a href="https://www.perplexity.ai" rel="noopener noreferrer" target="_blank">Perplexity</a>, ` +
  `<a href="https://chat.deepseek.com" rel="noopener noreferrer" target="_blank">DeepSeek</a>, ` +
  `<a href="https://x.com/i/grok" rel="noopener noreferrer" target="_blank">Grok</a>, and ` +
  `<a href="https://chat.mistral.ai" rel="noopener noreferrer" target="_blank">Le Chat</a>`;

function applyLocale() {
  if (!locale || !locale.title) return;
  document.title = locale.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', locale.metaDesc);
  
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', locale.ogLocale);
  
  const ogImgAlt = document.querySelector('meta[property="og:image:alt"]');
  if (ogImgAlt) ogImgAlt.setAttribute('content', locale.ogImageAlt);
  
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', locale.title);
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', locale.metaDesc);
  
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', locale.title);
  
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', locale.metaDesc);

  const taglineEl = document.getElementById('tagline');
  const heroSubEl = document.getElementById('hero-sub');
  if (taglineEl) {
    if (locale.taglineHTML) { taglineEl.innerHTML = locale.taglineHTML; }
    else { taglineEl.textContent = locale.tagline; }
  }
  if (locale.heroSub && heroSubEl) { heroSubEl.textContent = locale.heroSub; }
  
  const lblTpls = document.getElementById('lbl-templates');
  if (lblTpls) lblTpls.textContent = locale.lblTemplates;
  
  const lblLib = document.getElementById('lbl-library');
  if (lblLib) lblLib.textContent = locale.lblLibrary;
  
  const lblPrompt = document.getElementById('lbl-prompt');
  if (lblPrompt) lblPrompt.textContent = locale.lblPrompt;
  
  const lblProv = document.getElementById('lbl-providers');
  if (lblProv) lblProv.textContent = locale.lblProviders;
  
  if (promptEl) promptEl.setAttribute('placeholder', locale.placeholder);
  
  if (copyBtn) {
    copyBtn.textContent = locale.copyBtn;
    copyBtn.setAttribute('aria-label', locale.copyBtn);
  }
  if (saveBtn) {
    saveBtn.textContent = locale.saveBtn;
    saveBtn.setAttribute('aria-label', locale.saveBtn);
  }
  if (clearBtnEl) {
    clearBtnEl.textContent = locale.clearBtn;
    clearBtnEl.setAttribute('aria-label', locale.clearBtn);
  }
  
  const footerCopy = document.getElementById('footer-copy');
  if (footerCopy) footerCopy.textContent = locale.footerCopy.replace('{year}', new Date().getFullYear());
  
  const shortcutHint = document.getElementById('shortcut-hint');
  if (shortcutHint) {
    shortcutHint.innerHTML = `<kbd>⌘S</kbd> ${locale.saveBtn.toLowerCase()}\u00a0\u00a0 <kbd>⌘C</kbd> ${locale.shortcutCopy}\u00a0\u00a0 <kbd>Esc</kbd> ${locale.clearBtn.toLowerCase()}`;
  }
  
  const footerDesc = document.getElementById('footer-desc');
  if (footerDesc) {
    footerDesc.innerHTML = `<strong>Prompt Router</strong> ${locale.footerDescIntro} ${FOOTER_LINKS}. ${locale.footerDescOutro}`;
  }
}

function renderChips() {
  if (!chipsEl) return;
  const pinned = getPinnedTpls();
  const sorted = [...templates].sort((a, b) =>
    (pinned.includes(b.label) ? 1 : 0) - (pinned.includes(a.label) ? 1 : 0)
  );
  chipsEl.innerHTML = '';

  sorted.forEach((tpl, i) => {
    const isPinned = pinned.includes(tpl.label);
    const isHidden = !tplExpanded && i >= CHIPS_VISIBLE;

    const group = document.createElement('div');
    group.className = 'chip-group' + (isHidden ? ' chip-hidden' : '');

    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'chip';
    btn.textContent = tpl.label;
    btn.setAttribute('aria-pressed', activeTplLabel === tpl.label ? 'true' : 'false');
    btn.addEventListener('click', () => {
      const active = btn.getAttribute('aria-pressed') === 'true';
      chipsEl.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      promptEl.value = active ? '' : tpl.text;
      activeTplLabel = active ? null : tpl.label;
      if (!active) { btn.setAttribute('aria-pressed', 'true'); promptEl.focus(); }
      updateCount();
    });

    const pinBtn = document.createElement('button');
    pinBtn.type = 'button';
    pinBtn.className = 'chip-pin-btn' + (isPinned ? ' active' : '');
    pinBtn.title = isPinned ? locale.unpinTitle : locale.pinTitle;
    pinBtn.setAttribute('aria-label', isPinned
      ? locale.ariaUnpinTpl.replace('{label}', tpl.label)
      : locale.ariaPinTpl.replace('{label}', tpl.label));
    pinBtn.textContent = isPinned ? '★' : '☆';
    pinBtn.addEventListener('click', () => {
      const p = getPinnedTpls();
      const idx = p.indexOf(tpl.label);
      if (idx >= 0) p.splice(idx, 1); else p.push(tpl.label);
      localStorage.setItem(TPL_PIN_KEY, JSON.stringify(p));
      renderChips();
    });

    group.appendChild(btn);
    group.appendChild(pinBtn);
    chipsEl.appendChild(group);
  });

  if (templates.length > CHIPS_VISIBLE) {
    const moreBtn = document.createElement('button');
    moreBtn.type = 'button';
    moreBtn.className = 'chip chip-show-more';
    moreBtn.textContent = tplExpanded ? locale.showLess : locale.showMore.replace('{n}', templates.length - CHIPS_VISIBLE);
    moreBtn.addEventListener('click', () => { tplExpanded = !tplExpanded; renderChips(); });
    chipsEl.appendChild(moreBtn);
  }
}

function updateCount() {
  if (!charCountEl) return;
  const n = promptEl.value.length;
  charCountEl.textContent = n > 0 ? n.toLocaleString() : '';
  charCountEl.classList.toggle('warn', n > 3000);
}

async function copyPrompt() {
  const q = getPrompt();
  if (!q) { showToast(locale.toastNoCopy); return; }
  try {
    await navigator.clipboard.writeText(q);
    copyBtn.textContent = locale.copyBtnDone;
    copyBtn.setAttribute('aria-label', locale.copyBtnDone);
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = locale.copyBtn;
      copyBtn.setAttribute('aria-label', locale.copyBtn);
      copyBtn.classList.remove('copied');
    }, 2200);
  } catch { showToast(locale.toastCopyFail); }
}

function clearPrompt() {
  promptEl.value = ''; updateCount();
  activeTplLabel = null;
  if (chipsEl) {
    chipsEl.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
  }
  promptEl.focus();
}

/* ── Library persistence ─────────────────────────────────────── */
const LIB_KEY  = 'pr_library';
const LIB_MAX  = 10;

function readLib() {
  try { return JSON.parse(localStorage.getItem(LIB_KEY)) || []; }
  catch { return []; }
}
function writeLib(lib) { localStorage.setItem(LIB_KEY, JSON.stringify(lib)); }

function renderLib() {
  if (!libList) return;
  const lib = readLib();
  lib.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.ts - a.ts);

  if (libSection) libSection.style.display = lib.length ? '' : 'none';
  libList.innerHTML = '';

  lib.forEach((item, i) => {
    const displayTitle = item.title.length > TITLE_MAX
      ? item.title.slice(0, TITLE_MAX).trimEnd() + '…'
      : item.title;

    const isHidden = !libExpanded && i >= LIB_VISIBLE;
    const group = document.createElement('div');
    group.className = 'chip-group' + (isHidden ? ' chip-hidden' : '');

    const loadBtn = document.createElement('button');
    loadBtn.type = 'button'; loadBtn.className = 'chip';
    loadBtn.textContent = displayTitle;
    loadBtn.title = item.text;
    loadBtn.setAttribute('aria-label', locale.ariaLoad.replace('{title}', item.title));
    loadBtn.addEventListener('click', () => {
      promptEl.value = item.text; updateCount();
      if (chipsEl) chipsEl.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      libList.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
      activeTplLabel = null;
      loadBtn.setAttribute('aria-pressed', 'true');
      promptEl.focus();
    });

    const pinBtn = document.createElement('button');
    pinBtn.type = 'button';
    pinBtn.className = 'chip-pin-btn' + (item.pinned ? ' active' : '');
    pinBtn.textContent = item.pinned ? '★' : '☆';
    pinBtn.title = item.pinned ? locale.unpinTitle : locale.pinTitle;
    pinBtn.setAttribute('aria-label', item.pinned
      ? locale.ariaUnpin.replace('{title}', item.title)
      : locale.ariaPin.replace('{title}', item.title));
    pinBtn.addEventListener('click', () => {
      const lib2 = readLib();
      const f = lib2.find(x => x.ts === item.ts);
      if (f) f.pinned = !f.pinned;
      writeLib(lib2); renderLib();
    });

    const delBtn = document.createElement('button');
    delBtn.type = 'button'; delBtn.className = 'chip-del-btn';
    delBtn.textContent = '×';
    delBtn.title = locale.deleteTitle;
    delBtn.setAttribute('aria-label', locale.ariaDelete.replace('{title}', item.title));
    delBtn.addEventListener('click', () => {
      writeLib(readLib().filter(x => x.ts !== item.ts));
      renderLib();
    });

    group.appendChild(loadBtn);
    group.appendChild(pinBtn);
    group.appendChild(delBtn);
    libList.appendChild(group);
  });

  if (lib.length > LIB_VISIBLE) {
    const moreBtn = document.createElement('button');
    moreBtn.type = 'button';
    moreBtn.className = 'chip chip-show-more';
    moreBtn.textContent = libExpanded ? locale.showLess : locale.showMore.replace('{n}', lib.length - LIB_VISIBLE);
    moreBtn.addEventListener('click', () => { libExpanded = !libExpanded; renderLib(); });
    libList.appendChild(moreBtn);
  }
}

function savePrompt() {
  const text = getPrompt();
  if (!text) { showToast(locale.toastNoSave); return; }
  const lib = readLib();
  if (lib.length >= LIB_MAX) { showToast(locale.toastLibFull); return; }
  if (lib.some(x => x.text === text)) { showToast(locale.toastDuplicate); return; }

  const title = text.replace(/\s+/g, ' ').trim().slice(0, 50) + (text.length > 50 ? '…' : '');
  lib.push({ title, text, ts: Date.now(), pinned: false });
  writeLib(lib); renderLib();

  if (saveBtn) {
    saveBtn.textContent = locale.toastSaved;
    saveBtn.classList.add('saved-flash');
    setTimeout(() => {
      saveBtn.textContent = locale.saveBtn;
      saveBtn.classList.remove('saved-flash');
    }, 2000);
  }
}

/* ── Initialization ──────────────────────────────────────────── */
if (promptEl && chipsEl) {
  applyLocale();
  renderChips();
  renderProviders(providersEl, locale.lblProviders);
  renderLib();
  updateCount();

  promptEl.addEventListener('input', () => {
    updateCount();
    if (!promptEl.value) {
      activeTplLabel = null;
      if (chipsEl) chipsEl.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
    }
  });

  document.addEventListener('keydown', e => {
    const inTextarea = document.activeElement === promptEl;
    if (e.key === 'Escape' && inTextarea) { clearPrompt(); return; }
    if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); savePrompt(); return; }
    if ((e.metaKey || e.ctrlKey) && e.key === 'c' && inTextarea && !window.getSelection()?.toString()) {
      e.preventDefault(); copyPrompt();
    }
  });
}

/* ── Nav dropdown ────────────────────────────────────────────── */
(function() {
  const btn = document.querySelector('.nav-dropdown-btn');
  const menu = document.querySelector('.nav-dropdown-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
})();

/* ── Service Worker Registration ────────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

/* ── Exposed for index.html ─────────────────────────────────── */
window.copyPrompt = copyPrompt;
window.savePrompt = savePrompt;
window.clearPrompt = clearPrompt;
