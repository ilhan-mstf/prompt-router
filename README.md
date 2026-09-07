# Prompt Router

**Write one prompt. Open every AI.**

Prompt Router is a free, privacy-first developer utility that lets you write your prompt once and instantly launch it pre-filled across 11 major AI providers: **ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi, and Z.ai**.

Live at: **[prompt-router.pages.dev](https://prompt-router.pages.dev)**

---

## Features

- **Zero friction** — No account, no login, no database, no tracking. Your prompts stay in your browser.
- **11 AI Providers** — ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Perplexity, DeepSeek, Grok (xAI), Le Chat (Mistral), Qwen (Alibaba), Kimi (Moonshot), and Z.ai (Zhipu).
- **11 Curated Prompt Libraries** — Battle-tested prompts across Dev & Coding, Writing, Marketing, Job Search, Startup, Data Analysis, Design & UX, Student, Productivity, Legal, and Sales.
- **10 Quick Templates** — Core prompt patterns (Summarize, Explain it, Improve text, Brainstorm, Compare, Write email, Fix my code, Make a plan, Pros & cons, Ask questions) with pin-to-top capability.
- **My Prompts & History** — Save, pin, search, and manage custom prompts in `localStorage` with dispatch history and safe undo buffer (`⌘Z`).
- **7 Languages with Edge SSR** — English (`/`), Spanish (`/es`), Turkish (`/tr`), French (`/fr`), German (`/de`), Italian (`/it`), and Portuguese (`/pt`).
- **Dark & Light Mode** — Automatically follows OS system preferences (`prefers-color-scheme`) with an accessible topbar toggle and session persistence.
- **PWA & Offline Ready** — Installable on desktop and mobile with a Service Worker precaching core assets, libraries, and articles.
- **Accessibility (WCAG 2.1 AAA)** — Fully navigable by keyboard, accessible skip links, screen-reader friendly heading hierarchies, and high-contrast color tokens.
- **Keyboard Shortcuts**:
  - `⌘Enter` / `Ctrl+Enter` — Dispatch prompt to active AI provider
  - `⌘S` / `Ctrl+S` — Save prompt to library
  - `⌘C` / `Ctrl+C` (when unfocused) — Copy prompt to clipboard
  - `Esc` — Safe clear prompt with non-destructive undo buffer
  - `⌘Z` / `Ctrl+Z` — Restore cleared prompt
  - `⌘B` / `Ctrl+B` — Toggle sidebar navigation
- **16 In-Depth Articles** — Guides on prompt engineering, multi-model cascades, and AI cost optimization.

---

## Project Structure

```
promptrouter/
├── index.html                  # Main application canvas and dispatch interface
├── dev.html                    # Developer & coding prompt library
├── writing.html                # Writing & content prompt library
├── marketing.html              # Marketing & growth prompt library
├── job.html                    # Job search & career prompt library
├── startup.html                # Startup & founder prompt library
├── data.html                   # Data analysis & SQL prompt library
├── design.html                 # UI/UX design prompt library
├── student.html                # Student & academic prompt library
├── productivity.html           # Productivity & workflow prompt library
├── legal.html                  # Legal & contracts prompt library
├── sales.html                  # Sales & outreach prompt library
├── blog.html                   # Blog index listing 16 articles
├── blog-*.html                 # 16 individual blog guides & technical deep dives
├── css/
│   ├── core.css                # Global typography, CSS tokens, topbars, and footers
│   └── prompt.css              # Canvas, sidebar accordion, provider grid, and toasts
├── js/
│   ├── prompt.js               # Application logic, keyboard handlers, history, and theme sync
│   ├── locales.js              # UI translations for homepage and navigation
│   └── lib-locales.js          # Localized library content, prompt text, and categories
├── _worker.js                  # Cloudflare Pages Worker for Edge SSR, clean URLs & security headers
├── sw.js                       # Service Worker for PWA precaching and offline navigation fallback
├── serve.py                    # Lightweight Python preview server with clean URL support
├── test/
│   └── test_router.js          # Automated regression test suite (146 checks)
├── site.webmanifest            # PWA manifest
├── robots.txt                  # Search engine and AI crawler rules
├── sitemap.xml                 # Multilingual XML sitemap (all 77 library + 7 root URLs)
├── llms.txt                    # Standardized AI agent documentation index
├── llms-full.txt               # Complete prompt library and routing reference for LLMs
└── qa-report.md                # Principal QA audit report and remediation log
```

---

## Local Development & Testing

### Prerequisites
- Node.js (v18+)
- Python 3 (for optional zero-dependency local preview)

### 1. Run with Cloudflare Wrangler (Recommended)
Simulates Cloudflare Pages Edge Worker (`_worker.js`) with server-side SSR, header injection, and 301 clean URL redirects:
```bash
npm run dev
# Starts local server at http://127.0.0.1:8788
```

### 2. Run with Python Local Preview Server
Lightweight zero-dependency preview server that routes clean paths (e.g. `/tr/dev` → `dev.html`):
```bash
npm run preview
# Starts local preview at http://localhost:8088
```

### 3. Run Automated Tests & Linters
The test suite performs 146 automated checks across routing, edge rewrites, sitemaps, WCAG AAA contrast, security headers, and PWA caches:
```bash
npm test
```

Individual checks:
```bash
npm run lint:html    # Scans all 30 HTML files with HTMLHint
npm run lint:js      # Scans _worker.js and config with ESLint
npm run test:routes  # Executes test/test_router.js
```

---

## Cloudflare Pages Edge Worker (`_worker.js`)

`_worker.js` runs on Cloudflare's global edge network using the `HTMLRewriter` streaming API:

1. **Edge SSR Translation:** Automatically injects localized `<title>`, `<meta name="description">`, Open Graph tags, canonical links, `hreflang` headers, and translated content for `/es`, `/tr`, `/fr`, `/de`, `/it`, and `/pt`.
2. **Clean URL Enforcement:**
   - Automatically strips `.html` extensions with 301 permanent redirects (e.g. `/dev.html` → `/dev`).
   - Normalizes trailing slashes with 301 permanent redirects (e.g. `/tr/dev/` → `/tr/dev`).
   - Normalizes legacy query parameters preserving subpaths (e.g. `/dev?lang=tr` → `/tr/dev`).
   - Exempts verification files (e.g. `google*.html`).
3. **Enterprise Security Headers:** Every response is augmented with:
   - `Content-Security-Policy`: Restricts scripts, fonts, and embeds to authorized origins.
   - `X-Frame-Options: DENY`: Blocks clickjacking and unauthorized iframe embedding.
   - `X-Content-Type-Options: nosniff`: Prevents MIME-type confusion attacks.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Protects referrer leakage.
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`: Disables unused browser hardware APIs.

---

## AI Agent & LLM Readability (`llms.txt`)

Prompt Router adheres to the `/llms.txt` standard to allow autonomous AI agents and LLM scrapers to discover and utilize prompt templates programmatically:

- [`/llms.txt`](https://prompt-router.pages.dev/llms.txt): Machine-readable index covering all 11 providers, query parameter syntax, library links, and articles.
- [`/llms-full.txt`](https://prompt-router.pages.dev/llms-full.txt): Comprehensive prompt catalog containing full prompt templates and categories.

---

## Deployment

Deployments are automated through Cloudflare Pages on pushes to `main`.

Manual deployment with Wrangler:
```bash
npx wrangler pages deploy . --project-name prompt-router
```

---

## License

Free, open-source web application for the AI community. Made with ❤️ in Munich.
