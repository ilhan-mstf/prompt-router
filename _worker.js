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
    title:      'Prompt Router \u2014 Free Multi-LLM AI Prompt Comparison Tool',
    desc:       'Write one prompt and instantly open it in ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok and Le Chat. Compare AI responses side-by-side \u2014 free, no login required.',
    ogLocale:   'en_US',
    ogImageAlt: 'Prompt Router \u2014 one prompt, every AI',
  },
  es: {
    title:      'Prompt Router \u2014 Comparador de IA Gratuito y Multi-LLM',
    desc:       'Escribe un prompt y \u00e1brelo al instante en ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok y Le Chat. Compara respuestas de IA \u2014 gratis, sin registro.',
    ogLocale:   'es_ES',
    ogImageAlt: 'Prompt Router \u2014 un prompt, toda la IA',
  },
  it: {
    title:      'Prompt Router \u2014 Confronto AI Gratuito e Multi-LLM',
    desc:       'Scrivi un prompt e aprilo istantaneamente su ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok e Le Chat. Confronta le risposte AI \u2014 gratis, senza registrazione.',
    ogLocale:   'it_IT',
    ogImageAlt: 'Prompt Router \u2014 un prompt, ogni AI',
  },
  pt: {
    title:      'Prompt Router \u2014 Comparador de IA Gratuito e Multi-LLM',
    desc:       'Escreva um prompt e abra-o instantaneamente no ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok e Le Chat. Compare respostas de IA \u2014 gr\u00e1tis, sem cadastro.',
    ogLocale:   'pt_BR',
    ogImageAlt: 'Prompt Router \u2014 um prompt, toda IA',
  },
  fr: {
    title:      'Prompt Router \u2014 Comparateur d\'IA Gratuit et Multi-LLM',
    desc:       "\u00c9crivez un prompt et ouvrez-le instantan\u00e9ment dans ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok et Le Chat. Comparez les r\u00e9ponses IA \u2014 gratuit, sans inscription.",
    ogLocale:   'fr_FR',
    ogImageAlt: "Prompt Router \u2014 un prompt, toute l'IA",
  },
  de: {
    title:      'Prompt Router \u2014 Kostenloser KI-Vergleich und Multi-LLM',
    desc:       'Schreib einen Prompt und \u00f6ffne ihn sofort in ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok und Le Chat. Vergleiche KI-Antworten \u2014 kostenlos, ohne Anmeldung.',
    ogLocale:   'de_DE',
    ogImageAlt: 'Prompt Router \u2014 ein Prompt, jede KI',
  },
  tr: {
    title:      'Prompt Router \u2014 \u00dccretsiz Yapay Zeka Kar\u015f\u0131la\u015ft\u0131rma Arac\u0131',
    desc:       "Bir prompt yaz\u0131n ve ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok ve Le Chat'ta an\u0131nda a\u00e7\u0131n. Yan\u0131tlar\u0131 kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 \u00fccretsiz, kay\u0131t gerekmez.",
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
