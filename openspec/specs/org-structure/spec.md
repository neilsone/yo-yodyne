# Spec: Organizational Structure

**Status:** ACTIVE
**Date:** 2026-03-08

---

## Requirement: Unit Structure

Yo-Yodyne operates as four loosely coupled units. Each unit is independently responsible for its domain.

#### Scenario: Unit Definitions
- GIVEN the Yo-Yodyne organization
- WHEN work is initiated
- THEN it SHALL be assigned to one of the four units based on domain:

| Unit | Domain | Owns |
|---|---|---|
| **Research** | Scientific inquiry | Hypotheses, experiments, papers, analysis, data, references |
| **Engineering** | Software and systems | Code, specs, tests, releases, toolchains, CI/CD |
| **Production** | Creative and publishing | Content, multimedia, briefs, publishing, workshops, envisioning |
| **Tech** | Cross-cutting standards | ADRs, standards, dependency registry, architecture |

#### Scenario: Unit Independence
- GIVEN a unit with assigned work
- WHEN the unit executes on that work
- THEN the unit SHALL operate independently within its working agreements
- AND the unit SHALL NOT require approval from other units for decisions within its domain
- AND cross-unit coordination SHALL occur through OPSX proposals or creative briefs

#### Scenario: Production as Creative Engine
- GIVEN the Production unit
- WHEN creative content is needed across the organization
- THEN Production SHALL initiate work via creative briefs
- AND creative briefs MAY generate tasks for any unit
- AND the creative team within Production SHALL drive experimental and developmental efforts across units

#### Scenario: Tech as Glue Layer
- GIVEN the Tech unit
- WHEN cross-cutting technical concerns arise
- THEN Tech SHALL own and maintain:
  - The dependency registry
  - Architecture Decision Records
  - Technical standards that span units
- AND Tech SHALL facilitate inter-unit technical coordination

#### Scenario: PI Authority
- GIVEN the Principal Investigator (Neilson P. Eney)
- WHEN strategic direction, dispute resolution, or cross-unit alignment is needed
- THEN the PI SHALL have final authority
- AND all units SHALL escalate unresolved disputes to the PI
