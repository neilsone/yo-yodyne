# Spec: Vinyl Library Organization System

**Status:** DRAFT
**Date:** 2026-03-15

---

## Requirement: Library Physical Layout

#### Scenario: Primary Kallax row allocation
- GIVEN a 5x5 Library Kallax shelf
- WHEN the library is organized
- THEN Rows 1–2 SHALL be allocated to resident crates and session crates
- AND Rows 3–4 SHALL be allocated to the main alpha-sorted library as a contiguous block
- AND Row 5 SHALL be allocated to lesser-referenced resident crates, quarantine, and utility storage

#### Scenario: Main library contiguous browsing
- GIVEN the main library occupies Rows 3–4
- WHEN a DJ browses the library
- THEN records SHALL be sorted alphabetically by artist name from left to right across Row 3, continuing left to right across Row 4
- AND tabbed letter dividers SHALL mark letter boundaries for navigation

#### Scenario: Equipment Kallax session support
- GIVEN an Equipment Kallax with available cubbies
- WHEN the studio is configured for sessions
- THEN there SHALL be a designated cubby for the album currently on Deck A
- AND there SHALL be a designated cubby for the album currently on Deck B
- AND there SHALL be one or more cubbies designated as a return rack

#### Scenario: Equipment Kallax expansion capacity
- GIVEN the Equipment Kallax has cubbies not allocated to equipment
- WHEN the library or crate system needs additional capacity
- THEN available cubbies on the Equipment Kallax MAY be used for crate or library overflow

#### Scenario: Portable milk crate designations
- GIVEN three wood milk crates located near the decks
- WHEN a session is in progress
- THEN one milk crate SHALL be designated as DJ A's session crate
- AND one milk crate SHALL be designated as DJ B's session crate
- AND one milk crate SHALL be designated as the guest crate

---

## Requirement: Alphabetical Sort as Primary Organization

#### Scenario: Record home position
- GIVEN a record that has cleared the quality bar
- WHEN it is not checked out into a crate
- THEN it SHALL reside in the main library at its alphabetical position by artist name

#### Scenario: No genre-based physical sorting
- GIVEN the main library
- WHEN records are shelved
- THEN records SHALL NOT be physically separated into genre sections
- AND genre information SHALL be encoded only as color dot stickers on the archival outer sleeve

#### Scenario: Letter density distribution
- GIVEN that some letters have significantly more artists than others
- WHEN cubby boundaries are assigned
- THEN high-density letters (e.g., S, B, C, D) MAY span multiple cubbies
- AND low-density letters (e.g., X, Q, Z) MAY share a cubby

---

## Requirement: Crate Taxonomy

#### Scenario: Resident crate definition
- GIVEN a curated sub-collection intended for long-term or semi-permanent use
- WHEN it is established in the system
- THEN it SHALL be designated as a resident crate
- AND it SHALL have a name, an owner (DJ A, DJ B, or Shared), and a type label of Resident
- AND it SHALL reside in Rows 1–2 of the Library Kallax, or Row 5 for lesser-referenced crates

#### Scenario: Session crate definition
- GIVEN a curated sub-collection built for a specific gig or set
- WHEN it is established in the system
- THEN it SHALL be designated as a session crate
- AND it SHALL have a name, an owner (DJ A, DJ B, or Shared), and a type label of Session

#### Scenario: Session crate natural dissolution
- GIVEN a session crate containing records
- WHEN individual records from the session crate are played and re-shelved via the re-shelving protocol
- THEN each record SHALL return to its resident crate (if it has a resident crate sticker) or to its alpha position in the library
- AND the session crate SHALL be considered retired once all its records have been re-shelved

#### Scenario: Resident crate capacity
- GIVEN the library system
- WHEN resident crates are created
- THEN the system SHALL support 5–10 resident crates initially
- AND additional capacity MAY be added via Equipment Kallax overflow cubbies

#### Scenario: Crate ownership
- GIVEN a crate with a designated owner
- WHEN another DJ encounters the crate
- THEN the ownership designation SHALL be visible on the crate divider or label
- AND shared crates MAY be browsed and pulled from by any DJ

---

