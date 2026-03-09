# Design: Yo-Yodyne Labs Research Hub

**Change ID:** yo-yodyne-labs-init
**Date:** 2026-03-08

---

## Directory Structure

```
yo-yodyne/
├── .claude/
│   ├── settings.local.json
│   ├── CLAUDE.md                       # Project-level agent instructions
│   └── teams/
│       ├── pi.md                       # Principal Investigator
│       ├── researcher.md               # Research Scientist
│       ├── engineer.md                 # Engineer
│       ├── technician.md               # Technician
│       ├── writer.md                   # Writer
│       └── creative-director.md        # Creative Director
│
├── openspec/
│   ├── AGENTS.md                       # OpenSpec AI instructions
│   ├── project.md                      # Project context
│   ├── config.yaml                     # OpenSpec configuration
│   ├── specs/                          # Source of truth specifications
│   │   ├── org-structure/spec.md
│   │   ├── working-agreements/spec.md
│   │   ├── creative-autonomy/spec.md
│   │   ├── release-process/spec.md
│   │   ├── site/spec.md
│   │   └── agent-team/spec.md
│   ├── changes/
│   └── archive/
│
├── site/                               # Astro static site (yo-yodyne.com/labs)
│   ├── astro.config.mjs
│   ├── package.json
│   ├── src/
│   │   ├── content/                    # Content Collections
│   │   │   ├── config.ts              # Collection schemas
│   │   │   ├── research/              # Research articles
│   │   │   ├── experiments/           # Experiment logs
│   │   │   └── projects/             # Project summaries
│   │   ├── layouts/
│   │   │   ├── Base.astro            # Brand shell (nav, footer, tokens)
│   │   │   ├── Article.astro         # Research article layout
│   │   │   └── Experiment.astro      # Experiment log layout
│   │   ├── pages/
│   │   │   ├── index.astro           # Labs homepage
│   │   │   ├── about.astro           # About the lab
│   │   │   ├── research/             # Research section
│   │   │   ├── experiments/          # Experiments section
│   │   │   └── projects/            # Projects index
│   │   ├── components/
│   │   │   ├── Nav.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ContentCard.astro
│   │   │   ├── Gallery.astro
│   │   │   └── ExperimentTimeline.astro
│   │   └── styles/
│   │       ├── global.css            # Design tokens, reset, base typography
│   │       └── utilities.css         # Utility classes
│   ├── public/
│   │   └── fonts/                    # Self-hosted typefaces
│   └── worker/
│       └── labs-proxy.js             # Cloudflare Worker reverse proxy
│
├── research/                           # Research working directory
│   ├── agreements/
│   ├── papers/
│   ├── experiments/
│   └── templates/
│
├── engineering/
│   ├── agreements/
│   │   ├── common/                    # Shared across all units
│   │   │   ├── commit-conventions.md
│   │   │   ├── review-process.md
│   │   │   ├── artifact-metadata.md
│   │   │   ├── creative-autonomy.md  # The creative autonomy principle
│   │   │   └── dependency-management.md
│   │   ├── engineering/
│   │   │   ├── coding-standards.md
│   │   │   ├── release-process.md
│   │   │   └── ci-cd-standards.md
│   │   ├── research/
│   │   │   ├── experiment-protocol.md
│   │   │   └── publication-standards.md
│   │   └── production/
│   │       ├── content-standards.md
│   │       ├── publishing-workflow.md
│   │       ├── creative-brief-template.md
│   │       └── multimedia-standards.md
│   ├── dependencies/
│   │   └── registry.md
│   ├── standards/
│   └── templates/
│
├── production/
│   ├── agreements/
│   ├── briefs/                         # Creative briefs (active)
│   ├── content/                        # Content pipeline staging
│   ├── workshops/                      # Workshop notes and iterations
│   └── assets/                         # Media and design assets
│
├── .github/
│   └── workflows/
│       ├── deploy-site.yml
│       ├── release-gate.yml
│       └── spec-lint.yml
│
├── .gitignore
├── LICENSE
└── README.md
```

## Astro Site Architecture

