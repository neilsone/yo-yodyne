# Cloudflare Setup Guide

**Owner:** Engineering / Tech
**Date:** 2026-03-12
**Updated:** Pivoted from `/labs` subpath to `labs.yo-yodyne.com` subdomain

---

## Prerequisites

- Cloudflare account with yo-yodyne.com domain
- GitHub repo: github.com/neilsone/yo-yodyne
- Cloudflare API token with Pages and DNS permissions

## Step 1: Create Cloudflare Pages Project

1. Log in to Cloudflare Dashboard → Pages
2. Create a project → Connect to Git → Select `neilsone/yo-yodyne`
3. Configure build:
   - **Project name:** `yo-yodyne-labs`
   - **Production branch:** `main`
   - **Build command:** `cd site && npm install && npm run build`
   - **Build output directory:** `site/dist`
4. Deploy

Verify: `https://yo-yodyne-labs.pages.dev` should show the labs site.

## Step 2: Configure Custom Domain

1. In the Pages project, add `labs.yo-yodyne.com` as a custom domain
2. Add a CNAME DNS record:
   - **Name:** `labs`
   - **Target:** `yo-yodyne-labs.pages.dev`
   - **Proxy status:** Proxied (orange cloud)
3. Wait for SSL certificate to provision (usually a few minutes)

### Verification

- `yo-yodyne.com` → Should still show Adobe Portfolio site
- `labs.yo-yodyne.com` → Should show the labs Astro site

## Step 3: GitHub Actions Secrets

Add these secrets to the GitHub repo (Settings → Secrets → Actions):

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | API token with Pages:Edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

After this, pushes to `main` that change `site/` will auto-deploy.

## Step 4: Project Subdomains (Future)

For each new project subdomain (e.g., `projectname.yo-yodyne.com`):

1. Create a new Cloudflare Pages project for the project
2. Add a CNAME record: `projectname` → `project-pages.pages.dev`
3. Set proxy status to **Proxied** (orange cloud)
4. In the Pages project, add `projectname.yo-yodyne.com` as a custom domain

## Troubleshooting

### Labs site not loading

- Verify CNAME record exists: `labs` → `yo-yodyne-labs.pages.dev`
- Check that proxy status is set to Proxied (orange cloud)
- Verify custom domain is active in Pages project settings

### Pages deploy failing

- Check GitHub Actions logs
- Verify `CLOUDFLARE_API_TOKEN` has correct permissions
- Test locally: `cd site && npm run build`
