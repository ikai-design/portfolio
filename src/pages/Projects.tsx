import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyCard } from '../components/site/CaseStudyCard';

const CURRENT = [
  {
    key: 'miro-hub',
    to: '/projects/miro',
    title: 'Miro — selected work',
    desc:
      'High-stakes product surfaces: community, acquisition, signup, enterprise expansion, and monetization.',
    meta: 'Miro · 2021 — now',
    aspectRatio: '8 / 5',
    badge: 'Miro · Hub',
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
    to: '/about',
    title: 'Ciklum — Graphic & Web',
    desc: 'Earlier visual and web communication work; context and chronology are shared on About.',
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
        Selected product work across collaboration SaaS, platform community, and enterprise
        contexts. Full case depth is shared on request via email.
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
