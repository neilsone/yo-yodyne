# Spec: Labs Site

**Status:** ACTIVE
**Date:** 2026-03-08

---

## Requirement: Hosting Architecture

#### Scenario: URL Structure
- GIVEN the Yo-Yodyne web presence
- WHEN users access the labs site
- THEN it SHALL be served at `yo-yodyne.com/labs/`
- AND subfolder organization SHALL be used for content sections
- AND individual projects SHALL be deployed as subdomains (`project.yo-yodyne.com`)

#### Scenario: Reverse Proxy
- GIVEN requests to `yo-yodyne.com/labs/*`
- WHEN the Cloudflare Worker intercepts them
- THEN it SHALL proxy to the Cloudflare Pages deployment
- AND all other requests SHALL pass through to Adobe Portfolio

## Requirement: Technology

#### Scenario: Framework
- GIVEN the labs site
- WHEN it is built
- THEN it SHALL use Astro with Content Collections
- AND it SHALL ship zero JavaScript by default
- AND interactive elements SHALL use Astro islands (selective hydration)
- AND content SHALL support MDX for embedded components

## Requirement: Content Types

#### Scenario: Content Collections
- GIVEN the site's content model
- WHEN content is authored
- THEN it SHALL conform to typed, schema-validated Content Collections:
  - **Research** — Articles with dual audience support (general + technical)
  - **Experiments** — Logs with hypothesis, status, and related research links
  - **Projects** — Summaries with optional subdomain and repo references

## Requirement: Brand Identity

#### Scenario: Visual Design (Iterative)
- GIVEN the labs site visual design
- WHEN it is implemented
- THEN it SHALL embody the Yo-Yodyne brand: refined, mysterious, wabi-sabi
- AND the initial implementation SHALL establish foundational design tokens
- AND the visual design SHALL be refined iteratively through subsequent proposals
- AND the site SHALL NOT feel like a generic documentation site or blog template

#### Scenario: Content Presentation
- GIVEN research content
- WHEN it is published to the site
- THEN it SHALL be curated to engage potential readers
- AND informal treatments for a general audience SHALL be accompanied by references to supporting equations and technical papers
- AND the presentation SHALL maintain the Yo-Yodyne brand voice
