# Design: Vinyl Library Organization System

**Change ID:** vinyl-library
**Date:** 2026-03-15

---

## Physical Layout

### Library Kallax (5x5) — Front View

```
         Col 1       Col 2       Col 3       Col 4       Col 5
       ┌───────────┬───────────┬───────────┬───────────┬───────────┐
Row 1  │  RESIDENT │  RESIDENT │  RESIDENT │  RESIDENT │  RESIDENT      │
(top)  │  CRATE    │  CRATE    │  CRATE    │  CRATE    │  CRATE    │
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
Row 2  │  RESIDENT │  RESIDENT │  RESIDENT      │  SESSION  │  SESSION  │
       │  CRATE    │  CRATE    │  CRATE    │  CRATE    │  / SINGLES│
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
Row 3  │  LIBRARY  │  LIBRARY  │  LIBRARY  │  LIBRARY  │  LIBRARY  │
       │  A ────── │ ──── F ── │ ── J ──── │ ─── M ── │ ── P ──── │
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
Row 4  │  LIBRARY  │  LIBRARY  │  LIBRARY  │  LIBRARY  │  LIBRARY  │
       │  R ────── │ ──── S ── │ ── T ──── │ ─── V ── │ ── W-Z ── │
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
Row 5  │  LESSER   │  LESSER   │QUARANTINE │QUARANTINE │  UTILITY  │
(bot)  │  CRATE    │  CRATE    │           │           │ /SUPPLIES │
       └───────────┴───────────┴───────────┴───────────┴───────────┘

 * Letter ranges are illustrative — actual breaks determined by
   collection density during implementation
 * Dashed lines (────) indicate contiguous alpha flow across cubbies
 * Row 1–2 cubby-to-crate assignments are flexible
```

### Equipment Kallax — Session Support Cubbies

```
       ┌───────────┬───────────┬───────────┬───────────┬───────────┐
       │           │           │ EXPANSION │ EXPANSION │           │
       │  (equip)  │  (equip)  │  CRATE    │  CRATE    │  (equip)  │
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
       │           │           │ EXPANSION │ EXPANSION │           │
       │  (equip)  │  (equip)  │  CRATE    │  CRATE    │  (equip)  │
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
       │           │  DECK A   │  DECK B   │ EXPANSION │ EXPANSION │
       │  (equip)  │  (playing)│  (playing)│  OVERFLOW │  OVERFLOW │
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
       │           │  RETURN   │  RETURN   │           │           │
       │  (equip)  │  RACK     │  RACK     │  (equip)  │  (equip)  │
       ├───────────┼───────────┼───────────┼───────────┼───────────┤
       │           │           │ EXPANSION │ EXPANSION │           │
       │  (equip)  │  (equip)  │  OVERFLOW │  OVERFLOW │  (equip)  │
       └───────────┴───────────┴───────────┴───────────┴───────────┘

 * Equipment cubby layout is illustrative — actual positions
   depend on existing gear placement
 * ~8 cubbies available for expansion across various heights
```

### Milk Crate Station (Near Decks)

```
   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
   │   DJ A's    │  │   DJ B's    │  │   GUEST     │
   │   SESSION   │  │   SESSION   │  │   CRATE     │
   │   CRATE     │  │   CRATE     │  │             │
   └─────────────┘  └─────────────┘  └─────────────┘
        Wood milk crates — portable, near the decks
```

---

## Cubby Capacity Planning

| Zone | Cubbies | Records/Cubby | Total Capacity |
|---|---|---|---|
| Main Library (Rows 3–4) | 10 | ~55 | ~550 |
| Resident Crates (Rows 1–2) | 8–10 | ~40–55 | ~320–550 |
| Lesser Crates (Row 5) | 2 | ~55 | ~110 |
| Singles | 1–2 | varies | varies |
| Quarantine (Row 5) | 1–2 | ~55 | ~110 |
| Expansion (Equip Kallax) | ~8 | ~55 | ~440 |
| **Total system capacity** | | | **~1500–1800** |

Current collection: 500–1000 records. System has ample capacity for growth.

---

## Archival Outer Sleeve — Sticker Placement

