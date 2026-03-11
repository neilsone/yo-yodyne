# Tasks: Yo-Yodyne Labs Research Hub Initialization

**Change ID:** yo-yodyne-labs-init
**Date:** 2026-03-08

---

## Phase 1: Foundation

- [x] Create OpenSpec directory structure and configuration
- [x] Write project.md with tech stack and architecture context
- [x] Write AGENTS.md with agent behavioral instructions
- [x] Write proposal.md for this change
- [x] Write design.md with technical approach
- [x] Write tasks.md (this file)
- [x] Create CLAUDE.md project instructions
- [x] Create .gitignore
- [x] Create LICENSE (MIT)
- [x] Create README.md

## Phase 2: Specifications

- [x] Write spec: organizational structure (units, roles, responsibilities)
- [x] Write spec: working agreement framework (common + unit-specific)
- [x] Write spec: creative autonomy principle
- [x] Write spec: release process (channels, gating, RRR)
- [x] Write spec: labs site requirements (brand, content types, architecture)
- [x] Write spec: agent team (roles, orchestration, escalation)

## Phase 3: Working Agreements

### Common (all units)
- [x] Commit conventions
- [x] Review process
- [x] Artifact metadata standard
- [x] Creative autonomy principle
- [x] Dependency management process

### Engineering
- [x] Coding standards
- [x] Release process (alpha/beta/stable)
- [x] CI/CD standards

### Research
- [x] Experiment protocol
- [x] Publication standards

### Production
- [x] Content standards
- [x] Publishing workflow
- [x] Creative brief template
- [x] Multimedia standards

## Phase 4: Agent Team

- [x] Define PI agent (.claude/teams/pi.md)
- [x] Define Research Scientist agent (.claude/teams/researcher.md)
- [x] Define Engineer agent (.claude/teams/engineer.md)
- [x] Define Technician agent (.claude/teams/technician.md)
- [x] Define Writer agent (.claude/teams/writer.md)
- [x] Define Creative Director agent (.claude/teams/creative-director.md)

## Phase 5: Astro Site

- [x] Initialize Astro project in site/
- [x] Configure astro.config.mjs with /labs base path
- [x] Define Content Collections (research, experiments, projects)
- [x] Create design tokens (wabi-sabi palette, typography)
- [x] Build Base layout (nav, footer, brand shell)
- [x] Build homepage
- [x] Build research article layout
- [x] Build experiment log layout
- [x] Build projects index
- [x] Create about page
- [x] Self-host fonts (Cormorant Garamond, Karla — variable woff2)
- [x] Verify Astro build (`cd site && npm install && npm run build`)

## Phase 6: Cloudflare Worker

- [x] Write labs-proxy.js reverse proxy Worker
- [x] Write wrangler.toml configuration
- [ ] Deploy Worker and configure route (requires Cloudflare credentials)

## Phase 7: CI/CD

- [x] GitHub Actions: site deployment to Cloudflare Pages
- [x] GitHub Actions: release gating workflow
- [x] GitHub Actions: spec lint workflow

## Phase 8: Dependency & Release Infrastructure

- [x] Create dependency registry
- [x] Create RRR checklist template
- [x] Create CHANGELOG.md
- [x] Document external project plugin process (subdomain setup — in cloudflare-setup.md)

## Phase 8b: Brand & Visual Identity

- [x] Source Yo-Yodyne logo (yo-yodyne.svg)
- [x] Define PNW sunset palette (evergreen #2d4a3e, sunset gold #c4943d, ochre #a08540)
- [x] Refine logo geometry — symmetric, aligned to original proportions (yo-yodyne-refined.svg)
- [x] Create portfolio favicon (favicon-portfolio.svg — evergreen + sunset gold, transparent bg)
- [x] Create labs favicon (favicon.svg — ink-green + ochre on parchment bg)
- [x] Build LogoMark.astro reusable component (inline SVG, currentColor, configurable size)
- [x] Integrate logo into Nav (22px mark before site title, evergreen → gold on hover)
- [x] Integrate logo into Footer (16px mark as quiet signature)
- [x] Integrate logo into Hero (280px watermark at 30% opacity)
- [x] Update design tokens (--accent → sunset gold, --paper → #f5f1ea, add --evergreen, --ochre)

## Phase 9: Archive & First Release

- [x] Fix npm cache permissions
- [x] Run `cd site && npm install && npm run build` to verify
- [x] Download and place web fonts in site/public/fonts/
- [x] Set up git remote
- [x] Initial commit and push to labs-init branch
- [ ] Set up Cloudflare Pages project (PI — see engineering/guides/cloudflare-setup.md)
- [ ] Deploy Cloudflare Worker (PI)
- [ ] Configure DNS (PI — switch A records to proxied, add Worker route)
- [ ] Push to main and tag v0.1.0-alpha.1
