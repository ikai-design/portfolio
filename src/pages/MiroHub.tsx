import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyCard } from '../components/site/CaseStudyCard';

const STREAMS = [
  {
    to: '/projects/miro-templates',
    title: 'Custom Templates',
    desc: 'Creator tools and org-wide template libraries — discovery, adoption, rollout.',
    meta: '2023 — now',
    badge: 'Stream · Templates',
    aspectRatio: '8 / 5',
  },
  {
    to: '/projects/miro-monetization',
    title: 'Monetization & Free→Paid',
    desc: 'Pricing experiments, paywalls and upgrade paths across self-serve.',
    meta: '2022 — now',
    badge: 'Stream · Revenue',
    aspectRatio: '8 / 5',
  },
  {
    to: '/projects/miro-enterprise',
    title: 'Enterprise Expansion',
    desc: 'Seat growth, rollout, admin and governance for large accounts.',
    meta: '2022 — now',
    badge: 'Stream · Enterprise',
    aspectRatio: '8 / 5',
  },
  {
    to: '/projects/miroverse',
    title: 'Miroverse',
    desc: 'Community-led growth — creator flows, publishing and discovery.',
    meta: '2021 — 2023',
    badge: 'Stream · Community',
    aspectRatio: '8 / 5',
  },
] as const;

export default function MiroHub() {
  return (
    <>
      <Link className={styles.backLink} to="/projects">
        ← Back to projects
      </Link>
      <h1 className={styles.pageTitle}>Miro</h1>
      <p className={styles.pageLede}>
        Growth design for 80M+ users — four internal case wireframes below. Each opens a hi-fi
        placeholder page you can swap for real screenshots.
      </p>
      <p className={styles.prose}>
        Live product for context:{' '}
        <a className={styles.inlineLink} href="https://miro.com" target="_blank" rel="noopener noreferrer">
          miro.com
        </a>
        .
      </p>

      <h2 className={styles.sectionHead}>
        <span>Case wireframes</span>
        <small>Growth streams</small>
      </h2>
      <ul className={styles.caseStack}>
        {STREAMS.map((item) => (
          <li key={item.to}>
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
