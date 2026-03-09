# Working Agreement: CI/CD Standards

**Scope:** Engineering unit
**Date:** 2026-03-08

---

## Purpose

Ensure reliable, automated build, test, and deployment pipelines.

## Standards

### Pipelines

| Workflow | Trigger | Actions |
|---|---|---|
| `deploy-site.yml` | Push to `main` (site/ changes) | Astro build → Cloudflare Pages deploy |
| `release-gate.yml` | Tag `v*` | RRR checklist verification → channel routing |
| `spec-lint.yml` | PR affecting `openspec/` | Markdown structure, frontmatter validation |

### Principles

- Pipelines MUST be fast (target: under 5 minutes for site builds)
- Failures MUST block merge/deploy
- Pipeline config lives in `.github/workflows/` — no external CI services
- Secrets are stored in GitHub repository secrets, never in code

### Deployment

- Site deploys to Cloudflare Pages via `wrangler`
- The Cloudflare Worker is deployed separately (changes are rare)
- Deploy previews for PRs (Cloudflare Pages provides this automatically)

### Monitoring

- Build failures notify via GitHub notifications
- Deploy status is visible in PR checks

## Exceptions

- Initial setup may use manual deployment until pipelines are established

## Review

Reviewed when pipelines become slow or unreliable.
