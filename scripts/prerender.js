#!/usr/bin/env node

/**
 * scripts/prerender.js
 * Pre-renders categories, prompt cards, providers, and quick templates
 * into static HTML files while preserving container elements for Edge SSR.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

function escHtml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const QUICK_ITEMS = [
  'Summarize', 'Explain it', 'Improve text', 'Brainstorm', 'Compare',
  'Write email', 'Fix my code', 'Make a plan', 'Pros & cons', 'Ask questions'
];

let quickHtml = '\n';
QUICK_ITEMS.forEach((label, idx) => {
  quickHtml += `  <button type="button" class="item-btn" data-tid="t_${idx}"><span class="item-title">${escHtml(label)}</span><span class="p-arrow">&nearr;</span></button>\n`;
});

const PROVIDERS = [
  { id: 'chatgpt', name: 'ChatGPT' },
  { id: 'claude', name: 'Claude' },
  { id: 'gemini', name: 'Gemini' },
  { id: 'copilot', name: 'Copilot' },
  { id: 'perplexity', name: 'Perplexity' },
  { id: 'deepseek', name: 'DeepSeek' },
  { id: 'grok', name: 'Grok' },
  { id: 'lechat', name: 'Le Chat' },
  { id: 'qwen', name: 'Qwen' },
  { id: 'kimi', name: 'Kimi' },
  { id: 'zai', name: 'Z.ai' },
  { id: 'meta', name: 'Meta AI' },
];

let provHtml = '\n';
PROVIDERS.forEach(p => {
  provHtml += `  <li><button type="button" class="p-btn pc-${p.id}" aria-label="Open prompt in ${p.name}"><div class="p-left"><span class="dot" style="background:var(--${p.id})"></span><span>${p.name}</span></div><span class="p-arrow">&nearr;</span></button></li>\n`;
});

// 1. Update index.html
const indexPath = path.join(ROOT, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

if (indexHtml.includes('<div class="item-list" id="quickList"></div>')) {
  indexHtml = indexHtml.replace(
    '<div class="item-list" id="quickList"></div>',
    () => `<div class="item-list" id="quickList">${quickHtml}</div>`
  );
}

if (indexHtml.includes('<ul class="providers" id="providers" aria-labelledby="lbl-providers"></ul>')) {
  indexHtml = indexHtml.replace(
    '<ul class="providers" id="providers" aria-labelledby="lbl-providers"></ul>',
    () => `<ul class="providers" id="providers" aria-labelledby="lbl-providers">${provHtml}</ul>`
  );
}
fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('✓ index.html pre-rendered');

// 2. Update all 11 library files
const libs = ['dev', 'writing', 'marketing', 'job', 'startup', 'data', 'design', 'student', 'productivity', 'legal', 'sales'];

for (const lib of libs) {
  const filePath = path.join(ROOT, `${lib}.html`);
  let html = fs.readFileSync(filePath, 'utf8');

  const match = html.match(/const\s+([A-Z_]+PROMPTS)\s*=\s*(\[\s*\{[\s\S]*?\n\]);/);
  if (!match) throw new Error(`Prompt array not found in ${lib}.html`);

  const constName = match[1];
  const groups = eval(match[2]);

  let catsHtml = '\n<button type="button" class="cat active" aria-pressed="true">All</button>';
  for (const g of groups) {
    catsHtml += `\n<button type="button" class="cat" aria-pressed="false">${escHtml(g.cat)}</button>`;
  }
  catsHtml += '\n';

  let cardsHtml = '\n';
  groups.forEach((group, idx) => {
    const marginTop = idx === 0 ? '0' : '16px';
    cardsHtml += `<span class="lbl-heading" style="margin-top: ${marginTop}; display: block;">${escHtml(group.cat)}</span>\n`;
    group.prompts.forEach(p => {
      cardsHtml += `<button type="button" class="prompt-card" aria-pressed="false"><div class="prompt-card-title">${escHtml(p.title)}</div><div class="prompt-card-preview">${escHtml(p.text)}</div></button>\n`;
    });
  });

  // Pre-render quickList if empty
  if (html.includes('<div class="item-list" id="quickList"></div>')) {
    html = html.replace(
      '<div class="item-list" id="quickList"></div>',
      () => `<div class="item-list" id="quickList">${quickHtml}</div>`
    );
  }

  // Pre-render cats if empty
  if (html.includes('<div class="cats" id="cats" role="group" aria-labelledby="lbl-cats"></div>')) {
    html = html.replace(
      '<div class="cats" id="cats" role="group" aria-labelledby="lbl-cats"></div>',
      () => `<div class="cats" id="cats" role="group" aria-labelledby="lbl-cats">${catsHtml}</div>`
    );
  }

  // Pre-render prompt-cards if empty
  if (html.includes('<div class="prompt-cards" id="prompt-cards"></div>')) {
    html = html.replace(
      '<div class="prompt-cards" id="prompt-cards"></div>',
      () => `<div class="prompt-cards" id="prompt-cards" role="region" aria-live="polite">${cardsHtml}</div>`
    );
  }

  // Ensure renderCats hydration uses CURRENT_PROMPTS
  const catsTarget = `const cats = ['All', ...${constName}.map`;
  if (html.includes(catsTarget)) {
    html = html.replace(
      catsTarget,
      () => `const CURRENT_PROMPTS = (typeof window !== 'undefined' && window.__PROMPTS__) || ${constName};\n  const cats = ['All', ...CURRENT_PROMPTS.map`
    );
  }

  // Ensure renderCards hydration uses CURRENT_PROMPTS
  const groupsTarget = `const groups = activeCat === 'All' ? ${constName} : ${constName}.filter`;
  if (html.includes(groupsTarget)) {
    html = html.replace(
      groupsTarget,
      () => `const CURRENT_PROMPTS = (typeof window !== 'undefined' && window.__PROMPTS__) || ${constName};\n  const groups = activeCat === 'All' ? CURRENT_PROMPTS : CURRENT_PROMPTS.filter`
    );
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ ${lib}.html pre-rendered`);
}

console.log('🎉 All files pre-rendered successfully.');
