/**
 * Case pages — simple vertical rhythm (reference: davidhuynh.se–style case studies):
 *   eyebrow → title → lede → full-width image → text → full-width image → text → …
 * Swap placeholder copy; add imageSrc on figures when extending the renderer.
 */

export type FigureSpec = {
  aspectRatio: string;
  badge: string;
  caption?: string;
};

export type CaseBlock =
  | { kind: 'text'; paragraphs: string[] }
  | { kind: 'figure'; spec: FigureSpec };

export type PortfolioCase = {
  eyebrow?: string;
  title: string;
  lede: string;
  hero: FigureSpec;
  /** After the hero: alternate `text` and `figure` blocks (full-width stack). */
  body: CaseBlock[];
  cta?: { to: string; label: string };
};

export const PORTFOLIO_CASES: Record<string, PortfolioCase> = {
  miro: {
    eyebrow: 'Miro',
    title: 'Growth & product surfaces — case template',
    lede:
      '[Placeholder] Short intro: what you shipped, for whom, and the one-line outcome. Keep it to 2–3 sentences like a case study opener.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Cover · Placeholder',
      caption: 'Full-width hero — replace with key still or UI (e.g. /public/cases/miro-hero.jpg).',
    },
    body: [
      {
        kind: 'text',
        paragraphs: [
          '[Text] Project facts in prose: role, timeline, team shape, and constraints — no table needed.',
          '[Text] Optional second paragraph: problem framing or how success was measured.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Fig 1 · Placeholder',
          caption: 'Full-width image — context, funnel, or primary surface.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          '[Text] What you explored and decided. Reference layouts stay light on subheads; let images carry detail.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Fig 2 · Placeholder',
          caption: 'Full-width image — journey, UI states, or experiment collage.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          '[Text] How it shipped: collaboration, trade-offs, and what you’d iterate next.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '21 / 9',
          badge: 'Fig 3 · Placeholder',
          caption: 'Wide strip — multi-screen flow or before/after.',
        },
      },
    ],
    cta: { to: '/contact', label: 'Discuss this work →' },
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
