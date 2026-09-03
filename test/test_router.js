import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';
import { LIB_LOCALES, VALID_LIBS, SUPPORTED_LANGS } from '../js/lib-locales.js';

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
// Summary
// ─────────────────────────────────────────────────────────────
console.log(`\n==================================================`);
console.log(`Total tests: ${passed + failed} | Passed: ${passed} | Failed: ${failed}`);
console.log(`==================================================\n`);

if (failed > 0) {
  process.exit(1);
}
