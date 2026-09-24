/**
 * Cloudflare Pages Worker — _worker.js
 *
 * Server-side Edge SSR & SEO translation layer for Prompt Router.
 * Supports clean subdirectories for languages: /es, /it, /pt, /fr, /de, /tr (and / for English).
 * 301 redirects legacy query parameters (?lang=xx) to clean paths.
 * Pre-renders localized categories, prompt cards, quick templates, and schema.
 */

import { LIB_LOCALES, VALID_LIBS, APP_LOCALES as LOCALES } from './js/lib-locales.js';
import PROMPTS_I18N from './data/prompts/index.js';

const NON_EN_LANGS = new Set(['es', 'it', 'pt', 'fr', 'de', 'tr']);

const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://cloudflareinsights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
  'Link': '</llms.txt>; rel="alternate"; type="text/markdown"',
};

const QUICK_TEMPLATES = {
  en: ['Summarize', 'Explain it', 'Improve text', 'Brainstorm', 'Compare', 'Write email', 'Fix my code', 'Make a plan', 'Pros & cons', 'Ask questions'],
  es: ['Resumir', 'Explicar', 'Mejorar texto', 'Ideas', 'Comparar', 'Redactar email', 'Corregir código', 'Hacer un plan', 'Pros y contras', 'Preguntas clave'],
  it: ['Riassumi', 'Spiega', 'Migliora testo', 'Brainstorming', 'Confronta', 'Scrivi email', 'Correggi codice', 'Fai un piano', 'Pro e contro', 'Domande chiave'],
  pt: ['Resumir', 'Explicar', 'Melhorar texto', 'Brainstorming', 'Comparar', 'Escrever email', 'Corrigir código', 'Fazer um plano', 'Prós e contras', 'Perguntas-chave'],
  fr: ['Résumer', 'Expliquer', 'Améliorer texte', 'Brainstorming', 'Comparer', 'Écrire email', 'Corriger code', 'Faire un plan', 'Pour et contre', 'Questions clés'],
  de: ['Zusammenfassen', 'Erklären', 'Text verbessern', 'Brainstorming', 'Vergleichen', 'E-Mail schreiben', 'Code korrigieren', 'Plan erstellen', 'Vor- und Nachteile', 'Fragen stellen'],
  tr: ['Özetle', 'Açıkla', 'Metni geliştir', 'Fikir üret', 'Kıyasla', 'E-posta yaz', 'Kodu düzelt', 'Plan yap', 'Artı ve eksiler', 'Sorular sor'],
};

const LIB_ICONS = {
  dev: '&#128187;',
  writing: '&#9997;',
  marketing: '&#128227;',
  job: '&#128188;',
  startup: '&#128640;',
  data: '&#128202;',
  design: '&#127912;',
  student: '&#127891;',
  productivity: '&#9874;',
  legal: '&#9878;',
  sales: '&#128176;',
};

