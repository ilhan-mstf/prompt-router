#!/usr/bin/env node

/**
 * scripts/generate-seo.js — Automated SEO & LLM Manifest Generator
 *
 * 1. Generates sitemap.xml dynamically from current codebase routes and git lastmod.
 * 2. Generates llms.txt adhering to the llmstxt.org specification.
 * 3. Generates llms-full.txt extracting all prompts dynamically across all 11 libraries.
 * 4. Ensures 100% clean UTF-8 encoding with zero mojibake.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const BASE_URL = 'https://prompt-router.pages.dev';

// Import locales and metadata
const libLocalesModule = await import('file://' + path.join(ROOT, 'js/lib-locales.js'));
const { VALID_LIBS, SUPPORTED_LANGS } = libLocalesModule;

// Load client locales for quick templates
const localesRaw = fs.readFileSync(path.join(ROOT, 'js/locales.js'), 'utf-8');
const LOCALES = eval(localesRaw.replace(/'use strict';/, '') + '\n;LOCALES;');

const LIB_DISPLAY_TITLES = {
  dev: 'Dev Prompts',
  writing: 'Writing Prompts',
  marketing: 'Marketing Prompts',
  data: 'Data Prompts',
  startup: 'Startup Prompts',
  design: 'Design Prompts',
  job: 'Job Search Prompts',
  productivity: 'Productivity Prompts',
  legal: 'Legal Prompts',
  sales: 'Sales Prompts',
  student: 'Student Prompts',
};

const LIB_DESCRIPTIONS = {
  dev: '30+ curated prompts for debugging, code review, refactoring, testing, DevOps, and system architecture.',
  writing: 'Prompts for essay drafting, copywriting, tone adjustment, storytelling, and editing.',
  marketing: 'Prompts for SEO strategy, ad copy, campaign ideas, email newsletters, and content calendars.',
  data: 'SQL generation, Pandas data analysis, statistics interpretation, and visualization.',
  startup: 'Pitch deck drafting, competitor analysis, business model validation, and GTM strategy.',
  design: 'UX research, UI design critique, user personas, wireframe specifications, and accessibility checks.',
  job: 'Resume optimization, cover letter tailoring, mock interview questions, and salary negotiation.',
  productivity: 'Time management, meeting summaries, task prioritization, and daily workflows.',
  legal: 'Contract analysis, clause simplification, NDAs, and compliance guidelines.',
  sales: 'Cold outreach, discovery calls, objection handling, and proposal generation.',
  student: 'Study schedules, concept explanations, flashcard generation, and exam prep.',
};

function getGitDate(filePath, fallbackDate) {
  try {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
    if (!fs.existsSync(fullPath)) return fallbackDate;
    const dateStr = execSync(`git log -1 --format="%as" -- "${fullPath}"`, {
      cwd: ROOT,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore']
    }).trim();
    return dateStr || fallbackDate;
  } catch {
    return fallbackDate;
  }
}

export function generateSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const homeDate = getGitDate('index.html', today);
  const nonEnLangs = SUPPORTED_LANGS.filter(l => l !== 'en');

  const urls = [];

  // 1. English Homepage
  urls.push({
    loc: `${BASE_URL}/`,
    lastmod: homeDate,
    changefreq: 'weekly',
    priority: '1.0'
  });

  // 2. Localized Homepages
  for (const lang of nonEnLangs) {
    urls.push({
      loc: `${BASE_URL}/${lang}`,
      lastmod: homeDate,
      changefreq: 'weekly',
      priority: '0.9'
    });
  }

  // 3. English Prompt Libraries
  for (const lib of VALID_LIBS) {
    const libDate = getGitDate(`${lib}.html`, homeDate);
    urls.push({
      loc: `${BASE_URL}/${lib}`,
      lastmod: libDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  }

  // 4. Blog Index
  const blogIndexDate = getGitDate('blog.html', homeDate);
  urls.push({
    loc: `${BASE_URL}/blog`,
    lastmod: blogIndexDate,
    changefreq: 'weekly',
    priority: '0.8'
  });

  // 5. Blog Posts
  const blogFiles = fs.readdirSync(ROOT)
    .filter(f => f.startsWith('blog-') && f.endsWith('.html'))
    .sort();

  for (const file of blogFiles) {
    const slug = file.replace('.html', '');
    const postDate = getGitDate(file, homeDate);
    urls.push({
      loc: `${BASE_URL}/${slug}`,
      lastmod: postDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  }

  // 6. Localized Libraries (11 * 6 = 66)
  for (const lang of nonEnLangs) {
    for (const lib of VALID_LIBS) {
      const libDate = getGitDate(`${lib}.html`, homeDate);
      urls.push({
        loc: `${BASE_URL}/${lang}/${lib}`,
        lastmod: libDate,
        changefreq: 'weekly',
        priority: '0.8'
      });
    }
  }

  // Format XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const u of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${u.loc}</loc>\n`;
    xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
    xml += `    <priority>${u.priority}</priority>\n`;
    xml += '  </url>\n';
  }
  xml += '</urlset>\n';

  const sitemapPath = path.join(ROOT, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf-8');
  console.log(`  ✓ Generated sitemap.xml (${urls.length} URLs)`);
  return urls;
}

export function generateLlmsTxt() {
  let txt = '# Prompt Router\n\n';
  txt += '> Write one prompt. Open every AI. Compare responses side-by-side across ChatGPT, Claude, Gemini, Copilot, Perplexity, DeepSeek, Grok, Le Chat, Qwen, Kimi, and Z.ai.\n\n';
  txt += 'Prompt Router is a free, privacy-first web utility for prompt engineers, developers, writers, and AI power users. It allows users to compose a prompt once and immediately launch it in 11 major LLMs pre-filled via direct URL parameter routing. No account, no login, and no backend data storage.\n\n';
  txt += `- [Website](${BASE_URL}): Free, privacy-first multi-LLM prompt router and side-by-side comparator.\n`;
  txt += `- [Full Documentation & Prompt Dump](${BASE_URL}/llms-full.txt): Complete prompt collection across 11 libraries, 10 core quick templates, edge routing syntax, and API endpoints.\n`;
  txt += `- [Repository](https://github.com/ilhan-mstf/prompt-router): Open-source codebase on GitHub.\n\n`;

  txt += '## AI Provider URL Routing Syntax\n\n';
  txt += 'Prompt Router routes prefilled prompts to LLM chat interfaces using standard URL query parameters:\n\n';
  txt += '- **ChatGPT (OpenAI)**: `https://chatgpt.com/?q={encoded_prompt}`\n';
  txt += '- **Claude (Anthropic)**: `https://claude.ai/new?q={encoded_prompt}`\n';
  txt += '- **Gemini (Google)**: `https://gemini.google.com/app?q={encoded_prompt}`\n';
  txt += '- **Microsoft Copilot**: `https://copilot.microsoft.com/?q={encoded_prompt}`\n';
  txt += '- **Perplexity AI**: `https://www.perplexity.ai/search?q={encoded_prompt}`\n';
  txt += '- **DeepSeek**: `https://chat.deepseek.com/?q={encoded_prompt}`\n';
  txt += '- **Grok (xAI)**: `https://x.com/i/grok?text={encoded_prompt}`\n';
  txt += '- **Mistral Le Chat**: `https://chat.mistral.ai/chat?q={encoded_prompt}`\n';
  txt += '- **Qwen (Alibaba)**: `https://chat.qwen.ai/?q={encoded_prompt}`\n';
  txt += '- **Kimi (Moonshot)**: `https://www.kimi.com/en?q={encoded_prompt}`\n';
  txt += '- **Z.ai (Zhipu)**: `https://z.ai/chat?q={encoded_prompt}`\n\n';

  txt += '## Prompt Libraries\n\n';
  txt += 'Curated battle-tested prompt collections across 11 domains:\n\n';
  for (const lib of VALID_LIBS) {
    const title = LIB_DISPLAY_TITLES[lib] || `${lib.charAt(0).toUpperCase() + lib.slice(1)} Prompts`;
    const desc = LIB_DESCRIPTIONS[lib] || 'Curated prompts.';
    txt += `- [${title}](${BASE_URL}/${lib}): ${desc}\n`;
  }

  txt += '\n## Core Templates\n\n';
  const CORE_TEMPLATES_SUMMARY = [
    { label: 'Summarize', desc: 'Summarize text into 3–5 clear bullet points focusing on key takeaways.' },
    { label: 'Explain it', desc: 'Explain complex concepts in simple terms with plain language and analogies.' },
    { label: 'Improve text', desc: 'Rewrite copy for clarity, engagement, and conciseness while preserving meaning.' },
    { label: 'Brainstorm', desc: 'Generate 10 diverse and unexpected ideas for a given goal.' },
    { label: 'Compare', desc: 'Side-by-side pros, cons, and recommendations for two options.' },
    { label: 'Write email', desc: 'Professional email draft tailored by tone and desired action.' },
    { label: 'Fix my code', desc: 'Diagnose bug, provide explanation, and output corrected code snippet.' },
    { label: 'Make a plan', desc: 'Step-by-step implementation plan broken into realistic phases.' },
    { label: 'Pros & cons', desc: 'Comprehensive evaluation of a decision including edge cases.' },
    { label: 'Ask questions', desc: 'Uncover the 10 most critical questions to understand a problem deeply.' },
  ];
  for (const tpl of CORE_TEMPLATES_SUMMARY) {
    txt += `- **${tpl.label}**: ${tpl.desc}\n`;
  }

  txt += '\n## Multi-Language Routes\n\n';
  txt += 'Prompt Router features server-side edge rendering for 7 languages across the homepage and all 11 prompt libraries:\n\n';
  txt += `- English (Default): \`${BASE_URL}/\` and \`${BASE_URL}/{library}\`\n`;
  txt += `- Spanish (Español): \`${BASE_URL}/es\` and \`${BASE_URL}/es/{library}\`\n`;
  txt += `- Turkish (Türkçe): \`${BASE_URL}/tr\` and \`${BASE_URL}/tr/{library}\`\n`;
  txt += `- French (Français): \`${BASE_URL}/fr\` and \`${BASE_URL}/fr/{library}\`\n`;
  txt += `- German (Deutsch): \`${BASE_URL}/de\` and \`${BASE_URL}/de/{library}\`\n`;
  txt += `- Italian (Italiano): \`${BASE_URL}/it\` and \`${BASE_URL}/it/{library}\`\n`;
  txt += `- Portuguese (Português): \`${BASE_URL}/pt\` and \`${BASE_URL}/pt/{library}\`\n\n`;

  txt += 'Example localized library endpoints:\n';
  txt += `- \`${BASE_URL}/tr/dev\` (Yazılımcılar için En İyi Yapay Zeka Promptları)\n`;
  txt += `- \`${BASE_URL}/es/writing\` (Mejores Prompts de IA para Redacción)\n`;
  txt += `- \`${BASE_URL}/de/marketing\` (Beste KI-Prompts für Marketing & Growth)\n\n`;

  txt += '## Guides & Blog Articles\n\n';
  txt += `- [Introducing the New Prompt Router](${BASE_URL}/blog-new-look): Major redesign with collapsible sidebar, clean canvas, and 11 AI models.\n`;
  txt += `- [Prompt Engineering Blog](${BASE_URL}/blog): Index of all 16 prompt engineering articles, model comparisons, and cost optimization guides.\n`;
  txt += `- [Budget-Friendly Prompt Routing](${BASE_URL}/blog-budget-prompt-routing): How top AI companies cut inference costs by up to 85% using model cascades and small models.\n`;
  txt += `- [Compare AI Models](${BASE_URL}/blog-compare-ai): Comparative breakdown of LLMs for specialized tasks.\n`;
  txt += `- [Prompt Router Overview](${BASE_URL}/blog-prompt-router): Benefits of multi-LLM workflows.\n`;
  txt += `- [Reduce AI Costs](${BASE_URL}/blog-reduce-ai-costs): How to optimize prompts to reduce API and subscription costs.\n`;
  txt += `- [Dev Prompts Guide](${BASE_URL}/blog-dev-prompts): Walkthrough of coding prompts.\n`;
  txt += `- [Writing Prompts Guide](${BASE_URL}/blog-writing-prompts): Walkthrough of writing prompts.\n`;
  txt += `- [Marketing Prompts Guide](${BASE_URL}/blog-marketing-prompts): Marketing prompt recipes.\n`;
  txt += `- [Data Prompts Guide](${BASE_URL}/blog-data-prompts): Recipes for SQL generation, Python analysis, and data storytelling.\n`;
  txt += `- [Design Prompts Guide](${BASE_URL}/blog-design-prompts): UX & product design prompt recipes.\n`;
  txt += `- [Startup Prompts Guide](${BASE_URL}/blog-startup-prompts): Founder & startup prompt recipes.\n`;
  txt += `- [Job Search Prompts Guide](${BASE_URL}/blog-job-prompts): Career & job search prompt recipes.\n`;
  txt += `- [Productivity Prompts Guide](${BASE_URL}/blog-productivity-prompts): Productivity & focus prompt recipes.\n`;
  txt += `- [Legal Prompts Guide](${BASE_URL}/blog-legal-prompts): Legal prompt engineering recipes.\n`;
  txt += `- [Sales Prompts Guide](${BASE_URL}/blog-sales-prompts): B2B sales prompt engineering recipes.\n`;
  txt += `- [Student Prompts Guide](${BASE_URL}/blog-student-prompts): Academic prompt engineering recipes.\n`;

  const llmsPath = path.join(ROOT, 'llms.txt');
  fs.writeFileSync(llmsPath, txt, 'utf-8');
  console.log('  ✓ Generated llms.txt');
  return txt;
}

export function generateLlmsFullTxt() {
  let txt = '# Prompt Router — Full Documentation & Prompt Repository\n\n';
  txt += '> Write one prompt. Open every AI. Pre-filled multi-LLM prompt comparator & library.\n\n';
  txt += `Website: ${BASE_URL}\n`;
  txt += 'Repository: https://github.com/ilhan-mstf/prompt-router\n\n';

  txt += '## AI Provider Routing URLs\n';
  txt += 'Use these URL patterns to send pre-filled prompts to AI providers:\n\n';
  txt += '- **ChatGPT (OpenAI)**: `https://chatgpt.com/?q={encoded_prompt}`\n';
  txt += '- **Claude (Anthropic)**: `https://claude.ai/new?q={encoded_prompt}`\n';
  txt += '- **Gemini (Google)**: `https://gemini.google.com/app?q={encoded_prompt}`\n';
  txt += '- **Microsoft Copilot**: `https://copilot.microsoft.com/?q={encoded_prompt}`\n';
  txt += '- **Perplexity AI**: `https://www.perplexity.ai/search?q={encoded_prompt}`\n';
  txt += '- **DeepSeek**: `https://chat.deepseek.com/?q={encoded_prompt}`\n';
  txt += '- **Grok (xAI)**: `https://x.com/i/grok?text={encoded_prompt}`\n';
  txt += '- **Mistral Le Chat**: `https://chat.mistral.ai/chat?q={encoded_prompt}`\n';
  txt += '- **Qwen (Alibaba)**: `https://chat.qwen.ai/?q={encoded_prompt}`\n';
  txt += '- **Kimi (Moonshot)**: `https://www.kimi.com/en?q={encoded_prompt}`\n';
  txt += '- **Z.ai (Zhipu)**: `https://z.ai/chat?q={encoded_prompt}`\n\n';

  txt += '## Multi-Language Subdirectories\n';
  txt += 'Prompt Router supports server-side edge rendering (SSR) for 7 languages across the homepage and all 11 prompt libraries:\n';
  txt += `- English (Default): \`${BASE_URL}/\` and \`${BASE_URL}/{library}\`\n`;
  txt += `- Spanish: \`${BASE_URL}/es\` and \`${BASE_URL}/es/{library}\`\n`;
  txt += `- Turkish: \`${BASE_URL}/tr\` and \`${BASE_URL}/tr/{library}\`\n`;
  txt += `- French: \`${BASE_URL}/fr\` and \`${BASE_URL}/fr/{library}\`\n`;
  txt += `- German: \`${BASE_URL}/de\` and \`${BASE_URL}/de/{library}\`\n`;
  txt += `- Italian: \`${BASE_URL}/it\` and \`${BASE_URL}/it/{library}\`\n`;
  txt += `- Portuguese: \`${BASE_URL}/pt\` and \`${BASE_URL}/pt/{library}\`\n\n`;

  txt += '---\n';
  txt += '## Core Quick Templates\n';
  txt += 'Ten standard templates available directly from the workbench sidebar:\n\n';

  for (const tpl of LOCALES.en.templates) {
    txt += `### ${tpl.label}\n\`\`\`\n${tpl.text}\n\`\`\`\n\n`;
  }

  txt += '---\n';
  txt += '## Complete Prompt Libraries\n\n';

  let totalPrompts = 0;
  for (const lib of VALID_LIBS) {
    const htmlPath = path.join(ROOT, `${lib}.html`);
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const match = html.match(/const\s+[A-Z_]+PROMPTS\s*=\s*(\[\s*\{[\s\S]*?\n\]);/);
    if (!match) {
      throw new Error(`Prompt array not found in ${lib}.html`);
    }
    const groups = eval(match[1]);
    const title = LIB_DISPLAY_TITLES[lib] || `${lib} Prompts`;

    txt += `### ${title}\n`;
    txt += `URL: ${BASE_URL}/${lib}\n\n`;

    for (const group of groups) {
      txt += `#### Category: ${group.cat}\n`;
      for (const p of group.prompts) {
        totalPrompts++;
        txt += `##### ${p.title}\n\`\`\`\n${p.text}\n\`\`\`\n\n`;
      }
    }
  }

  txt += '---\n';
  txt += '## Guides & Blog Articles\n\n';
  txt += `- [Introducing the New Prompt Router](${BASE_URL}/blog-new-look): Major redesign with collapsible sidebar, clean canvas, and 11 AI models.\n`;
  txt += `- [Prompt Engineering Blog](${BASE_URL}/blog): Index of all 16 prompt engineering articles, model comparisons, and cost optimization guides.\n`;
  txt += `- [Budget-Friendly Prompt Routing](${BASE_URL}/blog-budget-prompt-routing): How top AI companies cut inference costs by up to 85% using model cascades and small models.\n`;
  txt += `- [Reduce AI Costs](${BASE_URL}/blog-reduce-ai-costs): 5 proven strategies to cut OpenAI, Anthropic, and Google AI API costs by up to 80%.\n`;
  txt += `- [Compare AI Models](${BASE_URL}/blog-compare-ai): Comparative breakdown of LLMs for specialized tasks and why side-by-side evaluation is essential.\n`;
  txt += `- [Prompt Router Overview](${BASE_URL}/blog-prompt-router): Why multi-LLM workflows yield superior outputs and eliminate tab sprawl.\n`;
  txt += `- [Dev Prompts Guide](${BASE_URL}/blog-dev-prompts): Walkthrough of coding prompts for debugging, refactoring, and system architecture.\n`;
  txt += `- [Writing Prompts Guide](${BASE_URL}/blog-writing-prompts): Prompts designed to produce authentic, human-sounding copy.\n`;
  txt += `- [Marketing Prompts Guide](${BASE_URL}/blog-marketing-prompts): Prompt playbook for SEO, advertising, and campaign strategy.\n`;
  txt += `- [Data Prompts Guide](${BASE_URL}/blog-data-prompts): Recipes for SQL generation, Python analysis, and data storytelling.\n`;
  txt += `- [Startup Prompts Guide](${BASE_URL}/blog-startup-prompts): Actionable prompt recipes for founder validation, pitch decks, and GTM.\n`;
  txt += `- [Design Prompts Guide](${BASE_URL}/blog-design-prompts): Prompts for UX research, wireframing, and accessibility reviews.\n`;
  txt += `- [Job Search Prompts Guide](${BASE_URL}/blog-job-prompts): Tailored prompts for resume crafting, interview prep, and salary negotiation.\n`;
  txt += `- [Productivity Prompts Guide](${BASE_URL}/blog-productivity-prompts): System prompts for daily planning, meeting minutes, and task prioritization.\n`;
  txt += `- [Legal Prompts Guide](${BASE_URL}/blog-legal-prompts): Plain-language translation and contract clause review guidelines.\n`;
  txt += `- [Sales Prompts Guide](${BASE_URL}/blog-sales-prompts): B2B sales prompts for cold prospecting, discovery, and objection handling.\n`;
  txt += `- [Student Prompts Guide](${BASE_URL}/blog-student-prompts): Study partner and academic tutor prompt frameworks.\n`;

  const fullPath = path.join(ROOT, 'llms-full.txt');
  fs.writeFileSync(fullPath, txt, 'utf-8');
  console.log(`  ✓ Generated llms-full.txt (${totalPrompts} prompts across ${VALID_LIBS.length} libraries)`);
  return txt;
}

export function generateSeo() {
  console.log('⚡ Generating SEO & LLM Manifests (Single Source of Truth)...');
  generateSitemap();
  generateLlmsTxt();
  generateLlmsFullTxt();
  console.log('🎉 SEO manifests generated successfully.\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSeo();
}
