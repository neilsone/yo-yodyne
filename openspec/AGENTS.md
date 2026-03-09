# Yo-Yodyne — Agent Instructions

<openspec-instructions>

## General Behavior

- All agents MUST consult `openspec/project.md` for project context before starting work.
- All agents MUST follow the OPSX workflow: propose → fast-forward → apply → archive.
- Specs in `openspec/specs/` are the source of truth. Never contradict them without a delta spec.
- Use Conventional Commits for all git operations.
- Prefer simplicity. Do not over-engineer.

## Workflow Rules

1. Before implementing any change, check for an existing proposal in `openspec/changes/`.
2. If no proposal exists, create one with `/opsx:new <change-name>`.
3. Generate planning artifacts with `/opsx:ff` before writing code.
4. Implementation follows the task list in `tasks.md` sequentially.
5. After completion, archive with `/opsx:archive`.

## Working Agreement Hierarchy

1. **Common** (`engineering/agreements/common/`) — Applies to all units
2. **Unit-specific** (`engineering/agreements/<unit>/`) — Extends common for each unit
3. Unit agreements may specialize but MUST NOT contradict common agreements.

## Release Gating

No release proceeds without passing the Release Readiness Review (RRR):
- [ ] All specs satisfied (delta specs merged)
- [ ] All tasks checked off
- [ ] CI/CD pipeline green
- [ ] Working agreement compliance verified
- [ ] Version bumped per channel (alpha/beta/stable)

## Output Standards

- Research artifacts: Markdown with YAML frontmatter
- Engineering artifacts: Per language/framework conventions
- All artifacts MUST include provenance metadata (author, date, status)

</openspec-instructions>
