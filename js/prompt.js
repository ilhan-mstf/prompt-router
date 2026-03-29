'use strict';

/* ── Provider definitions ───────────────────────────────────── */
const enc = s => encodeURIComponent(s);
const providers = [
  { id: 'chatgpt',    label: 'ChatGPT',    cls: 'pc-chatgpt',    url: q => `https://chatgpt.com/?q=${enc(q)}` },
  { id: 'claude',     label: 'Claude',      cls: 'pc-claude',     url: q => `https://claude.ai/new?q=${enc(q)}` },
  { id: 'gemini',     label: 'Gemini',      cls: 'pc-gemini',     url: q => `https://gemini.google.com/app?q=${enc(q)}` },
  { id: 'copilot',    label: 'Copilot',     cls: 'pc-copilot',    url: q => `https://copilot.microsoft.com/?q=${enc(q)}` },
  { id: 'perplexity', label: 'Perplexity',  cls: 'pc-perplexity', url: q => `https://www.perplexity.ai/search?q=${enc(q)}` },
  { id: 'lechat',     label: 'Le Chat',     cls: 'pc-lechat',     url: q => `https://chat.mistral.ai/chat?q=${enc(q)}` },
  { id: 'grok',       label: 'Grok',        cls: 'pc-grok',       url: q => `https://x.com/i/grok?text=${enc(q)}` },
  { id: 'deepseek',   label: 'DeepSeek',    cls: 'pc-deepseek',   url: q => `https://chat.deepseek.com/?q=${enc(q)}` },
];

/* ── Core functions ─────────────────────────────────────────── */
function getPrompt() { return document.getElementById('prompt').value.trim(); }

function openProvider(p) {
  const q = getPrompt();
  if (!q) { showToast(window.__TOAST_NO_PROMPT || 'Write a prompt first'); return; }
  const w = window.open(p.url(q), '_blank', 'noopener,noreferrer');
  if (!w) showToast(window.__TOAST_POPUP || 'Popup blocked \u2014 copy & paste instead');
}

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

/* ── Provider rendering ─────────────────────────────────────── */
function renderProviders(container, ariaPrefix) {
  ariaPrefix = ariaPrefix || 'Open in';
  providers.forEach(p => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = `p-btn ${p.cls}`;
    btn.setAttribute('aria-label', `${ariaPrefix} ${p.label}`);
    btn.innerHTML = `<span class="p-dot" aria-hidden="true"></span><span class="p-name">${p.label}</span><span class="p-arrow" aria-hidden="true">&nearr;</span>`;
    btn.addEventListener('click', () => openProvider(p));
    li.appendChild(btn); container.appendChild(li);
  });
}

/* ── Service Worker ─────────────────────────────────────────── */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
