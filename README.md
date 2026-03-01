# Prompt Router

**Write one prompt. Open every AI.**

A free, single-page tool that lets you write your prompt once and instantly open it in ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, and Le Chat — prefilled and ready to go.

Live at: **[prompt-router.pages.dev](https://prompt-router.pages.dev)**

---

## Features

- **Zero friction** — no account, no login, no backend
- **8 AI providers** — ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat
- **Quick templates** — 10 prompt patterns (Summarize, Explain, Brainstorm, Fix code, etc.) with pin-to-top
- **My prompts library** — save, pin, and reuse your own prompts (stored in localStorage)
- **7 languages** — English, Spanish, Italian, Portuguese, French, German, Turkish (auto-detected from browser)
- **Dark / light mode** — follows system preference
- **PWA-ready** — installable on mobile and desktop via "Add to Home Screen"
- **Keyboard shortcuts** — `⌘S` save, `⌘C` copy, `Esc` clear

---

## Project structure

```
index.html                 Main app (single HTML file — no build step)
_worker.js                 Cloudflare Pages Worker for server-side SEO meta injection
site.webmanifest           PWA manifest
robots.txt                 Crawler instructions
sitemap.xml                Multilingual sitemap (all 7 language URLs)
prompt-router.html         Standalone minimal version (no library features)
blog-post.md               Blog post copy
googlee5dbd159d1306862.html  Google Search Console verification
```

### Image assets (not in repo — create separately)

```
/favicon-32x32.png         32×32 PNG favicon
/favicon-16x16.png         16×16 PNG favicon
/apple-touch-icon.png      180×180 PNG for iOS home screen
/icons/icon-192.png        192×192 PNG for Android PWA
/icons/icon-512.png        512×512 PNG for Android PWA splash
/og-image.png              1200×630 PNG for social sharing previews
```

> Tip: Use [realfavicongenerator.net](https://realfavicongenerator.net) — upload a 512×512 logo and it generates all icon sizes.

---

## i18n / Localization

Language is detected in priority order:

1. `?lang=xx` URL parameter
2. `localStorage` (`pr_lang` key — persisted from previous visit)
3. `navigator.languages` (browser default)
4. Fallback: `en`

Supported codes: `en`, `es`, `it`, `pt`, `fr`, `de`, `tr`

Language-specific URLs use the `?lang=xx` format (e.g. `/?lang=fr`). These are declared as `hreflang` alternates in `<head>` and in `sitemap.xml`.

---

## Cloudflare Worker (`_worker.js`)

The Worker runs on every request to `/` and injects the correct translated `<title>`, `<meta name="description">`, and Open Graph / Twitter Card tags **server-side** using the `HTMLRewriter` API.

This ensures:
- Social media scrapers (Facebook, Twitter/X, LinkedIn, Slack) see the right language meta tags when a `?lang=xx` URL is shared
- Non-JS crawlers index translated titles and descriptions

For the default English URL (`/` with no `?lang=` param), the Worker passes through the request untouched — zero overhead.

All other paths (images, fonts, manifests, etc.) bypass the Worker entirely.

---

## Deployment (Cloudflare Pages)

This repo is connected to Cloudflare Pages. Every push to `main` triggers an automatic deployment.

### Manual deploy with Wrangler

```bash
npm install -g wrangler
wrangler pages deploy . --project-name prompt-router
```

### Connect a new Cloudflare Pages project to this repo

1. Go to [Cloudflare Pages dashboard](https://dash.cloudflare.com/) → Create project → Connect to Git
2. Select this repo
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Deploy

The `_worker.js` in the root is detected automatically — no extra configuration needed.

---

## SEO checklist

- [x] `<title>` and `<meta name="description">` translated per language (server-side via Worker)
- [x] Open Graph and Twitter Card tags translated per language
- [x] `hreflang` alternate links in `<head>` for all 7 languages
- [x] `xhtml:link` hreflang entries in `sitemap.xml`
- [x] `robots.txt` pointing to sitemap
- [x] `rel="canonical"` on the default URL
- [x] Schema.org `WebApplication` structured data
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Test social previews: [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Test structured data: [validator.schema.org](https://validator.schema.org)

---

## Performance notes

- No build step — pure HTML/CSS/JS, single file
- Fonts from Google Fonts CDN with `display=swap`
- No analytics, no tracking, no server — prompts never leave the browser
- Estimated Lighthouse: 95–100 Performance, 100 Accessibility, 100 Best Practices, 95+ SEO
