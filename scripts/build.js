#!/usr/bin/env node

/**
 * scripts/build.js — Automated Content Hashing for Prompt Router
 *
 * 1. Computes MD5 content hashes for core CSS and JS assets.
 * 2. Generates fingerprinted copies (e.g. css/core.a1b2c3d4.css).
 * 3. Cleans up stale hashed files from previous builds.
 * 4. Generates an asset-manifest.json.
 * 5. Rewrites references in all HTML files and sw.js.
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const ASSETS_TO_HASH = [
  { dir: 'css', file: 'core.css', ext: '.css', prefix: 'core' },
  { dir: 'css', file: 'prompt.css', ext: '.css', prefix: 'prompt' },
  { dir: 'js',  file: 'locales.js', ext: '.js',  prefix: 'locales' },
  { dir: 'js',  file: 'prompt.js', ext: '.js',   prefix: 'prompt' },
];

function getHash(content) {
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
}

function cleanOldHashedFiles(dir, prefix, currentHashedName, ext) {
  const fullDir = path.join(ROOT, dir);
  if (!fs.existsSync(fullDir)) return;
  const regex = new RegExp(`^${prefix}\\.[a-f0-9]{8}\\${ext}$`);
  const files = fs.readdirSync(fullDir);
  for (const f of files) {
    if (regex.test(f) && f !== currentHashedName) {
      fs.unlinkSync(path.join(fullDir, f));
    }
  }
}

export function build() {
  console.log('⚡ Running Automated Content Hashing...');
  const manifest = {};

  // 1. Process each asset
  for (const item of ASSETS_TO_HASH) {
    const srcPath = path.join(ROOT, item.dir, item.file);
    if (!fs.existsSync(srcPath)) {
      throw new Error(`Source asset not found: ${srcPath}`);
    }

    const content = fs.readFileSync(srcPath);
    const hash = getHash(content);
    const hashedFileName = `${item.prefix}.${hash}${item.ext}`;
    const hashedPath = path.join(ROOT, item.dir, hashedFileName);

    // Clean up older hashed files
    cleanOldHashedFiles(item.dir, item.prefix, hashedFileName, item.ext);

    // Write the hashed file copy
    fs.writeFileSync(hashedPath, content);

    const originalUrl = `/${item.dir}/${item.file}`;
    const hashedUrl = `/${item.dir}/${hashedFileName}`;
    manifest[originalUrl] = hashedUrl;

    console.log(`  ✓ ${originalUrl} -> ${hashedUrl}`);
  }

  // 2. Write asset manifest
  const manifestPath = path.join(ROOT, 'asset-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

  // 3. Update HTML files
  const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
  let htmlUpdatedCount = 0;

  for (const file of htmlFiles) {
    const filePath = path.join(ROOT, file);
    let html = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    for (const item of ASSETS_TO_HASH) {
      const targetHashedUrl = manifest[`/${item.dir}/${item.file}`];
      // Match either unhashed URL or any existing 8-char hashed URL
      const pattern = new RegExp(`/${item.dir}/${item.prefix}(\\.[a-f0-9]{8})?\\${item.ext}`, 'g');
      if (pattern.test(html)) {
        html = html.replace(pattern, targetHashedUrl);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, html, 'utf-8');
      htmlUpdatedCount++;
    }
  }
  console.log(`  ✓ Updated ${htmlUpdatedCount} HTML files with hashed asset paths`);

  // 4. Update sw.js
  const swPath = path.join(ROOT, 'sw.js');
  if (fs.existsSync(swPath)) {
    let swContent = fs.readFileSync(swPath, 'utf-8');

    // Replace asset paths in sw.js
    for (const item of ASSETS_TO_HASH) {
      const targetHashedUrl = manifest[`/${item.dir}/${item.file}`];
      const pattern = new RegExp(`['"]/${item.dir}/${item.prefix}(\\.[a-f0-9]{8})?\\${item.ext}['"]`, 'g');
      swContent = swContent.replace(pattern, `'${targetHashedUrl}'`);
    }

    // Ensure cache version is updated to pr-v6
    swContent = swContent.replace(/const CACHE_NAME = 'pr-v[0-9]+';/, "const CACHE_NAME = 'pr-v6';");

    fs.writeFileSync(swPath, swContent, 'utf-8');
    console.log('  ✓ Updated sw.js with hashed CORE_ASSETS and bumped CACHE_NAME to pr-v6');
  }

  console.log('🎉 Build complete! All assets fingerprinted successfully.\n');
  return manifest;
}

// Run if called directly via CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  build();
}
