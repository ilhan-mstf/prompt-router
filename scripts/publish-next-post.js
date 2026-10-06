#!/usr/bin/env node

/**
 * scripts/publish-next-post.js
 *
 * Automated blog queue processor for GitHub Actions:
 * 1. Discovers remote branches in 'origin/queue/*' or local 'queue/*'.
 * 2. Selects the next queued branch in alphanumeric order (e.g. queue/01-...).
 * 3. Merges the branch into main.
 * 4. Detects any blog-*.html file not yet indexed in blog.html.
 * 5. Automatically generates the card in blog.html and registers the route in sw.js.
 * 6. Executes npm run build (updating sitemap.xml, llms.txt, and asset fingerprinting).
 * 7. Executes npm test to ensure 100% test integrity.
 * 8. Commits, pushes to main, and deletes the processed queue branch on remote.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const isDryRun = process.argv.includes('--dry-run');

function run(cmd, opts = {}) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'], ...opts });
}

function log(msg) {
  console.log(`[blog-publisher] ${msg}`);
}

function getQueuedBranches() {
  try {
    run('git fetch origin --prune');
  } catch (err) {
    log(`Warning: Failed to fetch origin: ${err.message}`);
  }

  let remoteBranches = [];
  try {
    const raw = run('git branch -r');
    remoteBranches = raw
      .split('\n')
      .map(b => b.trim())
      .filter(b => b.startsWith('origin/queue/'))
      .map(b => b.replace('origin/', ''));
  } catch {
    remoteBranches = [];
  }

  // Also check local queue branches
  let localBranches = [];
  try {
    const raw = run('git branch --list "queue/*"');
    localBranches = raw
      .split('\n')
      .map(b => b.replace(/^\*?\s+/, '').trim())
      .filter(b => b.startsWith('queue/'));
  } catch {
    localBranches = [];
  }

  const allBranches = Array.from(new Set([...remoteBranches, ...localBranches]));
  allBranches.sort();
  return allBranches;
}

export function wireUnlinkedBlogPosts() {
  const blogHtmlPath = path.join(ROOT, 'blog.html');
  const swJsPath = path.join(ROOT, 'sw.js');

  let blogHtml = fs.readFileSync(blogHtmlPath, 'utf-8');
  let swJs = fs.readFileSync(swJsPath, 'utf-8');

  const allBlogFiles = fs.readdirSync(ROOT)
    .filter(f => f.startsWith('blog-') && f.endsWith('.html'))
    .sort();

  const newlyWired = [];

  for (const file of allBlogFiles) {
    const slug = file.replace('.html', '');
    const route = `/${slug}`;

    // Check if already in blog.html
    const hasCard = blogHtml.includes(`href="${route}"`) || blogHtml.includes(`href="/${file}"`);
    if (hasCard) continue;

    log(`Wiring unindexed blog post into blog.html and sw.js: ${file}`);
    const postHtml = fs.readFileSync(path.join(ROOT, file), 'utf-8');

    // Extract title
    let title = slug;
    const titleMatch = postHtml.match(/<h1 class="article-title">([\s\S]*?)<\/h1>/);
    if (titleMatch) {
      title = titleMatch[1].replace(/&amp;/g, '&').trim();
    } else {
      const pageTitleMatch = postHtml.match(/<title>(.*?)<\/title>/);
      if (pageTitleMatch) {
        title = pageTitleMatch[1].split(/[|—]/)[0].replace(/&amp;/g, '&').trim();
      }
    }

    // Extract description
    let desc = '';
    const descMatch = postHtml.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
    if (descMatch) {
      desc = descMatch[1].trim();
    }

    // Extract category pill
    let cat = 'Guide';
    const catMatch = postHtml.match(/<span class="cat-pill">([^<]*)<\/span>/);
    if (catMatch) {
      cat = catMatch[1].trim();
    }

    // Extract date
    let dateStr = '';
    const dateMatch = postHtml.match(/<span class="article-date">([^<]*)<\/span>/);
    if (dateMatch) {
      dateStr = dateMatch[1].trim();
    } else {
      dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    // Format HTML card
    const cardHtml = `    <a href="${route}" class="post-card">
      <div class="post-card-header">
        <span class="cat-pill">${cat}</span>
        <span class="post-card-date">${dateStr}</span>
      </div>
      <h3 class="post-card-title">${title.replace(/&/g, '&amp;')}</h3>
      <p class="post-card-desc">${desc}</p>
      <div class="post-card-footer">
        <span class="post-card-arrow">Read article &nearr;</span>
      </div>
    </a>\n\n`;

    // Insert right inside <div class="blog-grid">
    const gridMarker = '<div class="blog-grid">\n';
    if (blogHtml.includes(gridMarker)) {
      blogHtml = blogHtml.replace(gridMarker, gridMarker + cardHtml);
    } else {
      blogHtml = blogHtml.replace('<div class="blog-grid">', '<div class="blog-grid">\n' + cardHtml);
    }

    // Register in sw.js if missing
    if (!swJs.includes(`'${route}'`)) {
      const faqMarker = "  '/faq',\n";
      if (swJs.includes(faqMarker)) {
        swJs = swJs.replace(faqMarker, faqMarker + `  '${route}',\n`);
      } else {
        const devMarker = "  '/dev',\n";
        swJs = swJs.replace(devMarker, devMarker + `  '${route}',\n`);
      }
    }

    newlyWired.push(slug);
  }

  if (newlyWired.length > 0) {
    fs.writeFileSync(blogHtmlPath, blogHtml, 'utf-8');
    fs.writeFileSync(swJsPath, swJs, 'utf-8');
    log(`Successfully wired ${newlyWired.length} post(s): ${newlyWired.join(', ')}`);
  }

  return newlyWired;
}

export function publishNext() {
  const branches = getQueuedBranches();
  log(`Found ${branches.length} branch(es) in queue: ${branches.join(', ') || 'none'}`);

  if (branches.length === 0) {
    // Check if there are any unlinked posts already on the branch
    const wired = wireUnlinkedBlogPosts();
    if (wired.length > 0) {
      log('Unlinked posts found and wired on current branch. Running build and test...');
      run('npm run build', { stdio: 'inherit' });
      run('npm test', { stdio: 'inherit' });
      if (!isDryRun) {
        run('git add -A');
        run(`git commit -m "feat(blog): wire ${wired.join(', ')} and update sitemap"`);
        try { run('git push origin main'); } catch (e) { log(`Push note: ${e.message}`); }
      }
      log('Published unlinked posts successfully.');
      return;
    }
    log('Blog queue is empty. Nothing to publish.');
    return;
  }

  const nextBranch = branches[0];
  log(`Next post in queue to publish: ${nextBranch}`);

  if (isDryRun) {
    log(`[DRY RUN] Would merge ${nextBranch}, wire blog.html, sw.js, sitemap.xml, and push to main.`);
    return;
  }

  // 1. Ensure clean git state on main
  run('git checkout main');
  try {
    run('git pull origin main');
  } catch (err) {
    log(`Note on pull: ${err.message}`);
  }

  // 2. Merge the queued branch
  log(`Merging ${nextBranch} into main...`);
  try {
    run(`git merge --no-edit origin/${nextBranch}`);
  } catch {
    // Fallback to local branch if remote not present
    run(`git merge --no-edit ${nextBranch}`);
  }

  // 3. Wire any newly introduced blog post files
  const wired = wireUnlinkedBlogPosts();

  // 4. Run automated build (regenerates sitemap.xml with new post & hashes assets)
  log('Running build...');
  run('npm run build', { stdio: 'inherit' });

  // 5. Run test suite to verify full integrity
  log('Running automated test suite...');
  run('npm test', { stdio: 'inherit' });

  // 6. Commit publication
  const commitMsg = wired.length > 0
    ? `feat(blog): publish ${wired.join(', ')} and update sitemap [cron]`
    : `feat(blog): merge ${nextBranch} and update sitemap [cron]`;

  log(`Committing publication: "${commitMsg}"`);
  run('git add -A');
  run(`git commit -m "${commitMsg}"`);

  // 7. Push to origin main
  log('Pushing to origin main...');
  run('git push origin main');

  // 8. Delete the processed queue branch on remote and local
  log(`Deleting published branch ${nextBranch}...`);
  try {
    run(`git push origin --delete ${nextBranch}`);
    log(`Deleted remote branch origin/${nextBranch}`);
  } catch (err) {
    log(`Note on remote branch deletion: ${err.message}`);
  }

  try {
    run(`git branch -D ${nextBranch}`);
    log(`Deleted local branch ${nextBranch}`);
  } catch (err) {
    log(`Note on local branch deletion: ${err.message}`);
  }

  log(`🎉 Successfully published ${nextBranch} to main! Remaining in queue: ${branches.length - 1}`);
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  publishNext();
}
