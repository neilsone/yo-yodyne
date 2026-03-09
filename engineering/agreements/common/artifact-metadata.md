# Working Agreement: Artifact Metadata

**Scope:** All units
**Date:** 2026-03-08

---

## Purpose

Every artifact carries provenance metadata so its origin, status, and ownership are always clear.

## Standards

### Required Metadata

All artifacts (documents, specs, content, templates) SHALL include YAML frontmatter:

```yaml
---
title: "Artifact Title"
author: "Neilson P. Eney"       # or agent role
date: 2026-03-08                 # creation date
updated: 2026-03-08              # last modified
status: draft                    # draft | active | review | published | archived
unit: research                   # research | engineering | production | tech
tags: []                         # relevant tags
---
```

### Status Values

| Status | Meaning |
|---|---|
| `draft` | Work in progress, not reviewed |
| `active` | In use, reviewed and accepted |
| `review` | Submitted for review |
| `published` | Released to an audience |
| `archived` | No longer active, retained for reference |

### Code Artifacts

Code files use comments or package metadata rather than YAML frontmatter. The git log serves as provenance.

## Exceptions

- Config files (`.yaml`, `.toml`, `.json`) are exempt from frontmatter requirements
- Generated files are exempt

## Review

Reviewed if metadata becomes stale or the fields prove insufficient.
