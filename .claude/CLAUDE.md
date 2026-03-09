# Yo-Yodyne — Project Instructions

## What This Is

Yo-Yodyne is the research hub and creative brand of Neilson P. Eney. This repo is the orchestration hub — it contains the specs, working agreements, agent team definitions, static site, and CI/CD for the entire Yo-Yodyne operation.

## How To Work

1. **Read `openspec/project.md` first** — it has the tech stack, architecture, and terminology.
2. **Follow OPSX workflow** — all changes go through propose → fast-forward → apply → archive.
3. **Check `openspec/specs/`** — these are the source of truth. Don't contradict them without a delta spec.
4. **Respect creative autonomy** — producing units own creative decisions. See `engineering/agreements/common/creative-autonomy.md`.
5. **Use Conventional Commits** — `feat:`, `fix:`, `docs:`, `chore:`, etc.

## Agent Teams

Agent definitions live in `.claude/teams/`. Each agent has a unit assignment, responsibilities, and working agreements. The PI has oversight across all units.

Run agents in tmux sessions named after their role: `pi`, `research`, `engineering`, `tech`, `writer`, `creative`.

## Key Paths

- `openspec/` — Specifications and change management
- `site/` — Astro static site (yo-yodyne.com/labs)
- `research/` — Research artifacts
- `engineering/` — Standards, agreements, templates
- `production/` — Creative briefs, content staging, assets
- `.github/workflows/` — CI/CD

## Release Channels

- `alpha` — Internal/PI only, tagged `v*-alpha`
- `beta` — Early access, tagged `v*-beta`
- `stable` — Public, tagged `v*`

No release without a passing Release Readiness Review.
