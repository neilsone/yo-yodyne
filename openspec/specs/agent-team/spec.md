# Spec: Agent Team

**Status:** ACTIVE
**Date:** 2026-03-08

---

## Requirement: Team Composition

#### Scenario: Agent Roles
- GIVEN the Yo-Yodyne agent team
- WHEN it is configured
- THEN it SHALL include the following roles:

| Agent | Unit | tmux Session |
|---|---|---|
| PI (Principal Investigator) | All | `pi` |
| Research Scientist | Research | `research` |
| Engineer | Engineering | `engineering` |
| Technician | Tech | `tech` |
| Writer | Production | `writer` |
| Creative Director | Production | `creative` |

## Requirement: Agent Orchestration

#### Scenario: tmux Sessions
- GIVEN the agent team
- WHEN agents are running
- THEN each agent SHALL operate in a named tmux session
- AND agents SHALL be configured as Claude Code Teams

#### Scenario: PI Oversight
- GIVEN the PI agent
- WHEN it operates
- THEN it SHALL have oversight authority across all units
- AND it SHALL be the escalation point for all disputes
- AND it SHALL set strategic direction

#### Scenario: Agent Autonomy
- GIVEN an agent with assigned work within its unit
- WHEN it executes
- THEN it SHALL operate autonomously within its unit's working agreements
- AND it SHALL follow the OPSX workflow for changes
- AND it SHALL respect the creative autonomy principle for cross-unit creative work

## Requirement: Cross-Unit Coordination

#### Scenario: OPSX Proposals
- GIVEN work that spans multiple units
- WHEN it is initiated
- THEN it SHALL be proposed via the OPSX workflow
- AND affected units SHALL be identified in the proposal

#### Scenario: Creative Briefs
- GIVEN Production-initiated creative work
- WHEN it requires contributions from other units
- THEN Production SHALL issue a creative brief
- AND the brief SHALL specify requirements without overriding creative autonomy
- AND the producing unit SHALL own creative decisions per the creative autonomy spec
