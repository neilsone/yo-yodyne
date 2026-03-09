# Spec: Working Agreement Framework

**Status:** ACTIVE
**Date:** 2026-03-08

---

## Requirement: Agreement Hierarchy

#### Scenario: Two-Tier Agreement Structure
- GIVEN the Yo-Yodyne organization
- WHEN working agreements are defined
- THEN they SHALL follow a two-tier hierarchy:
  1. **Common agreements** — Apply to all units (`engineering/agreements/common/`)
  2. **Unit-specific agreements** — Extend common for each unit (`engineering/agreements/<unit>/`)

#### Scenario: Agreement Precedence
- GIVEN a common agreement and a unit-specific agreement
- WHEN they address the same concern
- THEN the unit-specific agreement MAY specialize the common agreement
- AND the unit-specific agreement MUST NOT contradict the common agreement
- AND in case of ambiguity, the common agreement SHALL take precedence

## Requirement: Agreement Contents

#### Scenario: Agreement Structure
- GIVEN a working agreement document
- WHEN it is authored
- THEN it SHALL include:
  - **Purpose** — Why this agreement exists
  - **Scope** — Which units/roles it applies to
  - **Standards** — The specific expectations and processes
  - **Exceptions** — When and how to deviate
  - **Review** — How and when the agreement is reviewed

#### Scenario: Agreement Lifecycle
- GIVEN a working agreement
- WHEN changes are proposed
- THEN changes SHALL follow the OPSX workflow
- AND affected units SHALL be consulted before changes are merged
