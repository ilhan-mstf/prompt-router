---
title: I Built a Free Tool to Send One Prompt to Every AI at Once
published: false
description: I got tired of copy-pasting the same prompt into ChatGPT, Claude, Gemini, and 5 other tabs. So I built Prompt Router — a single HTML file, no backend, no login, 100% free.
tags: ai, webdev, productivity, opensource
cover_image: https://prompt-router.pages.dev/og-image.png
canonical_url: https://prompt-router.pages.dev/blog-prompt-router
---

Here's what my browser looked like every day:

Tab 1: ChatGPT — pasting a prompt.
Tab 2: Claude — pasting the same prompt.
Tab 3: Gemini — same prompt again.
Tab 4: Perplexity — you get the idea.
Tab 5: "Why am I doing this manually?"

I'm not exaggerating. I was doing this 15-20 times a day. Write a prompt, copy it, open five tabs, paste five times, compare five answers. The actual AI part was great. Everything around it was painful.

So I spent a weekend and built the laziest possible fix.

## What is Prompt Router?

**[Prompt Router](https://prompt-router.pages.dev)** is a free tool where you write your prompt once and click any AI to open it with your prompt pre-filled.

That's it. One text box. Eight buttons. Zero friction.

![Prompt Router supports ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, and Le Chat](https://prompt-router.pages.dev/og-image.png)

**Supported AIs:** ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat

### What makes it different from "just bookmarking all the AI tabs"

- Your prompt is **pre-filled** when the AI opens — no pasting
- **Quick templates** so you don't start from a blank page
- **Save prompts** locally for reuse
- Works on **mobile** — installable as a PWA
- **7 languages** auto-detected from your browser
- **Dark/light mode** follows your system

### What it's NOT

- Not an aggregator that shows all responses in one place
- Not a proxy — your prompts go directly to each AI's own site
- Not a business with a pricing page and a "Book a demo" button

## The tech stack (or lack thereof)

Here's the part that might surprise you:

```
index.html    ← the entire app
_worker.js    ← Cloudflare Worker for SEO meta tags
sw.js         ← service worker for offline/PWA
```

That's it. **One HTML file.** No React. No Next.js. No build step. No npm install (well, except for linting). No database. No API. No auth.

I wanted something that:
1. Loads instantly
2. Never breaks
3. Costs nothing to host
4. Has zero maintenance burden

A single HTML file deployed on Cloudflare Pages hits all four. Free hosting, global CDN, automatic HTTPS. Total cost: $0/month.

### Why not a framework?

Because I didn't need one. The app is a textarea, some buttons, and `window.open()`. Adding React to this would be like hiring a construction crew to hang a picture frame.

The entire JavaScript is ~200 lines. It handles:
- Template chip rendering with pin-to-top
- A saved prompts library (localStorage)
- URL encoding and `window.open()` for each provider
- Keyboard shortcuts (Cmd+S save, Cmd+C copy, Esc clear)
- i18n for 7 languages

No bundler. No transpiler. View source and you see exactly what's running.

## Then I built a prompt library (and it got out of hand)

After using Prompt Router daily, I noticed I was typing the same prompts over and over:

> "Review this code for bugs and edge cases..."
> "Write unit tests for this function..."
> "Explain this error and how to fix it..."

Sound familiar? Every developer has a mental library of prompts they use constantly but never write down.

So I built a **[Dev Prompts](https://prompt-router.pages.dev/dev)** page — 28 battle-tested prompts organized by what you're actually trying to do:

| Category | Example prompts |
|----------|----------------|
| **Debugging** | Find the bug, explain this error, debug performance |
| **Code Review** | Review for bugs, security audit, PR diff review |
| **Refactoring** | Improve readability, extract logic, simplify complexity |
| **Testing** | Write unit tests, generate test cases, add coverage |
| **Architecture** | Design schema, design API, system design |
| **DevOps** | Write Dockerfile, CI/CD pipeline, debug CI failure |
| **Git & Docs** | Commit message, README, changelog |

Every prompt has `[placeholders]` — you click it, fill in the blanks, and send it to any AI.

### Then it grew to 11 libraries

People started asking: "Can you do one for marketing?" "What about job searching?"

So now there are prompt libraries for:

- **[Writing](https://prompt-router.pages.dev/writing)** — blog posts, emails, social media, copywriting
- **[Marketing](https://prompt-router.pages.dev/marketing)** — campaigns, SEO, ads, analytics
- **[Job Search](https://prompt-router.pages.dev/job)** — resumes, cover letters, interview prep
- **[Startups](https://prompt-router.pages.dev/startup)** — pitch decks, PRDs, go-to-market
- **[Data](https://prompt-router.pages.dev/data)** — SQL, analysis, visualization, cleaning
- **[Design](https://prompt-router.pages.dev/design)** — UI review, UX research, design systems
- **[Students](https://prompt-router.pages.dev/student)** — studying, essays, exam prep
- **[Productivity](https://prompt-router.pages.dev/productivity)** — planning, meetings, decisions
- **[Legal](https://prompt-router.pages.dev/legal)** — contracts, compliance, policies
- **[Sales](https://prompt-router.pages.dev/sales)** — prospecting, objection handling, follow-ups

That's **264 prompts** across 66 categories. All free. No login.

## Which AI is best for what?

Since I've been routing prompts to multiple AIs daily, here's my unscientific but battle-tested take:

**Claude** — Best for code review, nuanced writing, and "think about this carefully" tasks. Tends to be more thoughtful and less eager to please.

**ChatGPT** — Best for brainstorming, quick answers, and "just get me started" tasks. Fastest at generating volume.

**Gemini** — Best when you need Google-scale knowledge or recent information. Surprisingly good at structured data tasks.

**Perplexity** — Unbeatable for research. If you need sources and citations, start here.

**DeepSeek** — Punches way above its weight on coding tasks. Worth trying if you haven't.

**The real answer:** It depends on the prompt. That's literally why I built this tool.

## Things I learned building this

### 1. URL schemes are fragile and undocumented

Each AI has its own way of accepting a pre-filled prompt via URL:

```javascript
// ChatGPT
`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`

// Claude
`https://claude.ai/new?q=${encodeURIComponent(prompt)}`

// Gemini
`https://gemini.google.com/app?q=${encodeURIComponent(prompt)}`
```

None of these are officially documented. They could change tomorrow. But they've been stable for months, and the tool degrades gracefully — worst case, the AI opens without the prompt and you paste manually.

### 2. Single-file apps are underrated

We've over-indexed on complexity. Not everything needs a build pipeline. Sometimes the right architecture is "one file that does the thing."

Benefits I've noticed:
- **Deployment is drag-and-drop.** Upload one file, done.
- **Debugging is trivial.** View Source shows you everything.
- **It'll work in 10 years.** No dependencies to rot. No Node version conflicts. Just HTML, CSS, and JS that browsers will support forever.

### 3. Prompt engineering is the new copy-paste programming

Nobody writes prompts from scratch every time. We all have our go-to patterns. The difference between a junior and senior AI user is often just having better templates.

That's why I think prompt libraries will become as common as code snippet collections. Not because the prompts are magic — because they save you from staring at a blank text box.

## The numbers

Since this is Dev.to and we like metrics:

- **0** dependencies in production
- **1** HTML file for the main app
- **26** total HTML pages
- **264** curated prompts
- **7** languages
- **8** AI providers
- **$0/month** hosting cost
- **~15,000** lines of hand-written HTML/CSS/JS

## Try it

**[prompt-router.pages.dev](https://prompt-router.pages.dev)**

Write a prompt. Click an AI. That's the whole thing.

If you're a developer, check out the **[Dev Prompts library](https://prompt-router.pages.dev/dev)** — those 28 prompts will save you a lot of blank-textbox staring.

The source is on **[GitHub](https://github.com/ilhan-mstf/prompt-router)** if you want to peek under the hood or contribute prompt ideas.

---

*What's your go-to AI prompt? I'm always looking for good ones to add to the library. Drop it in the comments.*
