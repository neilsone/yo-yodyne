# Working Agreement: Experiment Protocol

**Scope:** Research unit
**Date:** 2026-03-08

---

## Purpose

Ensure experiments are designed, documented, and reproducible.

## Standards

### Experiment Lifecycle

1. **Design** — Document hypothesis, methodology, expected outcomes, and success criteria
2. **Execute** — Run the experiment, logging observations
3. **Analyze** — Process results against hypothesis
4. **Report** — Write up findings (informal + technical as appropriate)
5. **Archive** — Store experiment artifacts with metadata

### Experiment Document Structure

```yaml
---
title: "Experiment Title"
status: planned        # planned | active | complete | archived
hypothesis: "If X, then Y because Z"
date: 2026-03-08
updated: 2026-03-08
unit: research
tags: []
---

## Hypothesis
## Methodology
## Materials / Dependencies
## Observations
## Results
## Analysis
## Conclusions
## References
```

### Reproducibility

- All experiment parameters MUST be documented
- Data sources MUST be cited or included
- Computational experiments MUST include environment details (versions, seeds, configs)

### Publication Path

Experiments that produce publishable findings follow the publication standards agreement for preparation and the Production unit's publishing workflow for release.

## Exceptions

- Quick exploratory experiments ("spikes") may use abbreviated documentation but MUST still have a hypothesis and conclusion.

## Review

Reviewed after the first batch of experiments to assess practical fit.
