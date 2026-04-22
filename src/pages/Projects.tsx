import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyCard } from '../components/site/CaseStudyCard';

const CURRENT = [
  {
    key: 'miro-templates',
    to: '/projects/miro-templates',
    title: 'Miro — Custom Templates',
    desc: 'Creator tools and management workflows that let teams build and scale internal template libraries. Discovery, adoption and seat-wide rollout.',
    meta: 'Miro · 2023 — now',
    aspectRatio: '8 / 5',
    badge: 'Miro · Templates',
  },
  {
    key: 'miro-monetization',
    to: '/projects/miro-monetization',
    title: 'Miro — Monetization & Free→Paid',
    desc: 'Pricing experiments, paywall optimization and upgrade surfaces across self-serve. A/B tested touchpoints against conversion and ARPU.',
    meta: 'Miro · 2022 — now',
    aspectRatio: '8 / 5',
    badge: 'Miro · Monetization',
  },
  {
    key: 'miro-enterprise',
    to: '/projects/miro-enterprise',
    title: 'Miro — Enterprise Expansion',
    desc: 'Seat growth inside existing accounts, team-wide rollout, admin & governance for enterprise customers.',
    meta: 'Miro · 2022 — now',
    aspectRatio: '8 / 5',
    badge: 'Miro · Enterprise',
  },
  {
    key: 'miroverse',
    to: '/projects/miroverse',
    title: 'Miroverse — Community-Led Growth',
    desc: 'Template ecosystem: creator & publishing flows, discovery and engagement with community content.',
    meta: 'Miro · 2021 — 2023',
    aspectRatio: '8 / 5',
    badge: 'Miroverse',
  },
] as const;

const SELECTED = [
  {
    key: 'wix',
    to: '/projects/wix-groups',
    title: 'Wix Groups',
    desc: 'Cross-platform micro-community for 200M+ sites — web, iOS and Android.',
    meta: 'Wix · 2019 — 2021',
    aspectRatio: '8 / 5',
    badge: 'Wix · Case',
  },
  {
    key: 'star',
    to: '/projects/star-global',
    title: 'Star (ex-Cogniance)',
    desc: 'Fortune 500 product design — AdTech, HealthTech, IoT, GovTech, telematics, wearables.',
    meta: 'Star · 2015 — 2019',
    aspectRatio: '8 / 5',
    badge: 'Star · NDA',
  },
  {
    key: 'ciklum',
    to: '/projects/ciklum',
    title: 'Ciklum — Graphic & Web',
    desc: 'Data visualization, infographics, training materials and web design with consultants.',
    meta: 'Ciklum · 2013 — 2015',
    aspectRatio: '8 / 5',
    badge: 'Ciklum · Archive',
  },
] as const;

export default function Projects() {
  return (
    <>
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.pageLede}>
        Every tile opens an internal hi-fi wireframe case page (reference-style light frames on
        black). Drop assets in public/cases/ and wire imageSrc when you are ready to ship pixels.
      </p>

      <h2 className={styles.sectionHead}>
        <span>Currently — Miro</span>
        <small>
          <Link className={styles.inlineLink} to="/projects/miro">
            Hub →
          </Link>
        </small>
      </h2>
      <ul className={styles.caseStack}>
        {CURRENT.map((item) => (
          <li key={item.key}>
            <CaseStudyCard
              to={item.to}
              title={item.title}
              desc={item.desc}
              meta={item.meta}
              aspectRatio={item.aspectRatio}
              badge={item.badge}
            />
          </li>
        ))}
      </ul>

      <h2 className={styles.sectionHead}>
        <span>Selected case studies</span>
        <small>Before Miro</small>
      </h2>
      <ul className={styles.caseStack}>
        {SELECTED.map((item) => (
          <li key={item.key}>
            <CaseStudyCard
              to={item.to}
              title={item.title}
              desc={item.desc}
              meta={item.meta}
              aspectRatio={item.aspectRatio}
              badge={item.badge}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
