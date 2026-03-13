# Yo-Yodyne

Research hub and creative production orchestration for [labs.yo-yodyne.com](https://labs.yo-yodyne.com).

## Structure

```
openspec/       Specifications and change management (OPSX workflow)
site/           Astro static site → labs.yo-yodyne.com
research/       Research artifacts
engineering/    Standards, working agreements, templates
production/     Creative briefs, content staging, multimedia
.claude/teams/  Agent team definitions
```

## Getting Started

```bash
cd site && npm install && npm run dev
```

## Spec-Driven Development

All changes follow the [OpenSpec](https://github.com/Fission-AI/OpenSpec) OPSX workflow:

1. `propose` — Create a change proposal
2. `fast-forward` — Generate specs, design, and tasks
3. `apply` — Implement the tasks
4. `archive` — Merge delta specs, archive the change

## License

MIT — Neilson P. Eney