### Content Collections (`src/content/config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    status: z.enum(['draft', 'informal', 'technical', 'published']),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()),
    authors: z.array(z.string()).default(['Neilson P. Eney']),
    abstract: z.string().optional(),
    coverImage: image().optional(),
    references: z.array(z.string()).optional(),
    // Dual presentation: informal treatment + technical depth
    audience: z.enum(['general', 'technical', 'both']).default('both'),
  }),
});

const experiments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['planned', 'active', 'complete', 'archived']),
    hypothesis: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()),
    relatedResearch: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['concept', 'active', 'complete', 'archived']),
    date: z.date(),
    tags: z.array(z.string()),
    coverImage: image().optional(),
    subdomain: z.string().optional(), // e.g., "projectname" → projectname.yo-yodyne.com
    repo: z.string().optional(),       // GitHub repo URL
  }),
});
```

### Design Tokens (`src/styles/global.css`)

```css
:root {
  /* Wabi-Sabi Palette */
  --ink: #2c2c2c;
  --paper: #f5f2ed;
  --stone: #8a8378;
  --shadow: #d4cfc7;
  --accent: #b8a88a;
  --void: #1a1917;

  /* Typography */
  --font-heading: 'Cormorant Garamond', 'Georgia', serif;
  --font-body: 'Karla', 'Helvetica Neue', sans-serif;
  --font-mono: 'JetBrains Mono', 'Menlo', monospace;

  --line-height: 1.7;
  --measure: 65ch;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* Transitions */
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 350ms;
}
```

### Cloudflare Worker (`worker/labs-proxy.js`)

```javascript
export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only intercept /labs paths
    if (!url.pathname.startsWith('/labs')) {
      return fetch(request);
    }

    // Rewrite to Cloudflare Pages origin
    const labsUrl = new URL(url.pathname.replace(/^\/labs/, '') || '/',
      'https://yo-yodyne-labs.pages.dev');
    labsUrl.search = url.search;

    const response = await fetch(labsUrl.toString(), {
      headers: request.headers,
      method: request.method,
    });

    // Return with original headers, add cache control
    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  }
};
```

### Astro Configuration (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yo-yodyne.com',
  base: '/labs',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
```

## Agent Team Configuration

Each agent is defined in `.claude/teams/` with:

- **Identity and unit assignment**
- **Core responsibilities**
- **Working agreements they follow** (common + unit-specific)
- **Creative autonomy scope** — what they own creatively
- **Escalation path** — always to PI for disputes

### Orchestration Pattern

```
PI (tmux session: pi)
├── Research Scientist (tmux session: research)
├── Engineer (tmux session: engineering)
├── Technician (tmux session: tech)
├── Writer (tmux session: writer)
└── Creative Director (tmux session: creative)
```

PI dispatches work via creative briefs (Production-initiated) or proposals (OPSX). Agents operate autonomously within their working agreements. Cross-unit coordination happens through the dependency registry and OPSX proposals.

## CI/CD Pipeline

### Site Deployment (`deploy-site.yml`)
1. **Trigger:** Push to `main` affecting `site/` directory
2. **Build:** `npm run build` in `site/` (Astro build with `/labs` base)
3. **Deploy:** Cloudflare Pages via `wrangler pages deploy`
4. **Worker:** Deploy/update the labs proxy Worker

### Release Gating (`release-gate.yml`)
1. **Trigger:** Tag matching `v*`
2. **Checks:** Spec validation, build verification, RRR checklist items
3. **Channel routing:** `-alpha` → alpha, `-beta` → beta, no suffix → stable

### Spec Lint (`spec-lint.yml`)
1. **Trigger:** PR affecting `openspec/`
2. **Checks:** Valid Markdown structure, normative language (SHALL/MUST), frontmatter completeness

## Cloudflare Setup Steps

1. Deploy Astro site to Cloudflare Pages project `yo-yodyne-labs`
2. Verify Adobe Portfolio custom domain is working at yo-yodyne.com
3. In Cloudflare DNS, switch A records from DNS-only to Proxied
4. Create Worker route: `yo-yodyne.com/labs/*` → labs-proxy Worker
5. Test both Adobe Portfolio and /labs site
6. For future projects: add CNAME records for subdomains → respective Pages projects
