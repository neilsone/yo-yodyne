# Change Proposal: Vinyl Library Organization System

**Author:** PI
**Status:** PROPOSED
**Date:** 2026-03-15
**Change ID:** vinyl-library

---

## Motivation

DJ A and DJ B share a vinyl collection of approximately 500–1000 records stored in a studio space where they host DJ sessions — solo, collaborative, and with guest DJs. The current organizational scheme (loose genre bins with alphabetical sub-sorting) creates persistent friction:

1. **Re-shelving ambiguity** — When a record is removed from the library and later returned, the DJ must re-decide which genre bin it belongs to. The two DJs often classify the same record differently, causing records to drift and become unfindable.
2. **No check-out/check-in signal** — There is no way to determine whether a played record should return to a curated crate or to the general library.
3. **Guest DJ accessibility** — Visiting DJs have no orientation to the collection and no quick way to find records that match their vibe.
4. **Condition ambiguity** — Records in various states of disrepair are interspersed with playable records, creating a poor session experience.

The two DJs also have different cognitive styles: DJ A recalls by artist/track name; DJ B recalls by concept, mood, and association. The system must serve both.

---

## Scope

### In Scope

- Physical organization of the vinyl library across existing Kallax shelving
- Crate taxonomy (resident crates, session crates) and lifecycle
- Three-sticker labeling system (genre dots, resident crate membership, session history)
- Re-shelving protocol and return rack workflow
- Quarantine zone for sub-quality records
- Separate singles storage (12" and 7")
- Wall-mounted reference board design
- Guest DJ onboarding experience
- Portable milk crate designations

### Out of Scope

- Digital catalog or inventory database (analog-first by design)
- Record acquisition, purchasing, or trading workflows
- Audio equipment setup or turntable configuration
- Detailed condition grading system (quarantine is binary: playable or not)
- Specific genre/energy color assignments (deferred to implementation)

---

## Design Summary

### Core Principle: Fixed Position, Genre as Overlay

The main library is sorted **alphabetically by artist (A–Z)** with no genre-based physical sorting. Genre information is encoded as **color dot stickers** on the record spine — a visual overlay that supports conceptual browsing without creating classification disputes.

### Physical Layout (Library Kallax 5x5)

- **Rows 1–2:** Resident crates and session crates (prime ergonomic position)
- **Rows 3–4:** Main library, A–Z contiguous (natural browse flow)
- **Row 5:** Lesser-referenced resident crates, quarantine, utility

### Three-Sticker System on Archival Outer Sleeve

Stickers are placed top-to-bottom on the spine of an archival outer sleeve (never on original packaging):

- **Top region:** Genre/energy color dots (multiple allowed)
- **Middle region:** Resident crate membership sticker (one at a time, layered to change)
- **Bottom region:** Session history markers (archival, accumulate over time)

### Re-Shelving Protocol

- Resident crate sticker present → return to named crate
- No resident crate sticker → return to alpha position in library
- Session stickers are archival only and never determine routing

### Key Mechanisms

- **Return rack** on Equipment Kallax decouples playing from re-shelving
- **Session crates dissolve naturally** as records are re-shelved via protocol
- **Quarantine zone** separates non-playable records from the active library
- **Reference board** provides at-a-glance orientation for all DJs including guests

---

## Impact

- **New spec:** `openspec/specs/vinyl-library/spec.md`
- **No existing specs modified**
- **No code changes** — this is a physical organization system
- **Unit:** Production (creative/studio operations)
