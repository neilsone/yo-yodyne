# Working Agreement: Publishing Workflow

**Scope:** Production unit
**Date:** 2026-03-08

---

## Purpose

Define the pipeline from content creation to public availability on the labs site.

## Standards

### Pipeline Stages

1. **Ideation** — Concept development, creative briefs, workshopping
2. **Drafting** — Content authored in Markdown/MDX in `site/src/content/`
3. **Review** — Content reviewed per review process agreement
4. **Staging** — Content with `status: review` visible in development builds
5. **Publishing** — Content status set to `published`, merged to `main`, deployed

### Content Locations

| Stage | Location |
|---|---|
| Early drafts / notes | `production/content/` |
| Site-ready drafts | `site/src/content/<collection>/` with `status: draft` |
| Under review | Same location, `status: review` |
| Published | Same location, `status: published` |

### Curation

Not all research or experiments need to be published. The Production unit, with PI guidance, curates what reaches the public site. Criteria:

- Does it engage potential readers?
- Does it represent the Yo-Yodyne brand well?
- Is it complete enough to stand on its own?

### Scheduling

No fixed publishing schedule. Content is published when ready and when it serves the overall narrative of the labs site.

## Exceptions

- Time-sensitive content (conference deadlines, etc.) may use an expedited review

## Review

Reviewed after the first few publications to assess workflow fit.
