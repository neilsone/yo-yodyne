# Proposal: Yo-Yodyne Labs Research Hub Initialization

**Author:** Neilson P. Eney (PI) + Claude
**Status:** DRAFT
**Date:** 2026-03-08
**Change ID:** yo-yodyne-labs-init

---

## Motivation

Neilson Eney is an independent researcher and 30-year software engineering veteran who needs a structured research hub to orchestrate research, engineering, and creative production. Yo-Yodyne is not merely a functional hub — it is a refined, mysterious brand. Minimal, yet with touches of wabi-sabi. Serious, artistic, and minimal with very subtle hints of playfulness conservatively applied.

The hub must:

1. Provide a public-facing labs site at `yo-yodyne.com/labs` that embodies the brand
2. Establish an AI agent team that operates under loose, creatively autonomous working agreements
3. Support the full lifecycle from research ideation through curated publication
4. Enforce engineering rigor (specs, gating, release channels) without constraining creative autonomy

## Scope

### In Scope

1. **Organizational Structure** — Four loosely coupled units with creative autonomy
2. **Agent Team** — Claude Code Teams for PI, researchers, engineers, technicians, writers, creative producers
3. **Working Agreements** — Common + unit-specific standards; creative decisions owned by producing unit
4. **Static Site** — Astro-based site at `yo-yodyne.com/labs` via Cloudflare Worker + Cloudflare Pages
5. **CI/CD** — GitHub Actions for site deployment + release gating
6. **OpenSpec Integration** — OPSX workflow as the standard for all changes
7. **Release Process** — Alpha → Beta → Stable channels with Release Readiness Reviews
8. **Project Scaffolding** — Directory structure, templates, and conventions
9. **Subdomain Strategy** — Individual projects/programs deploy as subdomains (e.g., `projectname.yo-yodyne.com`)

### Out of Scope

- Migration of existing yo-yodyne.com portfolio (stays on Adobe Portfolio)
- Individual research project content (separate proposals)
- External service integrations beyond GitHub + Cloudflare
- Paid tooling or infrastructure

## Organizational Design

### Units

| Unit | Responsibility | Key Artifacts |
|---|---|---|
| **Research** | Hypothesis generation, literature review, experiment design, analysis, scientific rigor | Papers, notes, experiment logs, data, references |
| **Engineering** | Software development, tooling, infrastructure, CI/CD, release management | Code, specs, tests, releases, toolchains |
| **Production** | Creative direction, content planning, multimedia development, publishing, workshopping, envisioning | Site pages, multimedia, curated articles, creative briefs, storyboards |
| **Tech** | Cross-cutting technical standards, architecture decisions, dependency management | ADRs, standards docs, dependency registry |

### Production Unit — Expanded Role

Production is not a passive publishing pipeline. It is the **creative engine** of Yo-Yodyne:

- **Plans and envisions** — Develops creative concepts, content strategies, and multimedia narratives
- **Workshops** — Iterates on ideas through structured creative development processes
- **Develops multimedia** — Photography, visual design, interactive experiences, written content
- **Drives cross-unit work** — A Production creative brief can generate tasks for any unit. Example: a content piece requiring a moody black-and-white photograph generates a task for a field unit photographer to plan and produce the image.
- **Creative team** — A creative sub-team within Production helps drive experimental and developmental efforts across all units

### Creative Autonomy Principle

**This is a core working agreement:** When a task is delegated to a unit for production, that unit has **complete creative control** over the work product. Specifically:

- The requesting unit may specify requirements (subject, dimensions, format, deadline, technical constraints)
- The requesting unit may review the deliverable for technical problems or failure to meet stated requirements
- **Creative decisions** — composition, tone, style, approach, aesthetic judgment — belong to the producing unit unless explicitly constrained in the brief
- If no creative direction is specified, the producing unit exercises its own judgment
- Disputes escalate to the PI, but the default favors the producing unit's creative discretion

This principle ensures that delegated creative work maintains artistic integrity and that units develop their own creative voice within the Yo-Yodyne brand.

### Why This Structure

**Considered alternatives:**

1. **Flat (no units)** — Too unstructured for tracking dependencies and accountability. Rejected.
2. **Research + Engineering only** — Leaves publishing/curation and cross-cutting standards orphaned. Rejected.
3. **Research + Engineering + Production** — Good but cross-cutting technical decisions get lost. Tech provides a home for these.
4. **Research + Engineering + Production + Tech** — **Selected.** Each concern has a clear owner. Tech serves as the glue layer. Production serves as the creative engine.

### Loose Coupling

Units are independently responsible. The organizational structure exists to clarify ownership and manage dependencies, not to impose hierarchy or gatekeeping. Units coordinate through:

- **Proposals** (OPSX workflow) for cross-unit changes
- **Creative briefs** for Production-driven work across units
- **The dependency registry** for tracking what blocks what
- **The PI** for strategic direction and dispute resolution

### Dependency Management

The **Tech unit** maintains a dependency registry (`engineering/dependencies/registry.md`) tracking:
- Inter-unit dependencies (e.g., Research produces data → Engineering builds tools → Production publishes)
- Cross-unit creative briefs and their status
- External dependencies (libraries, services, APIs)
- Blocking/blocked status with owners and target dates

## Agent Team Design

### Roles

