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
  /** Optional public teaser bullets (mandate, execution, impact). Falls back to a generic template in the case page. */
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
      'I led growth product design across community-led acquisition, activation, expansion, and monetization at Miro. This page shows the public signal; detailed case evidence sits behind password access.',
    teaserBullets: [
      'Mandate: design growth across the full funnel, from acquisition and in-product signup to enterprise expansion and monetization.',
      'Execution: led end-to-end product design with PM, engineering, and GTM across acquisition surfaces, Miroverse, enterprise trial and admin flows, and free-to-paid/checkout UX.',
      'Impact: strengthened acquisition, activation, engagement, expansion, and paid conversion; detailed metrics and experiment mechanics are shared privately.',
    ],
    lockDisclaimer:
      'This public teaser excludes non-public metrics, experiment detail, and unreleased product work.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Teaser · Cover',
      src: caseAsset('cover_m.png'),
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
    cta: { to: '/contact', label: 'Request full case access →' },
  },

  'wix-groups': {
    eyebrow: 'Wix.com',
    title: 'Wix Groups — community product',
    lede:
      'I designed Wix Groups as a cross-platform community product for a global website ecosystem. The full product strategy and evidence are shared in the private case.',
    teaserBullets: [
      'Mandate: launch and scale community experiences across web, iOS, and Android.',
      'Execution: led product design across member journeys, moderation, and creator-facing management flows.',
      'Impact: strengthened engagement and repeat use; detailed product and performance data remain private.',
    ],
    lockDisclaimer:
      'This teaser is NDA-safe and excludes internal metrics, roadmap detail, and proprietary artifacts.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Cover · Placeholder',
      src: caseAsset('cover_w_2.png'),
      alt: 'Wix case study cover',
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
    cta: { to: '/contact', label: 'Request full case access →' },
  },

  'star-global': {
    eyebrow: 'Star (ex-Cogniance)',
    title: 'Fortune 500 product design',
    lede:
      'I delivered product design for multiple Fortune 500 engagements across complex domains. The public version stays anonymized; the full depth is password-gated.',
    teaserBullets: [
      'Mandate: solve high-risk product problems in regulated and technically complex environments.',
      'Execution: drove end-to-end design, from discovery and system definition to delivery with distributed teams.',
      'Impact: shipped enterprise-ready outcomes across sectors; client names and measured results are confidential.',
    ],
    lockDisclaimer:
      'Client identities, internal artifacts, and performance metrics are intentionally redacted in public.',
    hero: {
      aspectRatio: '16 / 9',
      badge: 'Cover · Placeholder',
      src: caseAsset('cover_s.png'),
      alt: 'Star case study cover',
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
    cta: { to: '/contact', label: 'Request full case access →' },
  },
};

export const PORTFOLIO_SLUGS = Object.keys(PORTFOLIO_CASES);
