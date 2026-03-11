# Cloudflare Setup Guide

**Owner:** Engineering / Tech
**Date:** 2026-03-09

---

## Prerequisites

- Cloudflare account with yo-yodyne.com domain
- GitHub repo: github.com/neilsone/yo-yodyne
- Wrangler CLI installed (`npm install -g wrangler`)
- Cloudflare API token with Pages and Workers permissions

## Step 1: Create Cloudflare Pages Project

1. Log in to Cloudflare Dashboard → Pages
2. Create a project → Connect to Git → Select `neilsone/yo-yodyne`
3. Configure build:
   - **Project name:** `yo-yodyne-labs`
   - **Production branch:** `main`
   - **Build command:** `cd site && npm install && npm run build`
   - **Build output directory:** `site/dist`
4. Deploy

Or via CLI:

```bash
cd site
wrangler pages project create yo-yodyne-labs
npm run build
wrangler pages deploy dist --project-name=yo-yodyne-labs
```

Verify: `https://yo-yodyne-labs.pages.dev` should show the labs site.

## Step 2: Deploy Cloudflare Worker

```bash
cd site/worker
wrangler deploy
```

This deploys the reverse proxy worker defined in `labs-proxy.js` with config from `wrangler.toml`.

## Step 3: Configure Worker Route

1. Cloudflare Dashboard → Workers & Pages → yo-yodyne-labs-proxy
2. Settings → Triggers → Add Route
3. Route: `yo-yodyne.com/labs/*`
4. Zone: `yo-yodyne.com`

Or via Wrangler — add to `wrangler.toml`:

```toml
routes = [
  { pattern = "yo-yodyne.com/labs/*", zone_name = "yo-yodyne.com" }
]
```

Then redeploy: `wrangler deploy`

## Step 4: Switch DNS to Proxied

**IMPORTANT:** This step affects the main Adobe Portfolio site. Do this carefully.

1. Cloudflare Dashboard → DNS
2. Find the A records for `yo-yodyne.com` (pointing to Adobe Portfolio IPs)
3. Change proxy status from **DNS only** (grey cloud) to **Proxied** (orange cloud)
4. Set SSL/TLS mode to **Full (strict)**

### Verification

After switching:
- `yo-yodyne.com` → Should still show Adobe Portfolio site
- `yo-yodyne.com/labs/` → Should show the labs Astro site

If Adobe Portfolio breaks:
- Switch A records back to DNS only (grey cloud)
- Investigate SSL/TLS settings
- Adobe may need re-verification (unlikely if it was already working)

## Step 5: GitHub Actions Secrets

Add these secrets to the GitHub repo (Settings → Secrets → Actions):

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | API token with Pages:Edit and Workers:Edit |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

After this, pushes to `main` that change `site/` will auto-deploy.

## Step 6: Project Subdomains (Future)

For each new project subdomain (e.g., `projectname.yo-yodyne.com`):

1. Create a new Cloudflare Pages project for the project
2. Add a CNAME record: `projectname` → `project-pages.pages.dev`
3. Set proxy status to **Proxied** (orange cloud)
4. In the Pages project, add `projectname.yo-yodyne.com` as a custom domain

## Troubleshooting

### Worker not intercepting /labs

- Verify route is active: Dashboard → Workers → Routes
- Check Worker logs: `wrangler tail yo-yodyne-labs-proxy`

### Adobe Portfolio broken after proxying

- Ensure SSL/TLS is set to Full (strict)
- Check that A records still point to Adobe Portfolio IPs
- Try toggling proxy off and on

### Pages deploy failing

- Check GitHub Actions logs
- Verify `CLOUDFLARE_API_TOKEN` has correct permissions
- Test locally: `cd site && npm run build`