const NOSCRIPT_LOCALES = {
  de: {
    alert: 'Für die Nutzung von Prompt Router ist JavaScript erforderlich.',
    title: 'Kostenloser Multi-LLM Prompt Router & KI-Vergleichstool',
    p1: 'Prompt Router ist ein kostenloses Tool ohne Anmeldung, mit dem du einen Prompt gleichzeitig an mehrere KI-Modelle senden kannst. Vergleiche Antworten von ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi und Z.ai Seite an Seite.',
    featuresTitle: 'Hauptfunktionen:',
    f1: ['Ein Prompt, jede KI', 'Einmal schreiben und in 11+ führenden Modellen öffnen.'],
    f2: ['11+ Prompt-Bibliotheken', 'Kuratierte Prompts für Entwickler, Marketing, Schreiben, Startups und mehr.'],
    f3: ['Privat & Sicher', 'Kein Konto erforderlich, keine Datenspeicherung – deine Prompts bleiben im Browser.'],
    f4: ['KI-Modelle vergleichen', 'Sofort sehen, welches LLM das beste Ergebnis für deine Aufgabe liefert.'],
    providersTitle: 'Unterstützte KI-Anbieter:',
    providersList: 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Perplexity, DeepSeek, Grok (xAI), Mistral Le Chat, Qwen (Alibaba), Kimi (Moonshot) und Z.ai (Zhipu).'
  },
  fr: {
    alert: 'JavaScript est requis pour utiliser Prompt Router.',
    title: 'Routeur de Prompts Multi-LLM & Outil de Comparaison IA Gratuit',
    p1: "Prompt Router est un outil gratuit sans inscription qui vous permet d'envoyer un seul prompt à plusieurs modèles d'IA simultanément. Comparez les réponses de ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi et Z.ai côte à côte.",
    featuresTitle: 'Fonctionnalités principales :',
    f1: ['Un prompt, chaque IA', 'Rédigez une fois et ouvrez dans 11+ modèles majeurs.'],
    f2: ['11+ Bibliothèques de prompts', 'Prompts sélectionnés pour Développeurs, Marketing, Rédaction, Startups et plus.'],
    f3: ['Privé & Sécurisé', 'Aucun compte requis, aucun stockage serveur — vos prompts restent dans votre navigateur.'],
    f4: ["Comparer les modèles d'IA", "Voyez instantanément quel LLM offre le meilleur résultat pour votre tâche."],
    providersTitle: "Fournisseurs d'IA pris en charge :",
    providersList: 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Perplexity, DeepSeek, Grok (xAI), Mistral Le Chat, Qwen (Alibaba), Kimi (Moonshot) et Z.ai (Zhipu).'
  },
  es: {
    alert: 'Se requiere JavaScript para usar Prompt Router.',
    title: 'Enrutador de Prompts Multi-LLM y Comparador de IA Gratuito',
    p1: 'Prompt Router es una herramienta gratuita y sin registro que te permite enviar un único prompt a múltiples modelos de IA simultáneamente. Compara respuestas de ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi y Z.ai lado a lado.',
    featuresTitle: 'Características principales:',
    f1: ['Un Prompt, Toda la IA', 'Escribe una vez y abre en 11+ modelos líderes.'],
    f2: ['11+ Bibliotecas de Prompts', 'Prompts seleccionados para Desarrolladores, Marketing, Redacción, Startups y más.'],
    f3: ['Privado y Seguro', 'Sin registro ni almacenamiento en el servidor — tus prompts se quedan en tu navegador.'],
    f4: ['Comparar Modelos de IA', 'Descubre al instante qué LLM ofrece el mejor resultado para tu tarea.'],
    providersTitle: 'Proveedores de IA compatibles:',
    providersList: 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Perplexity, DeepSeek, Grok (xAI), Mistral Le Chat, Qwen (Alibaba), Kimi (Moonshot) y Z.ai (Zhipu).'
  },
  tr: {
    alert: "Prompt Router'ı kullanmak için JavaScript gereklidir.",
    title: 'Ücretsiz Çoklu LLM Prompt Yönlendirici & Yapay Zeka Karşılaştırma Aracı',
    p1: 'Prompt Router, tek bir prompt yazıp aynı anda birden fazla yapay zeka modeline göndermenizi sağlayan ücretsiz ve kayıtsız bir araçtır. ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi ve Z.ai yanıtlarını yan yana karşılaştırın.',
    featuresTitle: 'Temel Özellikler:',
    f1: ['Tek Prompt, Tüm Yapay Zeka', 'Bir kez yazın ve 11+ popüler yapay zekada anında açın.'],
    f2: ['11+ Prompt Kütüphanesi', 'Geliştiriciler, Pazarlama, Yazarlık, Startup ve daha fazlası için seçilmiş promptlar.'],
    f3: ['Gizli ve Güvenli', 'Hesap gerekmez, sunucuda veri saklanmaz — promptlarınız tarayıcınızda kalır.'],
    f4: ['Yapay Zeka Modellerini Karşılaştırın', 'Göreviniz için en iyi yanıtı hangi modelin verdiğini saniyeler içinde görün.'],
    providersTitle: 'Desteklenen Yapay Zeka Sağlayıcıları:',
    providersList: 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Perplexity, DeepSeek, Grok (xAI), Mistral Le Chat, Qwen (Alibaba), Kimi (Moonshot) ve Z.ai (Zhipu).'
  },
  it: {
    alert: 'JavaScript è necessario per utilizzare Prompt Router.',
    title: 'Router di Prompt Multi-LLM e Strumento di Confronto AI Gratuito',
    p1: 'Prompt Router è uno strumento gratuito e senza registrazione che ti consente di inviare un singolo prompt a più modelli di IA contemporaneamente. Confronta le risposte di ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi e Z.ai fianco a fianco.',
    featuresTitle: 'Funzionalità principali:',
    f1: ['Un Prompt, Tutte le AI', 'Scrivi una volta e apri in 11+ modelli leader.'],
    f2: ['11+ Librerie di Prompt', 'Prompt curati per Sviluppatori, Marketing, Scrittura, Startup e altro.'],
    f3: ['Privato e Sicuro', 'Nessun account richiesto, nessun salvataggio su server — i tuoi prompt rimangono nel browser.'],
    f4: ['Confronta Modelli di IA', "Scopri all'istante quale LLM offre il risultato migliore per la tua attività."],
    providersTitle: 'Provider AI supportati:',
    providersList: 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Perplexity, DeepSeek, Grok (xAI), Mistral Le Chat, Qwen (Alibaba), Kimi (Moonshot) e Z.ai (Zhipu).'
  },
  pt: {
    alert: 'O JavaScript é necessário para usar o Prompt Router.',
    title: 'Roteador de Prompts Multi-LLM e Ferramenta de Comparação de IA Gratuita',
    p1: 'O Prompt Router é uma ferramenta gratuita e sem cadastro que permite enviar um único prompt para múltiplos modelos de IA simultaneamente. Compare respostas de ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi e Z.ai lado a lado.',
    featuresTitle: 'Principais recursos:',
    f1: ['Um Prompt, Toda IA', 'Escreva uma vez e abra em 11+ modelos principais.'],
    f2: ['11+ Bibliotecas de Prompts', 'Prompts selecionados para Desenvolvedores, Marketing, Redação, Startups e mais.'],
    f3: ['Privado e Seguro', 'Sem cadastro, sem armazenamento em servidor — seus prompts ficam no seu navegador.'],
    f4: ['Comparar Modelos de IA', 'Veja instantaneamente qual LLM entrega o melhor resultado.'],
    providersTitle: 'Provedores de IA suportados:',
    providersList: 'ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot (Microsoft), Perplexity, DeepSeek, Grok (xAI), Mistral Le Chat, Qwen (Alibaba), Kimi (Moonshot) e Z.ai (Zhipu).'
  }
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

function escHtml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderCatsHtml(groups, lang = 'en') {
  const allLabel = (LOCALES[lang] && LOCALES[lang].lblAll) || 'All';
  let html = `\n<button type="button" class="cat active" aria-pressed="true">${allLabel}</button>`;
  for (const g of groups) {
    html += `\n<button type="button" class="cat" aria-pressed="false">${escHtml(g.cat)}</button>`;
  }
  return html + '\n';
}

function renderCardsHtml(groups) {
  let html = '\n';
  groups.forEach((group, idx) => {
    const marginTop = idx === 0 ? '0' : '16px';
    html += `<span class="lbl-heading" style="margin-top: ${marginTop}; display: block;">${escHtml(group.cat)}</span>\n`;
    group.prompts.forEach(p => {
      html += `<button type="button" class="prompt-card" aria-pressed="false"><div class="prompt-card-title">${escHtml(p.title)}</div><div class="prompt-card-preview">${escHtml(p.text)}</div></button>\n`;
    });
  });
  return html;
}

function getLocalizedQuickListHtml(lang) {
  const tpls = QUICK_TEMPLATES[lang] || QUICK_TEMPLATES.en;
  let html = '\n';
  tpls.forEach((label, i) => {
    html += `<button type="button" class="item-btn" data-tid="t_${i}"><span class="item-title">${escHtml(label)}</span><span class="p-arrow">&nearr;</span></button>\n`;
  });
  return html;
}

function getNoscriptHTML(lang) {
  const n = NOSCRIPT_LOCALES[lang];
  if (!n) return '';
  return `
  <div class="noscript" role="alert">${n.alert}</div>
  <section style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <h2>${n.title}</h2>
    <p>${n.p1}</p>
    <h3>${n.featuresTitle}</h3>
    <ul>
      <li><strong>${n.f1[0]}:</strong> ${n.f1[1]}</li>
      <li><strong>${n.f2[0]}:</strong> ${n.f2[1]}</li>
      <li><strong>${n.f3[0]}:</strong> ${n.f3[1]}</li>
      <li><strong>${n.f4[0]}:</strong> ${n.f4[1]}</li>
    </ul>
    <h3>${n.providersTitle}</h3>
    <p>${n.providersList}</p>
  </section>
`;
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
        .on('noscript',                         { element: el => el.setInnerContent(getNoscriptHTML(lang), { html: true }) })
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
        .on('div#quickList',                    { element: el => el.setInnerContent(getLocalizedQuickListHtml(lang), { html: true }) })
        .on('input#sidebarSearch',              { element: el => el.setAttribute('placeholder', m.search) })
        .on('textarea#prompt',                  { element: el => el.setAttribute('placeholder', m.placeholder) })
        .on('span#lblFooterLibraries',          { element: el => { if (m.promptLibraries) el.setInnerContent(m.promptLibraries); } })
        .on('p#footer-desc',                    { element: el => el.setInnerContent(getFooterDescHTML(lang), { html: true }) })
        .on('head',                             { element: el => el.append(`<script>window.__LANG__="${lang}";</script>`, { html: true }) })
        .on('a.brand-link',                     { element: el => el.setAttribute('href', `/${lang}`) })
        .on('a.new-prompt-btn',                 { element: el => el.setAttribute('href', `/${lang}`) })
        .on('.footer-links a[href="/"]',        { element: el => el.setAttribute('href', `/${lang}`) })
        .on('#librariesList a.item-btn', { element: el => {
          const href = el.getAttribute('href');
          if (!href || !href.startsWith('/')) return;
          const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
          if (VALID_LIBS.includes(cleanLib)) {
            el.setAttribute('href', `/${lang}/${cleanLib}`);
            const meta = LIB_LOCALES[cleanLib] && LIB_LOCALES[cleanLib][lang];
            const icon = LIB_ICONS[cleanLib] || '';
            if (meta && meta.name) {
              el.setInnerContent(`<div class="item-label-wrap"><span class="item-icon">${icon}</span><span class="item-title">${escHtml(meta.name)}</span></div><span class="p-arrow">&nearr;</span>`, { html: true });
            }
          }
        }})
        .on('#topbarLibMenu a', { element: el => {
          const href = el.getAttribute('href');
          if (!href || !href.startsWith('/')) return;
          const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
          if (VALID_LIBS.includes(cleanLib)) {
            el.setAttribute('href', `/${lang}/${cleanLib}`);
            const meta = LIB_LOCALES[cleanLib] && LIB_LOCALES[cleanLib][lang];
            if (meta && meta.name) {
              el.setInnerContent(meta.name);
            }
          }
        }})
        .on('footer .footer-grid a', { element: el => {
          const href = el.getAttribute('href');
          if (!href || !href.startsWith('/')) return;
          const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
          if (VALID_LIBS.includes(cleanLib)) {
            el.setAttribute('href', `/${lang}/${cleanLib}`);
            const meta = LIB_LOCALES[cleanLib] && LIB_LOCALES[cleanLib][lang];
            if (meta && meta.name) el.setInnerContent(meta.name);
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

        // Get localized prompt data
        const localizedGroups = (PROMPTS_I18N[langSub] && PROMPTS_I18N[langSub][lib]) || [];
        const localizedCatsHtml = localizedGroups.length ? renderCatsHtml(localizedGroups, langSub) : null;
        const localizedCardsHtml = localizedGroups.length ? renderCardsHtml(localizedGroups) : null;

        // Structured Data: WebPage & ItemList
        const webPageSchema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": libMeta.title || (libMeta.name ? `${libMeta.name} — Prompt Router` : ''),
          "description": libMeta.desc || '',
          "url": canonicalUrl,
          "isPartOf": {
            "@type": "WebApplication",
            "name": "Prompt Router",
            "url": `https://prompt-router.pages.dev/${langSub}`
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": (m.sidebar || 'Home'), "item": `https://prompt-router.pages.dev/${langSub}` },
              { "@type": "ListItem", "position": 2, "name": libMeta.name || (libMeta.title || '').split('—')[0].trim(), "item": canonicalUrl }
            ]
          }
        };

        const listItems = [];
        let itemPos = 1;
        localizedGroups.forEach(g => {
          g.prompts.forEach(p => {
            listItems.push({ "@type": "ListItem", "position": itemPos++, "name": p.title });
          });
        });
        const itemListSchema = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": (libMeta.title || '').split('|')[0].split('—')[0].trim(),
          "numberOfItems": listItems.length,
          "itemListElement": listItems
        };

        const schemaHTML = `\n  <script type="application/ld+json">${JSON.stringify(webPageSchema)}</script>\n  <script type="application/ld+json" data-server="true">${JSON.stringify(itemListSchema)}</script>\n`;

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
          .on('div#quickList',                    { element: el => el.setInnerContent(getLocalizedQuickListHtml(langSub), { html: true }) })
          .on('input#sidebarSearch',              { element: el => { if (m.search) el.setAttribute('placeholder', m.search); } })
          .on('textarea#prompt',                  { element: el => { if (m.placeholder) el.setAttribute('placeholder', m.placeholder); } })
          .on('span#lbl-cats',                    { element: el => { if (m.lblCats) el.setInnerContent(m.lblCats); } })
          .on('span#lbl-prompts',                 { element: el => { if (m.lblPrompts) el.setInnerContent(m.lblPrompts); } })
          .on('label#lbl-prompt',                 { element: el => { if (m.lblPrompt) el.setInnerContent(m.lblPrompt); } })
          .on('span#lbl-related',                 { element: el => { if (m.lblRelated) el.setInnerContent(m.lblRelated); } })
          .on('span#lblFooterLibraries',          { element: el => { if (m.promptLibraries) el.setInnerContent(m.promptLibraries); } })
          .on('p#footer-desc',                    { element: el => el.setInnerContent(getFooterDescHTML(langSub), { html: true }) })
          .on('#cats',                            { element: el => { if (localizedCatsHtml) el.setInnerContent(localizedCatsHtml, { html: true }); } })
          .on('#prompt-cards',                    { element: el => { if (localizedCardsHtml) el.setInnerContent(localizedCardsHtml, { html: true }); } })
          .on('script[type="application/ld+json"]',{ element: el => el.remove() })
          .on('head',                             { element: el => el.append(`${hreflangHTML}${schemaHTML}<script>window.__LANG__="${langSub}";window.__LIB__="${lib}";window.__PROMPTS__=${JSON.stringify(localizedGroups)};</script>`, { html: true }) })
          .on('a.brand-link',                     { element: el => el.setAttribute('href', `/${langSub}`) })
          .on('a.new-prompt-btn',                 { element: el => el.setAttribute('href', `/${langSub}`) })
          .on('.footer-links a[href="/"]',        { element: el => el.setAttribute('href', `/${langSub}`) })
          .on('#librariesList a.item-btn', { element: el => {
            const href = el.getAttribute('href');
            if (!href || !href.startsWith('/')) return;
            const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
            if (VALID_LIBS.includes(cleanLib)) {
              el.setAttribute('href', `/${langSub}/${cleanLib}`);
              const meta = LIB_LOCALES[cleanLib] && LIB_LOCALES[cleanLib][langSub];
              const icon = LIB_ICONS[cleanLib] || '';
              if (meta && meta.name) {
                el.setInnerContent(`<div class="item-label-wrap"><span class="item-icon">${icon}</span><span class="item-title">${escHtml(meta.name)}</span></div><span class="p-arrow">&nearr;</span>`, { html: true });
              }
            }
          }})
          .on('#topbarLibMenu a', { element: el => {
            const href = el.getAttribute('href');
            if (!href || !href.startsWith('/')) return;
            const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
            if (VALID_LIBS.includes(cleanLib)) {
              el.setAttribute('href', `/${langSub}/${cleanLib}`);
              const meta = LIB_LOCALES[cleanLib] && LIB_LOCALES[cleanLib][langSub];
              if (meta && meta.name) {
                el.setInnerContent(meta.name);
              }
            }
          }})
          .on('footer .footer-grid a', { element: el => {
            const href = el.getAttribute('href');
            if (!href || !href.startsWith('/')) return;
            const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
            if (VALID_LIBS.includes(cleanLib)) {
              el.setAttribute('href', `/${langSub}/${cleanLib}`);
              const meta = LIB_LOCALES[cleanLib] && LIB_LOCALES[cleanLib][langSub];
              if (meta && meta.name) el.setInnerContent(meta.name);
            }
          }})
          .on('.related-grid a', { element: el => {
            const href = el.getAttribute('href');
            if (!href || !href.startsWith('/')) return;
            const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
            if (VALID_LIBS.includes(cleanLib)) {
              el.setAttribute('href', `/${langSub}/${cleanLib}`);
              const meta = LIB_LOCALES[cleanLib] && LIB_LOCALES[cleanLib][langSub];
              if (meta && meta.name) el.setInnerContent(`${meta.name} &rarr;`, { html: true });
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
