'use strict';

/* ── Providers (11 Models) ──────────────────────────────────── */
const enc = s => encodeURIComponent(s);
const providers = [
  { id: 'chatgpt',    label: 'ChatGPT',    cls: 'pc-chatgpt',    color: 'var(--chatgpt)',    url: q => `https://chatgpt.com/?q=${enc(q)}` },
  { id: 'claude',     label: 'Claude',     cls: 'pc-claude',     color: 'var(--claude)',     url: q => `https://claude.ai/new?q=${enc(q)}` },
  { id: 'gemini',     label: 'Gemini',     cls: 'pc-gemini',     color: 'var(--gemini)',     url: q => `https://gemini.google.com/app?q=${enc(q)}` },
  { id: 'copilot',    label: 'Copilot',    cls: 'pc-copilot',    color: 'var(--copilot)',    url: q => `https://copilot.microsoft.com/?q=${enc(q)}` },
  { id: 'perplexity', label: 'Perplexity', cls: 'pc-perplexity', color: 'var(--perplexity)', url: q => `https://www.perplexity.ai/search?q=${enc(q)}` },
  { id: 'deepseek',   label: 'DeepSeek',   cls: 'pc-deepseek',   color: 'var(--deepseek)',   url: q => `https://chat.deepseek.com/?q=${enc(q)}` },
  { id: 'grok',       label: 'Grok',       cls: 'pc-grok',       color: 'var(--grok)',       url: q => `https://x.com/i/grok?text=${enc(q)}` },
  { id: 'lechat',     label: 'Le Chat',    cls: 'pc-lechat',     color: 'var(--lechat)',     url: q => `https://chat.mistral.ai/chat?q=${enc(q)}` },
  { id: 'qwen',       label: 'Qwen',       cls: 'pc-qwen',       color: 'var(--qwen)',       url: q => `https://chat.qwen.ai/?q=${enc(q)}` },
  { id: 'kimi',       label: 'Kimi',       cls: 'pc-kimi',       color: 'var(--kimi)',       url: q => `https://www.kimi.com/en?q=${enc(q)}` },
  { id: 'zai',        label: 'Z.ai',       cls: 'pc-zai',        color: 'var(--zai)',        url: q => `https://z.ai/chat?q=${enc(q)}` },
];

/* ── Safe Storage Fallback ──────────────────────────────────── */
const memStore = {};
function safeGet(k) {
  try { return localStorage.getItem(k) ?? memStore[k] ?? null; }
  catch { return memStore[k] ?? null; }
}
function safeSet(k, v) {
  memStore[k] = v;
  try { localStorage.setItem(k, v); } catch {}
}

/* ── Storage Helpers ────────────────────────────────────────── */
function getSaved() {
  try {
    const raw = safeGet('pr_library');
    if (!raw) return [];
    const list = JSON.parse(raw);
    if (!Array.isArray(list)) return [];
    return list.map((item, idx) => ({
      id: item.id || `s_${idx}_${Date.now()}`,
      title: item.title || item.name || (item.text || '').slice(0, 32) || 'Untitled Prompt',
      text: item.text || item.prompt || '',
      pinned: !!item.pinned,
      ts: item.ts || Date.now(),
    }));
  } catch {
    return [];
  }
}
function setSaved(list) { safeSet('pr_library', JSON.stringify(list)); }

