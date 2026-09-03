/**
 * Cloudflare Pages Worker — _worker.js
 *
 * Server-side Edge SSR & SEO translation layer for Prompt Router.
 * Supports clean subdirectories for languages: /es, /it, /pt, /fr, /de, /tr (and / for English).
 * 301 redirects legacy query parameters (?lang=xx) to clean paths.
 */

import { LIB_LOCALES, VALID_LIBS } from './js/lib-locales.js';

const NON_EN_LANGS = new Set(['es', 'it', 'pt', 'fr', 'de', 'tr']);

const LOCALES = {
  es: {
    title: 'Prompt Router \u2014 Escribe un Prompt y \u00c1brelo en ChatGPT, Claude, Gemini y m\u00e1s',
    desc: 'Prompt Router te permite escribir un prompt y abrirlo al instante en ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi y Z.ai. Compara respuestas de IA en segundos \u2014 gratis, sin registro.',
    ogLocale: 'es_ES',
    ogImageAlt: 'Prompt Router \u2014 un prompt, toda la IA',
    taglineHTML: 'Escribe una vez, <em>env\u00eda a todas partes</em>',
    heroSub: 'Compara respuestas de ChatGPT, Claude, Gemini<br>y muchas m\u00e1s en un solo clic.',
    lblQuickPrompts: 'Prompts r\u00e1pidos',
    lblSavedPrompts: 'Guardados',
    lblHistory: 'Historial',
    lblToggleSidebar: 'Men\u00fa',
    newPrompt: 'Nuevo prompt',
    search: 'Buscar prompts...',
    lblProviders: 'Abrir en',
    placeholder: 'Escribe tu prompt aqu\u00ed, luego elige una IA abajo...',
    copyBtn: 'Copiar al portapapeles',
    saveBtn: 'Guardar',
    clearBtn: 'Borrar',
  },
  it: {
    title: 'Prompt Router \u2014 Scrivi un Prompt e Aprilo su ChatGPT, Claude, Gemini e altri',
    desc: 'Prompt Router ti permette di scrivere un prompt e aprirlo istantaneamente su ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi e Z.ai. Confronta le risposte AI in secondi \u2014 gratis, senza registrazione.',
    ogLocale: 'it_IT',
    ogImageAlt: 'Prompt Router \u2014 un prompt, ogni AI',
    taglineHTML: 'Scrivi una volta, <em>invia ovunque</em>',
    heroSub: 'Confronta le risposte di ChatGPT, Claude, Gemini<br>e molti altri in un solo clic.',
    lblQuickPrompts: 'Prompt rapidi',
    lblSavedPrompts: 'Salvati',
    lblHistory: 'Cronologia',
    lblToggleSidebar: 'Menu',
    newPrompt: 'Nuovo prompt',
    search: 'Cerca prompt...',
    lblProviders: 'Apri in',
    placeholder: 'Scrivi il tuo prompt qui, poi scegli un\'IA sotto...',
    copyBtn: 'Copia negli appunti',
    saveBtn: 'Salva',
    clearBtn: 'Cancella',
  },
  pt: {
    title: 'Prompt Router \u2014 Escreva um Prompt e Abra no ChatGPT, Claude, Gemini e mais',
    desc: 'Prompt Router permite escrever um prompt e abri-lo instantaneamente no ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi e Z.ai. Compare respostas de IA em segundos \u2014 gratuito, sem cadastro.',
    ogLocale: 'pt_BR',
    ogImageAlt: 'Prompt Router \u2014 um prompt, toda IA',
    taglineHTML: 'Escreva uma vez, <em>envie para qualquer lugar</em>',
    heroSub: 'Compare respostas do ChatGPT, Claude, Gemini<br>e muitos outros em um clique.',
    lblQuickPrompts: 'Prompts r\u00e1pidos',
    lblSavedPrompts: 'Salvos',
    lblHistory: 'Hist\u00f3rico',
    lblToggleSidebar: 'Menu',
    newPrompt: 'Novo prompt',
    search: 'Buscar prompts...',
    lblProviders: 'Abrir em',
    placeholder: 'Escreva seu prompt aqui, depois escolha uma IA abaixo...',
    copyBtn: 'Copiar para \u00e1rea de transfer\u00eancia',
    saveBtn: 'Salvar',
    clearBtn: 'Limpar',
  },
  fr: {
    title: 'Prompt Router \u2014 \u00c9crivez un Prompt et Ouvrez-le dans ChatGPT, Claude, Gemini et plus',
    desc: "Prompt Router vous permet d'\u00e9crire un prompt et de l'ouvrir instantan\u00e9ment dans ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi et Z.ai. Comparez les r\u00e9ponses IA en secondes \u2014 gratuit, sans inscription.",
    ogLocale: 'fr_FR',
    ogImageAlt: "Prompt Router \u2014 un prompt, toute l'IA",
    taglineHTML: '\u00c9crivez une fois, <em>envoyez partout</em>',
    heroSub: 'Comparez les r\u00e9ponses de ChatGPT, Claude, Gemini<br>et bien d\'autres en un clic.',
    lblQuickPrompts: 'Prompts rapides',
    lblSavedPrompts: 'Enregistr\u00e9s',
    lblHistory: 'Historique',
    lblToggleSidebar: 'Menu',
    newPrompt: 'Nouveau prompt',
    search: 'Rechercher des prompts...',
    lblProviders: 'Ouvrir dans',
    placeholder: 'Tapez votre prompt ici, puis choisissez une IA ci-dessous...',
    copyBtn: 'Copier dans le presse-papiers',
    saveBtn: 'Enregistrer',
    clearBtn: 'Effacer',
  },
  de: {
    title: 'Prompt Router \u2014 Schreib einen Prompt und \u00f6ffne ihn in ChatGPT, Claude, Gemini und mehr',
    desc: 'Prompt Router erm\u00f6glicht es dir, einen Prompt zu schreiben und ihn sofort in ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi und Z.ai zu \u00f6ffnen. Vergleiche KI-Antworten in Sekunden \u2014 kostenlos, ohne Anmeldung.',
    ogLocale: 'de_DE',
    ogImageAlt: 'Prompt Router \u2014 ein Prompt, jede KI',
    taglineHTML: 'Einmal schreiben, <em>\u00fcberall senden</em>',
    heroSub: 'Vergleiche Antworten von ChatGPT, Claude, Gemini<br>und vielen weiteren mit einem Klick.',
    lblQuickPrompts: 'Schnellvorlagen',
    lblSavedPrompts: 'Gespeichert',
    lblHistory: 'Verlauf',
    lblToggleSidebar: 'Men\u00fc',
    newPrompt: 'Neuer Prompt',
    search: 'Prompts durchsuchen...',
    lblProviders: '\u00d6ffnen in',
    placeholder: 'Schreibe deinen Prompt hier und w\u00e4hle unten eine KI...',
    copyBtn: 'In die Zwischenablage kopieren',
    saveBtn: 'Speichern',
    clearBtn: 'L\u00f6schen',
  },
  tr: {
    title: 'Prompt Router \u2014 Bir Prompt Yaz ve ChatGPT, Claude, Gemini ve Daha Fazlas\u0131nda A\u00e7',
    desc: 'Prompt Router, bir prompt yazman\u0131za ve onu ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi ve Z.ai\u2019de an\u0131nda a\u00e7man\u0131za olanak tan\u0131r. Yapay zeka yan\u0131tlar\u0131n\u0131 saniyeler i\u00e7inde kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 \u00fccretsiz, kay\u0131t gerekmez.',
    ogLocale: 'tr_TR',
    ogImageAlt: 'Prompt Router \u2014 bir prompt, t\u00fcm yapay zeka',
    taglineHTML: 'Bir kez yaz, <em>her yere g\u00f6nder</em>',
    heroSub: 'ChatGPT, Claude, Gemini ve \u00e7ok daha fazlas\u0131n\u0131n<br>yan\u0131tlar\u0131n\u0131 tek t\u0131kla kar\u015f\u0131la\u015ft\u0131r\u0131n.',
    lblQuickPrompts: 'H\u0131zl\u0131 Promptlar',
    lblSavedPrompts: 'Kaydedilenler',
    lblHistory: 'Ge\u00e7mi\u015f',
    lblToggleSidebar: 'Men\u00fc',
    newPrompt: 'Yeni prompt',
    search: 'Promptlarda ara...',
    lblProviders: 'A\u00e7',
    placeholder: 'Prompt\'unuzu buraya yaz\u0131n, ard\u0131ndan a\u015fa\u011f\u0131dan bir yapay zeka se\u00e7in...',
    copyBtn: 'Panoya kopyala',
    saveBtn: 'Kaydet',
    clearBtn: 'Temizle',
  },
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 1. Redirect legacy ?lang= query parameters (e.g. /?lang=es -> /es, /?lang=en -> /)
    const langParam = url.searchParams.get('lang');
    if (langParam) {
      url.searchParams.delete('lang');
      const search = url.search ? url.search : '';
      if (langParam === 'en') {
        const target = (pathname === '/' ? '/' : pathname) + search;
        return Response.redirect(new URL(target, request.url).toString(), 301);
      }
      if (NON_EN_LANGS.has(langParam)) {
        const target = `/${langParam}${search}`;
        return Response.redirect(new URL(target, request.url).toString(), 301);
      }
    }

    // 2. Trailing slash redirect for language subdirectories (e.g. /es/ -> /es, /tr/dev/ -> /tr/dev)
    const matchedTrailingLang = pathname.match(/^\/([a-z]{2})\/$/);
    if (matchedTrailingLang && NON_EN_LANGS.has(matchedTrailingLang[1])) {
      const search = url.search ? url.search : '';
      return Response.redirect(new URL(`/${matchedTrailingLang[1]}${search}`, request.url).toString(), 301);
    }
    const matchedTrailingLib = pathname.match(/^\/([a-z]{2})\/([a-z-]+)\/$/);
    if (matchedTrailingLib && NON_EN_LANGS.has(matchedTrailingLib[1]) && VALID_LIBS.includes(matchedTrailingLib[2])) {
      const search = url.search ? url.search : '';
      return Response.redirect(new URL(`/${matchedTrailingLib[1]}/${matchedTrailingLib[2]}${search}`, request.url).toString(), 301);
    }

    // 3. Match non-English homepage subdirectories (/es, /it, /pt, /fr, /de, /tr)
    const langMatch = pathname.match(/^\/([a-z]{2})$/);
    const lang = langMatch ? langMatch[1] : null;

    if (lang && NON_EN_LANGS.has(lang)) {
      // Fetch the root index.html asset
      const rootUrl = new URL('/', request.url);
      const baseResponse = await env.ASSETS.fetch(new Request(rootUrl, request));
      if (!baseResponse.ok) return baseResponse;

      const m = LOCALES[lang];
      const langUrl = `https://prompt-router.pages.dev/${lang}`;

      return new HTMLRewriter()
        .on('html',                             { element: el => el.setAttribute('lang', lang) })
        .on('title',                            { element: el => el.setInnerContent(m.title) })
        .on('meta[name="description"]',         { element: el => el.setAttribute('content', m.desc) })
        .on('meta[property="og:title"]',        { element: el => el.setAttribute('content', m.title) })
        .on('meta[property="og:description"]',  { element: el => el.setAttribute('content', m.desc) })
        .on('meta[property="og:url"]',          { element: el => el.setAttribute('content', langUrl) })
        .on('meta[property="og:locale"]',       { element: el => el.setAttribute('content', m.ogLocale) })
        .on('meta[property="og:image:alt"]',    { element: el => el.setAttribute('content', m.ogImageAlt) })
        .on('meta[name="twitter:title"]',       { element: el => el.setAttribute('content', m.title) })
        .on('meta[name="twitter:description"]', { element: el => el.setAttribute('content', m.desc) })
        .on('link[rel="canonical"]',            { element: el => el.setAttribute('href', langUrl) })
        .on('h1#tagline',                       { element: el => el.setInnerContent(m.taglineHTML, { html: true }) })
        .on('p#hero-sub',                       { element: el => el.setInnerContent(m.heroSub, { html: true }) })
        .on('span#lblCopyBtn',                  { element: el => el.setInnerContent(m.copyBtn) })
        .on('span#lblSaveBtn',                  { element: el => el.setInnerContent(m.saveBtn) })
        .on('span#lblClearBtn',                 { element: el => el.setInnerContent(m.clearBtn) })
        .on('span#lbl-providers',               { element: el => el.setInnerContent(m.lblProviders) })
        .on('span#lblQuickPrompts',             { element: el => el.setInnerContent(m.lblQuickPrompts) })
        .on('span#lblSavedPrompts',             { element: el => el.setInnerContent(m.lblSavedPrompts) })
        .on('span#lblHistory',                  { element: el => el.setInnerContent(m.lblHistory) })
        .on('span#lblToggleSidebar',            { element: el => el.setInnerContent(m.lblToggleSidebar) })
        .on('span#lblNewPrompt',                { element: el => el.setInnerContent(m.newPrompt) })
        .on('input#sidebarSearch',              { element: el => el.setAttribute('placeholder', m.search) })
        .on('textarea#prompt',                  { element: el => el.setAttribute('placeholder', m.placeholder) })
        .on('head',                             { element: el => el.append(`<script>window.__LANG__="${lang}";</script>`, { html: true }) })
        .transform(baseResponse);
    }

    // 4. Match non-English library subdirectories (e.g. /tr/dev, /es/writing, /de/marketing)
    const libMatch = pathname.match(/^\/([a-z]{2})\/([a-z-]+)$/);
    if (libMatch) {
      const langSub = libMatch[1];
      const lib = libMatch[2];

      if (NON_EN_LANGS.has(langSub) && VALID_LIBS.includes(lib)) {
        const libUrl = new URL(`/${lib}`, request.url);
        const baseResponse = await env.ASSETS.fetch(new Request(libUrl, request));
        if (!baseResponse.ok) return baseResponse;

        const m = LOCALES[langSub] || {};
        const libMeta = (LIB_LOCALES[lib] && LIB_LOCALES[lib][langSub]) || {};
        const canonicalUrl = `https://prompt-router.pages.dev/${langSub}/${lib}`;

        // Generate complete reciprocal hreflang tags
        let hreflangHTML = `<link rel="alternate" hreflang="x-default" href="https://prompt-router.pages.dev/${lib}">\n`;
        hreflangHTML += `  <link rel="alternate" hreflang="en" href="https://prompt-router.pages.dev/${lib}">\n`;
        for (const l of NON_EN_LANGS) {
          hreflangHTML += `  <link rel="alternate" hreflang="${l}" href="https://prompt-router.pages.dev/${l}/${lib}">\n`;
        }

        return new HTMLRewriter()
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
          .on('span#lblQuickPrompts',             { element: el => { if (m.lblQuickPrompts) el.setInnerContent(m.lblQuickPrompts); } })
          .on('span#lblSavedPrompts',             { element: el => { if (m.lblSavedPrompts) el.setInnerContent(m.lblSavedPrompts); } })
          .on('span#lblHistory',                  { element: el => { if (m.lblHistory) el.setInnerContent(m.lblHistory); } })
          .on('span#lblToggleSidebar',            { element: el => { if (m.lblToggleSidebar) el.setInnerContent(m.lblToggleSidebar); } })
          .on('span#lblNewPrompt',                { element: el => { if (m.newPrompt) el.setInnerContent(m.newPrompt); } })
          .on('input#sidebarSearch',              { element: el => { if (m.search) el.setAttribute('placeholder', m.search); } })
          .on('textarea#prompt',                  { element: el => { if (m.placeholder) el.setAttribute('placeholder', m.placeholder); } })
          .on('head',                             { element: el => el.append(`${hreflangHTML}<script>window.__LANG__="${langSub}";window.__LIB__="${lib}";</script>`, { html: true }) })
          .on('#librariesList a.item-btn',        { element: el => {
            const href = el.getAttribute('href');
            if (href && href.startsWith('/') && !href.startsWith(`/${langSub}/`)) {
              el.setAttribute('href', `/${langSub}${href}`);
            }
          }})
          .on('#topbarLibMenu a',                 { element: el => {
            const href = el.getAttribute('href');
            if (href && href.startsWith('/') && !href.startsWith(`/${langSub}/`)) {
              el.setAttribute('href', `/${langSub}${href}`);
            }
          }})
          .transform(baseResponse);
      }
    }

    // 5. English library pages (e.g. /dev, /writing) - inject reciprocal hreflang tags
    const enLibMatch = pathname.match(/^\/([a-z-]+)$/);
    if (enLibMatch && VALID_LIBS.includes(enLibMatch[1])) {
      const lib = enLibMatch[1];
      const baseResponse = await env.ASSETS.fetch(request);
      if (!baseResponse.ok) return baseResponse;

      let hreflangHTML = `<link rel="alternate" hreflang="x-default" href="https://prompt-router.pages.dev/${lib}">\n`;
      hreflangHTML += `  <link rel="alternate" hreflang="en" href="https://prompt-router.pages.dev/${lib}">\n`;
      for (const l of NON_EN_LANGS) {
        hreflangHTML += `  <link rel="alternate" hreflang="${l}" href="https://prompt-router.pages.dev/${l}/${lib}">\n`;
      }

      return new HTMLRewriter()
        .on('head', { element: el => el.append(hreflangHTML, { html: true }) })
        .transform(baseResponse);
    }

    // 6. Default: pass through to static assets (English homepage, css, js, etc.)
    return env.ASSETS.fetch(request);
  },
};
