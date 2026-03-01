# Prompt Router — Deployment Guide

## Files in this package

```
index.html        ← Main page (deploy this as your root)
site.webmanifest  ← PWA manifest (enables "Add to Home Screen")
robots.txt        ← Crawler instructions + sitemap reference
sitemap.xml       ← Sitemap for Google/Bing indexing
```

## Files you still need to create

```
/favicon-32x32.png       32×32 PNG favicon
/favicon-16x16.png       16×16 PNG favicon
/apple-touch-icon.png    180×180 PNG for iOS home screen
/icons/icon-192.png      192×192 PNG for Android PWA
/icons/icon-512.png      512×512 PNG for Android PWA splash
/og-image.png            1200×630 PNG for social sharing previews
```

> Tip: Use https://realfavicongenerator.net — upload a 512×512 logo and it generates all icon sizes automatically.

---

## Deploying to Netlify (recommended — free)

1. Go to https://app.netlify.com/drop
2. Drag and drop the entire folder
3. Done — you'll get a `*.netlify.app` URL instantly
4. Add your custom domain in Site Settings → Domain Management

## Deploying to Vercel (free)

```bash
npm i -g vercel
cd prompt-router-site
vercel
```

## Deploying to GitHub Pages (free)

1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: Deploy from branch → `main` / `root`
3. Your site will be live at `https://yourusername.github.io/repo-name/`

## Deploying to Cloudflare Pages (free, best performance)

1. Push to GitHub
2. Go to https://pages.cloudflare.com → Connect to Git
3. Select repo, set build output to `/` (no build needed)
4. Deploy

---

## After deploying — checklist

- [ ] Update `canonical`, `og:url`, `og:image`, `sitemap.xml` `<loc>` to your real domain
- [ ] Update `twitter:site` to your real @handle (or remove if unused)
- [ ] Create and upload all icon/image files listed above
- [ ] Submit sitemap to Google Search Console: https://search.google.com/search-console
- [ ] Submit sitemap to Bing Webmaster Tools: https://www.bing.com/webmasters
- [ ] Test social previews: https://www.opengraph.xyz
- [ ] Test structured data: https://validator.schema.org
- [ ] Test PWA: Chrome DevTools → Lighthouse → Progressive Web App

---

## Performance notes

- No build step needed — pure HTML/CSS/JS
- Fonts load from Google Fonts CDN with `display=swap` (no layout shift)
- Background noise is an inline SVG (zero extra HTTP request)
- All assets are either inline or linked from CDN
- Estimated Lighthouse score: 95–100 Performance, 100 Accessibility, 100 Best Practices, 95+ SEO
