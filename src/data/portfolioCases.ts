/**
 * Case pages — simple vertical rhythm (reference: davidhuynh.se–style case studies):
 *   eyebrow → title → lede → full-width image → text → full-width image → text → …
 * Swap placeholder copy; add imageSrc on figures when extending the renderer.
 * Raster covers: copy full-resolution files into public/cases/ in the repo (chat uploads are recompressed).
 * Short MP4 teasers: e.g. `public/Miro_case_01_*.mp4` and reference via `videoSrc`.
 * Teaser aspect ratios resolve from actual media (`CaseStudyFigure`); initial `hero.aspectRatio` is a hint until metadata loads.
 */

/** Resolve `public/` paths for Vite `base` (e.g. `/portfolio/`). */
export function caseAsset(path: string): string {
  const p = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${p}`;
}

/** In `PortfolioCaseStudy`, replaced with an in-page link to `#program-map`. */
export const LEDE_PROGRAM_MAP_LINK_TOKEN = '{{PROGRAM_MAP_LINK}}' as const;

/** SSR case only — replaced with external inline links in `PortfolioCaseStudy`. */
export const SSR_SITE_LINK_TOKEN = '{{SSR_SITE}}' as const;
export const SSR_CWS_LINK_TOKEN = '{{SSR_CWS}}' as const;

export type FigureSpec = {
  aspectRatio: string;
  badge: string;
  caption?: string;
  /** Optional image under `public/` — use `caseAsset('cases/...')` */
  src?: string;
  /** Optional video under `public/` — use `caseAsset('...')` */
  videoSrc?: string;
  videoPoster?: string;
  alt?: string;
};

export type CaseBlock =
  | { kind: 'text'; heading?: string; paragraphs: string[] }
  | { kind: 'figure'; spec: FigureSpec }
  /** Pull-quote from user research / testimonials. */
  | { kind: 'quote'; text: string; attribution: string }
  /** "From feedback to shipped" — each row pairs a user signal with what was built. */
  | { kind: 'shipList'; heading?: string; rows: { signal: string; shipped: string }[] };

export type PublicTrack = {
  label: string;
  summary: string;
  /** Optional still for program-map visual panel */
  visualSrc?: string;
  /** Optional video for program-map visual panel */
  visualVideoSrc?: string;
  visualPoster?: string;
  visualAlt?: string;
  visualBadge?: string;
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
        'Senior Product Designer in Amsterdam — solo designer embedded across cross-functional teams as priorities shifted. Framing through shipped UI, systems implications, and experimentation where it reduced risk.',
        'Teaser focus: signup, in-product templates (create, find, organize), and share-as-presentation. Adjacent streams are one line each in the Program map below; trade-offs and deeper narrative on request via email.',
      ],
    },
    lede: `Product design for 80M+ users. The ${LEDE_PROGRAM_MAP_LINK_TOKEN} scopes the public teaser.`,
    teaserBullets: [
      'Role: Solo designer with PM, engineering, and GTM — framing through shipped UI and targeted experiments.',
      'Surfaces: In-product signup, custom templates, share-as-presentation, and monetization/checkout.',
      'Focus: Research-informed shipping and segment-led rollout on high-stakes growth surfaces.',
    ],
    publicTracks: [
      {
        label: 'Community-led growth',
        summary:
          'Miroverse: template submission, creator profiles, and gamification to improve contributor engagement and publishing quality.',
        visualBadge: 'Stream · Community',
        visualAlt: 'Community-led growth stream',
      },
      {
        label: 'Acquisition surfaces',
        summary:
          'Acquisition surfaces for high-intent search traffic; flows that route qualified users into core product journeys.',
        visualBadge: 'Stream · Acquisition',
        visualAlt: 'Acquisition surfaces stream',
      },
      {
        label: 'Signup and activation UX',
        summary:
          'In-product signup redesign and identity and action prompts for guest users to reduce friction and improve early momentum.',
        visualVideoSrc: caseAsset('Miro_case_01_sign_up_in_prod.mp4'),
        visualPoster: caseAsset('miro_case_01_poster.jpg'),
        visualBadge: 'Stream · Signup',
        visualAlt: 'Miro — in-product sign-up flow',
      },
      {
        label: 'Enterprise trial and admin',
        summary:
          'Time-limited trials, admin-side seat expansion, and governance experiences that support team-wide adoption.',
        visualBadge: 'Stream · Enterprise',
        visualAlt: 'Enterprise trial and admin stream',
      },
      {
        label: 'Templates and shareable presentations',
        summary:
          'Custom templates (creation, discovery, sharing) and shareable presentations for professional-service and engaged-corporate use cases.',
        visualVideoSrc: caseAsset('Miro_case_02_custom_templates.mp4'),
        visualBadge: 'Stream · Templates',
        visualAlt: 'Miro — custom company template library',
      },
      {
        label: 'Monetization and checkout',
        summary:
          'Contextual free-to-paid triggers, checkout and upgrade flow design, plus pricing page and cancellation flow and retention UX iterations.',
        visualVideoSrc: caseAsset('Miro_case_02_2_Checkout.mp4'),
        visualBadge: 'Stream · Monetization',
        visualAlt: 'Miro — multi-product checkout flow',
      },
    ],
    lockDisclaimer:
      'This page excludes non-public metrics, experiment detail, and unreleased product work.',
    hero: {
      aspectRatio: '16 / 9',
      badge: 'Teaser · Sign-up in product',
      videoSrc: caseAsset('Miro_case_01_sign_up_in_prod.mp4'),
      alt: 'Miro — in-product sign-up flow in production',
      caption:
        'Guest-to-account activation: Tools & Apps gating, identity prompts, and sign-up entry points on the canvas.',
    },
    lockedTeaserAfterHero: [
      {
        aspectRatio: '16 / 9',
        badge: 'Teaser · Custom templates',
        videoSrc: caseAsset('Miro_case_02_custom_templates.mp4'),
        alt: 'Miro — custom company template library',
        caption:
          'Custom template library: company- and team-scoped catalogs, discovery, and branded defaults for rollout.',
      },
      {
        aspectRatio: '16 / 9',
        badge: 'Teaser · Multi-product checkout',
        videoSrc: caseAsset('Miro_case_02_2_Checkout.mp4'),
        alt: 'Miro — multi-product checkout flow',
        caption:
          'Multi-product checkout: seats, add-ons in one purchase flow, transparent pricing steps, and a smoother path to confirmation.',
      },
    ],
    lockedTeaserFigures: [
      {
        aspectRatio: '16 / 9',
        badge: 'Teaser · Shareable presentations',
        videoSrc: caseAsset('Miro_case_03_Shareable_Presentation.mp4'),
        alt: 'Miro — Share as presentation modal',
        caption:
          'Share as presentation: board content as structured, link-shareable slides for clients and async stakeholders.',
      },
    ],
    body: [
      {
        kind: 'text',
        paragraphs: [
          'The clips below are the same three production surfaces at a slightly lower altitude than the hero — registration, template library and organization, and share-as-presentation.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Teaser · Custom templates',
          videoSrc: caseAsset('Miro_case_02_custom_templates.mp4'),
          alt: 'Miro — custom company template library',
          caption:
            'Custom template library: company- and team-scoped catalogs, discovery, and branded defaults for rollout.',
        },
      },
      {
        kind: 'text',
        paragraphs: [
          'Private deck on request covers team shape, problem framing, trade-offs, success criteria, and streams beyond these teasers — without non-public metrics or unreleased product detail.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Teaser · Shareable presentations',
          videoSrc: caseAsset('Miro_case_03_Shareable_Presentation.mp4'),
          alt: 'Miro — Share as presentation flow',
          caption:
            'Share as presentation: board-to-slide structure, link sharing, and browser preview for stakeholder review.',
        },
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '8 / 5',
          badge: 'Full case · Wide strip',
          caption: 'Wide strip — journey map, multi-step flow, or before/after (expanded in private deck).',
        },
      },
    ],
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
      'Wix Groups — cross-platform community for creators and consultants in the Wix ecosystem (200M+ users).',
    teaserBullets: [
      'Role: Sole designer with partial product ownership — web, iOS, and Android with PM and engineering.',
      'Execution: Member journeys, moderation, and creator/admin flows with cross-platform parity.',
      'Focus: Engagement and repeat use inside a large website ecosystem.',
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
      'This page excludes internal metrics, roadmap detail, and proprietary artifacts.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Teaser · Cover',
      videoSrc: caseAsset('Wix_case_01.mp4'),
      videoPoster: caseAsset('wix_case_01_poster.png'),
      alt: 'Wix Groups — product screen recording',
      caption: 'Cross-platform product design — React Native, web app, and site editor surfaces.',
    },
    lockedTeaserAfterHero: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Ecosystem',
        src: caseAsset('cover_w4.png'),
        alt: 'Wix site dashboard — Groups admin',
        caption:
          'Site dashboard — Groups: data-dense roster, filters, search, and owner actions (create, manage, privacy states).',
      },
    ],
    lockedTeaserFigures: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Journeys',
        src: caseAsset('cover_w_2.png'),
        alt: 'Wix Groups — cross-platform product (React Native)',
        caption: 'Cross-platform product design — React Native',
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
          alt: 'Wix site dashboard — Groups admin',
          caption:
            'Site dashboard — Groups: data-dense roster, filters, search, and owner actions (create, manage, privacy states).',
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
          src: caseAsset('cover_w_2.png'),
          alt: 'Wix Groups — cross-platform product (React Native)',
          caption: 'Cross-platform product design — React Native',
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
          caption: 'Wide collage — devices, QA stills, or shipped gallery (expanded in private deck).',
        },
      },
    ],
  },

  'star-global': {
    eyebrow: 'Star (ex-Cogniance)',
    period: '2015 — 2019',
    title: 'Fortune 500 product design',
    throughLine: {
      title: 'Through-line',
      paragraphs: [
        'UX → Senior UX Designer: workshops, IA, prototyping, implementation-ready handoff; briefly led designers in Wrocław.',
        'Anchor program (anonymized): smartwatch pairing and companion mobile UX for a tier-one global consumer brand — setup, connectivity, and first-run clarity under NDA. Broader work spanned health-adjacent, telematics, and operator tools; identities and metrics redacted in public.',
      ],
    },
    lede:
      '10+ Fortune 500 engagements under NDA — flagship wearables plus complex B2B (IoT, HealthTech, GovTech).',
    teaserBullets: [
      'Role: UX → Senior UX — workshops, IA, prototyping, and handoff to distributed engineering.',
      'Execution: Greenfield and regulated programs, including anonymized wearable companion UX.',
      'Focus: Enterprise-ready delivery; client names and metrics stay confidential.',
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
      {
        label: 'Wearables and companion apps',
        summary:
          'Mobile pairing and setup flows for flagship smartwatch programs — clarity under hardware, OS, and brand constraints.',
      },
    ],
    lockDisclaimer:
      'Client identities, internal artifacts, and performance metrics are intentionally redacted in public.',
    hero: {
      aspectRatio: '8 / 5',
      badge: 'Teaser · Cover',
      src: caseAsset('cover_s.png'),
      alt: 'Star case study cover — anonymized Fortune 500 program',
      caption:
        'Fortune 500 program work under NDA — including companion mobile UX for a flagship wearable ecosystem (brand anonymized).',
    },
    lockedTeaserAfterHero: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · Wearable pairing',
        src: caseAsset('cover_s2_.png'),
        alt: 'Anonymized premium iOS wearable companion app pairing flow',
        caption:
          'Portfolio remake: anonymized premium iOS wearable pairing flow — discovery, confirmation, secure sync, and first health snapshot.',
      },
    ],
    lockedTeaserFigures: [
      {
        aspectRatio: '8 / 5',
        badge: 'Teaser · B2B cloud storage',
        src: caseAsset('cover_s3.png'),
        alt: 'Anonymized B2B cloud storage UX in a Microsoft ecosystem context',
        caption:
          'Remade by me for portfolio use: anonymized B2B cloud storage workflows in a Microsoft ecosystem context. Client identity and sensitive implementation details are withheld under strict NDA.',
      },
    ],
    body: [
      {
        kind: 'text',
        paragraphs: [
          'Engagements spanned complex B2B and B2C products — AdTech, HealthTech, IoT, telematics, wearables, and adjacent domains — typically under strict confidentiality, so public pages stay anonymized.',
          'Day-to-day work combined stakeholder alignment, workshop-led discovery, iterative prototyping, and handoff to distributed PM and engineering teams.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '8 / 5',
          badge: 'Teaser · Process',
          caption: 'Process artifact — workshop output, IA sketch, or redacted UI.',
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
          badge: 'Teaser · B2B cloud storage',
          src: caseAsset('cover_s3.png'),
          alt: 'Anonymized B2B cloud storage UX in a Microsoft ecosystem context',
          caption:
            'Remade by me for portfolio use: anonymized B2B cloud storage workflows in a Microsoft ecosystem context. Client identity and sensitive implementation details are withheld under strict NDA.',
        },
      },
    ],
  },
  'simple-screen-recorder': {
    eyebrow: 'Simple Screen Recorder',
    period: '2026 — now · Shipped product',
    title: 'Simple Screen Recorder — product in active validation',
    throughLine: {
      title: 'Through-line',
      paragraphs: [
        'Solo: design, build, ship to the Chrome Web Store, iterate on real use with AI-assisted tooling.',
        'The thread: predictable zoom for browser walkthroughs — local-first, nothing leaves the device.',
      ],
    },
    teaserBullets: [
      'Role: Solo — framing, UX, build, distribution, iteration.',
      'Shipped: Local-first Chrome extension — library, pause/resume, zoom timeline, camera overlay, local MP4.',
      'Validation: 5.0 from 12 Chrome Web Store reviews (Jul 2026) + beta feedback on zoom clarity and trust.',
    ],
    lede:
      'A local-first Chrome extension for browser walkthrough recordings — {{SSR_SITE}} has a short demo. Actively iterating on reliability, zoom clarity, and onboarding.',
    hero: {
      aspectRatio: '16 / 9',
      badge: 'Demo · Auto-zoom recording',
      videoSrc: caseAsset('Recording_Demo.mp4'),
      videoPoster: caseAsset('Screen_recorder_poster.png'),
      alt: 'Simple Screen Recorder — browser walkthrough with auto-zoom',
      caption: 'Recording demo — click-based zoom guides attention; export stays on-device.',
    },
    body: [
      {
        kind: 'text',
        heading: 'Why this exists',
        paragraphs: [
          'Walkthrough tools often force cloud upload or a black-box zoom — click, hope, re-record. Hypothesis: a local-first recorder wins on trust while making zoom visible and editable before export.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Auto-zoom · click to zoom',
          videoSrc: caseAsset('cases/ssr/01_SSR_case.mp4'),
          videoPoster: caseAsset('ssr_click_to_zoom.png'),
          alt: 'Before and after a click — the recorder zooms toward the cursor automatically.',
          caption: 'Every click becomes a smooth zoom toward the action — no keyframing.',
        },
      },
      {
        kind: 'text',
        heading: 'What I built',
        paragraphs: [
          'A Manifest V3 Chrome extension: records browser flows, turns clicks into zoom, exports MP4 locally. On-device library, pause/resume, camera overlay at export. AI-assisted iteration (Cursor / Codex / Claude Code) — design calls stay mine.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'On-device library',
          videoSrc: caseAsset('cases/ssr/02_SSR_case.mp4'),
          videoPoster: caseAsset('ssr_library.png'),
          alt: 'Recordings library — a grid of saved takes with thumbnails and durations.',
          caption: 'The top ask from testers: a home for every take. Stored locally — reopen, re-edit, or export later.',
        },
      },
      {
        kind: 'text',
        heading: 'Predictable zoom',
        paragraphs: [
          'One ex-Cursorful tester re-recorded the same clip 15–20× because zoom bounds were invisible until export. Zoom became an editable object: timeline blocks you can see and adjust, with spring easing that settles instead of snaps.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Timeline · zoom blocks',
          videoSrc: caseAsset('cases/ssr/03_SSR_case.mp4'),
          videoPoster: caseAsset('ssr_zoom_timeline.png'),
          alt: 'Editor timeline with three editable zoom blocks along the playhead.',
          caption: 'Each zoom is a visible block — drag the edges, change the depth, delete it — before you export.',
        },
      },
      {
        kind: 'quote',
        text: "Pause / restart — that's so convenient, that's class. Cursorful doesn't have this.",
        attribution: 'Beta tester · former Cursorful user',
      },
      {
        kind: 'text',
        heading: 'Technical credibility',
        paragraphs: [
          'Zoom settles with a damped spring (stiffness 200, damping 30) so the end reads intentional — same math in preview and exported MP4 via requestVideoFrameCallback. MV3 service-worker kills mid-recording are handled by OPFS checkpoints, which fixed first-run data loss.',
        ],
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Backgrounds & browser frames',
          videoSrc: caseAsset('cases/ssr/04_SSR_case.mp4'),
          videoPoster: caseAsset('ssr_frames.png'),
          alt: 'Six background presets — gradients, solid, and dark — with a browser frame around the recording.',
          caption: 'A browser frame hides messy tabs; gradients turn a raw capture into a product demo.',
        },
      },
      {
        kind: 'text',
        heading: 'Validation',
        paragraphs: [
          '5.0 from 12 Chrome Web Store reviews (Jul 2026), plus a living feedback log from designers and PMs. Small-N signal is direction, not proof of scale.',
        ],
      },
      {
        kind: 'quote',
        text: 'Love it. Used it today for a demo, actually. Other than a camera — perfect.',
        attribution: 'Product designer · Mollie',
      },
      {
        kind: 'figure',
        spec: {
          aspectRatio: '16 / 9',
          badge: 'Local export · no cloud',
          videoSrc: caseAsset('cases/ssr/05_SSR_case.mp4'),
          videoPoster: caseAsset('ssr_export_local.png'),
          alt: 'Export panel — MP4 or WebM, resolution and aspect ratio, processed locally.',
          caption: 'Processed on-device with FFmpeg WebAssembly, exported as MP4 or WebM. Nothing is uploaded.',
        },
      },
      {
        kind: 'shipList',
        heading: 'From feedback to shipped',
        rows: [
          {
            signal: 'A former Cursorful user missed “a home for all my recordings.”',
            shipped: 'On-device recordings library (OPFS) — reopen and re-edit before export.',
          },
          {
            signal: 'A product designer wished she could record with a camera.',
            shipped: 'Camera overlay — dual-track record, composited at export.',
          },
          {
            signal: 'A tester re-recorded 15–20× because zoom boundaries were invisible.',
            shipped: 'Visible, editable zoom blocks on the timeline + spring-settle easing.',
          },
          {
            signal: '“I didn’t know when the recording started.”',
            shipped: 'Clearer start indicator; controls hardened against MV3 service-worker restarts.',
          },
        ],
      },
      {
        kind: 'text',
        heading: 'Where this stands',
        paragraphs: [
          'Still open: whether zoom clarity closes the re-record loop at scale, and whether local-first converts Loom defaults. Almost everything shipped came from watching one person struggle — turning “this feels off” into an editable object on screen, and dropping claims research stopped supporting.',
        ],
      },
    ],
    cta: { to: '/contact', label: 'Get in touch →' },
  },
};

export const PORTFOLIO_SLUGS = Object.keys(PORTFOLIO_CASES);

/** Home scroll order for case-to-case pager (enterprise cases, then SSR). */
export const CASE_NAV_ORDER = [
  'simple-screen-recorder',
  'miro',
  'wix-groups',
  'star-global',
] as const;

export type CaseNavSlug = (typeof CASE_NAV_ORDER)[number];

export type CaseNavNeighbors = {
  prev: CaseNavSlug | null;
  next: CaseNavSlug | 'home' | null;
};

export function getCaseNavLabel(navSlug: CaseNavSlug): string {
  const caseData = PORTFOLIO_CASES[navSlug];
  return caseData.eyebrow ?? caseData.title;
}

export function getCaseNavNeighbors(slug: string): CaseNavNeighbors | null {
  const index = CASE_NAV_ORDER.indexOf(slug as CaseNavSlug);
  if (index === -1) return null;

  const prev = index > 0 ? CASE_NAV_ORDER[index - 1] : null;
  const next =
    index < CASE_NAV_ORDER.length - 1 ? CASE_NAV_ORDER[index + 1] : ('home' as const);

  return { prev, next };
}
