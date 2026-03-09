# Working Agreement: Commit Conventions

**Scope:** All units
**Date:** 2026-03-08

---

## Purpose

Consistent commit messages enable automated changelogs, clear history, and efficient review.

## Standards

All commits SHALL follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Use |
|---|---|
| `feat` | New feature or capability |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `chore` | Maintenance, tooling, config |
| `refactor` | Code change that neither fixes nor adds |
| `test` | Adding or updating tests |
| `style` | Formatting, whitespace (no logic change) |
| `ci` | CI/CD pipeline changes |
| `spec` | OpenSpec specification changes |

### Scope

Optional. Use the unit or area name: `feat(research):`, `fix(site):`, `docs(engineering):`.

### Breaking Changes

Append `!` after type: `feat!: redesign content schema`. Include `BREAKING CHANGE:` in footer.

## Exceptions

- During initial project scaffolding, `chore: scaffold` is acceptable for bulk setup.
- Automated commits (CI/CD) may use `ci:` without body.

## Review

Reviewed when commit conventions cause friction or the project's needs change.