```
ARCHIVAL OUTER SLEEVE — SPINE VIEW
Zones aligned to physical Kallax layout

     ┌─── Sleeve opening (TOP) ───┐
     │                             │
     │   ┌─────────────────┐       │  ← Top region (maps to Rows 1–2)
     │   │  RESIDENT CRATE │       │     One active crate at a time
     │   │  STICKER         │       │     Cover over previous to change
     │   └─────────────────┘       │     DETERMINES ROUTING
     │                             │
     │   ● ● ●  GENRE DOTS        │  ← Middle region (maps to Rows 3–4)
     │                             │     Genre/energy color dots
     │                             │     Multiple dots allowed
     │                             │
     │   ┌─────────────────┐       │
     │   │  SESSION TAGS    │       │  ← Bottom region (archival)
     │   │  ▪ Weddings      │       │     Named session classes per DJ
     │   │  ▪ Pride Party   │       │     Max 3 per DJ, max 4 total per record
     │   └─────────────────┘       │     NEVER determines routing
     └──── Sealed edge (BOTTOM) ───┘

 Sleeve opening faces UP in the cubby to prevent
 the sleeve from sliding off during storage/retrieval
```

### Sticker Specifications

| Sticker Type | Region | Quantity per Record | Permanence | Routing? |
|---|---|---|---|---|
| Resident crate membership | Top | One at a time; cover over previous to change | Semi-permanent | **Yes** |
| Genre/energy dot | Middle | Multiple allowed | Permanent | No |
| Session tags | Bottom | Max 3 per DJ, max 4 total per record | Permanent | No |

### Session Tag Classes

Each DJ defines named session tag classes with distinct sticker designs:

**DJ A:**

| Tag Class | Sticker Design (indicative) |
|---|---|
| Weddings | Black with pink polka dots |
| Shadow Play | TBD |
| Yacht Rock | TBD |

**DJ B:**

| Tag Class | Sticker Design (indicative) |
|---|---|
| Pride Party | White with blue polka dots |

**Limits:**
- A single record MAY carry up to **3 session tags from one DJ**
- A single record MAY carry up to **4 session tags total** (across both DJs)
- New tag classes MAY be defined at any time

*Sticker designs are indicative — final designs confirmed at implementation.*

---

## Re-Shelving Protocol — Decision Flow

```
  Record in return rack
         │
         ▼
  ┌──────────────────┐
  │ Check TOP      │
  │ region of spine   │
  │ (resident crate area) │  │
  └────────┬─────────┘
           │
     ┌─────┴──────┐
     │             │
  Has resident  No resident
  crate         crate
  sticker       sticker
     │             │
     ▼             ▼
  Return to     Return to
  named resident     alpha position
  crate         in library
  (Rows 1-2     (Rows 3-4)
   or Row 5)
```

**Key rules:**
- Resident crate sticker always has routing priority
- Session stickers are ignored for routing purposes
- Genre dots are ignored for routing purposes
- Guest DJs use the return rack; host DJs process it post-session

---

## Record Lifecycle

```
  ┌──────────┐
  │ INCOMING │  New acquisition or donation
  └────┬─────┘
       │
       ▼
  ┌──────────┐     Fails quality bar     ┌─────────────┐
  │ TRIAGE   │ ─────────────────────────▶ │ QUARANTINE  │
  └────┬─────┘                            │ (Row 5)     │
       │                                  └──────┬──────┘
       │ Passes quality bar                      │ Cleaned / sleeved
       ▼                                         │
  ┌──────────────┐ ◀─────────────────────────────┘
  │ MAIN LIBRARY │
  │ (Rows 3-4)   │
  │ Alpha by      │
  │ artist        │
  └──┬────────┬──┘
     │        │
     │        │  Pulled into resident crate
     │        ▼
     │   ┌──────────┐
     │   │ RESIDENT │  Long-term residence
     │   │ CRATE    │  (Rows 1-2 / Row 5)
     │   │          │
     │   └──┬───────┘
     │      │
     │      │  Pulled for session
     │      ▼
     │  ┌───────────┐
     ├─▶│ MILK      │  Active session workspace
     │  │ CRATE /   │  (near decks)
     │  │ SESSION   │
     │  └──┬────────┘
     │     │
     │     │  Played
     │     ▼
     │  ┌───────────┐
     │  │ DECK A/B  │  On the turntable
     │  │ CUBBY     │
     │  └──┬────────┘
     │     │
     │     │  Finished playing
     │     ▼
     │  ┌───────────┐
     │  │ RETURN    │  Buffer zone
     │  │ RACK      │
     │  └──┬────────┘
     │     │
     │     │  Re-shelving protocol
     │     │  (check top spine region)
     │     │
     ├─────┘  No resident crate sticker → library
     │
     └────── Has resident crate sticker → resident crate
```

