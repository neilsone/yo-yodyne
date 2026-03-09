# Yo-Yodyne — Project Context

## Overview

Yo-Yodyne is the research hub and creative brand of **Neilson P. Eney**, an independent researcher and software engineer with 30 years of industry experience. It is a refined, mysterious brand — minimal, with touches of wabi-sabi, serious and artistic with very subtle hints of playfulness.

The project orchestrates research, engineering, and creative production through a team of AI agents operating under loose, creatively autonomous working agreements.

## Principal Investigator

- **Name:** Neilson P. Eney
- **Domain:** yo-yodyne.com (Adobe Portfolio — photography/portfolio)
- **Labs Site:** yo-yodyne.com/labs (Cloudflare Worker → Cloudflare Pages — research hub)
- **GitHub:** github.com/neilsone
- **Primary Repo:** github.com/neilsone/yo-yodyne
- **Project Subdomains:** `*.yo-yodyne.com` for individual projects/programs

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Static Site Generator | Astro | latest |
| Hosting (labs) | Cloudflare Pages + Worker reverse proxy | — |
| DNS / CDN | Cloudflare | — |
| CI/CD | GitHub Actions | — |
| Spec Framework | OpenSpec (OPSX) | latest |
| Agent Orchestration | Claude Code Teams | — |
| Shell Multiplexer | tmux | — |
| Version Control | Git | — |
| Content Format | Markdown / MDX | CommonMark |

## Architecture

```
yo-yodyne.com                     Adobe Portfolio (photography/portfolio)
yo-yodyne.com/labs/*              Cloudflare Worker → yo-yodyne-labs.pages.dev (Astro)
*.yo-yodyne.com                   Project subdomains (independent repos)

yo-yodyne/                        This repo — orchestration hub
├── openspec/                     Spec-driven development (source of truth)
├── .claude/teams/                Agent team definitions
├── site/                         Astro static site (yo-yodyne.com/labs)
├── research/                     Research artifacts
├── engineering/                  Engineering standards, templates, tooling
├── production/                   Creative production, briefs, multimedia
└── .github/workflows/            CI/CD pipelines
```

## Organizational Units

| Unit | Purpose |
|---|---|
| **Research** | Hypotheses, experiments, papers, analysis, scientific rigor |
| **Engineering** | Software, tooling, infrastructure, CI/CD, releases |
| **Production** | Creative direction, multimedia, publishing, workshopping, envisioning |
| **Tech** | Cross-cutting standards, architecture, dependency management |

## Core Principles

1. **Creative Autonomy** — Producing units own creative decisions unless explicitly constrained
2. **Loose Coupling** — Units coordinate via proposals and briefs, not hierarchy
3. **Spec-Driven** — OpenSpec OPSX workflow for all changes
4. **Brand Integrity** — Yo-Yodyne is refined, mysterious, wabi-sabi. Every artifact reflects this.

## Code Standards

- **Commit style:** Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **Branch strategy:** trunk-based with short-lived feature branches
- **Release channels:** `alpha` → `beta` → `stable`
- **Spec methodology:** OpenSpec OPSX workflow for all changes

## Domain Terminology

| Term | Meaning |
|---|---|
| Unit | An independently responsible organizational division |
| Working Agreement | Documented standards and expectations; common + unit-specific |
| Artifact | Any deliverable: paper, spec, code, site content, media |
| Creative Brief | Production-initiated task that can drive work across units |
| PI | Principal Investigator — Neilson Eney |
| Labs | The public-facing research hub site at yo-yodyne.com/labs |
| RRR | Release Readiness Review — gating checklist for releases |