## Requirement: Three-Sticker System

#### Scenario: Sticker application surface
- GIVEN a record in the library
- WHEN stickers are applied
- THEN stickers SHALL be placed only on the archival outer sleeve
- AND stickers SHALL NOT be placed on the original album packaging

#### Scenario: Archival sleeve orientation
- GIVEN an archival outer sleeve
- WHEN it is stored in a cubby
- THEN the sleeve opening SHALL face upward (toward the top of the cubby)
- AND this orientation SHALL prevent the sleeve from sliding off the record when the album is placed into or removed from the cubby

#### Scenario: Sticker placement regions on spine
- GIVEN the spine of an archival outer sleeve with the opening at top
- WHEN stickers are placed
- THEN resident crate membership stickers SHALL be placed in the top region of the spine
- AND genre/energy color dots SHALL be placed in the middle region of the spine
- AND session tag stickers SHALL be placed in the bottom region of the spine

#### Scenario: Sticker region alignment with physical layout
- GIVEN the sticker regions on the spine and the Kallax row allocations
- WHEN a DJ reads the spine from top to bottom
- THEN the top region (resident crate) SHALL correspond to the physical location of crates in Rows 1–2
- AND the middle region (genre dots) SHALL correspond to the library's genre-overlay function in Rows 3–4
- AND the bottom region (session tags) SHALL correspond to archival metadata

---

## Requirement: Resident Crate Membership Sticker

#### Scenario: Single crate membership
- GIVEN a record
- WHEN it is assigned to a resident crate
- THEN it SHALL belong to only one resident crate at a time

#### Scenario: Crate membership change
- GIVEN a record with an existing resident crate sticker
- WHEN its resident crate assignment is changed
- THEN the new resident crate sticker SHALL be applied over the existing sticker, fully covering it
- AND only the visible (top) sticker SHALL determine current routing

#### Scenario: Resident crate routing priority
- GIVEN a record with both a resident crate sticker and a session tag sticker
- WHEN the record is re-shelved
- THEN the resident crate sticker SHALL take routing priority
- AND the record SHALL be returned to the named resident crate

---

## Requirement: Genre/Energy Color Dots

#### Scenario: Color dot application
- GIVEN a record in the library or a crate
- WHEN genre/energy classification is applied
- THEN one or more color dot stickers SHALL be placed in the middle region of the archival sleeve spine
- AND each color SHALL correspond to a genre/energy category defined on the reference board

#### Scenario: Multiple genre classification
- GIVEN a record that spans multiple genres or energies
- WHEN dots are applied
- THEN the record MAY have multiple color dots simultaneously

#### Scenario: Color dot legend
- GIVEN the reference board
- WHEN a DJ needs to interpret color dots
- THEN the reference board SHALL display each color at actual size alongside its genre/energy label

---

## Requirement: Session Tag Stickers

#### Scenario: Session tag class definition
- GIVEN a DJ who creates session crates
- WHEN they establish recurring session contexts
- THEN each DJ MAY define named session tag classes (e.g., DJ A: "Weddings", "Shadow Play", "Yacht Rock"; DJ B: "Pride Party")
- AND each session tag class SHALL have a distinct visual sticker design
- AND new session tag classes MAY be defined at any time

#### Scenario: Session sticker application
- GIVEN a record pulled into a session crate
- WHEN it is added to the session crate
- THEN it SHALL receive a session tag sticker matching the session's class in the bottom region of the archival sleeve spine

#### Scenario: Session sticker limits per record
- GIVEN a record with session tag stickers
- WHEN additional session stickers are applied
- THEN a maximum of 3 session tag stickers from any single DJ MAY be applied to one record
- AND a maximum of 4 session tag stickers total (across all DJs) MAY be applied to one record

#### Scenario: Session sticker permanence
- GIVEN a record with a session tag sticker
- WHEN the associated session crate is retired
- THEN the session sticker SHALL remain on the record as a permanent historical artifact
- AND the session sticker SHALL NOT determine re-shelving routing

#### Scenario: Session sticker nullification
- GIVEN a record with a session sticker that is no longer desired
- WHEN the DJ wishes to remove or nullify it
- THEN the sticker MAY be covered with a plain sticker or physically removed
- AND removing a sticker SHALL free one slot toward the applicable maximum

