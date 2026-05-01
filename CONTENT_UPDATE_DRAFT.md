# Content update draft — Senior Product Designer first

Canonical positioning for the site and channel copy tests.

## Positioning guardrail (applies across all pages)

**Primary identity:** Senior Product Designer — complex SaaS, end-to-end ownership, craft and systems implications.

**Depth (not cage):** Lifecycle work, monetization, activation, and experimentation are **proof of senior judgment**, not the job title in the hero. Growth teams should still recognize themselves in Miro tracks and skills.

**Working principle:**

- Full-time hiring intent is primary.
- Advisory is secondary and concise.
- No “growth-only” niche framing in hero, CTAs, or Contact availability.
- No generic-generalist framing without proof (Wix / Star / Miro remain the anchors).

---

## Copy map (implemented baseline)

| Location | Before (summary) | After (summary) |
|----------|------------------|-----------------|
| Home intro | Full-funnel growth product design for SaaS… | Senior product design for complex SaaS at scale… depth in lifecycle, monetization, validation |
| Home bio | Focus on acquisition… measurable outcomes | Framing, journeys, systems; deep experience in activation/expansion/monetization + experimentation when uncertainty is high |
| Home Miro card | Growth product design across… | Product design across high-stakes surfaces… |
| Home CTA | …growth and experimentation focus | …senior/lead PD including teams with monetization, activation, experimentation needs |
| Projects lede | growth, platform, enterprise | collaboration SaaS, platform community, enterprise |
| Projects Miro card | Growth design hub; funnel list desc | Selected work; high-stakes surfaces list |
| Miro case title | Growth design — product surfaces | Miro — product design at scale |
| Miro case lede/bullets | Growth-led framing | Ownership, craft/systems, experimentation as risk reduction |
| About lede | focus on growth, experimentation, monetization | strategy, journeys, systems; depth in lifecycle/monetization/validation |
| About skills section | PLG column first; “full growth funnel” | Product & craft first; Lifecycle & business second; “Craft, lifecycle, execution” |
| About Miro prose | “full funnel” | initiative list + cross-functional partnership |
| Contact lede / Full-time | growth and experimentation focus; growth design roles | senior/lead PD including strong monetization/activation/experimentation cultures; product design roles |
| `index.html` description | Senior PD, Growth at Miro | Senior PD at Miro; complex SaaS, journeys, lifecycle |
| Timeline job title | _unchanged_ — factual: Senior Product Designer, Growth | — |
| CaseStudyFigure chronology | PLG/Growth core | Lifecycle core |

---

## 1) Home (`src/components/Home.tsx`)

**Headline:** Keep `Senior Product Designer`.

**Intro line:** Senior product design for complex SaaS at scale — Miro (80M+), Wix (200M+) — from strategy and journeys to shipped quality, with depth in lifecycle, monetization, and validation.

**Bio paragraph:** 14+ years shipping SaaS end-to-end: framing ambiguous problems, designing journeys and systems implications, and partnering with PM, engineering, and GTM. Deep experience in activation, expansion, and monetization — including experimentation when uncertainty is high — without reducing the work to funnels alone.

**Trust chips (keep 5 max):**

- `Miro (2021 — now)`
- `Wix`
- `Reforge Growth Series`
- `NN/g Certified`
- `ADPList Mentor`

**CTA lead sentence:** Open to senior/lead product design roles — including teams with heavy monetization, activation, or experimentation needs. Selective advisory for SaaS product and GTM alignment.

**CTA labels:** Unchanged — primary `Book a 30-min intro call`, secondary `Or email for full case deck →`.

---

## 2) Projects (`src/pages/Projects.tsx`)

**Page lede:** Selected product work across collaboration SaaS, platform community, and enterprise contexts. Full case depth is shared on request via email.

**Current Miro card:**

- Title: `Miro — selected work`
- Description: `High-stakes product surfaces: community, acquisition, signup, enterprise expansion, and monetization.`
- Meta: `Miro · 2021 — now`

**Ciklum card:** Unchanged from prior draft.

---

## 3) Case teasers (`src/data/portfolioCases.ts`)

**Miro**

- Title: `Miro — product design at scale`
- Lede + teaser bullets: see repo (Scope = ownership/ambiguity; Execution = craft + systems + experimentation when appropriate; Impact = unchanged NDA-safe outcome class).

**Wix / Star:** Unchanged teaser triads unless a future pass tightens wording.

---

## 4) Case access gate (`src/pages/PortfolioCaseStudy.tsx`)

No change required for this strategy pass. Keep existing gate copy unless a separate polish ticket updates it.

---

## 5) Contact (`src/pages/Contact.tsx`)

**Page lede:** Open to senior/lead product design roles — including teams with strong monetization, activation, or experimentation cultures — with selective contract and advisory support.

**Full-time availability:** Open to senior/lead product design roles.

**Hiring block / CTAs / checklist:** Unchanged from prior draft where not superseded above.

---

## 6) About (`src/pages/About.tsx`)

**Opening:** Senior-first lede; Miro paragraph emphasizes initiatives + cross-functional partnership (not “full funnel” as the hook).

**Skills grid:** Order: Product & craft (design/research list) → Lifecycle & business (PLG list) → AI · data · stack. Section subtitle: `Craft, lifecycle, and execution`.

---

## 7) Canonical phrase lock (all pages)

Use exactly: `shared on request via email` for private deck access. No variants.

---

## 8) LinkedIn parity (apply manually on LinkedIn)

Align profile with the site’s first-screen promise within one sentence.

**Recommended headline (primary):**  
Senior Product Designer at Miro · Complex SaaS, journeys, craft · Depth in monetization, activation & experimentation

**Alternates:**

- Senior Product Designer · Miro — product strategy, end-to-end execution, high-stakes lifecycle work
- Senior Product Designer (Miro) · End-to-end SaaS design; strong in monetization, enterprise & community surfaces

**About / short bio:** Reuse or tighten the Home bio paragraph; lead with product scope, then one clause on lifecycle depth.

---

## 9) Success metrics (this cycle)

Track weekly:

- `contact_to_call_rate` — inbound contact → booked intro call
- `case_gate_to_email_click_rate` — case gate → request deck click
- `home_cta_to_call_click_rate` — home → intro call click

After repositioning, compare **inquiry quality** (role types), not only volume.

---

## 10) Priority order (maintenance)

**P1:** Home first screen, Contact lede + Full-time line, Miro case title/lede/bullets.  
**P2:** Projects lede + Miro card; About lede + skills order.  
**P3:** Meta description; LinkedIn manual sync; optional case body polish.

---

## 11) Out of scope (unless requested)

- New routes or layout redesign.
- Animation or visual system changes beyond copy.
- Removing factual job title `Senior Product Designer, Growth` from chronology.

---

## 12) Done definition

- Home, Projects, Miro teaser, About, Contact, and meta read **Senior Product Designer first**; growth/monetization/experimentation read as **depth**.
- No page contradicts another (e.g. Contact no longer says “growth design roles” for full-time).
- `shared on request via email` remains the only private-access phrase.
