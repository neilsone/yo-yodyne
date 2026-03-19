# Yo-Yodyne

Orchestration hub for [labs.yo-yodyne.com](https://labs.yo-yodyne.com) — research, engineering, and creative production coordinated through specifications, working agreements, and AI agent teams.

## What This Is

Yo-Yodyne is the operational backbone for an independent research and creative practice. This repository contains the specs, standards, agent definitions, and static site that together form a lightweight but rigorous system for managing cross-cutting work across multiple disciplines.

The project is designed to scale from a single researcher's notebook to a coordination layer for multiple initiatives, each potentially living in its own subdomain and repository but governed by shared principles.

**Current status:** `v0.1.0-alpha` — foundational scaffolding with the first published research article.

## Structure

```
openspec/          Specifications and change management (OPSX workflow)
  specs/           Source-of-truth behavioral specs (Given/When/Then)
  changes/         Change proposals in flight
site/              Astro static site → labs.yo-yodyne.com
research/          Research artifacts (papers, experiments, data)
engineering/       Standards, working agreements, guides
production/        Creative briefs, content staging, multimedia assets
.claude/teams/     AI agent team definitions (see below)
```

## Getting Started

```bash
cd site && npm install && npm run dev
```

The site builds to `labs.yo-yodyne.com` via Cloudflare Pages.

## How It Works

### Spec-Driven Development

All changes follow the [OpenSpec](https://github.com/Fission-AI/OpenSpec) OPSX workflow:

1. **propose** — Articulate the problem, scope, and motivation
2. **fast-forward** — Generate behavioral specs, design artifacts, and a task list
3. **apply** — Implement the tasks against the specs
4. **archive** — Merge delta specs into the source of truth, archive the change

Specs in `openspec/specs/` use Gherkin-style scenarios (Given/When/Then) as behavioral requirements. They are the source of truth — code and content implement them, not the reverse.

### Organizational Units

Work is organized into four units, each independently responsible for its domain:

| Unit | Domain | Key Artifacts |
|---|---|---|
| **Research** | Hypotheses, experiments, papers | `research/`, content collections |
| **Engineering** | Software, infrastructure, CI/CD | `site/`, `.github/workflows/` |
| **Production** | Creative direction, content, multimedia | `production/`, content staging |
| **Tech** | Cross-cutting standards, architecture | `engineering/`, dependency registry |

Units coordinate through proposals and creative briefs, not hierarchy. A [creative autonomy](engineering/agreements/common/creative-autonomy.md) principle ensures producing units own their creative decisions.

### AI Agent Teams

The `.claude/teams/` directory defines roles for AI agents that assist with development. Each agent has a unit assignment, responsibilities, and working agreements. This is an experiment in using structured agent orchestration for research and creative work — the definitions are included in the repo as part of the practice.

### Domain Architecture

| Domain | Purpose |
|---|---|
| `yo-yodyne.com` | Portfolio (Adobe Portfolio) |
| `labs.yo-yodyne.com` | This repo — research hub (Cloudflare Pages) |
| `*.yo-yodyne.com` | Future project subdomains (independent repos) |

## Tech Stack

| Layer | Technology |
|---|---|
| Static site | [Astro](https://astro.build) 5.7 + MDX |
| Hosting | Cloudflare Pages |
| CI/CD | GitHub Actions |
| Specifications | OpenSpec (OPSX) |
| Agent orchestration | Claude Code Teams |
| Content | Astro Content Collections (research, experiments, projects) |

## Design

The visual identity follows a wabi-sabi aesthetic — refined, minimal, warm. Typography pairs Cormorant Garamond (headings) with Karla (body) on an off-white palette with gold accent. Zero JavaScript by default; interactive elements use Astro islands.

Design tokens live in `site/src/styles/global.css`.

## Release Channels

- **`alpha`** — Internal, tagged `v*-alpha`
- **`beta`** — Early access, tagged `v*-beta`
- **`stable`** — Public, tagged `v*`

No release without a passing Release Readiness Review (RRR).

## License

[MIT](LICENSE) — Neilson P. Eney
