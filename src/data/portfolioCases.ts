/**
 * Case pages — simple vertical rhythm (reference: davidhuynh.se–style case studies):
 *   eyebrow → title → lede → full-width image → text → full-width image → text → …
 * Swap placeholder copy; add imageSrc on figures when extending the renderer.
 * Raster covers: copy full-resolution files into public/cases/ in the repo (chat uploads are recompressed).
 * Keep each case’s `hero.aspectRatio` and all teaser/body figures on that case aligned (8∶5) so frames match across case pages.
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
  /** Short narrative: role clarity + one problem→move→outcome thread for hiring-manager scan. */
  throughLine?: {
    title: string;
    paragraphs: string[];
  };
  /** Optional public teaser bullets (mandate, execution, impact). Falls back to a generic template in the case page. */
  teaserBullets?: string[];
  /** Optional public track map shown as pills + short summaries. */
  publicTracks?: PublicTrack[];
  /** Extra confidentiality note shown on the email-only access gate for locked cases. */
  lockDisclaimer?: string;
  hero: FigureSpec;
  /** On locked pages: figures shown right after the hero (before through-line / map). */
  lockedTeaserAfterHero?: FigureSpec[];
  /** Shown on locked case pages after the lede, before the access gate. */
  lockedTeaserFigures?: FigureSpec[];
  /** After the hero: alternate `text` and `figure` blocks (full-width stack). */
  body: CaseBlock[];
  cta?: { to: string; label: string };
};