#### Scenario: Cross-DJ session sticker handling
- GIVEN a record with DJ A's session sticker
- WHEN DJ B encounters the record during re-shelving
- THEN DJ B MAY safely ignore DJ A's session sticker
- AND DJ B SHALL re-shelve based only on the resident crate sticker (if present) or alpha position (if not)

---

## Requirement: Re-Shelving Protocol

#### Scenario: Re-shelving a record with a resident crate sticker
- GIVEN a record in the return rack with a visible resident crate sticker in the top spine region
- WHEN it is re-shelved
- THEN it SHALL be returned to the named resident crate

#### Scenario: Re-shelving a record without a resident crate sticker
- GIVEN a record in the return rack with no resident crate sticker (regardless of session stickers or genre dots)
- WHEN it is re-shelved
- THEN it SHALL be returned to its alphabetical position in the main library

#### Scenario: Return rack as session buffer
- GIVEN a DJ in the middle of a set
- WHEN a record has been played and removed from the deck
- THEN the DJ SHALL place it in the return rack
- AND the return rack SHALL be processed after the session ends using the re-shelving protocol

#### Scenario: Guest DJ re-shelving
- GIVEN a guest DJ who has played records during a session
- WHEN the guest is done with a record
- THEN the guest SHALL place it in the return rack
- AND the host DJs SHALL process the return rack after the session
- AND guests SHALL NOT be expected to know the re-shelving protocol

---

## Requirement: Quarantine Zone

#### Scenario: Quarantine criteria
- GIVEN a record that does not meet the minimum quality bar
- WHEN it is identified as needing cleaning, re-sleeving, or is missing vinyl
- THEN it SHALL be placed in the quarantine zone in Row 5 of the Library Kallax

#### Scenario: Quarantine playability restriction
- GIVEN a record in the quarantine zone
- WHEN a DJ is selecting records for a session
- THEN quarantine records SHALL NOT be pulled for play

#### Scenario: Quarantine to library promotion
- GIVEN a quarantined record that has been cleaned, re-sleeved, or otherwise resolved
- WHEN it clears the minimum quality bar
- THEN it SHALL be promoted to the main library at its alpha position
- AND it SHALL receive an archival outer sleeve and appropriate stickers

---

## Requirement: Singles Storage

#### Scenario: Physical separation of singles
- GIVEN the collection includes 12" singles and 7" singles in addition to albums
- WHEN the library is organized
- THEN 12" singles SHALL be stored in a dedicated cubby or bin separate from albums
- AND 7" singles SHALL be stored in a dedicated cubby or bin separate from both albums and 12" singles

#### Scenario: Singles sort order
- GIVEN a singles bin (12" or 7")
- WHEN singles are sorted internally
- THEN they SHALL be sorted by genre/energy rather than alphabetically
- AND the same color dot system SHALL apply to singles

---

## Requirement: Reference Board

#### Scenario: Reference board placement
- GIVEN a wall-mounted reference board
- WHEN the studio is configured
- THEN the board SHALL be mounted near the Library Kallax and visible from the deck area

#### Scenario: Reference board content — color dot legend
- GIVEN the reference board
- WHEN displayed
- THEN it SHALL include a section showing each genre/energy color dot at actual size with its label

#### Scenario: Reference board content — sticker guide
- GIVEN the reference board
- WHEN displayed
- THEN it SHALL include a section explaining all three sticker types, their spine placement (top: resident crate, middle: genre dots, bottom: session tags), and their meaning

#### Scenario: Reference board content — shelving map
- GIVEN the reference board
- WHEN displayed
- THEN it SHALL include a diagram of the Library Kallax showing the row allocations (Rows 1–2 crates, Rows 3–4 library, Row 5 quarantine)
- AND it SHALL include a succinct summary of the re-shelving protocol

#### Scenario: Reference board guest accessibility
- GIVEN a guest DJ who has never visited the studio
- WHEN they look at the reference board
- THEN they SHALL be able to understand the organization system without verbal explanation from the host DJs
