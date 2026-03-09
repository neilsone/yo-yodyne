# Working Agreement: Coding Standards

**Scope:** Engineering unit
**Date:** 2026-03-08

---

## Purpose

Maintain consistent, readable, and maintainable code across all Yo-Yodyne software.

## Standards

### General

- Prefer simplicity over cleverness
- Prefer readability over brevity
- Don't over-engineer — solve the current problem, not hypothetical future ones
- Delete dead code; don't comment it out

### Languages

| Language | Formatter | Linter | Style |
|---|---|---|---|
| TypeScript/JavaScript | Prettier | ESLint | Astro defaults |
| CSS | Prettier | Stylelint | BEM-lite for class naming |
| Markdown | Prettier | markdownlint | CommonMark |
| YAML | Prettier | yamllint | 2-space indent |
| Shell | shfmt | shellcheck | POSIX-compatible when possible |

### File Organization

- One concern per file
- Name files descriptively (not `utils.ts`, `helpers.ts`)
- Co-locate tests with source when practical

### Documentation

- Code should be self-documenting; add comments only when the *why* isn't obvious
- Public APIs get JSDoc/TSDoc
- Complex algorithms get a brief explanation

### Dependencies

- Minimize external dependencies
- Evaluate before adding: is it maintained? Is it worth the weight?
- Pin versions in production; use ranges in libraries

## Exceptions

- Prototypes and experiments may relax formatting requirements
- Generated code is exempt

## Review

Reviewed when new languages or frameworks are adopted.
