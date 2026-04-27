/**
 * Case pages — simple vertical rhythm (reference: davidhuynh.se–style case studies):
 *   eyebrow → title → lede → full-width image → text → full-width image → text → …
 * Swap placeholder copy; add imageSrc on figures when extending the renderer.
 * Raster covers: copy full-resolution files into public/cases/ in the repo (chat uploads are recompressed).
 */

/** Resolve `public/` paths for Vite `base` (e.g. `/portfolio/`). */
export function caseAsset(path: string): string {
  const p = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${p}`;
}

export type FigureSpec = {
  aspectRatio: string;
  badge: string;
  caption?: string;
  /** Optional image under `public/` — use `caseAsset('cases/...')` */
  src?: string;
  alt?: string;
};

export type CaseBlock =
  | { kind: 'text'; paragraphs: string[] }
  | { kind: 'figure'; spec: FigureSpec };

export type PortfolioCase = {
  eyebrow?: string;
  title: string;
  lede: string;
  /** Optional public teaser bullets (context, role, approach, outcome). Falls back to a generic template in the case page. */
  teaserBullets?: string[];
  /** Extra confidentiality note shown on the password gate for locked cases. */
  lockDisclaimer?: string;
  hero: FigureSpec;
  /** After the hero: alternate `text` and `figure` blocks (full-width stack). */
  body: CaseBlock[];
  cta?: { to: string; label: string };
};

export const PORTFOLIO_CASES: Record<string, PortfolioCase> = {
  miro: {
    eyebrow: 'Miro',
    title: 'Growth design — product surfaces',
    lede:
      'End-to-end product design for growth on a widely used visual collaboration platform — community-led programs (including template ecosystems), acquisition and in-product signup, enterprise trial and expansion, and evolving self-serve monetization. This page is a portfolio-safe teaser; the full narrative, artifacts, and confidential detail sit behind the password gate.',
    teaserBullets: [
      'Context: a global collaboration product serving creators, teams, and large organizations — growth work had to connect organic community discovery, first-session value, land-and-expand motion, and trusted purchase paths.',
      'Role: product design from framing through shipped UI, in close partnership with product, engineering, and go-to-market partners — systems-aware craft across high-stakes flows.',
      'Approach: iterative delivery grounded in research and product learning — prototype-led exploration, careful UX and copy on conversion surfaces, and explicit attention to clarity for both end users and buyers.',
      'Outcome: directional progress on activation, account expansion, and monetization; specifics (metrics, experiments, and proprietary mechanics) are reserved for the full case shared under NDA.',
    ],
    lockDisclaimer:
      'Public content stays generic: no non-public numbers, internal experiment detail, or unreleased product information. Teaser visuals are or will be sanitized portfolio mockups, not confidential ship shots.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Teaser · Cover',
      src: caseAsset('cover_miro_26.png'),
      alt: 'Miro case study cover',
      caption: 'Public teaser cover for Miro growth case studies.',
    },
    body: [
      {
        kind: 'text',
        paragraphs: [
          'Full case (private): role and timeline, team shape, problem framing, and how success was defined without over-sharing.',
          'What moved the work forward — constraints, trade-offs, and the narrative that ties the streams together.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Teaser · Acquisition / activation',
          caption:
            'First teaser visual — sanitized acquisition or in-product signup moment (per portfolio plan).',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          'Deeper process and decisions: exploration breadth, what was validated, and how the UX held up in production.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Teaser · Monetization / enterprise',
          caption:
            'Second teaser visual — sanitized monetization, checkout, or enterprise expansion moment.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          'Ship and learn: collaboration model, what shipped, and what you would iterate next — written for hiring-manager review.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '21 / 9',
          badge: 'Full case · Wide strip',
          caption: 'Optional wide flow — multi-step journey or before/after collage (sanitized).',
        },
      },
    ],
    cta: { to: '/contact', label: 'Request access or discuss →' },
  },

  'wix-groups': {
    eyebrow: 'Wix.com',
    title: 'Wix Groups — case template',
    lede:
      '[Placeholder] Product one-liner, your mandate, and the scale signal (e.g. cross-platform, 200M+ users).',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Cover · Placeholder',
      caption: 'Full-width hero — marketing still, product composite, or hero flow.',
    },
    body: [
      {
        kind: 'text',
        paragraphs: [
          '[Text] Background: where this lived in the platform and why it mattered.',
          '[Text] Who you designed for and what “good” looked like.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Fig 1 · Placeholder',
          caption: 'Full-width image — ecosystem, IA, or builder context.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          '[Text] Problem and constraints — user pain, business goals, technical limits.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Fig 2 · Placeholder',
          caption: 'Full-width image — opportunity map, flows, or key screens.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          '[Text] Delivery notes: scope, milestones, and signals (metrics or qualitative).',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '21 / 9',
          badge: 'Fig 3 · Placeholder',
          caption: 'Wide strip — devices, QA, or shipped gallery.',
        },
      },
    ],
    cta: { to: '/contact', label: 'Request the full case study →' },
  },

  'star-global': {
    eyebrow: 'Star (ex-Cogniance)',
    title: 'Fortune 500 product work — case template',
    lede:
      '[Placeholder] NDA-safe summary: domains, your role, and engagement shape without naming clients.',
    hero: {
      aspectRatio: '16 / 9',
      badge: 'Cover · Placeholder',
      caption: 'Full-width hero — abstract, blurred UI, or typographic cover.',
    },
    body: [
      {
        kind: 'text',
        paragraphs: [
          '[Text] What you can disclose: types of products, rituals (workshops, prototyping), and stack.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Fig 1 · Placeholder',
          caption: 'Full-width image — sanitised artefact if allowed.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          '[Text] Patterns hiring managers should know: IA, systems work, research, handoff.',
          '[Text] Leadership or multi-site context if relevant.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '21 / 9',
          badge: 'Fig 2 · Placeholder',
          caption: 'Wide strip — redacted flow or component grid.',
        },
      },
    ],
    cta: { to: '/contact', label: 'Request access →' },
  },
};

export const PORTFOLIO_SLUGS = Object.keys(PORTFOLIO_CASES);
