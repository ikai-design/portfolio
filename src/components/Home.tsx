import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyCard } from './site/CaseStudyCard';

const CASE_ITEMS = [
  {
    to: '/projects/miro',
    external: false as const,
    title: 'Miro',
    desc: 'Growth design for 80M+ users — monetization, enterprise expansion, Miroverse, custom templates.',
    meta: '2021 — now · Amsterdam',
    aspectRatio: '8 / 5',
    badge: 'Case 01 · Hub',
  },
  {
    to: '/projects/wix-groups',
    external: false as const,
    title: 'Wix',
    desc: 'Cross-platform community add-on for 200M+ Wix sites across 190 countries.',
    meta: '2019 — 2021 · Kyiv',
    aspectRatio: '8 / 5',
    badge: 'Case 02 · Cover',
  },
  {
    to: '/projects/star-global',
    external: false as const,
    title: 'Star (ex-Cogniance)',
    desc: 'Senior UX for Fortune 500 clients — AdTech, HealthTech, IoT, GovTech, wearables.',
    meta: '2015 — 2019 · Kyiv',
    aspectRatio: '8 / 5',
    badge: 'Case 03 · Cover',
  },
  {
    to: '/about',
    external: false as const,
    title: 'Background & chronology',
    desc: 'Roles, skills, side projects, and how the work above fits together.',
    meta: 'About',
    aspectRatio: '21 / 9',
    badge: 'Story · Wide',
  },
] as const;

export default function Home() {
  return (
    <>
      <h1 className={`${styles.displayName} ${styles.homeDisplayName}`}>Eugene Voroniuk</h1>

      <section className={`${styles.intro} ${styles.homeIntro}`} aria-label="Introduction">
        <p className={styles.introLine}>
          Senior Product Designer, Growth at{' '}
          <a
            className={styles.inlineLink}
            href="https://miro.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Miro
          </a>
        </p>
        <p className={styles.introLine}>
          Based in Amsterdam · CET. Formerly at{' '}
          <Link className={styles.inlineLink} to="/about">
            Wix
          </Link>{' '}
          &{' '}
          <Link className={styles.inlineLink} to="/about">
            Star
          </Link>
          .
        </p>
      </section>

      <ul className={styles.caseStack}>
        {CASE_ITEMS.map((item) => (
          <li key={item.title}>
            <CaseStudyCard
              to={item.to}
              external={item.external}
              title={item.title}
              desc={item.desc}
              meta={item.meta}
              aspectRatio={item.aspectRatio}
              badge={item.badge}
            />
          </li>
        ))}
      </ul>

      <p className={styles.bio}>
        14+ years designing SaaS products end-to-end — product-led growth, monetization,
        behavioral UX, and AI-enhanced design workflows. I care about clear defaults, honest
        copy, and work that scales with real usage.
      </p>

      <section className={styles.ctaBlock} aria-labelledby="cta-heading">
        <h2 id="cta-heading" className={styles.visuallyHidden}>
          Stay in touch
        </h2>
        <p className={styles.ctaText}>
          Open to senior growth-design roles, mentorship via ADPList, and a limited amount of
          advisory work.
        </p>
        <Link className={styles.ctaLink} to="/contact">
          Get in touch →
        </Link>
      </section>
    </>
  );
}
