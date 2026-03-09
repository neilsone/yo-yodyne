# Working Agreement: Creative Brief Template

**Scope:** Production unit
**Date:** 2026-03-08

---

## Purpose

Standardize how Production communicates creative needs to other units.

## Standards

### Template

```yaml
---
title: "Brief Title"
date: 2026-03-08
from: production
to: [target unit]
status: open           # open | in-progress | delivered | closed
priority: normal       # low | normal | high
deadline: null         # or specific date
---
```

### Brief Sections

```markdown
## Objective
What this deliverable will be used for and why it matters.

## Requirements
Concrete, measurable specifications:
- Subject/topic
- Format and dimensions
- Technical constraints
- Quantity

## Creative Direction (optional)
Only include if specific creative constraints are needed.
If omitted, the producing unit has full creative discretion
per the creative autonomy agreement.

## Context
Background that helps the producing unit understand the bigger picture.

## Deliverables
What exactly should be produced and in what format.

## Timeline
When it's needed and any intermediate milestones.
```

### Key Rules

1. Requirements are binding; creative direction is guidance unless explicitly marked as required
2. If no creative direction section is included, the producing unit has complete creative freedom
3. Briefs are tracked in the dependency registry when they create inter-unit dependencies
4. Briefs live in `production/briefs/`

## Exceptions

- Informal requests between individuals don't need a full brief
- Only use briefs when the work is substantial enough to warrant tracking

## Review

Reviewed after the first few briefs are completed.