---

## Reference Board Design

The reference board is a single wall-mounted panel with three sections, readable from the deck area.

### Section 1: Color Dot Legend

```
┌─────────────────────────────────────────────┐
│                                             │
│           G E N R E  /  E N E R G Y         │
│                                             │
│    ●  Red ........... High energy / floor    │
│    ●  Blue .......... Downtempo / chill      │
│    ●  Green ......... Funk / soul / groove   │
│    ●  Yellow ........ Electronic / synth     │
│    ●  Black ......... Hip-hop / breaks       │
│    ●  White ......... Jazz / experimental    │
│    ●  Brown ......... Spoken word / stage    │
│    ●  Purple ........ Classical / orchestral │
│                                             │
│  * A record may have multiple dots           │
│                                             │
└─────────────────────────────────────────────┘
```

### Section 2: Sticker Guide

```
┌─────────────────────────────────────────────┐
│                                             │
│       S T I C K E R   G U I D E             │
│                                             │
│  SPINE LAYOUT (top to bottom):              │
│                                             │
│    TOP:    ● ● ●   Genre/energy dots        │
│    MIDDLE: [▪▪▪]   Resident crate membership     │
│    BOTTOM: [::::]   Session history          │
│                                             │
│  ─────────────────────────────────────────  │
│                                             │
│  RESIDENT CRATE sticker = return to that crate   │
│  SESSION sticker   = ignore for routing     │
│  NO sticker        = return to LIBRARY      │
│                                             │
└─────────────────────────────────────────────┘
```

### Section 3: Shelving Map

```
┌─────────────────────────────────────────────┐
│                                             │
│     L I B R A R Y   K A L L A X            │
│                                             │
│  Row 1  │ RESIDENT CRATES (browse here first!)   │
│  Row 2  │ RESIDENT CRATES + SESSION CRATES       │
│  ───────┼─────────────────────────────────  │
│  Row 3  │ LIBRARY  A ──────────── ▶         │
│  Row 4  │ LIBRARY  ──────────── Z ▶         │
│  ───────┼─────────────────────────────────  │
│  Row 5  │ LESSER CRATES / QUARANTINE        │
│         │ (do not pull from quarantine)      │
│                                             │
│  RETURN RACK: Equipment shelf — put played  │
│  records here, we'll sort them later        │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Crate Divider Label Template

Each crate within a Kallax cubby is separated by a tabbed divider with the following information:

```
┌─────────────────────────┐
│  CRATE NAME             │  ← Large, readable from arm's length
│  Owner: DJ A / DJ B / ∗ │  ← ∗ = Shared
│  Type: RESIDENT / SESSION    │
└─────────────────────────┘
```

---

## Materials List (Implementation)

| Item | Purpose | Quantity |
|---|---|---|
| Archival outer sleeves (12" LP) | Sticker surface, protection | 500–1000 |
| Archival outer sleeves (12" single) | Sticker surface, protection | As needed |
| Archival outer sleeves (7" single) | Sticker surface, protection | As needed |
| Color dot stickers (8 colors) | Genre/energy marking | Bulk |
| Resident crate stickers (TBD design) | Crate membership marking | Bulk |
| Session stickers (black/pink, white/blue) | Session history marking | Bulk |
| Plain cover stickers (black, white) | Sticker nullification | Small supply |
| Tabbed letter dividers (A–Z) | Library navigation | 26+ |
| Tabbed crate dividers | Crate separation within cubbies | 10–15 |
| Wall-mount board / frame | Reference board display | 1 |
| Board printing or hand-lettering | Reference board content | 1 |
