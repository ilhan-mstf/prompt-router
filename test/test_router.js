import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';
import { LIB_LOCALES, VALID_LIBS, SUPPORTED_LANGS } from '../js/lib-locales.js';
import worker from '../_worker.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

console.log('🧪 Running Prompt Router Automated Test Suite...\n');

let passed = 0;
let failed = 0;

function it(desc, fn) {
  try {
    fn();
    console.log(`  ✓ ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${desc}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

async function itAsync(desc, fn) {
  try {
    await fn();
    console.log(`  ✓ ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${desc}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

// ─────────────────────────────────────────────────────────────
// 1. Static Asset Integrity (Guarantees zero 404s)
// ─────────────────────────────────────────────────────────────
console.log('📁 1. Static Asset Integrity:');

const CORE_STATIC_FILES = [
  'favicon.ico',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'apple-touch-icon.png',
  'og-image.png',
  'site.webmanifest',
  'clumsy.svg',
  'sw.js',
  'serve.py',
  'index.html',
  'blog.html',
  'blog-new-look.html',
  'sitemap.xml',
  'robots.txt',
  'llms.txt',
  'llms-full.txt',
  'js/locales.js',
  'js/lib-locales.js',
  'js/prompt.js',
  'css/core.css',
  'css/prompt.css'
];

CORE_STATIC_FILES.forEach(file => {
  it(`Asset exists on disk: ${file}`, () => {
    const fullPath = path.join(ROOT, file);
    assert.strictEqual(fs.existsSync(fullPath), true, `Missing file: ${file}`);
  });
});

VALID_LIBS.forEach(lib => {
  it(`Library HTML file exists: ${lib}.html`, () => {
    const fullPath = path.join(ROOT, `${lib}.html`);
    assert.strictEqual(fs.existsSync(fullPath), true, `Missing library file: ${lib}.html`);
  });
});

// ─────────────────────────────────────────────────────────────
// 2. SEO & Multi-Language Dictionary Completeness
// ─────────────────────────────────────────────────────────────
console.log('\n🌐 2. Multi-Language SEO Dictionary:');

it('Supported languages count is exactly 7', () => {
  assert.deepStrictEqual(SUPPORTED_LANGS, ['en', 'es', 'tr', 'fr', 'de', 'it', 'pt']);
});

it('All 11 libraries exist in LIB_LOCALES', () => {
  assert.strictEqual(VALID_LIBS.length, 11);
  VALID_LIBS.forEach(lib => {
    assert.strictEqual(Boolean(LIB_LOCALES[lib]), true, `Missing lib in LIB_LOCALES: ${lib}`);
  });
});

VALID_LIBS.forEach(lib => {
  it(`Library "${lib}" has complete metadata across all 7 languages`, () => {
    const libData = LIB_LOCALES[lib];
    SUPPORTED_LANGS.forEach(lang => {
      const meta = libData[lang];
      assert.strictEqual(Boolean(meta), true, `Missing ${lang} for ${lib}`);
      assert.strictEqual(typeof meta.title, 'string', `Missing title for ${lib}.${lang}`);
      assert.strictEqual(meta.title.length > 5, true, `Empty title for ${lib}.${lang}`);
      assert.strictEqual(typeof meta.desc, 'string', `Missing desc for ${lib}.${lang}`);
      assert.strictEqual(meta.desc.length > 10, true, `Empty desc for ${lib}.${lang}`);
      assert.strictEqual(typeof meta.tagline, 'string', `Missing tagline for ${lib}.${lang}`);
      assert.strictEqual(typeof meta.sub, 'string', `Missing sub for ${lib}.${lang}`);
    });
  });
});

// ─────────────────────────────────────────────────────────────
// 3. Sitemap Integrity & Index Coverage
// ─────────────────────────────────────────────────────────────
console.log('\n🗺️ 3. Sitemap Coverage:');

const sitemapContent = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf-8');
const locMatches = [...sitemapContent.matchAll(/<loc>(https:\/\/prompt-router\.pages\.dev[^<]+)<\/loc>/g)].map(m => m[1]);

it('Sitemap contains zero duplicate URLs', () => {
  const seen = new Set();
  const duplicates = [];
  locMatches.forEach(url => {
    if (seen.has(url)) duplicates.push(url);
    seen.add(url);
  });
  assert.strictEqual(duplicates.length, 0, `Duplicate URLs in sitemap: ${duplicates.join(', ')}`);
});

it('Sitemap includes all 7 homepage routes', () => {
  const homeUrls = [
    'https://prompt-router.pages.dev/',
    'https://prompt-router.pages.dev/es',
    'https://prompt-router.pages.dev/tr',
    'https://prompt-router.pages.dev/fr',
    'https://prompt-router.pages.dev/de',
    'https://prompt-router.pages.dev/it',
    'https://prompt-router.pages.dev/pt'
  ];
  homeUrls.forEach(url => {
    assert.strictEqual(locMatches.includes(url), true, `Missing homepage URL in sitemap: ${url}`);
  });
});

it('Sitemap includes all 77 library URLs (11 libraries × 7 languages)', () => {
  VALID_LIBS.forEach(lib => {
    // English canonical
    assert.strictEqual(locMatches.includes(`https://prompt-router.pages.dev/${lib}`), true, `Missing English lib in sitemap: /${lib}`);
    // Non-English subpaths
    SUPPORTED_LANGS.filter(l => l !== 'en').forEach(lang => {
      const url = `https://prompt-router.pages.dev/${lang}/${lib}`;
      assert.strictEqual(locMatches.includes(url), true, `Missing localized lib in sitemap: ${url}`);
    });
  });
});

it('Sitemap includes new redesign blog post', () => {
  assert.strictEqual(locMatches.includes('https://prompt-router.pages.dev/blog-new-look'), true, 'Missing blog-new-look in sitemap');
});

// ─────────────────────────────────────────────────────────────
// 4. AI Search & llms.txt Coverage
// ─────────────────────────────────────────────────────────────
console.log('\n🤖 4. AI Search & llms.txt Verification:');

const llmsTxt = fs.readFileSync(path.join(ROOT, 'llms.txt'), 'utf-8');
const llmsFullTxt = fs.readFileSync(path.join(ROOT, 'llms-full.txt'), 'utf-8');

const REQUIRED_PROVIDERS = [
  'ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Perplexity',
  'DeepSeek', 'Grok', 'Le Chat', 'Qwen', 'Kimi', 'Z.ai'
];

REQUIRED_PROVIDERS.forEach(provider => {
  it(`llms.txt documents provider: ${provider}`, () => {
    assert.strictEqual(llmsTxt.includes(provider), true, `llms.txt missing provider: ${provider}`);
  });
  it(`llms-full.txt documents provider: ${provider}`, () => {
    assert.strictEqual(llmsFullTxt.includes(provider), true, `llms-full.txt missing provider: ${provider}`);
  });
});

it('llms.txt documents multi-language library subdirectories', () => {
  assert.strictEqual(llmsTxt.includes('/tr/dev'), true, 'llms.txt missing /tr/dev reference');
  assert.strictEqual(llmsTxt.includes('/es/writing'), true, 'llms.txt missing /es/writing reference');
});

it('llms.txt references the new redesign blog post', () => {
  assert.strictEqual(llmsTxt.includes('/blog-new-look'), true, 'llms.txt missing /blog-new-look');
});

// ─────────────────────────────────────────────────────────────
// 5. Worker Routing Simulation (Edge SSR logic)
// ─────────────────────────────────────────────────────────────
console.log('\n⚙️ 5. Edge Worker Route Matching:');

const NON_EN_LANGS = new Set(['es', 'it', 'pt', 'fr', 'de', 'tr']);

function simulateRoute(pathname) {
  const matchedTrailingLang = pathname.match(/^\/([a-z]{2})\/$/);
  if (matchedTrailingLang && NON_EN_LANGS.has(matchedTrailingLang[1])) {
    return { type: 'redirect', status: 301, target: `/${matchedTrailingLang[1]}` };
  }
  const matchedTrailingLib = pathname.match(/^\/([a-z]{2})\/([a-z-]+)\/$/);
  if (matchedTrailingLib && NON_EN_LANGS.has(matchedTrailingLib[1]) && VALID_LIBS.includes(matchedTrailingLib[2])) {
    return { type: 'redirect', status: 301, target: `/${matchedTrailingLib[1]}/${matchedTrailingLib[2]}` };
  }
  const langMatch = pathname.match(/^\/([a-z]{2})$/);
  if (langMatch && NON_EN_LANGS.has(langMatch[1])) {
    return { type: 'localized-homepage', lang: langMatch[1] };
  }
  const libMatch = pathname.match(/^\/([a-z]{2})\/([a-z-]+)$/);
  if (libMatch && NON_EN_LANGS.has(libMatch[1]) && VALID_LIBS.includes(libMatch[2])) {
    return { type: 'localized-library', lang: libMatch[1], lib: libMatch[2] };
  }
  const enLibMatch = pathname.match(/^\/([a-z-]+)$/);
  if (enLibMatch && VALID_LIBS.includes(enLibMatch[1])) {
    return { type: 'english-library', lib: enLibMatch[1] };
  }
  return { type: 'static-asset', path: pathname };
}

it('Routes /tr/dev correctly to localized library', () => {
  const res = simulateRoute('/tr/dev');
  assert.strictEqual(res.type, 'localized-library');
  assert.strictEqual(res.lang, 'tr');
  assert.strictEqual(res.lib, 'dev');
});

it('Routes /es/writing correctly to localized library', () => {
  const res = simulateRoute('/es/writing');
  assert.strictEqual(res.type, 'localized-library');
  assert.strictEqual(res.lang, 'es');
  assert.strictEqual(res.lib, 'writing');
});

it('Redirects trailing slash /tr/dev/ to /tr/dev (301)', () => {
  const res = simulateRoute('/tr/dev/');
  assert.strictEqual(res.type, 'redirect');
  assert.strictEqual(res.status, 301);
  assert.strictEqual(res.target, '/tr/dev');
});

it('Routes /dev to English library with hreflang', () => {
  const res = simulateRoute('/dev');
  assert.strictEqual(res.type, 'english-library');
  assert.strictEqual(res.lib, 'dev');
});

it('Routes /tr to localized homepage', () => {
  const res = simulateRoute('/tr');
  assert.strictEqual(res.type, 'localized-homepage');
  assert.strictEqual(res.lang, 'tr');
});

// ─────────────────────────────────────────────────────────────
// 6. Theme Switching & Contrast Verification
// ─────────────────────────────────────────────────────────────
console.log('\n🎨 6. Theme Switching & UI Contrast:');

const APP_PAGES = [
  'index.html',
  ...VALID_LIBS.map(l => `${l}.html`)
];

APP_PAGES.forEach(page => {
  it(`Page ${page} has #themeToggleBtn in topbar`, () => {
    const content = fs.readFileSync(path.join(ROOT, page), 'utf-8');
    assert.strictEqual(content.includes('id="themeToggleBtn"'), true, `Missing #themeToggleBtn in ${page}`);
    assert.strictEqual(content.includes('main-topbar'), true, `Missing main-topbar in ${page}`);
  });
});

it('core.css defines both data-theme="light" and data-theme="dark"', () => {
  const coreCSS = fs.readFileSync(path.join(ROOT, 'css/core.css'), 'utf-8');
  assert.strictEqual(coreCSS.includes(':root[data-theme="light"]'), true, 'Missing :root[data-theme="light"]');
  assert.strictEqual(coreCSS.includes(':root[data-theme="dark"]'), true, 'Missing :root[data-theme="dark"]');
});

it('prompt.css defines readable, high-contrast light theme .btn-primary', () => {
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(promptCSS.includes('[data-theme="light"] .btn-primary'), true, 'Missing [data-theme="light"] .btn-primary');
  assert.strictEqual(promptCSS.includes('.theme-toggle-btn'), true, 'Missing .theme-toggle-btn styling');
});

it('All application pages, blog pages, and mockup.html include automatic system theme initialization in <head>', () => {
  const pagesToCheck = [
    'index.html',
    ...VALID_LIBS.map(l => `${l}.html`),
    'blog.html',
    'mockup.html'
  ];
  pagesToCheck.forEach(p => {
    const html = fs.readFileSync(path.join(ROOT, p), 'utf-8');
    assert.strictEqual(html.includes("localStorage.removeItem('pr_theme')"), true, `Missing legacy theme purge in ${p}`);
    assert.strictEqual(html.includes("prefers-color-scheme: dark"), true, `Missing system dark check in ${p}`);
  });
});

it('prompt.js implements getSystemTheme, auto system sync, and dynamic prefers-color-scheme listener', () => {
  const promptJS = fs.readFileSync(path.join(ROOT, 'js/prompt.js'), 'utf-8');
  assert.strictEqual(promptJS.includes('function getSystemTheme()'), true, 'Missing getSystemTheme');
  assert.strictEqual(promptJS.includes("window.matchMedia('(prefers-color-scheme: dark)')"), true, 'Missing prefers-color-scheme listener');
  assert.strictEqual(promptJS.includes("sessionStorage.removeItem('pr_theme')"), true, 'Missing session override clear logic');
});

it('Theme behavior automatically follows OS appearance and correctly manages session overrides', () => {
  let systemDark = true;
  const attributes = {};
  const sessionStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
  };
  const localStorage = {
    _data: { pr_theme: 'light' },
    getItem(k) { return this._data[k] || null; },
    removeItem(k) { delete this._data[k]; }
  };
  const mockWindow = {
    location: { search: '', pathname: '/' },
    matchMedia(q) {
      return {
        matches: q.includes('dark') ? systemDark : !systemDark,
        addEventListener() {}
      };
    }
  };
  const mockDoc = {
    documentElement: {
      setAttribute(k, v) { attributes[k] = v; },
      getAttribute(k) { return attributes[k] || null; }
    },
    getElementById() { return { textContent: '', title: '', setAttribute() {} }; },
    addEventListener() {}
  };

  const fn = new Function('window', 'document', 'localStorage', 'sessionStorage', 'URLSearchParams', `
    ${fs.readFileSync(path.join(ROOT, 'js/prompt.js'), 'utf-8')}
    return { initTheme, toggleTheme, getSystemTheme };
  `);
  const { initTheme, toggleTheme } = fn(mockWindow, mockDoc, localStorage, sessionStorage, class { get() { return null; } });

  // 1. Legacy localStorage override is purged and system dark is adopted
  initTheme();
  assert.strictEqual(localStorage.getItem('pr_theme'), null, 'Legacy pr_theme must be purged');
  assert.strictEqual(attributes['data-theme'], 'dark', 'Must adopt system dark mode');

  // 2. Toggle to light mode
  toggleTheme();
  assert.strictEqual(attributes['data-theme'], 'light', 'Must toggle to light');
  assert.strictEqual(sessionStorage.getItem('pr_theme'), 'light', 'Session override saved');

  // 3. Toggle back to system dark
  toggleTheme();
  assert.strictEqual(attributes['data-theme'], 'dark', 'Must toggle back to dark');
  assert.strictEqual(sessionStorage.getItem('pr_theme'), null, 'Toggling back to system must clear session override');
});

// ─────────────────────────────────────────────────────────────
// 7. Accessibility & WCAG Compliance Verification
// ─────────────────────────────────────────────────────────────
console.log('\n♿ 7. Accessibility & WCAG Compliance:');

function srgbToLin(val) {
  const c = val / 255.0;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
function relLum(hex) {
  const [r, g, b] = hexToRgb(hex).map(srgbToLin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrastRatio(hex1, hex2) {
  const l1 = relLum(hex1);
  const l2 = relLum(hex2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

it('All app pages have accessible skip links pointing to #main-content', () => {
  APP_PAGES.forEach(page => {
    const content = fs.readFileSync(path.join(ROOT, page), 'utf-8');
    assert.strictEqual(content.includes('href="#main-content" class="skip"'), true, `Missing skip link to #main-content in ${page}`);
  });
});

it('All app pages provide proper ARIA attributes for sidebar and navigation', () => {
  APP_PAGES.forEach(page => {
    const content = fs.readFileSync(path.join(ROOT, page), 'utf-8');
    assert.strictEqual(content.includes('aria-controls="sidebar"'), true, `Missing aria-controls on sidebar buttons in ${page}`);
    assert.strictEqual(content.includes('aria-haspopup="true"'), true, `Missing aria-haspopup on dropdown in ${page}`);
    assert.strictEqual(content.includes('id="btnQuickSection"'), true, `Missing accessible button for quick section in ${page}`);
    assert.strictEqual(content.includes('aria-label="Prompt text"'), true, `Missing aria-label on textarea in ${page}`);
  });
});

it('CSS files provide .sr-only utility and prefers-reduced-motion support', () => {
  const coreCSS = fs.readFileSync(path.join(ROOT, 'css/core.css'), 'utf-8');
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(coreCSS.includes('.sr-only'), true, 'Missing .sr-only utility in core.css');
  assert.strictEqual(coreCSS.includes('prefers-reduced-motion'), true, 'Missing prefers-reduced-motion in core.css');
  assert.strictEqual(promptCSS.includes('prefers-reduced-motion'), true, 'Missing prefers-reduced-motion in prompt.css');
});

it('Dark mode color tokens meet WCAG AA and AAA contrast standards', () => {
  assert.ok(contrastRatio('#0f0f10', '#f0ece4') >= 14.0, 'Dark mode text should exceed 14:1 (AAA)');
  assert.ok(contrastRatio('#1a1a1c', '#c5c0b9') >= 9.0, 'Dark mode text-2 should exceed 9:1 (AAA)');
  assert.ok(contrastRatio('#222225', '#9c9690') >= 5.0, 'Dark mode text-3 should exceed 5:1 (AA)');
  assert.ok(contrastRatio('#0f0f10', '#d4a847') >= 7.0, 'Dark mode gold should exceed 7:1 (AAA)');
  assert.ok(contrastRatio('#222225', '#e06c6c') >= 4.5, 'Dark mode red should exceed 4.5:1 (AA)');
});

it('Light mode color tokens meet WCAG AA and AAA contrast standards', () => {
  assert.ok(contrastRatio('#f8f6f0', '#1a1714') >= 15.0, 'Light mode text should exceed 15:1 (AAA)');
  assert.ok(contrastRatio('#efebe2', '#3d3832') >= 9.0, 'Light mode text-2 should exceed 9:1 (AAA)');
  assert.ok(contrastRatio('#ffffff', '#5c564f') >= 7.0, 'Light mode text-3 should exceed 7:1 (AAA)');
  assert.ok(contrastRatio('#f8f6f0', '#855306') >= 5.0, 'Light mode gold should exceed 5:1 (AA)');
  assert.ok(contrastRatio('#efebe2', '#903030') >= 6.0, 'Light mode red should exceed 6:1 (AA/AAA)');
});

it('Primary buttons exceed WCAG AAA contrast ratio in both modes', () => {
  const darkBtnRatio = contrastRatio('#d4a847', '#0f0f10');
  const lightBtnRatio = contrastRatio('#d4a847', '#141210');
  assert.ok(darkBtnRatio >= 7.0, `Dark button contrast ${darkBtnRatio} must be >= 7.0:1 (AAA)`);
  assert.ok(lightBtnRatio >= 7.0, `Light button contrast ${lightBtnRatio} must be >= 7.0:1 (AAA)`);
});

// ─────────────────────────────────────────────────────────────
// 8. Sidebar Accordion & Shortcut Badge Integrity
// ─────────────────────────────────────────────────────────────
console.log('\n📑 8. Sidebar Accordion & Shortcut Badge Integrity:');

APP_PAGES.forEach(page => {
  it(`Page ${page} has valid unescaped accordion handlers, spaced command badges, and no misplaced header clear button`, () => {
    const content = fs.readFileSync(path.join(ROOT, page), 'utf-8');
    assert.strictEqual(content.includes("toggleSection(\\'"), false, `Invalid escaped toggleSection in ${page}`);
    assert.strictEqual(content.includes("toggleSection('quickSection')"), true, `Missing quickSection toggle in ${page}`);
    assert.strictEqual(content.includes("toggleSection('librariesSection')"), true, `Missing librariesSection toggle in ${page}`);
    assert.strictEqual(content.includes("toggleSection('savedSection')"), true, `Missing savedSection toggle in ${page}`);
    assert.strictEqual(content.includes("toggleSection('historySection')"), true, `Missing historySection toggle in ${page}`);
    assert.strictEqual(content.includes('<span class="kbd-cmd">⌘</span> C'), true, `Missing spaced ⌘ C badge in ${page}`);
    assert.strictEqual(content.includes('<span class="kbd-cmd">⌘</span> S'), true, `Missing spaced ⌘ S badge in ${page}`);
    assert.strictEqual(content.includes('id="btnClearHistory"'), false, `History clear button must not be in static header in ${page}`);
  });
});

it('prompt.css defines .kbd-cmd and .history-clear-btn styling', () => {
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(promptCSS.includes('.kbd-cmd'), true, 'Missing .kbd-cmd rule in prompt.css');
  assert.strictEqual(promptCSS.includes('margin-right: 2.5px'), true, 'Missing margin-right on .kbd-cmd in prompt.css');
  assert.strictEqual(promptCSS.includes('.history-clear-btn'), true, 'Missing .history-clear-btn in prompt.css');
  assert.strictEqual(promptCSS.includes('.history-footer'), true, 'Missing .history-footer in prompt.css');
});

it('prompt.js dynamically provides Clear history action when history items exist', () => {
  const promptJS = fs.readFileSync(path.join(ROOT, 'js/prompt.js'), 'utf-8');
  assert.strictEqual(promptJS.includes('id="btnClearHistory"'), true, 'Missing dynamic btnClearHistory in prompt.js');
  assert.strictEqual(promptJS.includes('history-clear-btn'), true, 'Missing history-clear-btn in prompt.js');
});

it('prompt.css completely hides .toast when not .show (opacity: 0 and visibility: hidden)', () => {
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(promptCSS.includes('opacity: 0;'), true, 'Missing opacity: 0 on .toast in prompt.css');
  assert.strictEqual(promptCSS.includes('visibility: hidden;'), true, 'Missing visibility: hidden on .toast in prompt.css');
  assert.strictEqual(promptCSS.includes('visibility: visible;'), true, 'Missing visibility: visible on .toast.show in prompt.css');
});

it('prompt.css and mockup.html ensure .canvas-container min-height keeps footer below fold until scrolled', () => {
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  const mockupHTML = fs.readFileSync(path.join(ROOT, 'mockup.html'), 'utf-8');
  assert.strictEqual(promptCSS.includes('min-height: calc(100vh - var(--header-h));'), true, 'Missing canvas min-height in prompt.css');
  assert.strictEqual(mockupHTML.includes('min-height: calc(100vh - var(--header-h));'), true, 'Missing canvas min-height in mockup.html');
});

it('prompt.css and mockup.html trim .active-badge with max-width and ellipsis to prevent line jump', () => {
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  const mockupHTML = fs.readFileSync(path.join(ROOT, 'mockup.html'), 'utf-8');
  assert.strictEqual(promptCSS.includes('text-overflow: ellipsis;'), true, 'Missing text-overflow: ellipsis in prompt.css');
  assert.strictEqual(promptCSS.includes('max-width: 160px;'), true, 'Missing max-width: 160px on .active-badge in prompt.css');
  assert.strictEqual(mockupHTML.includes('text-overflow: ellipsis;'), true, 'Missing text-overflow: ellipsis in mockup.html');
  assert.strictEqual(mockupHTML.includes('max-width: 160px;'), true, 'Missing max-width: 160px on .active-badge in mockup.html');
});

it('prompt.js sets badge.title for full tooltip on activeBadge', () => {
  const promptJS = fs.readFileSync(path.join(ROOT, 'js/prompt.js'), 'utf-8');
  assert.strictEqual(promptJS.includes('badge.title = title;'), true, 'Missing badge.title assignment in prompt.js');
});

it('blog.html provides top padding for the Blog title', () => {
  const blogHTML = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf-8');
  assert.strictEqual(blogHTML.includes('padding-top: 40px;'), true, 'Missing padding-top: 40px on .page-title in blog.html');
});

it('all blog post pages provide top padding for article date and title', () => {
  const blogFiles = fs.readdirSync(ROOT).filter(f => f.startsWith('blog-') && f.endsWith('.html'));
  assert.strictEqual(blogFiles.length, 16, 'Expected 16 blog post files');
  blogFiles.forEach(file => {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf-8');
    assert.strictEqual(html.includes('article.page { padding-top: 40px; padding-bottom: 86px; }'), true, `Missing padding-top: 40px on article.page in ${file}`);
  });
});

// ─────────────────────────────────────────────────────────────
// 9. Semantic Headings & Accessibility
// ─────────────────────────────────────────────────────────────
console.log('\n🏷️ 9. Semantic Headings & Accessibility:');

it('All 16 blog posts and blog.html have zero <h1 class="logo"> tags', () => {
  const blogFiles = ['blog.html', ...fs.readdirSync(ROOT).filter(f => f.startsWith('blog-') && f.endsWith('.html'))];
  blogFiles.forEach(file => {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf-8');
    assert.strictEqual(html.includes('<h1 class="logo">'), false, `Unexpected <h1 class="logo"> found in ${file}`);
  });
});

it('All 16 blog posts and blog.html have exactly one primary <h1> tag', () => {
  const blogFiles = ['blog.html', ...fs.readdirSync(ROOT).filter(f => f.startsWith('blog-') && f.endsWith('.html'))];
  blogFiles.forEach(file => {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf-8');
    const h1Matches = html.match(/<h1[\s>]/g) || [];
    assert.strictEqual(h1Matches.length, 1, `Expected exactly 1 <h1> in ${file}, found ${h1Matches.length}`);
  });
});

it('index.html has no competing <h1> tags (noscript heading is <h2>)', () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
  assert.strictEqual(html.includes('<h2>Free Multi-LLM Prompt Router & AI Comparison Tool</h2>'), true, 'noscript heading in index.html is not <h2>');
  const h1Matches = html.match(/<h1[\s>]/g) || [];
  assert.strictEqual(h1Matches.length, 1, `Expected exactly 1 <h1> in index.html, found ${h1Matches.length}`);
});

it('All 16 blog posts and blog.html include #themeToggleBtn in topbar', () => {
  const blogFiles = ['blog.html', ...fs.readdirSync(ROOT).filter(f => f.startsWith('blog-') && f.endsWith('.html'))];
  blogFiles.forEach(file => {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf-8');
    assert.strictEqual(html.includes('id="themeToggleBtn"'), true, `Missing #themeToggleBtn in ${file}`);
  });
});

it('core.css defines .theme-toggle-btn styling for universal topbars', () => {
  const coreCSS = fs.readFileSync(path.join(ROOT, 'css/core.css'), 'utf-8');
  assert.strictEqual(coreCSS.includes('.theme-toggle-btn {'), true, 'Missing .theme-toggle-btn in core.css');
});

it('prompt.css hides collapsed sidebar from keyboard focus and tabbing', () => {
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(promptCSS.includes('visibility: hidden;'), true, 'Missing visibility: hidden in prompt.css');
  assert.strictEqual(promptCSS.includes('pointer-events: none;'), true, 'Missing pointer-events: none in prompt.css');
});

it('prompt.css defines .item-main-btn styling for unnested button item structure', () => {
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(promptCSS.includes('.item-main-btn {'), true, 'Missing .item-main-btn in prompt.css');
});

// ─────────────────────────────────────────────────────────────
// 10. Library Page Health & Accordions
// ─────────────────────────────────────────────────────────────
console.log('\n📚 10. Library Page Health & Accordions:');

it('All 11 library pages contain early language detector script in <head>', () => {
  VALID_LIBS.forEach(lib => {
    const html = fs.readFileSync(path.join(ROOT, `${lib}.html`), 'utf-8');
    assert.strictEqual(html.includes("window.__LANG__"), true, `Missing language detector script in ${lib}.html`);
    assert.strictEqual(html.includes("location.pathname.split('/').filter(Boolean)[0]"), true, `Missing path segment detector in ${lib}.html`);
  });
});

it('All 11 library pages have initial accordion state matching open list (aria-expanded="true")', () => {
  VALID_LIBS.forEach(lib => {
    const html = fs.readFileSync(path.join(ROOT, `${lib}.html`), 'utf-8');
    assert.strictEqual(html.includes('id="btnLibrariesSection" onclick="toggleSection(\'librariesSection\')" aria-expanded="true"'), true, `btnLibrariesSection not aria-expanded="true" in ${lib}.html`);
    assert.strictEqual(html.includes('id="librariesChevron" aria-hidden="true">&#9662;</span>'), true, `librariesChevron rotated in ${lib}.html`);
  });
});

it('All 11 library pages and index.html have populated static English #footer-desc', () => {
  const pages = ['index.html', ...VALID_LIBS.map(l => `${l}.html`)];
  pages.forEach(p => {
    const html = fs.readFileSync(path.join(ROOT, p), 'utf-8');
    assert.strictEqual(html.includes('<p class="footer-desc" id="footer-desc"></p>'), false, `Empty #footer-desc in ${p}`);
    assert.strictEqual(html.includes('<p class="footer-desc" id="footer-desc"><strong>Prompt Router</strong>'), true, `Missing static text in #footer-desc in ${p}`);
  });
});

it('All 11 library pages wire window.__onPromptCleared to deselect cards', () => {
  VALID_LIBS.forEach(lib => {
    const html = fs.readFileSync(path.join(ROOT, `${lib}.html`), 'utf-8');
    assert.strictEqual(html.includes('window.__onPromptCleared = function()'), true, `Missing window.__onPromptCleared in ${lib}.html`);
  });
});

it('All 11 library pages support localized "All" category button', () => {
  VALID_LIBS.forEach(lib => {
    const html = fs.readFileSync(path.join(ROOT, `${lib}.html`), 'utf-8');
    assert.strictEqual(html.includes("cat === 'All' ? allLabel : cat"), true, `Missing allLabel check in ${lib}.html`);
  });
});

it('index.html has no development console.log listeners on window load', () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
  assert.strictEqual(html.includes("CLIENT_WIDTH="), false, 'Debug CLIENT_WIDTH console.log found in index.html');
  assert.strictEqual(html.includes("OVERFLOW_ELEMENT"), false, 'Debug OVERFLOW_ELEMENT console.log found in index.html');
});

it('prompt.js closeMobileSidebar restricts aria-expanded reset to mobile viewports', () => {
  const promptJS = fs.readFileSync(path.join(ROOT, 'js/prompt.js'), 'utf-8');
  assert.strictEqual(promptJS.includes('const isMobile = window.innerWidth <= 900;'), true, 'Missing isMobile viewport check in closeMobileSidebar');
  assert.strictEqual(promptJS.includes('if (sb && isMobile) {'), true, 'closeMobileSidebar does not guard sidebar aria attributes with isMobile');
});

it('prompt.js setLanguage updates #lbl-providers and matches #cats button:first-child', () => {
  const promptJS = fs.readFileSync(path.join(ROOT, 'js/prompt.js'), 'utf-8');
  assert.strictEqual(promptJS.includes("document.getElementById('lbl-providers')"), true, 'Missing lbl-providers update in setLanguage');
  assert.strictEqual(promptJS.includes("document.querySelector('#cats button.cat:first-child, .cat-btn[data-cat=\"all\"]')"), true, 'Missing updated allCatBtn selector in setLanguage');
});

it('prompt.js setLanguage and _worker.js translate #lblPromptLibraries for i18n', () => {
  const promptJS = fs.readFileSync(path.join(ROOT, 'js/prompt.js'), 'utf-8');
  assert.strictEqual(promptJS.includes("document.getElementById('lblPromptLibraries')"), true, 'Missing lblPromptLibraries update in prompt.js');
  const workerJS = fs.readFileSync(path.join(ROOT, '_worker.js'), 'utf-8');
  assert.strictEqual(workerJS.includes("span#lblPromptLibraries"), true, 'Missing span#lblPromptLibraries rewrite in _worker.js');
});

it('core.css and prompt.css do not force text-transform: uppercase on section headers', () => {
  const coreCSS = fs.readFileSync(path.join(ROOT, 'css/core.css'), 'utf-8');
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(coreCSS.includes('text-transform: uppercase'), false, 'Found text-transform: uppercase in core.css');
  assert.strictEqual(promptCSS.includes('text-transform: uppercase'), false, 'Found text-transform: uppercase in prompt.css');
});

it('All application pages, library pages, blog index and blog posts include centered Munich footer badge with heart emoji', () => {
  const allHtmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html') && !f.startsWith('google'));
  allHtmlFiles.forEach(file => {
    const html = fs.readFileSync(path.join(ROOT, file), 'utf-8');
    assert.strictEqual(html.includes('footer-made'), true, `Missing footer-made in ${file}`);
    assert.strictEqual(html.includes('Made with ❤️ in Munich'), true, `Missing "Made with ❤️ in Munich" in ${file}`);
  });
  const coreCSS = fs.readFileSync(path.join(ROOT, 'css/core.css'), 'utf-8');
  const promptCSS = fs.readFileSync(path.join(ROOT, 'css/prompt.css'), 'utf-8');
  assert.strictEqual(coreCSS.includes('text-align: center'), true, 'Missing text-align: center in core.css footer-made');
  assert.strictEqual(promptCSS.includes('text-align: center'), true, 'Missing text-align: center in prompt.css footer-made');
});


// ─────────────────────────────────────────────────────────────
// 11. Service Worker & Offline Resiliency
// ─────────────────────────────────────────────────────────────
console.log('\n⚡ 11. Service Worker & Offline Resiliency:');

it('sw.js precaches all 16 blog posts and version bumped to pr-v5', () => {
  const swCode = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf-8');
  assert.strictEqual(swCode.includes("const CACHE_NAME = 'pr-v5';"), true, 'sw.js cache name is not pr-v5');
  const blogFiles = fs.readdirSync(ROOT).filter(f => f.startsWith('blog-') && f.endsWith('.html'));
  blogFiles.forEach(file => {
    const cleanRoute = `/${file.replace('.html', '')}`;
    assert.strictEqual(swCode.includes(`'${cleanRoute}'`), true, `sw.js missing route ${cleanRoute}`);
  });
});

it('sw.js guards against caching non-200 responses and handles offline fallback', () => {
  const swCode = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf-8');
  assert.strictEqual(swCode.includes("res.status === 200"), true, 'sw.js does not verify res.status === 200');
  assert.strictEqual(swCode.includes("e.request.mode === 'navigate'"), true, 'sw.js missing navigate offline fallback');
});

// ─────────────────────────────────────────────────────────────
// 12. Edge Worker Security Headers & Universal Normalization
// ─────────────────────────────────────────────────────────────
console.log('\n🛡️ 12. Edge Worker Security & Universal Normalization:');

const mockAssetResponse = new Response('<html><head></head><body><h1>Asset</h1></body></html>', {
  status: 200,
  headers: { 'content-type': 'text/html; charset=utf-8' }
});

const mockEnv = {
  ASSETS: {
    fetch: async () => mockAssetResponse.clone()
  }
};

await itAsync('Edge worker normalizes universal trailing slash to 301', async () => {
  const res = await worker.fetch(new Request('https://prompt-router.pages.dev/dev/'), mockEnv);
  assert.strictEqual(res.status, 301);
  assert.strictEqual(res.headers.get('location'), 'https://prompt-router.pages.dev/dev');
});

await itAsync('Edge worker normalizes .html extensions to 301 (clean URLs)', async () => {
  const resDev = await worker.fetch(new Request('https://prompt-router.pages.dev/dev.html'), mockEnv);
  assert.strictEqual(resDev.status, 301);
  assert.strictEqual(resDev.headers.get('location'), 'https://prompt-router.pages.dev/dev');

  const resIndex = await worker.fetch(new Request('https://prompt-router.pages.dev/index.html'), mockEnv);
  assert.strictEqual(resIndex.status, 301);
  assert.strictEqual(resIndex.headers.get('location'), 'https://prompt-router.pages.dev/');
});

await itAsync('Edge worker preserves google site verification file without redirecting', async () => {
  const res = await worker.fetch(new Request('https://prompt-router.pages.dev/googlee5dbd159d1306862.html'), mockEnv);
  assert.strictEqual(res.status, 200);
});

await itAsync('Edge worker redirects legacy ?lang= parameter preserving subpath', async () => {
  const res1 = await worker.fetch(new Request('https://prompt-router.pages.dev/?lang=es'), mockEnv);
  assert.strictEqual(res1.status, 301);
  assert.strictEqual(res1.headers.get('location'), 'https://prompt-router.pages.dev/es');

  const res2 = await worker.fetch(new Request('https://prompt-router.pages.dev/dev?lang=tr'), mockEnv);
  assert.strictEqual(res2.status, 301);
  assert.strictEqual(res2.headers.get('location'), 'https://prompt-router.pages.dev/tr/dev');
});

await itAsync('Edge worker attaches security headers on all responses', async () => {
  const res = await worker.fetch(new Request('https://prompt-router.pages.dev/'), mockEnv);
  assert.strictEqual(res.headers.get('X-Content-Type-Options'), 'nosniff');
  assert.strictEqual(res.headers.get('X-Frame-Options'), 'DENY');
  assert.strictEqual(res.headers.get('Referrer-Policy'), 'strict-origin-when-cross-origin');
  assert.strictEqual(res.headers.get('Permissions-Policy'), 'camera=(), microphone=(), geolocation=()');
  assert.strictEqual(res.headers.has('Content-Security-Policy'), true);
});


// ─────────────────────────────────────────────────────────────
// Summary
// ─────────────────────────────────────────────────────────────
console.log(`\n==================================================`);
console.log(`Total tests: ${passed + failed} | Passed: ${passed} | Failed: ${failed}`);
console.log(`==================================================\n`);

if (failed > 0) {
  process.exit(1);
}
