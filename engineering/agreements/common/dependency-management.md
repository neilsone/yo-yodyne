# Working Agreement: Dependency Management

**Scope:** All units
**Date:** 2026-03-08

---

## Purpose

Track and manage dependencies between units and external systems to prevent blocking and ensure delivery.

## Standards

### Dependency Registry

The Tech unit maintains `engineering/dependencies/registry.md` as the central dependency tracker.

### What Gets Tracked

| Dependency Type | Example |
|---|---|
| Inter-unit | Research produces data → Engineering builds visualization tool |
| Creative brief | Production requests photography → Research field unit produces images |
| External | npm packages, APIs, Cloudflare services |
| Blocking | Any dependency that prevents a unit from proceeding |

### Registry Format

```markdown
| ID | From | To | Description | Status | Owner | Target |
|---|---|---|---|---|---|---|
| D-001 | Production | Research | Field photography for article | active | Research | 2026-03-15 |
```

### Process

1. When a unit identifies a dependency, it adds an entry to the registry
2. The dependent unit is notified (via OPSX proposal or creative brief)
3. Status is updated as work progresses: `planned` → `active` → `resolved`
4. Blocking dependencies are flagged and reviewed in RRR

### Escalation

Blocking dependencies unresolved past their target date escalate to the PI.

## Exceptions

- Trivial internal dependencies (e.g., reading a shared template) need not be tracked
- Only track dependencies that could block or significantly delay work

## Review

Reviewed quarterly or when the registry becomes unwieldy.
