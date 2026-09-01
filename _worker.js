/**
 * Cloudflare Pages Worker — _worker.js
 *
 * Server-side Edge SSR & SEO translation layer for Prompt Router.
 * Supports clean subdirectories for languages: /es, /it, /pt, /fr, /de, /tr (and / for English).
 * 301 redirects legacy query parameters (?lang=xx) to clean paths.
 */

const NON_EN_LANGS = new Set(['es', 'it', 'pt', 'fr', 'de', 'tr']);

const LOCALES = {
  es: {
    title: 'Prompt Router \u2014 Escribe un Prompt y \u00c1brelo en ChatGPT, Claude, Gemini y m\u00e1s',
    desc: 'Prompt Router te permite escribir un prompt y abrirlo al instante en ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok y Le Chat. Compara respuestas de IA en segundos \u2014 gratis, sin registro.',
    ogLocale: 'es_ES',
    ogImageAlt: 'Prompt Router \u2014 un prompt, toda la IA',
    taglineHTML: 'Prompt Router Multi-LLM &mdash; Env&iacute;a a toda la IA',
    heroSub: 'Un prompt, ocho proveedores de IA. Compara respuestas de ChatGPT, Claude, Gemini y m\u00e1s \u2014 gratis, sin registro.',
    lblTemplates: 'Plantillas r\u00e1pidas',
    lblPrompt: 'Tu prompt',
    lblProviders: 'Abrir en',
    placeholder: 'Escribe o pega tu prompt aqu\u00ed\u2026',
    copyBtn: 'Copiar al portapapeles',
    saveBtn: 'Guardar',
    clearBtn: 'Borrar',
  },
  it: {
    title: 'Prompt Router \u2014 Scrivi un Prompt e Aprilo su ChatGPT, Claude, Gemini e altri',
    desc: 'Prompt Router ti permette di scrivere un prompt e aprirlo istantaneamente su ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok e Le Chat. Confronta le risposte AI in secondi \u2014 gratis, senza registrazione.',
    ogLocale: 'it_IT',
    ogImageAlt: 'Prompt Router \u2014 un prompt, ogni AI',
    taglineHTML: 'Prompt Router Multi-LLM &mdash; Invia a ogni AI',
    heroSub: 'Un prompt, otto provider di IA. Confronta le risposte di ChatGPT, Claude, Gemini e altri \u2014 gratis, senza registrazione.',
    lblTemplates: 'Modelli rapidi',
    lblPrompt: 'Il tuo prompt',
    lblProviders: 'Apri in',
    placeholder: 'Scrivi o incolla il tuo prompt qui\u2026',
    copyBtn: 'Copia negli appunti',
    saveBtn: 'Salva',
    clearBtn: 'Cancella',
  },
  pt: {
    title: 'Prompt Router \u2014 Escreva um Prompt e Abra no ChatGPT, Claude, Gemini e mais',
    desc: 'Prompt Router permite escrever um prompt e abri-lo instantaneamente no ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok e Le Chat. Compare respostas de IA em segundos \u2014 gratuito, sem cadastro.',
    ogLocale: 'pt_BR',
    ogImageAlt: 'Prompt Router \u2014 um prompt, toda IA',
    taglineHTML: 'Prompt Router Multi-LLM &mdash; Envie para toda IA',
    heroSub: 'Um prompt, oito provedores de IA. Compare respostas do ChatGPT, Claude, Gemini e mais \u2014 gratuito, sem cadastro.',
    lblTemplates: 'Modelos r\u00e1pidos',
    lblPrompt: 'Seu prompt',
    lblProviders: 'Abrir em',
    placeholder: 'Digite ou cole seu prompt aqui\u2026',
    copyBtn: 'Copiar para \u00e1rea de transfer\u00eancia',
    saveBtn: 'Salvar',
    clearBtn: 'Limpar',
  },
  fr: {
    title: 'Prompt Router \u2014 \u00c9crivez un Prompt et Ouvrez-le dans ChatGPT, Claude, Gemini et plus',
    desc: "Prompt Router vous permet d'\u00e9crire un prompt et de l'ouvrir instantan\u00e9ment dans ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok et Le Chat. Comparez les r\u00e9ponses IA en secondes \u2014 gratuit, sans inscription.",
    ogLocale: 'fr_FR',
    ogImageAlt: "Prompt Router \u2014 un prompt, toute l'IA",
    taglineHTML: 'Prompt Router Multi-LLM &mdash; Envoyez &agrave; toute l\'IA',
    heroSub: "Un prompt, huit fournisseurs d'IA. Comparez les r\u00e9ponses de ChatGPT, Claude, Gemini et plus \u2014 gratuit, sans inscription.",
    lblTemplates: 'Mod\u00e8les rapides',
    lblPrompt: 'Votre prompt',
    lblProviders: 'Ouvrir dans',
    placeholder: 'Tapez ou collez votre prompt ici\u2026',
    copyBtn: 'Copier dans le presse-papiers',
    saveBtn: 'Enregistrer',
    clearBtn: 'Effacer',
  },
  de: {
    title: 'Prompt Router \u2014 Schreib einen Prompt und \u00f6ffne ihn in ChatGPT, Claude, Gemini und mehr',
    desc: 'Prompt Router erm\u00f6glicht es dir, einen Prompt zu schreiben und ihn sofort in ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok und Le Chat zu \u00f6ffnen. Vergleiche KI-Antworten in Sekunden \u2014 kostenlos, ohne Anmeldung.',
    ogLocale: 'de_DE',
    ogImageAlt: 'Prompt Router \u2014 ein Prompt, jede KI',
    taglineHTML: 'Prompt Router Multi-LLM &mdash; An jede KI senden',
    heroSub: 'Ein Prompt, acht KI-Anbieter. Vergleiche Antworten von ChatGPT, Claude, Gemini und mehr \u2014 kostenlos, ohne Anmeldung.',
    lblTemplates: 'Schnellvorlagen',
    lblPrompt: 'Dein Prompt',
    lblProviders: '\u00d6ffnen in',
    placeholder: 'Deinen Prompt hier eingeben oder einf\u00fcgen\u2026',
    copyBtn: 'In die Zwischenablage kopieren',
    saveBtn: 'Speichern',
    clearBtn: 'L\u00f6schen',
  },
  tr: {
    title: 'Prompt Router \u2014 Bir Prompt Yaz ve ChatGPT, Claude, Gemini ve Daha Fazlas\u0131nda A\u00e7',
    desc: 'Prompt Router, bir prompt yazman\u0131za ve onu ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok ve Le Chat\u2019ta an\u0131nda a\u00e7man\u0131za olanak tan\u0131r. Yapay zeka yan\u0131tlar\u0131n\u0131 saniyeler i\u00e7inde kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 \u00fccretsiz, kay\u0131t gerekmez.',
    ogLocale: 'tr_TR',
    ogImageAlt: 'Prompt Router \u2014 bir prompt, t\u00fcm yapay zeka',
    taglineHTML: 'Prompt Router Multi-LLM &mdash; T&uuml;m yapay zekaya g&ouml;nder',
    heroSub: 'Bir prompt, sekiz yapay zeka sa\u011flay\u0131c\u0131s\u0131. ChatGPT, Claude, Gemini ve daha fazlas\u0131n\u0131n yan\u0131tlar\u0131n\u0131 kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 \u00fccretsiz, kay\u0131t gerekmez.',
    lblTemplates: 'H\u0131zl\u0131 \u015fablonlar',
    lblPrompt: 'Prompt\u2019unuz',
    lblProviders: 'A\u00e7',
    placeholder: 'Prompt\u2019unuzu buraya yaz\u0131n veya yap\u0131\u015ft\u0131r\u0131n\u2026',
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

    // 2. Trailing slash redirect for language subdirectories (e.g. /es/ -> /es)
    const matchedTrailing = pathname.match(/^\/([a-z]{2})\/$/);
    if (matchedTrailing && NON_EN_LANGS.has(matchedTrailing[1])) {
      const search = url.search ? url.search : '';
      return Response.redirect(new URL(`/${matchedTrailing[1]}${search}`, request.url).toString(), 301);
    }

    // 3. Match non-English language subdirectories (/es, /it, /pt, /fr, /de, /tr)
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
        .on('html',                            { element: el => el.setAttribute('lang', lang) })
        .on('title',                           { element: el => el.setInnerContent(m.title) })
        .on('meta[name="description"]',        { element: el => el.setAttribute('content', m.desc) })
        .on('meta[property="og:title"]',       { element: el => el.setAttribute('content', m.title) })
        .on('meta[property="og:description"]', { element: el => el.setAttribute('content', m.desc) })
        .on('meta[property="og:url"]',         { element: el => el.setAttribute('content', langUrl) })
        .on('meta[property="og:locale"]',      { element: el => el.setAttribute('content', m.ogLocale) })
        .on('meta[property="og:image:alt"]',   { element: el => el.setAttribute('content', m.ogImageAlt) })
        .on('meta[name="twitter:title"]',      { element: el => el.setAttribute('content', m.title) })
        .on('meta[name="twitter:description"]',{ element: el => el.setAttribute('content', m.desc) })
        .on('link[rel="canonical"]',           { element: el => el.setAttribute('href', langUrl) })
        .on('h1#tagline',                      { element: el => el.setInnerContent(m.taglineHTML, { html: true }) })
        .on('p#hero-sub',                      { element: el => el.setInnerContent(m.heroSub) })
        .on('span#lbl-templates',              { element: el => el.setInnerContent(m.lblTemplates) })
        .on('label#lbl-prompt',                { element: el => el.setInnerContent(m.lblPrompt) })
        .on('span#lbl-providers',              { element: el => el.setInnerContent(m.lblProviders) })
        .on('button#copyBtn',                  { element: el => el.setInnerContent(m.copyBtn) })
        .on('button#saveBtn',                  { element: el => el.setInnerContent(m.saveBtn) })
        .on('button#clearBtn',                 { element: el => el.setInnerContent(m.clearBtn) })
        .on('textarea#prompt',                 { element: el => el.setAttribute('placeholder', m.placeholder) })
        .on('head',                            { element: el => el.append(`<script>window.__LANG__="${lang}";</script>`, { html: true }) })
        .transform(baseResponse);
    }

    // 4. Default: pass through to static assets (English homepage, dev.html, css, js, etc.)
    return env.ASSETS.fetch(request);
  },
};
