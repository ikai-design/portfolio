import { Link } from 'react-router-dom';
import { PageSection } from '../components/site/PageSection';
import styles from '../styles/site.module.css';

const CAL_ADVISORY = 'https://cal.com/eugene-vo-zjgfze/30min?source=advisory';

const OUTCOMES = [
  {
    tag: 'Acquisition',
    title: 'Signup that converts without costing activation',
    desc: 'Cut friction between first touch and registered user, while watching the habit metric so acquisition gains are not paid for downstream.',
  },
  {
    tag: 'Activation',
    title: 'Get new users to first value',
    desc: 'Map where people stall after signup and redesign the path to the moment the product actually clicks.',
  },
  {
    tag: 'Engagement',
    title: 'Make adopted features findable',
    desc: 'When a feature is used but buried, the fix is information architecture and entry points — not more UI.',
  },
  {
    tag: 'Monetization',
    title: 'Upgrade and plan moments',
    desc: 'Paywalls and upgrade surfaces placed where value actually lands for corporate and professional users.',
  },
  {
    tag: 'Experimentation',
    title: 'Tests that teach you something either way',
    desc: 'Bets sized before they are built, so a losing result still tells you where to go next instead of costing a quarter.',
  },
] as const;

const WORK = [
  {
    tag: 'Acquisition',
    title: 'In-product signup — Miro',
    meta: '2022–2023 · end-to-end product design',
    desc: 'Replaced a website redirect with registration inside the product, then iterated on step order, social proof, and email verification. Lifted visitor to new corporate user conversion while holding activation as a guardrail.',
  },
  {
    tag: 'Engagement',
    title: 'Custom templates — Miro',
    meta: '2023 · end-to-end product design',
    desc: 'Diagnosed discoverability for organizations running dozens of templates, sized the opportunity with the product analyst, and shipped a private beta that beat its forecast on weekly active use.',
  },
  {
    tag: 'Virality',
    title: 'Shareable presentations — Miro',
    meta: '2023 · end-to-end product design',
    desc: 'Designed board-to-presentation sharing as an acquisition loop for consultants. Beta retention held but adoption did not, which redirected the work toward entry points and product-market fit.',
  },
] as const;

const OFFERS = [
  {
    price: 'From €6,000',
    title: 'Activation / monetization audit',
    meta: 'Fixed · net · 1–2 weeks',
    desc: 'Async review and two working sessions on one surface. You get a friction map, annotated screens, and a prioritized roadmap.',
  },
  {
    price: 'From €12,000',
    title: 'Design sprint / bottleneck engagement',
    meta: 'Fixed · net · 2–4 weeks',
    desc: 'Flows, specs, and a clickable prototype for one defined problem, built with your PM and engineers. Scope locked at kickoff.',
  },
  {
    price: 'From €7,500',
    title: 'Fractional advisory retainer',
    meta: 'Monthly · net · ~1–2 days per week',
    desc: 'Weekly reviews, office hours, and roadmap partnership. Async feedback on real flows in Slack or Loom. Pause or cancel with notice.',
  },
] as const;

const FAQ = [
  {
    tag: 'Scope',
    title: 'How is this different from hiring you full-time?',
    desc: 'Advisory is scoped help on a bottleneck. Senior, staff, and principal IC roles go through Contact — not priced here.',
  },
  {
    tag: 'Cases',
    title: 'Can I see the actual work?',
    desc: 'Case teasers are public here. Full flows, funnel diagnosis, and metrics are shared under NDA after an intro call.',
  },
  {
    tag: 'Availability',
    title: 'Are you available alongside other commitments?',
    desc: 'Yes — selective and capacity-limited. If it is not a fit, I will say so quickly.',
  },
  {
    tag: 'Terms',
    title: 'Can we pause or cancel?',
    desc: 'Yes. Projects can pause if availability allows a later resume. Retainers can pause or cancel with notice.',
  },
  {
    tag: 'Mentoring',
    title: 'Do you offer free mentorship?',
    desc: 'Short career sessions are free on ADPList. Paid advisory is for product work with a defined problem and budget.',
  },
] as const;

