# Working Agreement: Release Process

**Scope:** Engineering unit
**Date:** 2026-03-08

---

## Purpose

Define how software and site releases are managed across alpha, beta, and stable channels.

## Standards

### Channels

| Channel | Tag | Audience | Process |
|---|---|---|---|
| alpha | `v1.0.0-alpha.1` | PI only | Engineer creates tag, minimal review |
| beta | `v1.0.0-beta.1` | Early access | RRR-lite (no full checklist, but reviewed) |
| stable | `v1.0.0` | Public | Full RRR required |

### Release Flow

1. **Development** — Work on `main` branch via feature branches
2. **Alpha** — Tag from `main` when feature is functional. PI reviews.
3. **Beta** — Tag from `main` after polish pass. Content and brand reviewed.
4. **Stable** — Tag from `main` after full RRR passes.

### Release Readiness Review (RRR)

Before beta or stable release:

- [ ] All delta specs for this release merged to main specs
- [ ] All tasks completed
- [ ] CI/CD pipeline green
- [ ] Working agreement compliance verified
- [ ] Content accuracy and engagement reviewed
- [ ] Brand consistency checked
- [ ] Version bumped
- [ ] Changelog updated
- [ ] No blocking dependencies in registry

### Hotfixes

- Critical fixes to stable may bypass beta channel
- Still require CI green and PI approval
- Tagged as patch version bump

### Changelog

Maintained in `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/) format.

## Exceptions

- The very first release (`v0.1.0-alpha.1`) has a relaxed RRR since there's no prior baseline.

## Review

Reviewed after the first stable release to assess whether the process fits.
