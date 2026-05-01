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

export type PublicTrack = {
  label: string;
  summary: string;
};

export type PortfolioCase = {
  eyebrow?: string;
  period?: string;
  title: string;
  lede: string;
  /** Optional public teaser bullets (mandate, execution, impact). Falls back to a generic template in the case page. */
  teaserBullets?: string[];
  /** Optional public track map shown as pills + short summaries. */
  publicTracks?: PublicTrack[];
  /** Extra confidentiality note shown on the email-only access gate for locked cases. */
  lockDisclaimer?: string;
  hero: FigureSpec;
  /** After the hero: alternate `text` and `figure` blocks (full-width stack). */
  body: CaseBlock[];
  cta?: { to: string; label: string };
};

export const PORTFOLIO_CASES: Record<string, PortfolioCase> = {
  miro: {
    eyebrow: 'Miro',
    period: '2021 — now',
    title: 'Miro — product design at scale',
    lede:
      'I led end-to-end product design for 80M+ users across community, acquisition, enterprise, and monetization — five growth-facing team contexts — from Miroverse and pre-products to trials, templates, and paid conversion. Public signal only; full case evidence is shared on request via email.',
    teaserBullets: [
      'Scope: Ambiguous problems across community (Miroverse), acquisition (SERP pre-products, signup), enterprise (trial, admin expansion), professional templates and shareable presentations, and monetization (free-to-paid, checkout, pricing, retention).',
      'Execution: Partnered with PM, engineering, and GTM on journeys, UI quality, and systems implications; used experimentation where it reduced risk. AI-assisted prototyping and research synthesis.',
      'Impact: Improved acquisition, activation, engagement, expansion, and paid conversion; metrics and experiment detail are shared on request via email.',
    ],
    publicTracks: [
      {
        label: 'Community-led growth',
        summary:
          'Miroverse: template submission, creator profiles, and gamification to improve contributor engagement and publishing quality.',
      },
      {
        label: 'Acquisition surfaces',
        summary:
          'Pre-products aimed at high-intent SERP traffic; flows that route qualified users into core product journeys.',
      },
      {
        label: 'Signup and activation UX',
        summary:
          'In-product signup redesign and behavioral prompts for non-registered users to reduce friction and improve early momentum.',
      },
      {
        label: 'Enterprise trial and admin',
        summary:
          'Time-limited trials, admin-side seat expansion, and governance experiences that support team-wide adoption.',
      },
      {
        label: 'Templates and shareable presentations',
        summary:
          'Custom templates (creation, discovery, sharing) and shareable presentations for professional-service and engaged-corporate use cases.',
      },
      {
        label: 'Monetization and checkout',
        summary:
          'Contextual free-to-paid triggers, checkout redesign for add-ons and packaging, plus pricing page and smart cancellation iterations.',
      },
    ],
    lockDisclaimer:
      'This public teaser excludes non-public metrics, experiment detail, and unreleased product work.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Teaser · Cover',
      src: caseAsset('cover_m.png'),
      alt: 'Miro case study cover',
      caption: 'Public teaser cover for Miro case studies.',
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
    cta: { to: '/contact', label: 'Request full case deck →' },
  },

  'wix-groups': {
    eyebrow: 'Wix.com',
    period: '2019 — 2021',
    title: 'Wix Groups — community product',
    lede:
      'Sole designer for most of the lifecycle after launch, with partial product ownership — Wix Groups is a cross-platform community product for creators, coaches, and consultants inside the Wix ecosystem (200M+ users). Full evidence is shared on request via email.',
    teaserBullets: [
      'Scope: I led launch and scale of community experiences across web, iOS, and Android.',
      'Execution: I drove product design across member journeys, moderation, and creator-facing management flows.',
      'Impact: The work improved engagement and repeat use; detailed product and performance data remain private.',
    ],
    publicTracks: [
      {
        label: 'Cross-platform community',
        summary:
          'Designed cohesive community journeys across web, iOS, and Android for members, creators, and moderators.',
      },
      {
        label: 'Activation and first value',
        summary:
          'Improved early member onboarding moments to help new users find relevant groups and interactions faster.',
      },
      {
        label: 'Creator and admin workflows',
        summary:
          'Streamlined creator and admin management tasks to improve publishing quality and operational clarity.',
      },
      {
        label: 'Engagement loops',
        summary:
          'Shaped repeat-use mechanics around participation, notifications, and content discovery for healthier retention.',
      },
    ],
    lockDisclaimer:
      'This teaser is NDA-safe and excludes internal metrics, roadmap detail, and proprietary artifacts.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Teaser · Cover',
      src: caseAsset('cover_w_2.png'),
      alt: 'Wix case study cover',
      caption: 'Public teaser — ecosystem context, product composite, or hero flow.',
    },
    body: [
      {
        kind: 'text',
        paragraphs: [
          'Wix Groups lived inside a global website ecosystem: the experience had to feel native to millions of sites while supporting real community behavior — discovery, participation, and moderation at scale.',
          'I designed for members, group owners, and moderators, with a clear bar for first value, repeat use, and operational clarity when communities grow.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Teaser · Ecosystem',
          caption: 'Sanitized still — IA, builder context, or cross-surface journey.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          'Constraints included cross-platform parity across web, iOS, and Android, alignment with Wix platform patterns, and phased rollout across regions and site types — balanced against creator and member expectations.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Teaser · Journeys',
          caption: 'Sanitized flows — onboarding, moderation, or key member moments.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          'Execution ran end-to-end: discovery and alignment, iterative prototyping, and delivery with engineering. The private deck breaks down milestones, tradeoffs, and qualitative or performance signals that are safe to share.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '21 / 9',
          badge: 'Teaser · Wide strip',
          caption: 'Optional wide collage — devices, QA, or shipped gallery (sanitized).',
        },
      },
    ],
    cta: { to: '/contact', label: 'Request full case deck →' },
  },

  'star-global': {
    eyebrow: 'Star (ex-Cogniance)',
    period: '2015 — 2019',
    title: 'Fortune 500 product design',
    lede:
      '10+ end-to-end Fortune 500 engagements — often greenfield or regulated — spanning IoT, telematics, HealthTech, wearables, GovTech, and AdTech. Client workshops, IA, and delivery under NDA; full case evidence is shared on request via email.',
    teaserBullets: [
      'Scope: 10+ Fortune 500 engagements — often greenfield — in regulated and technically complex environments (IoT, telematics, HealthTech, wearables, GovTech, AdTech).',
      'Execution: Client workshops, IA and system definition, prototyping and validation, implementation-ready specs with distributed teams.',
      'Impact: Enterprise-ready outcomes across sectors; client names and measured results are confidential.',
    ],
    publicTracks: [
      {
        label: 'Discovery and framing',
        summary:
          'Led discovery and problem framing for ambiguous enterprise opportunities across regulated and technical domains.',
      },
      {
        label: 'Systems and IA design',
        summary:
          'Designed product structures, interaction models, and scalable information architecture for complex workflows.',
      },
      {
        label: 'Research to delivery',
        summary:
          'Connected research findings to iterative prototyping, validation, and implementation-ready product design outputs.',
      },
      {
        label: 'Cross-functional execution',
        summary:
          'Collaborated with distributed PM and engineering teams to deliver production-feasible design solutions.',
      },
    ],
    lockDisclaimer:
      'Client identities, internal artifacts, and performance metrics are intentionally redacted in public.',
    hero: {
      aspectRatio: '16 / 9',
      badge: 'Teaser · Cover',
      src: caseAsset('cover_s.png'),
      alt: 'Star case study cover',
      caption: 'Public teaser — abstract, redacted UI, or typographic cover.',
    },
    body: [
      {
        kind: 'text',
        paragraphs: [
          'Engagements spanned complex B2B and B2C products — AdTech, HealthTech, IoT, telematics, and adjacent domains — typically under strict confidentiality, so public pages stay anonymized.',
          'Day-to-day work combined stakeholder alignment, workshop-led discovery, iterative prototyping, and handoff to distributed PM and engineering teams.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Teaser · Process',
          caption: 'Sanitized artifact — workshop output, IA sketch, or redacted UI.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          'What the private deck emphasizes: information architecture, multi-step workflows, research-informed decisions, and implementation-ready specifications — plus leadership context when I temporarily led designers across sites.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '21 / 9',
          badge: 'Teaser · Systems',
          caption: 'Wide strip — redacted flow, component grid, or journey map.',
        },
      },
    ],
    cta: { to: '/contact', label: 'Request full case deck →' },
  },
};

export const PORTFOLIO_SLUGS = Object.keys(PORTFOLIO_CASES);
