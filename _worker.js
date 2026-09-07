/**
 * Cloudflare Pages Worker — _worker.js
 *
 * Server-side Edge SSR & SEO translation layer for Prompt Router.
 * Supports clean subdirectories for languages: /es, /it, /pt, /fr, /de, /tr (and / for English).
 * 301 redirects legacy query parameters (?lang=xx) to clean paths.
 */

import { LIB_LOCALES, VALID_LIBS, APP_LOCALES as LOCALES } from './js/lib-locales.js';

const NON_EN_LANGS = new Set(['es', 'it', 'pt', 'fr', 'de', 'tr']);

const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
};

function addSecurityHeaders(response, requestUrl) {
  if (!response) return response;
  const newHeaders = new Headers(response.headers);
  for (const [key, val] of Object.entries(SECURITY_HEADERS)) {
    newHeaders.set(key, val);
  }
  if (requestUrl) {
    try {
      const p = typeof requestUrl === 'string' ? new URL(requestUrl).pathname : requestUrl.pathname;
      if (p && p.match(/\.[a-f0-9]{8}\.(css|js)$/)) {
        newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
      }
    } catch {}
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}

function getFooterDescHTML(lang) {
  const m = LOCALES[lang];
  if (!m || !m.footerDescIntro) return '';
  return `<strong>Prompt Router</strong> ${m.footerDescIntro} ` +
    '<a href="https://chatgpt.com" rel="noopener noreferrer" target="_blank">ChatGPT</a>, ' +
    '<a href="https://claude.ai" rel="noopener noreferrer" target="_blank">Claude</a>, ' +
    '<a href="https://gemini.google.com" rel="noopener noreferrer" target="_blank">Gemini</a>, ' +
    '<a href="https://copilot.microsoft.com" rel="noopener noreferrer" target="_blank">Copilot</a>, ' +
    '<a href="https://www.perplexity.ai" rel="noopener noreferrer" target="_blank">Perplexity</a>, ' +
    '<a href="https://chat.deepseek.com" rel="noopener noreferrer" target="_blank">DeepSeek</a>, ' +
    '<a href="https://x.com/i/grok" rel="noopener noreferrer" target="_blank">Grok</a>, ' +
    '<a href="https://chat.mistral.ai" rel="noopener noreferrer" target="_blank">Le Chat</a>, ' +
    '<a href="https://chat.qwen.ai" rel="noopener noreferrer" target="_blank">Qwen</a>, ' +
    '<a href="https://www.kimi.com" rel="noopener noreferrer" target="_blank">Kimi</a>, and ' +
    '<a href="https://z.ai" rel="noopener noreferrer" target="_blank">Z.ai</a>. ' +
    `${m.footerDescOutro || ''}`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 1. Google site verification passthrough (never redirect verification file)
    if (pathname.startsWith('/google') && pathname.endsWith('.html')) {
      const resp = await env.ASSETS.fetch(request);
      return addSecurityHeaders(resp);
    }

    // 2. Trailing slash normalization (e.g. /dev/ -> /dev, /es/ -> /es, /tr/dev/ -> /tr/dev)
    if (pathname !== '/' && pathname.endsWith('/')) {
      const cleanPath = pathname.replace(/\/+$/, '');
      const search = url.search || '';
      return Response.redirect(new URL((cleanPath || '/') + search, request.url).toString(), 301);
    }

    // 3. .html extension normalization (e.g. /dev.html -> /dev, /blog.html -> /blog, /index.html -> /)
    if (pathname.endsWith('.html')) {
      const base = pathname.slice(0, -5);
      const cleanPath = (base === '/index' || base === '') ? '/' : base;
      const search = url.search || '';
      return Response.redirect(new URL(cleanPath + search, request.url).toString(), 301);
    }

    // 4. Redirect legacy ?lang= query parameters preserving subpaths (e.g. /dev?lang=es -> /es/dev, /?lang=es -> /es)
    const langParam = url.searchParams.get('lang');
    if (langParam) {
      url.searchParams.delete('lang');
      const search = url.search ? url.search : '';
      const cleanSub = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
      const subPath = (cleanSub === '' || cleanSub === '/') ? '' : (cleanSub.startsWith('/') ? cleanSub : `/${cleanSub}`);
      if (langParam === 'en') {
        const target = (subPath || '/') + search;
        return Response.redirect(new URL(target, request.url).toString(), 301);
      }
      if (NON_EN_LANGS.has(langParam)) {
        const target = `/${langParam}${subPath}` + search;
        return Response.redirect(new URL(target, request.url).toString(), 301);
      }
    }

    // 5. Match non-English homepage subdirectories (/es, /it, /pt, /fr, /de, /tr)
    const langMatch = pathname.match(/^\/([a-z]{2})$/);
    const lang = langMatch ? langMatch[1] : null;

    if (lang && NON_EN_LANGS.has(lang)) {
      const rootUrl = new URL('/', request.url);
      const baseResponse = await env.ASSETS.fetch(new Request(rootUrl, request));
      if (!baseResponse.ok) return addSecurityHeaders(baseResponse);

      const m = LOCALES[lang];
      const langUrl = `https://prompt-router.pages.dev/${lang}`;

      const rewritten = new HTMLRewriter()
        .on('html',                             { element: el => el.setAttribute('lang', lang) })
        .on('title',                            { element: el => el.setInnerContent(m.title) })
        .on('meta[name="description"]',         { element: el => el.setAttribute('content', m.metaDesc || m.desc) })
        .on('meta[property="og:title"]',        { element: el => el.setAttribute('content', m.title) })
        .on('meta[property="og:description"]',  { element: el => el.setAttribute('content', m.metaDesc || m.desc) })
        .on('meta[property="og:url"]',          { element: el => el.setAttribute('content', langUrl) })
        .on('meta[property="og:locale"]',       { element: el => el.setAttribute('content', m.ogLocale) })
        .on('meta[property="og:image:alt"]',    { element: el => el.setAttribute('content', m.ogImageAlt) })
        .on('meta[name="twitter:title"]',       { element: el => el.setAttribute('content', m.title) })
        .on('meta[name="twitter:description"]', { element: el => el.setAttribute('content', m.metaDesc || m.desc) })
        .on('link[rel="canonical"]',            { element: el => el.setAttribute('href', langUrl) })
        .on('h1#tagline',                       { element: el => el.setInnerContent(m.taglineHTML, { html: true }) })
        .on('p#hero-sub',                       { element: el => el.setInnerContent(m.heroSub, { html: true }) })
        .on('span#lblCopyBtn',                  { element: el => el.setInnerContent(m.copyBtn) })
        .on('span#lblSaveBtn',                  { element: el => el.setInnerContent(m.saveBtn) })
        .on('span#lblClearBtn',                 { element: el => el.setInnerContent(m.clearBtn) })
        .on('span#lbl-providers',               { element: el => el.setInnerContent(m.lblProviders) })
        .on('span#lblQuickPrompts',             { element: el => el.setInnerContent(m.quickPrompts || m.lblQuickPrompts) })
        .on('span#lblPromptLibraries',          { element: el => el.setInnerContent(m.promptLibraries || 'Prompt Libraries') })
        .on('span#lblSavedPrompts',             { element: el => el.setInnerContent(m.savedPrompts || m.lblSavedPrompts) })
        .on('span#lblHistory',                  { element: el => el.setInnerContent(m.history || m.lblHistory) })
        .on('span#lblToggleSidebar',            { element: el => el.setInnerContent(m.sidebar || m.lblToggleSidebar) })
        .on('span#lblNewPrompt',                { element: el => el.setInnerContent(m.newPrompt) })
        .on('input#sidebarSearch',              { element: el => el.setAttribute('placeholder', m.search) })
        .on('textarea#prompt',                  { element: el => el.setAttribute('placeholder', m.placeholder) })
        .on('p#footer-desc',                    { element: el => el.setInnerContent(getFooterDescHTML(lang), { html: true }) })
        .on('head',                             { element: el => el.append(`<script>window.__LANG__="${lang}";</script>`, { html: true }) })
        .on('a.brand-link',                     { element: el => el.setAttribute('href', `/${lang}`) })
        .on('a.new-prompt-btn',                 { element: el => el.setAttribute('href', `/${lang}`) })
        .on('.footer-links a[href="/"]',        { element: el => el.setAttribute('href', `/${lang}`) })
        .on('#librariesList a.item-btn, #topbarLibMenu a, footer .footer-grid a', { element: el => {
          const href = el.getAttribute('href');
          if (!href || !href.startsWith('/')) return;
          const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
          if (VALID_LIBS.includes(cleanLib)) {
            el.setAttribute('href', `/${lang}/${cleanLib}`);
          }
        }})
        .transform(baseResponse);

      return addSecurityHeaders(rewritten);
    }

    // 6. Match non-English library subdirectories (e.g. /tr/dev, /es/writing, /de/marketing)
    const libMatch = pathname.match(/^\/([a-z]{2})\/([a-z-]+)$/);
    if (libMatch) {
      const langSub = libMatch[1];
      const lib = libMatch[2];

      if (NON_EN_LANGS.has(langSub) && VALID_LIBS.includes(lib)) {
        const libUrl = new URL(`/${lib}`, request.url);
        const baseResponse = await env.ASSETS.fetch(new Request(libUrl, request));
        if (!baseResponse.ok) return addSecurityHeaders(baseResponse);

        const m = LOCALES[langSub] || {};
        const libMeta = (LIB_LOCALES[lib] && LIB_LOCALES[lib][langSub]) || {};
        const canonicalUrl = `https://prompt-router.pages.dev/${langSub}/${lib}`;

        // Generate complete reciprocal hreflang tags
        let hreflangHTML = `<link rel="alternate" hreflang="x-default" href="https://prompt-router.pages.dev/${lib}">\n`;
        hreflangHTML += `  <link rel="alternate" hreflang="en" href="https://prompt-router.pages.dev/${lib}">\n`;
        for (const l of NON_EN_LANGS) {
          hreflangHTML += `  <link rel="alternate" hreflang="${l}" href="https://prompt-router.pages.dev/${l}/${lib}">\n`;
        }

        const rewritten = new HTMLRewriter()
          .on('html',                             { element: el => el.setAttribute('lang', langSub) })
          .on('title',                            { element: el => { if (libMeta.title) el.setInnerContent(libMeta.title); } })
          .on('meta[name="description"]',         { element: el => { if (libMeta.desc) el.setAttribute('content', libMeta.desc); } })
          .on('meta[property="og:title"]',        { element: el => { if (libMeta.title) el.setAttribute('content', libMeta.title); } })
          .on('meta[property="og:description"]',  { element: el => { if (libMeta.desc) el.setAttribute('content', libMeta.desc); } })
          .on('meta[property="og:url"]',          { element: el => el.setAttribute('content', canonicalUrl) })
          .on('meta[property="og:locale"]',       { element: el => { if (m.ogLocale) el.setAttribute('content', m.ogLocale); } })
          .on('meta[name="twitter:title"]',       { element: el => { if (libMeta.title) el.setAttribute('content', libMeta.title); } })
          .on('meta[name="twitter:description"]', { element: el => { if (libMeta.desc) el.setAttribute('content', libMeta.desc); } })
          .on('link[rel="canonical"]',            { element: el => el.setAttribute('href', canonicalUrl) })
          .on('h1.hero-tagline',                  { element: el => { if (libMeta.tagline) el.setInnerContent(libMeta.tagline); } })
          .on('p.hero-sub',                       { element: el => { if (libMeta.sub) el.setInnerContent(libMeta.sub, { html: true }); } })
          .on('span#lblCopyBtn',                  { element: el => { if (m.copyBtn) el.setInnerContent(m.copyBtn); } })
          .on('span#lblSaveBtn',                  { element: el => { if (m.saveBtn) el.setInnerContent(m.saveBtn); } })
          .on('span#lblClearBtn',                 { element: el => { if (m.clearBtn) el.setInnerContent(m.clearBtn); } })
          .on('span#lbl-providers',               { element: el => { if (m.lblProviders) el.setInnerContent(m.lblProviders); } })
          .on('span#lblQuickPrompts',             { element: el => { if (m.quickPrompts || m.lblQuickPrompts) el.setInnerContent(m.quickPrompts || m.lblQuickPrompts); } })
          .on('span#lblPromptLibraries',          { element: el => { if (m.promptLibraries) el.setInnerContent(m.promptLibraries); } })
          .on('span#lblSavedPrompts',             { element: el => { if (m.savedPrompts || m.lblSavedPrompts) el.setInnerContent(m.savedPrompts || m.lblSavedPrompts); } })
          .on('span#lblHistory',                  { element: el => { if (m.history || m.lblHistory) el.setInnerContent(m.history || m.lblHistory); } })
          .on('span#lblToggleSidebar',            { element: el => { if (m.sidebar || m.lblToggleSidebar) el.setInnerContent(m.sidebar || m.lblToggleSidebar); } })
          .on('span#lblNewPrompt',                { element: el => { if (m.newPrompt) el.setInnerContent(m.newPrompt); } })
          .on('input#sidebarSearch',              { element: el => { if (m.search) el.setAttribute('placeholder', m.search); } })
          .on('textarea#prompt',                  { element: el => { if (m.placeholder) el.setAttribute('placeholder', m.placeholder); } })
          .on('span#lbl-cats',                    { element: el => { if (m.lblCats) el.setInnerContent(m.lblCats); } })
          .on('span#lbl-prompts',                 { element: el => { if (m.lblPrompts) el.setInnerContent(m.lblPrompts); } })
          .on('label#lbl-prompt',                 { element: el => { if (m.lblPrompt) el.setInnerContent(m.lblPrompt); } })
          .on('span#lbl-related',                 { element: el => { if (m.lblRelated) el.setInnerContent(m.lblRelated); } })
          .on('span#lblFooterLibraries',          { element: el => { if (m.promptLibraries) el.setInnerContent(m.promptLibraries); } })
          .on('p#footer-desc',                    { element: el => el.setInnerContent(getFooterDescHTML(langSub), { html: true }) })
          .on('head',                             { element: el => el.append(`${hreflangHTML}<script>window.__LANG__="${langSub}";window.__LIB__="${lib}";</script>`, { html: true }) })
          .on('a.brand-link',                     { element: el => el.setAttribute('href', `/${langSub}`) })
          .on('a.new-prompt-btn',                 { element: el => el.setAttribute('href', `/${langSub}`) })
          .on('.footer-links a[href="/"]',        { element: el => el.setAttribute('href', `/${langSub}`) })
          .on('#librariesList a.item-btn, #topbarLibMenu a, footer .footer-grid a, .related-grid a', { element: el => {
            const href = el.getAttribute('href');
            if (!href || !href.startsWith('/')) return;
            const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
            if (VALID_LIBS.includes(cleanLib)) {
              el.setAttribute('href', `/${langSub}/${cleanLib}`);
            }
          }})
          .transform(baseResponse);

        return addSecurityHeaders(rewritten);
      }
    }

    // 7. English library pages (e.g. /dev, /writing) - inject reciprocal hreflang tags
    const enLibMatch = pathname.match(/^\/([a-z-]+)$/);
    if (enLibMatch && VALID_LIBS.includes(enLibMatch[1])) {
      const lib = enLibMatch[1];
      const baseResponse = await env.ASSETS.fetch(request);
      if (!baseResponse.ok) return addSecurityHeaders(baseResponse);

      let hreflangHTML = `<link rel="alternate" hreflang="x-default" href="https://prompt-router.pages.dev/${lib}">\n`;
      hreflangHTML += `  <link rel="alternate" hreflang="en" href="https://prompt-router.pages.dev/${lib}">\n`;
      for (const l of NON_EN_LANGS) {
        hreflangHTML += `  <link rel="alternate" hreflang="${l}" href="https://prompt-router.pages.dev/${l}/${lib}">\n`;
      }

      const rewritten = new HTMLRewriter()
        .on('head', { element: el => el.append(hreflangHTML, { html: true }) })
        .transform(baseResponse);

      return addSecurityHeaders(rewritten);
    }

    // 8. Default: pass through to static assets (English homepage, css, js, etc.)
    let baseResponse = await env.ASSETS.fetch(request);
    if (!baseResponse.ok) {
      const hashMatch = pathname.match(/^\/(css|js)\/([a-z-]+)\.[a-f0-9]{8}\.(css|js)$/);
      if (hashMatch) {
        const fallbackUrl = new URL(`/${hashMatch[1]}/${hashMatch[2]}.${hashMatch[3]}`, request.url);
        const fallbackResp = await env.ASSETS.fetch(new Request(fallbackUrl, request));
        if (fallbackResp.ok) {
          baseResponse = fallbackResp;
        }
      }
    }
    return addSecurityHeaders(baseResponse, url);
  },
};