| Agent | Unit | Responsibilities |
|---|---|---|
| **PI** (Principal Investigator) | All | Strategic direction, approval authority, cross-unit coordination, brand stewardship |
| **Research Scientist** | Research | Literature review, hypothesis generation, experiment design, analysis |
| **Engineer** | Engineering | Implementation, code review, CI/CD, tooling, release engineering |
| **Technician** | Tech | Standards enforcement, dependency tracking, architecture review |
| **Writer** | Production | Content creation, curation, site publishing, documentation |
| **Creative Director** | Production | Creative vision, multimedia planning, workshopping, cross-unit creative briefs |

### Orchestration

- Agents run as Claude Code Teams in tmux sessions
- PI agent has oversight authority across all units
- Each agent operates within its unit's working agreements
- Cross-unit work requires a proposal (OPSX) or creative brief (Production-initiated)
- Creative autonomy principle governs all delegated creative work

## Hosting Architecture

### Decision: `yo-yodyne.com/labs` via Cloudflare Worker Reverse Proxy

```
yo-yodyne.com/*           → Adobe Portfolio (default)
yo-yodyne.com/labs/*      → Cloudflare Worker → yo-yodyne-labs.pages.dev
*.yo-yodyne.com           → Project subdomains (CNAME to respective hosts)
```

**Setup sequence:**
1. Deploy Astro site to Cloudflare Pages (`yo-yodyne-labs.pages.dev`)
2. Ensure Adobe Portfolio domain is verified and working
3. Switch Cloudflare A records from grey cloud (DNS-only) to orange cloud (proxied)
4. Deploy Cloudflare Worker on route `yo-yodyne.com/labs/*`
5. Verify both Adobe Portfolio root and `/labs` site function correctly

**URL structure under /labs:**
- `yo-yodyne.com/labs/` — Labs homepage
- `yo-yodyne.com/labs/research/` — Research articles and summaries
- `yo-yodyne.com/labs/experiments/` — Experiment logs
- `yo-yodyne.com/labs/projects/` — Project index
- `yo-yodyne.com/labs/about/` — About the lab

**Subdomain strategy for projects:**
- `projectname.yo-yodyne.com` — Individual project sites
- Each project is an independent repo that plugs into the engineering unit
- CNAME records per project, deployed to Cloudflare Pages or other hosts as appropriate

### Site Design — Brand Identity

**Yo-Yodyne is a refined, mysterious brand.** The site must embody this.

**Palette — Wabi-Sabi Monochrome:**
- Not pure black/white — warm, slightly aged tones
- `--ink: #2c2c2c` — Near-black with warmth (not harsh #000)
- `--paper: #f5f2ed` — Warm off-white, like aged parchment
- `--stone: #8a8378` — Muted warm grey for secondary text
- `--shadow: #d4cfc7` — Subtle borders, dividers
- `--accent: #b8a88a` — Sparing use — a muted gold/ochre for subtle warmth
- Occasional, very restrained color for specific elements (a single muted color photograph, a subtle tint)

**Typography:**
- Headings: A serif with character — something like Cormorant Garamond, EB Garamond, or Playfair Display (light weight). Refined but not corporate.
- Body: A clean, slightly humanist sans-serif — like Karla, Source Sans 3, or Work Sans (light/regular). Readable, warm, not clinical.
- Monospace (for technical content): JetBrains Mono or IBM Plex Mono
- Generous line height, comfortable reading measure (~65 characters)

**Layout:**
- Asymmetric touches within a clean grid — not perfectly centered, subtle offsets
- Generous whitespace — let content breathe
- Subtle texture — very faint paper grain or noise overlay (barely perceptible)
- Content cards with soft shadows, not sharp borders

**Interactions:**
- Subtle, slow transitions (300-500ms ease)
- Gentle opacity shifts on hover rather than color changes
- No flashy animations — everything should feel deliberate and unhurried
- A very subtle hint of playfulness: perhaps a small, unexpected detail on the 404 page, or an easter egg in the footer

**Framework: Astro**
- Content Collections for typed, schema-validated content (research, experiments, projects)
- Zero JS by default — the site should feel like a crafted document
- Islands architecture for selective interactivity (zoomable images, data visualizations)
- MDX support for embedding components in research articles
- Built-in image optimization for photography and visual content

## Release Process

### Channels

| Channel | Audience | Quality Bar | Cadence |
|---|---|---|---|
| `alpha` | Internal/PI only | Functional, specs satisfied | On-demand |
| `beta` | Early access readers | Polished, reviewed, brand-consistent | As ready |
| `stable` | Public | Full RRR passed | Deliberate |

### Release Readiness Review (RRR) Checklist

- [ ] All delta specs merged to main specs
- [ ] All tasks in `tasks.md` completed
- [ ] CI/CD pipeline passing
- [ ] Working agreement compliance verified
- [ ] Content reviewed for accuracy and engagement
- [ ] Brand consistency verified (typography, palette, tone)
- [ ] Version bumped appropriately
- [ ] Changelog updated

## Impact

- Establishes Yo-Yodyne as a refined brand and research identity, not just a project
- Creates a loosely coupled organizational structure that respects creative autonomy
- Provides a curated public presence that engages readers beyond the technical audience
- Sets engineering standards that prevent technical debt while leaving room for creative experimentation
- Enables individual projects to plug into a coherent ecosystem via subdomains