export default function Advisory() {
  return (
    <>
      <h1 className={styles.pageTitle}>Advisory</h1>
      <p className={`${styles.pageLede} ${styles.pageLedeNoBottom}`}>
        Most SaaS teams lose people between signup and first value, then leave revenue on the table
        at the upgrade moment. I fix those surfaces — and hand back design your team can build from,
        not a deck.
      </p>

      <h2 className={styles.sectionHead}>
        <span>Advisory inquiry</span>
        <small>Fastest way to start</small>
      </h2>
      <section className={`${styles.ctaBlock} ${styles.ctaBlockNoDivider}`}>
        <div className={styles.ctaRow}>
          <a
            className={styles.contactLink}
            href={CAL_ADVISORY}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an advisory intro
          </a>
        </div>
        <ul className={`${styles.caseAccessChecklist} ${styles.contactLeadChecklist}`}>
          <li>Share the problem, your company stage, and a rough budget or timeline.</li>
          <li>Bring the activation or monetization number you are trying to move, if you track it.</li>
          <li>
            Hiring for a full-time IC role?{' '}
            <Link className={styles.inlineLink} to="/contact">
              Go to Contact
            </Link>
            .
          </li>
        </ul>
      </section>

      <PageSection id="fit" title="Who this is for" subtitle="And who it is not">
        <div className={styles.skillsGrid}>
          <div className={styles.skillCol}>
            <h3>Good fit</h3>
            <ul>
              <li>
                <span>SaaS with activation or paywall pressure</span>
              </li>
              <li>
                <span>Senior IC judgment, no full-time seat</span>
              </li>
              <li>
                <span>Complex B2B tools with corporate users</span>
              </li>
            </ul>
          </div>
          <div className={styles.skillCol}>
            <h3>Not a fit</h3>
            <ul>
              <li>
                <span>Branding or unlimited UI subscriptions</span>
              </li>
              <li>
                <span>
                  Free mentorship —{' '}
                  <a
                    className={styles.inlineLink}
                    href="https://adplist.org/mentors/eugene-voroniuk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADPList
                  </a>
                </span>
              </li>
              <li>
                <span>
                  Recruiters hiring full-time —{' '}
                  <Link className={styles.inlineLink} to="/contact">
                    Contact
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection id="outcomes" title="Outcomes" subtitle="What we optimize for">
        <div className={styles.timeline}>
          {OUTCOMES.map((item) => (
            <div key={item.title} style={{ display: 'contents' }}>
              <div className={styles.tlYear}>{item.tag}</div>
              <div className={styles.tlRow}>
                <span className={styles.tlRole}>{item.title}</span>
                <span className={styles.tlBlurb}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection id="work" title="Where this comes from" subtitle="Problem classes I have shipped">
        <p className={`${styles.prose} ${styles.pageSectionLede}`}>
          Three classes of problem from{' '}
          <Link className={styles.inlineLink} to="/projects/miro">
            Miro
          </Link>
          , alongside earlier work at{' '}
          <Link className={styles.inlineLink} to="/projects/wix-groups">
            Wix
          </Link>{' '}
          and shipped side products like{' '}
          <Link className={styles.inlineLink} to="/projects/simple-screen-recorder">
            Simple Screen Recorder
          </Link>
          . Exact funnel numbers stay under NDA and are walked through on a call.
        </p>
        <div className={styles.timeline}>
          {WORK.map((item) => (
            <div key={item.title} style={{ display: 'contents' }}>
              <div className={styles.tlYear}>{item.tag}</div>
              <div className={styles.tlRow}>
                <span className={styles.tlRole}>{item.title}</span>
                <span className={styles.tlMeta}>{item.meta}</span>
                <span className={styles.tlBlurb}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="formats"
        title="Formats & pricing"
        subtitle="EUR · net"
        lede="Starting ranges so you can self-qualify. Final scope is confirmed before kickoff."
      >
        <div className={styles.timeline}>
          {OFFERS.map((offer) => (
            <div key={offer.title} style={{ display: 'contents' }}>
              <div className={styles.tlYear}>{offer.price}</div>
              <div className={styles.tlRow}>
                <span className={styles.tlRole}>{offer.title}</span>
                <span className={styles.tlMeta}>{offer.meta}</span>
                <span className={styles.tlBlurb}>{offer.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection id="terms" title="What you get" subtitle="And what you do not">
        <div className={styles.metaGrid}>
          <span className={styles.metaKey}>Stage pricing</span>
          <span className={styles.metaValue}>
            Early stage under €2M ARR starts at the listed price · €2–20M ARR from €9,000 ·
            above €20M ARR on request
          </span>
          <span className={styles.metaKey}>How it runs</span>
          <span className={styles.metaValue}>
            Funnel and research review · journey and friction map · impact sizing with your PM and
            analyst · prototype · usability test or private beta · measure against success and
            guardrail metrics
          </span>
          <span className={styles.metaKey}>You get</span>
          <span className={styles.metaValue}>
            Annotated flows and specs your team can build from, a prioritized roadmap, and async
            review of real product surfaces
          </span>
          <span className={styles.metaKey}>Not included</span>
          <span className={styles.metaValue}>
            Brand identity, marketing sites, and open-ended production capacity
          </span>
          <span className={styles.metaKey}>Availability</span>
          <span className={styles.metaValue}>
            Selective — one or two engagements at a time, alongside a full-time role
          </span>
        </div>
      </PageSection>

      <PageSection id="faq" title="FAQ" subtitle="Practical details">
        <div className={styles.timeline}>
          {FAQ.map((item) => (
            <div key={item.title} style={{ display: 'contents' }}>
              <div className={styles.tlYear}>{item.tag}</div>
              <div className={styles.tlRow}>
                <span className={styles.tlRole}>{item.title}</span>
                <span className={styles.tlBlurb}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <section className={styles.ctaBlock} aria-labelledby="advisory-cta-heading">
        <h2 id="advisory-cta-heading" className={styles.visuallyHidden}>
          Book advisory
        </h2>
        <p className={styles.ctaText}>
          Selective capacity — bring a concrete bottleneck and a rough budget.
        </p>
        <div className={styles.ctaRow}>
          <a
            className={styles.contactLink}
            href={CAL_ADVISORY}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book an advisory intro
          </a>
        </div>
      </section>
    </>
  );
}
