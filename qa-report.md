# QA Report — prompt-router.pages.dev
**Reviewed:** 2026-03-02 | **Role:** Principal QA Engineer

---

## CRITICAL

**1. Footer description paragraph is entirely hardcoded in English (lines 496–508)**
The `<p class="footer-desc">` block — "Prompt Router is a free tool for prompt engineers..." — is static HTML. It is not in the `LOCALES` object and is never replaced by `applyLocale()`. Every non-English user reads this in English. The only localized footer element is `footer-copy` (the copyright line).

**2. Keyboard shortcut hint text is hardcoded in English (line 466)**
```html
<kbd>⌘S</kbd> save &nbsp;&nbsp; <kbd>⌘C</kbd> copy &nbsp;&nbsp; <kbd>Esc</kbd> clear
```
The words `save`, `copy`, `clear` next to the key badges are raw English HTML. All 6 non-English locales show these in English. The locale object already has the correct translated strings (`saveBtn`, `copyBtn`, `clearBtn`) but they are never applied here.

**3. Provider button ARIA labels not localized (line 867)**
```js
btn.setAttribute('aria-label', `Open in ${p.label}`);
```
"Open in" is hardcoded English for all 8 provider buttons. Screen reader users in non-English locales will hear English. The locale object has `lblProviders` ("Abrir en", "Öffnen in", etc.) but it is not used here.

**4. No language switcher UI anywhere on the page**
There is no visible control for users to change language. Language detection is automatic (URL param → localStorage → `navigator.languages` → default English). A user whose browser is set to English but who reads French has no discoverable way to switch. There is also no hint that other languages exist.

---

## HIGH

**5. ~~`hreflang` URLs are inconsistent with Cloudflare Worker routing (lines 17–23)~~ FIXED**
The `<head>` declares hreflang alternates using `?lang=xx` query-string URLs. The Cloudflare Worker now rewrites `<link rel="canonical">` and `<meta property="og:url">` to match the `?lang=xx` format for non-default languages, ensuring consistency between hreflang, canonical, and OG URLs.

**6. `<noscript>` message is English-only (line 425)**
```html
<noscript>JavaScript is required to use Prompt Router.</noscript>
```
No-JS users in all non-English locales receive this message in English. Since noscript runs before JS, it cannot use the locale system — the message needs to be duplicated in all 7 languages or made language-neutral.

---

## MEDIUM

**7. Static HTML labels flash English before JS replaces them**
All section labels (`Quick templates`, `My prompts`, `Your prompt`, `Open in`) and button text (`Copy to clipboard`, `Save`, `Clear`) are hardcoded English in the HTML. `applyLocale()` replaces them on load, but:
- Search engine crawlers that render JS may see the English fallback first
- Slow connections produce a visible flash of English content before locale is applied

**8. `enc()` is referenced before it is declared (lines 737–748)**
```js
const providers = [
  { url: q => `https://chatgpt.com/?q=${enc(q)}` }, // enc used here
  ...
];
const enc = s => encodeURIComponent(s); // declared after
```
This works because the arrow functions close over `enc` and `enc` is resolved at call time (not declaration time). But `const` has a temporal dead zone — if `enc` were ever called immediately instead of lazily, it would throw a `ReferenceError`. The declaration order should be fixed.

---

## LOW

**9. Turkish `lblProviders` breaks the pattern for all other languages**
- All other locales: `"Open in"`, `"Abrir en"`, `"Öffnen in"`, `"Apri in"`, etc.
- Turkish: `"Aç"` (just "Open", no "in")

The provider button ARIA labels (`aria-label="Open in ChatGPT"`) are hardcoded anyway (issue #3), but the visual section label also differs in pattern. "Aç" is grammatically fine in Turkish, but if issue #3 is fixed and the label is composed with the provider name, the sentence structure breaks.

**10. `⌘C` shortcut hint doesn't communicate its condition**
The hint shows `⌘C copy` but the handler (line 932) only intercepts the keypress when the textarea is focused **and** no text is selected. If text is selected, the browser's default copy fires instead. This is correct behavior, but the hint implies `⌘C` always copies the full prompt — which is misleading.

**11. Saved prompt title over-truncated in display vs. storage**
Titles are saved at up to 50 characters (line 1035) but displayed truncated to `TITLE_MAX = 10` characters (line 790). A user who saves "Write a professional email about the product launch" sees only "Write a pr…" as the chip label. 10 characters is too aggressive for usability — most prompt titles would be unreadable.

**12. Twitter/X `site` meta tag assumes an account exists (line 37)**
```html
<meta name="twitter:site" content="@promptrouter">
```
If `@promptrouter` is not a registered X/Twitter account, this metadata is incorrect and could confuse Twitter Card previews.

---

## Summary Table

| # | Severity | Area | Issue |
|---|----------|------|-------|
| 1 | Critical | i18n | Footer body text hardcoded English, not in LOCALES |
| 2 | Critical | i18n | Keyboard shortcut words ("save", "copy", "clear") not localized |
| 3 | Critical | a11y/i18n | Provider ARIA labels use hardcoded "Open in" |
| 4 | Critical | UX | No language switcher UI — language not discoverable |
| 5 | ~~High~~ Fixed | SEO | ~~`hreflang` URLs (`?lang=es`) conflict with Worker path routes (`/es`)~~ Canonical and OG URL now rewritten by Worker |
| 6 | High | i18n | `<noscript>` message English-only |
| 7 | Medium | i18n/perf | English content flash before `applyLocale()` fires |
| 8 | Medium | code quality | `enc()` used before `const` declaration |
| 9 | Low | i18n | Turkish `lblProviders` breaks pattern vs all other languages |
| 10 | Low | UX | `⌘C` hint misleading — condition (no selection) not communicated |
| 11 | Low | UX | Library chip title truncated to 10 chars — too short to be meaningful |
| 12 | Low | meta | Twitter `@promptrouter` handle not verified |
