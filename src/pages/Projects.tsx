import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyCard } from '../components/site/CaseStudyCard';

const CURRENT = [
  {
    key: 'miro-templates',
    to: '/projects/miro-templates',
    title: 'Miro — Custom Templates',
    desc: 'Built creator and admin flows that scaled template adoption across teams.',
    meta: 'Miro · 2023 — now',
    aspectRatio: '8 / 5',
    badge: 'Miro · Templates',
  },
  {
    key: 'miro-monetization',
    to: '/projects/miro-monetization',
    title: 'Miro — Monetization & Free→Paid',
    desc: 'Led free-to-paid UX and paywall optimization across core self-serve upgrade surfaces.',
    meta: 'Miro · 2022 — now',
    aspectRatio: '8 / 5',
    badge: 'Miro · Monetization',
  },
  {
    key: 'miro-enterprise',
    to: '/projects/miro-enterprise',
    title: 'Miro — Enterprise Expansion',
    desc: 'Designed expansion and governance flows that supported enterprise seat growth.',
    meta: 'Miro · 2022 — now',
    aspectRatio: '8 / 5',
    badge: 'Miro · Enterprise',
  },
  {
    key: 'miroverse',
    to: '/projects/miroverse',
    title: 'Miroverse — Community-Led Growth',
    desc: 'Shaped creator publishing and discovery loops for community-led product growth.',
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
    desc: 'Designed a cross-platform community product integrated into a 200M+ site ecosystem.',
    meta: 'Wix · 2019 — 2021',
    aspectRatio: '8 / 5',
    badge: 'Wix · Case',
  },
  {
    key: 'star',
    to: '/projects/star-global',
    title: 'Star (ex-Cogniance)',
    desc: 'Delivered enterprise product design across AdTech, HealthTech, IoT, GovTech, and mobility.',
    meta: 'Star · 2015 — 2019',
    aspectRatio: '8 / 5',
    badge: 'Star · NDA',
  },
  {
    key: 'ciklum',
    to: '/projects/ciklum',
    title: 'Ciklum — Graphic & Web',
    desc: 'Produced data-rich web and visual communication work for consulting-led delivery teams.',
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
        Focused product work across growth, platform, and enterprise contexts. Full case depth is
        shared via private access.
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
