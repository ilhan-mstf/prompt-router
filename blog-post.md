# Prompt Router: Write One Prompt. Open Every AI.

*A free tool for prompt engineers, developers, and anyone serious about AI.*

---

## The Problem: AI Comparison is Tedious

If you use AI tools seriously — for writing, coding, research, marketing, or just exploring — you've hit the same wall. You write a prompt in ChatGPT. You get a decent response. Then you wonder: *what would Claude say? Or Gemini? Or Perplexity?*

So you open a new tab. Paste the prompt. Wait. Open another tab. Paste again. And again. And again.

By the time you've queried three different models, you've wasted two minutes on logistics that should take two seconds. The comparison itself — the interesting part — barely gets any time.

> **Copying and pasting across AI tools isn't a workflow. It's friction.**

That's the problem Prompt Router solves.

---

## What is Prompt Router?

**Prompt Router** is a free, single-page tool that lets you write your prompt once, then open it instantly in any of the major AI chat tools — prefilled and ready to go.

No account. No login. No backend. Just you, your prompt, and every AI at your fingertips.

Supported providers:

- **ChatGPT** — OpenAI's flagship model
- **Claude** — Anthropic's model, great for nuanced writing and analysis
- **Gemini** — Google's multimodal AI
- **Copilot** — Microsoft's AI, integrated with the web
- **Perplexity** — AI-powered search and research
- **DeepSeek** — fast-rising open-weight model
- **Grok** — xAI's model, with access to real-time X/Twitter data
- **Le Chat** — Mistral AI's conversational interface

---

## How It Works

The experience is intentionally minimal:

1. **Land on the page** — there's nothing to sign up for or configure.
2. **Pick a quick template** (optional) — ELI5, Compare, Brainstorm, Cold Email, Debug Code, and more.
3. **Edit or write your prompt** in the large textarea.
4. **Click any provider button** — the prompt opens in a new tab, prefilled and ready.
5. **Or copy to clipboard** with one click (keyboard shortcut: `⌘ + Enter`).

That's it. Comparing five AI models now takes about 30 seconds.

---

## Design Decisions Worth Mentioning

### Zero friction by default

There's no onboarding flow. No modal asking for your email. No tutorial overlay. You land, you write, you send. Every second of unnecessary UI is a second stolen from actual thinking.

### Templates that actually matter

The quick templates aren't generic filler. They're eight of the most commonly used prompt patterns across AI workflows: explain, compare, rewrite, summarize, brainstorm, debug, cold outreach, and decision analysis. Each template is designed to be *edited, not just used* — they include placeholders like `[concept]` and `[paste code]` that make the expected customization obvious.

### Dark and light mode, automatically

The interface reads your system preference and adapts. Dark mode uses a near-black background with warm gold accents. Light mode switches to a warm parchment palette. Both are designed to be easy on the eyes during long sessions.

### Keyboard shortcuts for power users

`⌘ + Enter` copies your prompt instantly. `Escape` clears the textarea when it's focused. These are small touches, but they matter when you're in flow and don't want to reach for the mouse.

---

## Who Is It For?

Prompt Router is built for people who think carefully about AI outputs — not just people who use AI occasionally.

- **Prompt engineers** who want to A/B test the same prompt across models
- **Developers** evaluating which model handles a specific coding task best
- **Writers and marketers** comparing tone and creativity across ChatGPT, Claude, and Gemini
- **Researchers** cross-referencing answers from Perplexity and DeepSeek
- **Product managers** using AI for competitive analysis, user interviews, and spec writing
- **Curious people** who just want to see how differently models interpret the same question

> *If you've ever caught yourself copying a prompt into a third AI tool, this tool was built for you.*

---

## Under the Hood

Prompt Router is a single HTML file. No framework, no build step, no backend, no dependencies beyond two Google Fonts. It runs entirely in your browser.

A few technical notes for the curious:

- **URL prefilling** works by appending your prompt as a query parameter to each provider's URL. Most major AI chat tools support this — though it can change without notice, and a few may not auto-submit.
- **Nothing is stored** — the page has no analytics, no localStorage, no server. Your prompts never leave your browser.
- **Popup blockers** can interfere with opening multiple tabs at once. If a tab doesn't open, the fallback is a one-click copy to clipboard.
- **PWA-ready** — you can install Prompt Router on your phone or desktop as a standalone app via your browser's "Add to Home Screen" option.

---

## Try It

Prompt Router is live and free at [prompt-router.pages.dev](https://prompt-router.pages.dev). No account required, no time limit, no catch.

The next time you're about to open a second tab and manually paste your prompt, remember: *there's a better way.*

---

*Tags: AI Tools · Prompt Engineering · ChatGPT · Claude · Gemini · Productivity*
