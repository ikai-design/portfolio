# Content Update Draft (Review Before Implementation)

This file contains the exact copy I propose to use for the light “less is more” pass.

## Positioning guardrail (applies across all pages)

Use one site version only (no split versions), with one consistent positioning:

`Senior Product Designer (Growth / Experimentation focus)`

Working principle:

- Full-time hiring intent is primary.
- Advisory is secondary and concise.
- No growth-only niche framing and no generic-generalist framing.

## 1) Home (`src/components/Home.tsx`)

### Intro line

Replace with:

`Full-funnel growth product design for SaaS: Miro (80M+) and Wix (200M+).`

### Headline

Keep as:

`Senior Product Designer`

### Bio paragraph

Replace with:

`14+ years designing SaaS products end-to-end. I focus on acquisition, activation, expansion, and monetization, and I work closely with PM, engineering, and GTM to ship measurable outcomes.`

### Trust chips (keep 5 max)

Use exactly:

- `Miro (2021 — now)`
- `Wix`
- `Reforge Growth Series`
- `NN/g Certified`
- `ADPList Mentor`

### CTA lead sentence

Replace with:

`Open to senior/lead product design roles with a growth and experimentation focus. Selective advisory support for growth-focused SaaS teams.`

### CTA labels

Keep:

- Primary: `Book a 30-min intro call`
- Secondary: `Or email for full case deck →`

---

## 2) Projects (`src/pages/Projects.tsx`)

### Page lede

Replace with:

`Selected product work across growth, platform, and enterprise contexts. Full case depth is shared on request via email.`

### Current Miro card copy

Use:

- Title: `Miro — Growth design hub`
- Description: `Community-led growth, acquisition, signup, enterprise expansion, and monetization work.`
- Meta: `Miro · 2021 — now`

### Ciklum card copy

Use:

- Title: `Ciklum — Graphic & Web`
- Description: `Earlier visual and web communication work; context and chronology are shared on About.`
- Meta: `Ciklum · 2013 — 2015`

---

## 3) Case Teasers (`src/data/portfolioCases.ts`)

Use consistent labels and plain language for all three locked cases.

### Miro teaser bullets

- `Scope: I led growth design across the full funnel, from acquisition and in-product signup to enterprise expansion and monetization.`
- `Execution: I worked end-to-end with PM, engineering, and GTM on acquisition touchpoints, Miroverse, enterprise trial/admin journeys, and free-to-paid checkout UX.`
- `Impact: The work improved acquisition, activation, engagement, expansion, and paid conversion; detailed metrics and experiment specifics are shared privately.`

### Wix teaser bullets

- `Scope: I led launch and scale of community experiences across web, iOS, and Android.`
- `Execution: I drove product design across member journeys, moderation, and creator-facing management flows.`
- `Impact: The work improved engagement and repeat use; detailed product and performance data remain private.`

### Star teaser bullets

- `Scope: I tackled high-risk product problems in regulated and technically complex environments.`
- `Execution: I led end-to-end design, from discovery and system definition to delivery with distributed teams.`
- `Impact: The work shipped enterprise-ready outcomes across sectors; client names and measured results are confidential.`

---

## 4) Case Access Gate (`src/pages/PortfolioCaseStudy.tsx`)

### Gate lead line

Use:

`Full case decks with detailed process, experiments, and outcomes are shared on request via email.`

### Checklist (2 bullets)

Use:

- `Include your role, company, and the case area you want to review.`
- `Typical response time: within 24 hours on business days.`

### Disclaimer line pattern

Keep existing case-specific disclaimer text, but use this style rule:

- one sentence
- no defensive/legal tone
- no extra qualifiers unless required by NDA

### CTA labels

Keep:

- `Book a 30-min intro call`
- `Request full case deck via email →`

---

## 5) Contact (`src/pages/Contact.tsx`)

### Page lede

Use:

`Open to senior/lead product design roles with a growth and experimentation focus, with selective contract and advisory support.`

### Hiring block intro

Use:

`Book a short intro call, or email directly if you want a role-specific case deck.`

### Availability block values

Use exactly:

- Full-time: `Open to senior/lead growth design roles`
- Contract: `Selective advisory engagements (typically one short engagement per quarter)`
- Timezone: `EU time zones (CET, GMT, CEST)`
- Relocation: `Visa sponsorship or EOR required`
- Start window: `Flexible, based on role scope and process timing`

---

## 6) Canonical phrase lock (all pages)

Use this exact phrase whenever needed:

`shared on request via email`

Do not use variants like:

- `shared privately via email`
- `shared via private access`
- `password-gated`

---

## 7) Optional A/B messaging test (same site, no split)

Use this only for CV/LinkedIn headline testing, not for separate site versions:

- Variant A: `Senior Product Designer, Growth focus`
- Variant B: `Senior Product Designer, Experimentation / PLG / Monetization focus`

Rule:

- Test channels, not site architecture.
- Keep website copy on a single consistent variant at a time.

---

## 8) Success metrics (this cycle)

Track lightweight weekly metrics so content quality is tied to conversion, not subjective feel.

- `contact_to_call_rate`
  - Definition: % of inbound contact conversations that become a booked intro call.
- `case_gate_to_email_click_rate`
  - Definition: % of case-gate views that click `Request full case deck via email`.
- `home_cta_to_call_click_rate`
  - Definition: % of home-page sessions that click `Book a 30-min intro call`.

Target direction (first 2–3 weeks): upward trend vs current baseline, not absolute volume.

---

## 9) Priority order (by business impact)

### P1 (do first)

- Home first-screen positioning + CTA lead sentence + CTA labels.
- Case Access Gate hook/checklist/CTA language.
- Contact top inquiry block + availability clarity.

### P2 (do second)

- Projects intro and card copy normalization.
- Case teaser triads (`Scope / Execution / Impact`) across all locked cases.

### P3 (do last)

- About opening paragraph polish for hiring relevance.
- Optional A/B variant wording for external channels (not site split).

---

## 10) Out of scope (for this pass)

- No new pages or route changes.
- No layout redesign or component restructuring.
- No animation/style experiments beyond copy support.
- No additional case sections beyond existing content blocks.

---

## 11) Done definition

The pass is complete when all conditions are true:

- Home, Projects, Case Gate, and Contact use one coherent full-time-first narrative.
- `shared on request via email` is the only private-access phrase used site-wide.
- Every page has one obvious primary action in the first screen.
- Case teaser bullets follow consistent `Scope / Execution / Impact` style.
- Copy reads naturally aloud in plain recruiter-friendly language (no stacked jargon).
- No placeholder/dev-tone wording remains in public-facing sections.