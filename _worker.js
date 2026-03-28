/**
 * Cloudflare Pages Worker — _worker.js
 *
 * Injects language-specific <title>, <meta>, and <html lang> server-side
 * so social scrapers (Facebook, Twitter/X, LinkedIn, Slack) and non-JS
 * crawlers receive the correct translated meta tags.
 *
 * Runs only for the root HTML page (pathname === '/').
 * All other requests (images, fonts, assets) are passed through untouched.
 */

const SUPPORTED = new Set(['en', 'es', 'it', 'pt', 'fr', 'de', 'tr']);

const META = {
  en: {
    title:      'Prompt Router \u2014 Send One Prompt to ChatGPT, Claude, Gemini & More',
    desc:       'Prompt Router lets you write one prompt and instantly open it in ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok and Le Chat. Compare AI responses side-by-side in seconds \u2014 free, no login required.',
    ogLocale:   'en_US',
    ogImageAlt: 'Prompt Router \u2014 one prompt, every AI',
  },
  es: {
    title:      'Prompt Router \u2014 Escribe un Prompt y \u00c1brelo en ChatGPT, Claude, Gemini y m\u00e1s',
    desc:       'Prompt Router te permite escribir un prompt y abrirlo al instante en ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok y Le Chat. Compara respuestas de IA en segundos \u2014 gratis, sin registro.',
    ogLocale:   'es_ES',
    ogImageAlt: 'Prompt Router \u2014 un prompt, toda la IA',
  },
  it: {
    title:      'Prompt Router \u2014 Scrivi un Prompt e Aprilo su ChatGPT, Claude, Gemini e altri',
    desc:       'Prompt Router ti permette di scrivere un prompt e aprirlo istantaneamente su ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok e Le Chat. Confronta le risposte AI in secondi \u2014 gratis, senza registrazione.',
    ogLocale:   'it_IT',
    ogImageAlt: 'Prompt Router \u2014 un prompt, ogni AI',
  },
  pt: {
    title:      'Prompt Router \u2014 Escreva um Prompt e Abra no ChatGPT, Claude, Gemini e mais',
    desc:       'Prompt Router permite escrever um prompt e abri-lo instantaneamente no ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok e Le Chat. Compare respostas de IA em segundos \u2014 gratuito, sem cadastro.',
    ogLocale:   'pt_BR',
    ogImageAlt: 'Prompt Router \u2014 um prompt, toda IA',
  },
  fr: {
    title:      'Prompt Router \u2014 \u00c9crivez un Prompt et Ouvrez-le dans ChatGPT, Claude, Gemini et plus',
    desc:       "Prompt Router vous permet d'\u00e9crire un prompt et de l'ouvrir instantan\u00e9ment dans ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok et Le Chat. Comparez les r\u00e9ponses IA en secondes \u2014 gratuit, sans inscription.",
    ogLocale:   'fr_FR',
    ogImageAlt: "Prompt Router \u2014 un prompt, toute l'IA",
  },
  de: {
    title:      'Prompt Router \u2014 Schreib einen Prompt und \u00f6ffne ihn in ChatGPT, Claude, Gemini und mehr',
    desc:       'Prompt Router erm\u00f6glicht es dir, einen Prompt zu schreiben und ihn sofort in ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok und Le Chat zu \u00f6ffnen. Vergleiche KI-Antworten in Sekunden \u2014 kostenlos, ohne Anmeldung.',
    ogLocale:   'de_DE',
    ogImageAlt: 'Prompt Router \u2014 ein Prompt, jede KI',
  },
  tr: {
    title:      'Prompt Router \u2014 Bir Prompt Yaz ve ChatGPT, Claude, Gemini ve Daha Fazlas\u0131nda A\u00e7',
    desc:       "Prompt Router, bir prompt yazman\u0131za ve onu ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok ve Le Chat\u2019ta an\u0131nda a\u00e7man\u0131za olanak tan\u0131r. Yapay zeka yan\u0131tlar\u0131n\u0131 saniyeler i\u00e7inde kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 \u00fccretsiz, kay\u0131t gerekmez.",
    ogLocale:   'tr_TR',
    ogImageAlt: 'Prompt Router \u2014 bir prompt, t\u00fcm yapay zeka',
  },
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Non-root paths: images, fonts, manifests, etc. — pass through directly
    if (url.pathname !== '/') {
      return env.ASSETS.fetch(request);
    }

    const langParam = url.searchParams.get('lang') || '';
    const lang = SUPPORTED.has(langParam) ? langParam : 'en';

    // Default English (no ?lang param): serve as-is, no transformation needed
    if (lang === 'en' && !langParam) {
      return env.ASSETS.fetch(request);
    }

    // Fetch base index.html from static assets
    const response = await env.ASSETS.fetch(request);
    if (!response.ok) return response;

    const m = META[lang];

    const langUrl = `https://prompt-router.pages.dev/?lang=${lang}`;

    // HTMLRewriter streams the response, patching only the relevant elements.
    // Attribute values are automatically HTML-entity-escaped by the runtime.
    return new HTMLRewriter()
      .on('html',                           { element: el => el.setAttribute('lang', lang)         })
      .on('title',                          { element: el => el.setInnerContent(m.title)            })
      .on('meta[name="description"]',       { element: el => el.setAttribute('content', m.desc)    })
      .on('meta[property="og:title"]',      { element: el => el.setAttribute('content', m.title)   })
      .on('meta[property="og:description"]',{ element: el => el.setAttribute('content', m.desc)    })
      .on('meta[property="og:url"]',        { element: el => el.setAttribute('content', langUrl)   })
      .on('meta[property="og:locale"]',     { element: el => el.setAttribute('content', m.ogLocale)})
      .on('meta[property="og:image:alt"]',  { element: el => el.setAttribute('content', m.ogImageAlt) })
      .on('meta[name="twitter:title"]',     { element: el => el.setAttribute('content', m.title)   })
      .on('meta[name="twitter:description"]',{ element: el => el.setAttribute('content', m.desc)   })
      .on('link[rel="canonical"]',          { element: el => el.setAttribute('href', langUrl)      })
      .transform(response);
  },
};