export const PORTFOLIO_CASES: Record<string, PortfolioCase> = {
  miro: {
    eyebrow: 'Miro',
    period: '2021 — now',
    title: 'Miro — product design at scale',
    throughLine: {
      title: 'Through-line',
      paragraphs: [
        'Senior Product Designer (Growth) in Amsterdam — five team contexts as priorities shifted. I owned framing through shipped UI, systems implications, and experimentation where it reduced risk, with PM, engineering, and GTM.',
        'Thread: Different entry intents (discovery → trial → expansion → monetization). The work sharpened high-stakes moments — signup, templates, checkout, governance — without treating Miro as a single funnel. Deck: trade-offs and validation on request.',
      ],
    },
    lede:
      'End-to-end product design for 80M+ users across community, acquisition, enterprise, and monetization (Miroverse through paid conversion). Public teaser only — full evidence via email.',
    teaserBullets: [
      'Scope & execution: Community, acquisition, signup, enterprise trials and admin, templates and shareable decks, monetization (free-to-paid, checkout, pricing, retention) — journeys, UI quality, experimentation, AI-assisted prototyping.',
      'Impact: Movement across acquisition, activation, engagement, expansion, and conversion — metrics and experiment detail shared on request.',
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
    lockedTeaserAfterHero: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Acquisition / activation',
        src: caseAsset('cover_m2.png'),
        alt: 'Miro public teaser — acquisition and activation surfaces (sanitized)',
        caption: 'Public-safe still — high-intent entry and in-product activation context.',
      },
    ],
    lockedTeaserFigures: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Monetization / enterprise',
        src: caseAsset('cover_m3.png'),
        alt: 'Miro public teaser — monetization and enterprise context (sanitized)',
        caption: 'Public-safe still — monetization, packaging, or governance-adjacent surfaces.',
      },
    ],
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
          aspectRatio: '8 / 5',
          badge: 'Teaser · Acquisition / activation',
          src: caseAsset('cover_m2.png'),
          alt: 'Miro case — acquisition and activation (sanitized)',
          caption:
            'Public teaser — high-intent entry and in-product activation context.',
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
          aspectRatio: '8 / 5',
          badge: 'Teaser · Monetization / enterprise',
          src: caseAsset('cover_m3.png'),
          alt: 'Miro case — monetization and enterprise (sanitized)',
          caption:
            'Public teaser — monetization, packaging, or enterprise expansion context.',
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
          aspectRatio: '8 / 5',
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
    throughLine: {
      title: 'Through-line',
      paragraphs: [
        'Sole designer for most of the lifecycle after launch, with partial product ownership — web, iOS, and Android alongside PM and engineering.',
        'Thread: Community inside a 200M+ ecosystem — native feel, real group behavior (discovery, participation, moderation), platform alignment. Deck: milestones, trade-offs, safe signals on request.',
      ],
    },
    lede:
      'Wix Groups — cross-platform community for creators and consultants in the Wix ecosystem (200M+ users). NDA-aware full deck on request.',
    teaserBullets: [
      'Scope & execution: Launch and scale across surfaces — member journeys, moderation, creator and admin flows; cross-platform parity and phased rollout.',
      'Impact: Stronger engagement and repeat use; detailed metrics stay private.',
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
    lockedTeaserAfterHero: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Ecosystem',
        src: caseAsset('cover_w4.png'),
        alt: 'Wix public teaser — ecosystem and builder context (sanitized)',
        caption: 'Public-safe still — IA, builder context, or cross-surface journey.',
      },
    ],
    lockedTeaserFigures: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Journeys',
        src: caseAsset('cover_w3.png'),
        alt: 'Wix public teaser — member journeys and community surfaces (sanitized)',
        caption: 'Public-safe still — onboarding, moderation, or key member moments.',
      },
    ],
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
          aspectRatio: '8 / 5',
          badge: 'Teaser · Ecosystem',
          src: caseAsset('cover_w4.png'),
          alt: 'Wix case — ecosystem and builder context (sanitized)',
          caption: 'Public teaser — IA, builder context, or cross-surface journey.',
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
          aspectRatio: '8 / 5',
          badge: 'Teaser · Journeys',
          src: caseAsset('cover_w3.png'),
          alt: 'Wix case — member journeys and community surfaces (sanitized)',
          caption: 'Public teaser — onboarding, moderation, or key member moments.',
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
          aspectRatio: '8 / 5',
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
    throughLine: {
      title: 'Through-line',
      paragraphs: [
        'UX → Senior UX Designer: workshops, IA, prototyping, implementation-ready handoff; briefly led designers in Wrocław.',
        'Thread (anonymized): Health-adjacent and telematics-style operator work — greenfield IA, multi-step flows, distributed teams. Identities and metrics NDA; deck is redacted.',
      ],
    },
    lede:
      '10+ Fortune 500 engagements (greenfield / regulated) — IoT, telematics, HealthTech, wearables, GovTech, AdTech. Full evidence on request under NDA.',
    teaserBullets: [
      'Scope & execution: Discovery, IA, prototyping, validation, specs — regulated and technically complex contexts with distributed PM and engineering.',
      'Impact: Enterprise-ready delivery; client names and metrics confidential.',
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
      aspectRatio: '8 / 5',
      badge: 'Teaser · Cover',
      src: caseAsset('cover_s.png'),
      alt: 'Star case study cover',
      caption: 'Public teaser — abstract, redacted UI, or typographic cover.',
    },
    lockedTeaserAfterHero: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Process (placeholder)',
        caption: 'Sanitized artifact — workshop output, IA sketch, or redacted UI (asset TBD).',
      },
    ],
    lockedTeaserFigures: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Systems',
        src: caseAsset('cover_s2.png'),
        alt: 'Star public teaser — systems / wide strip (sanitized)',
        caption: 'Public-safe still — redacted flow, component grid, or journey map.',
      },
    ],
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
          aspectRatio: '8 / 5',
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
          aspectRatio: '8 / 5',
          badge: 'Teaser · Systems',
          src: caseAsset('cover_s2.png'),
          alt: 'Star case — systems / wide strip (sanitized)',
          caption: 'Public teaser — redacted flow, component grid, or journey map.',
        },
      },
    ],
    cta: { to: '/contact', label: 'Request full case deck →' },
  },
};

export const PORTFOLIO_SLUGS = Object.keys(PORTFOLIO_CASES);
