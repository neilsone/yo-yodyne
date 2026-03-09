# Spec: Release Process

**Status:** ACTIVE
**Date:** 2026-03-08

---

## Requirement: Release Channels

#### Scenario: Channel Definitions
- GIVEN a release artifact
- WHEN it is published
- THEN it SHALL be published to one of three channels:

| Channel | Tag Pattern | Audience | Quality Bar |
|---|---|---|---|
| alpha | `v*-alpha.*` | PI only | Functional, specs satisfied |
| beta | `v*-beta.*` | Early access | Polished, reviewed, brand-consistent |
| stable | `v*` | Public | Full RRR passed |

#### Scenario: Channel Progression
- GIVEN an artifact in alpha
- WHEN it is promoted
- THEN it SHALL progress alpha → beta → stable
- AND it SHALL NOT skip channels

## Requirement: Release Readiness Review (RRR)

#### Scenario: RRR Gate
- GIVEN a release candidate for beta or stable
- WHEN it is assessed for release
- THEN the following checklist SHALL be satisfied:
  - [ ] All delta specs merged to main specs
  - [ ] All tasks in tasks.md completed
  - [ ] CI/CD pipeline passing
  - [ ] Working agreement compliance verified
  - [ ] Content reviewed for accuracy and engagement
  - [ ] Brand consistency verified
  - [ ] Version bumped per channel convention
  - [ ] Changelog updated

#### Scenario: RRR Failure
- GIVEN a release candidate that fails RRR
- WHEN the failure is identified
- THEN the release SHALL be blocked
- AND the specific failures SHALL be documented
- AND the release SHALL NOT proceed until failures are resolved

## Requirement: Versioning

#### Scenario: Semantic Versioning
- GIVEN a version number
- WHEN it is assigned
- THEN it SHALL follow Semantic Versioning (MAJOR.MINOR.PATCH)
- AND channel suffixes SHALL be appended: `-alpha.N`, `-beta.N`, or none for stable