function getHistory() {
  try {
    const raw = safeGet('pr_history');
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}
function setHistory(list) { safeSet('pr_history', JSON.stringify(list)); }

function logHistory(text, providerId) {
  if (!text) return;
  const history = getHistory();
  const existing = history.find(h => h.text.trim() === text.trim());
  if (existing) {
    existing.ts = Date.now();
    if (providerId && !existing.providers.includes(providerId)) {
      existing.providers.push(providerId);
    }
  } else {
    const title = text.split('\n')[0].slice(0, 42).trim() || 'Prompt';
    history.unshift({
      id: 'h_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      title: title + (text.length > 42 ? '...' : ''),
      text,
      ts: Date.now(),
      providers: providerId ? [providerId] : []
    });
  }
  setHistory(history.slice(0, 50));
  renderSidebar();
}

/* ── DOM & State ────────────────────────────────────────────── */
let activeItemId = null;
let searchQuery = '';
let currentLocale = (typeof LOCALES !== 'undefined' ? LOCALES.en : {});

function getPromptEl() { return document.getElementById('prompt'); }
function getPromptVal() { const el = getPromptEl(); return el ? el.value.trim() : ''; }

/* ── Toast ──────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

/* ── Prompt Actions ─────────────────────────────────────────── */
function copyPrompt() {
  const q = getPromptVal();
  if (!q) { showToast(currentLocale.toastNoCopy || 'Nothing to copy yet'); return; }
  navigator.clipboard.writeText(q).then(() => {
    showToast(currentLocale.copyBtnDone || '✓ Copied!');
    const btn = document.getElementById('copyBtn');
    if (btn) {
      btn.classList.add('copied');
      setTimeout(() => btn.classList.remove('copied'), 1500);
    }
  }).catch(() => {
    showToast(currentLocale.toastCopyFail || 'Copy failed — try manually');
  });
}

function savePrompt() {
  const q = getPromptVal();
  if (!q) { showToast(currentLocale.toastNoSave || 'Nothing to save'); return; }
  const saved = getSaved();
  if (saved.some(s => s.text.trim() === q.trim())) {
    showToast(currentLocale.toastDuplicate || 'Already in your library');
    return;
  }
  const title = q.split('\n')[0].slice(0, 38).trim() || 'Saved Prompt';
  const newItem = {
    id: 's_' + Date.now(),
    title: title + (q.length > 38 ? '...' : ''),
    text: q,
    pinned: false,
    ts: Date.now(),
  };
  saved.unshift(newItem);
  setSaved(saved);
  activeItemId = newItem.id;
  showToast(currentLocale.toastSaved || '✓ Saved');
  renderSidebar();
  updateActiveBadge(newItem.title);
}

function clearPrompt() {
  const el = getPromptEl();
  if (el) el.value = '';
  activeItemId = null;
  updateActiveBadge(null);
  updateCharCount();
  renderSidebar();
  if (el) el.focus();
}

function newPrompt() {
  clearPrompt();
  closeMobileSidebar();
}

function openProvider(p) {
  const q = getPromptVal();
  if (!q) { showToast(currentLocale.toastNoPrompt || 'Write a prompt first'); return; }
  logHistory(q, p.id);
  const w = window.open(p.url(q), '_blank', 'noopener,noreferrer');
  if (!w) showToast(currentLocale.toastPopup || 'Popup blocked — copy & paste instead');
}

/* ── Active Badge & Counter ─────────────────────────────────── */
function updateCharCount() {
  const el = getPromptEl();
  const counter = document.getElementById('charCount');
  if (!counter) return;
  const count = el ? el.value.length : 0;
  counter.textContent = `${count} characters`;
}

function updateActiveBadge(title) {
  const badge = document.getElementById('activeBadge');
  if (!badge) return;
  if (title) {
    badge.textContent = title;
    badge.classList.add('show');
  } else {
    badge.textContent = '';
    badge.classList.remove('show');
  }
}

/* ── Templates Helper (DRY) ─────────────────────────────────── */
function getTemplates() {
  const raw = currentLocale.templates || (typeof LOCALES !== 'undefined' ? LOCALES.en.templates : []);
  return raw.map((t, idx) => ({
    ...t,
    id: t.id || `t${idx + 1}`
  }));
}

/* ── Load Prompt Item ───────────────────────────────────────── */
function loadPromptById(id) {
  const tpl = getTemplates().find(t => t.id === id || t.label === id);
  if (tpl) {
    loadPrompt(tpl.id, tpl.text, tpl.label);
    return;
  }
  const saved = getSaved().find(s => s.id === id);
  if (saved) {
    loadPrompt(saved.id, saved.text, saved.title);
    return;
  }
  const hist = getHistory().find(h => h.id === id);
  if (hist) {
    loadPrompt(hist.id, hist.text, hist.title);
    return;
  }
}

function loadPrompt(id, text, title) {
  const el = getPromptEl();
  if (!el) return;
  el.value = text;
  activeItemId = id;
  updateCharCount();
  updateActiveBadge(title);
  renderSidebar();
  closeMobileSidebar();
  el.focus();
}

function togglePin(id) {
  const list = getSaved();
  const item = list.find(s => s.id === id);
  if (item) item.pinned = !item.pinned;
  setSaved(list);
  renderSidebar();
}

function deleteSaved(id) {
  setSaved(getSaved().filter(s => s.id !== id));
  if (activeItemId === id) updateActiveBadge(null);
  renderSidebar();
}

function clearHistory() {
  setHistory([]);
  renderSidebar();
  showToast(currentLocale.clearHistory || 'History cleared');
}

/* ── Sidebar Rendering ──────────────────────────────────────── */
function renderSidebar() {
  const q = (searchQuery || '').toLowerCase();
  const qList = document.getElementById('quickList');
  const sList = document.getElementById('savedList');
  const hList = document.getElementById('historyList');

  // 1. Quick Prompts
  const tpls = getTemplates();
  const filteredTpls = tpls.filter(t => (t.label || '').toLowerCase().includes(q) || (t.text || '').toLowerCase().includes(q));
  const qCount = document.getElementById('quickCount');
  if (qCount) qCount.textContent = tpls.length;

  if (qList) {
    qList.innerHTML = filteredTpls.map(t => `
      <button type="button" class="item-btn ${activeItemId === t.id ? 'active' : ''}" onclick="loadPromptById('${t.id}')">
        <div class="item-label-wrap">
          <span class="item-icon">&#9889;</span>
          <span class="item-title">${escapeHTML(t.label)}</span>
        </div>
      </button>
    `).join('');
  }

  // 2. Saved Prompts
  const saved = getSaved();
  saved.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.ts - a.ts);
  const filteredSaved = saved.filter(s => (s.title || '').toLowerCase().includes(q) || (s.text || '').toLowerCase().includes(q));
  const sCount = document.getElementById('savedCount');
  if (sCount) sCount.textContent = saved.length;

  if (sList) {
    if (!filteredSaved.length) {
      sList.innerHTML = `<div class="item-empty">${escapeHTML(currentLocale.noSaved || 'No saved prompts.')}</div>`;
    } else {
      sList.innerHTML = filteredSaved.map(s => `
        <div class="item-btn ${activeItemId === s.id ? 'active' : ''}" onclick="loadPromptById('${s.id}')">
          <div class="item-label-wrap">
            <span class="item-icon">${s.pinned ? '★' : '☆'}</span>
            <span class="item-title">${escapeHTML(s.title)}</span>
          </div>
          <div class="item-actions" onclick="event.stopPropagation()">
            <button type="button" class="action-sub-btn" title="${s.pinned ? 'Unpin' : 'Pin'}" onclick="togglePin('${s.id}')">${s.pinned ? '★' : '☆'}</button>
            <button type="button" class="action-sub-btn delete" title="Delete" onclick="deleteSaved('${s.id}')">×</button>
          </div>
        </div>
      `).join('');
    }
  }

  // 3. History
  const history = getHistory();
  const filteredHist = history.filter(h => (h.title || '').toLowerCase().includes(q) || (h.text || '').toLowerCase().includes(q));
  const hCount = document.getElementById('historyCount');
  if (hCount) hCount.textContent = history.length;

  if (hList) {
    if (!filteredHist.length) {
      hList.innerHTML = `<div class="item-empty">${escapeHTML(currentLocale.noHistory || 'No history yet.')}</div>`;
    } else {
      hList.innerHTML = filteredHist.map(h => {
        const provDots = (h.providers || []).map(pid => {
          const p = providers.find(x => x.id === pid);
          return p ? `<span class="prov-badge" style="background:${p.color}" title="${p.label}"></span>` : '';
        }).join('');

        return `
          <div class="item-btn ${activeItemId === h.id ? 'active' : ''}" onclick="loadPromptById('${h.id}')">
            <div class="item-label-wrap">
              <span class="item-icon">&#8635;</span>
              <span class="item-title">${escapeHTML(h.title)}</span>
            </div>
            <div>${provDots}</div>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Update Library links for active language
  const detectedLang = window.__LANG__ || (location.pathname.match(/^\/([a-z]{2})/)?.[1]) || 'en';
  const prefix = detectedLang === 'en' ? '' : `/${detectedLang}`;
  const validLibs = ['dev', 'writing', 'marketing', 'job', 'startup', 'data', 'design', 'student', 'productivity', 'legal', 'sales'];

  document.querySelectorAll('#librariesList a.item-btn, #topbarLibMenu a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const cleanLib = href.replace(/^\/[a-z]{2}\//, '/').replace(/^\//, '');
    if (validLibs.includes(cleanLib)) {
      a.setAttribute('href', `${prefix}/${cleanLib}`);
    }
  });
}

function filterSidebar(val) {
  searchQuery = val || '';
  renderSidebar();
}

function escapeHTML(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ── Accordion Sections ─────────────────────────────────────── */
function toggleSection(sec) {
  let listId, chevronId;
  if (sec === 'quickSection') { listId = 'quickList'; chevronId = 'quickChevron'; }
  else if (sec === 'librariesSection') { listId = 'librariesList'; chevronId = 'librariesChevron'; }
  else if (sec === 'savedSection') { listId = 'savedList'; chevronId = 'savedChevron'; }
  else if (sec === 'historySection') { listId = 'historyList'; chevronId = 'historyChevron'; }

  const el = document.getElementById(listId);
  const ch = document.getElementById(chevronId);
  if (!el) return;
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? '' : 'none';
  if (ch) {
    ch.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(-90deg)';
  }
}

/* ── Sidebar Shell Toggle ───────────────────────────────────── */
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('backdrop');
  if (!sb) return;
  const isMobile = window.innerWidth <= 900;
  if (isMobile) {
    sb.classList.toggle('mobile-open');
    if (bd) bd.classList.toggle('show');
  } else {
    sb.classList.toggle('collapsed');
    safeSet('pr_sidebar_state', sb.classList.contains('collapsed') ? 'collapsed' : 'open');
  }
}

function closeMobileSidebar() {
  const sb = document.getElementById('sidebar');
  const bd = document.getElementById('backdrop');
  if (sb) sb.classList.remove('mobile-open');
  if (bd) bd.classList.remove('show');
}

/* ── Topbar Libraries Dropdown ──────────────────────────────── */
function toggleLibrariesDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('topbarNavDropdown');
  if (dd) dd.classList.toggle('open');
}
document.addEventListener('click', () => {
  const dd = document.getElementById('topbarNavDropdown');
  if (dd) dd.classList.remove('open');
});

/* ── Providers Grid Rendering ───────────────────────────────── */
function renderProvidersGrid(targetEl) {
  const grid = targetEl || document.getElementById('providers');
  if (!grid) return;
  grid.innerHTML = '';
  providers.forEach(p => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `p-btn ${p.cls}`;
    btn.setAttribute('aria-label', `Open prompt in ${p.label}`);
    btn.onclick = () => openProvider(p);

    btn.innerHTML = `
      <div class="p-left">
        <span class="dot" style="background:${p.color}"></span>
        <span>${p.label}</span>
      </div>
      <span class="p-arrow">&nearr;</span>
    `;
    li.appendChild(btn);
    grid.appendChild(li);
  });
}

/* ── Footer SEO Description ─────────────────────────────────── */
function renderFooterDesc(locale) {
  const descEl = document.getElementById('footer-desc');
  if (!descEl) return;
  descEl.innerHTML =
    `<strong>Prompt Router</strong> ${locale.footerDescIntro || ''} ` +
    `<a href="https://chatgpt.com" rel="noopener noreferrer" target="_blank">ChatGPT</a>, ` +
    `<a href="https://claude.ai" rel="noopener noreferrer" target="_blank">Claude</a>, ` +
    `<a href="https://gemini.google.com" rel="noopener noreferrer" target="_blank">Gemini</a>, ` +
    `<a href="https://copilot.microsoft.com" rel="noopener noreferrer" target="_blank">Copilot</a>, ` +
    `<a href="https://www.perplexity.ai" rel="noopener noreferrer" target="_blank">Perplexity</a>, ` +
    `<a href="https://chat.deepseek.com" rel="noopener noreferrer" target="_blank">DeepSeek</a>, ` +
    `<a href="https://x.com/i/grok" rel="noopener noreferrer" target="_blank">Grok</a>, ` +
    `<a href="https://chat.mistral.ai" rel="noopener noreferrer" target="_blank">Le Chat</a>, ` +
    `<a href="https://chat.qwen.ai" rel="noopener noreferrer" target="_blank">Qwen</a>, ` +
    `<a href="https://www.kimi.com" rel="noopener noreferrer" target="_blank">Kimi</a>, and ` +
    `<a href="https://z.ai" rel="noopener noreferrer" target="_blank">Z.ai</a>. ` +
    `${locale.footerDescOutro || ''}`;
}

/* ── Theme Toggle ───────────────────────────────────────────── */
function toggleTheme() {
  const curr = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = curr === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  safeSet('pr_theme', next);
}

/* ── Language Handling ───────────────────────────────────────── */
function setLanguage(lang) {
  if (typeof LOCALES === 'undefined' || !LOCALES[lang]) return;
  currentLocale = LOCALES[lang];
  try { localStorage.setItem('pr_lang', lang); } catch {}
  document.documentElement.lang = lang;

  const langSel = document.getElementById('langSelect');
  if (langSel && langSel.value !== lang) langSel.value = lang;

  const tagline = document.getElementById('tagline');
  if (tagline && currentLocale.taglineHTML) tagline.innerHTML = currentLocale.taglineHTML;

  const heroSub = document.getElementById('hero-sub');
  if (heroSub && currentLocale.heroSub) heroSub.innerHTML = currentLocale.heroSub;

  const promptEl = getPromptEl();
  if (promptEl && currentLocale.placeholder) promptEl.placeholder = currentLocale.placeholder;

  const copyLbl = document.getElementById('lblCopyBtn');
  if (copyLbl && currentLocale.copyBtn) copyLbl.textContent = currentLocale.copyBtn;

  const saveLbl = document.getElementById('lblSaveBtn');
  if (saveLbl && currentLocale.saveBtn) saveLbl.textContent = currentLocale.saveBtn;

  const clearLbl = document.getElementById('lblClearBtn');
  if (clearLbl && currentLocale.clearBtn) clearLbl.textContent = currentLocale.clearBtn;

  const qLbl = document.getElementById('lblQuickPrompts');
  if (qLbl && currentLocale.quickPrompts) qLbl.textContent = currentLocale.quickPrompts;

  const sLbl = document.getElementById('lblSavedPrompts');
  if (sLbl && currentLocale.savedPrompts) sLbl.textContent = currentLocale.savedPrompts;

  const hLbl = document.getElementById('lblHistory');
  if (hLbl && currentLocale.history) hLbl.textContent = currentLocale.history;

  const sbLbl = document.getElementById('lblToggleSidebar');
  if (sbLbl && currentLocale.sidebar) sbLbl.textContent = currentLocale.sidebar;

  const newLbl = document.getElementById('lblNewPrompt');
  if (newLbl && currentLocale.newPrompt) newLbl.textContent = currentLocale.newPrompt;

  const searchInput = document.getElementById('sidebarSearch');
  if (searchInput && currentLocale.search) searchInput.placeholder = currentLocale.search;

  renderSidebar();
  renderFooterDesc(currentLocale);

  try {
    const currentPath = window.location.pathname;
    const validLibs = ['dev', 'writing', 'marketing', 'job', 'startup', 'data', 'design', 'student', 'productivity', 'legal', 'sales'];
    const libMatch = currentPath.match(/^(?:\/([a-z]{2}))?\/([a-z-]+)$/);

    let targetPath;
    if (libMatch && validLibs.includes(libMatch[2])) {
      const lib = libMatch[2];
      targetPath = lang === 'en' ? `/${lib}` : `/${lang}/${lib}`;
    } else {
      targetPath = lang === 'en' ? '/' : `/${lang}`;
    }

    if (window.location.pathname !== targetPath && window.location.protocol.startsWith('http')) {
      window.location.href = targetPath;
      return;
    }
  } catch {}
}

/* ── Initialization ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Theme restore
  const savedTheme = safeGet('pr_theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

  // Language detection
  const detectedLang = window.__LANG__ || (location.pathname.match(/^\/([a-z]{2})/)?.[1]) || 'en';
  currentLocale = (typeof LOCALES !== 'undefined' && LOCALES[detectedLang]) ? LOCALES[detectedLang] : (typeof LOCALES !== 'undefined' ? LOCALES.en : {});

  // Wire up language select if present
  const langSel = document.getElementById('langSelect');
  if (langSel) {
    langSel.value = detectedLang;
    langSel.addEventListener('change', e => {
      setLanguage(e.target.value);
    });
  }

  // Restore desktop collapsed sidebar
  const sb = document.getElementById('sidebar');
  if (sb && safeGet('pr_sidebar_state') === 'collapsed' && window.innerWidth > 900) {
    sb.classList.add('collapsed');
  }

  // Textarea listeners
  const promptEl = getPromptEl();
  if (promptEl) {
    promptEl.addEventListener('input', () => {
      updateCharCount();
      if (!promptEl.value) updateActiveBadge(null);
    });
  }

  // Render components
  renderProvidersGrid();
  renderSidebar();
  renderFooterDesc(currentLocale);
  updateCharCount();

  // Keyboard Shortcuts
  document.addEventListener('keydown', e => {
    const inTextarea = document.activeElement === promptEl;
    if (e.key === 'Escape') {
      if (inTextarea) { clearPrompt(); }
      else { closeMobileSidebar(); }
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      toggleSidebar();
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      savePrompt();
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'c' && inTextarea && !window.getSelection()?.toString()) {
      e.preventDefault();
      copyPrompt();
      return;
    }
  });
});

/* ── Service Worker Registration ────────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

/* ── Global Exports ─────────────────────────────────────────── */
window.copyPrompt = copyPrompt;
window.savePrompt = savePrompt;
window.clearPrompt = clearPrompt;
window.newPrompt = newPrompt;
window.toggleSidebar = toggleSidebar;
window.closeMobileSidebar = closeMobileSidebar;
window.toggleLibrariesDropdown = toggleLibrariesDropdown;
window.toggleSection = toggleSection;
window.togglePin = togglePin;
window.deleteSaved = deleteSaved;
window.clearHistory = clearHistory;
window.loadPromptById = loadPromptById;
window.providers = providers;
window.renderProviders = renderProvidersGrid;
window.renderProvidersGrid = renderProvidersGrid;
window.getTemplates = getTemplates;
window.getSaved = getSaved;
window.getHistory = getHistory;
window.openProvider = openProvider;
window.filterSidebar = filterSidebar;
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;

