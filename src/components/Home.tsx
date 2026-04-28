import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyCard } from './site/CaseStudyCard';

type HomeCaseItem = {
  to: string;
  external: false;
  title: string;
  desc: string;
  meta: string;
  aspectRatio: string;
  badge: string;
  imageSrc?: string;
  imageAlt?: string;
};

const CASE_ITEMS: HomeCaseItem[] = [
  {
    to: '/projects/miro',
    external: false as const,
    title: 'Miro',
    desc:
      'Growth product design across community-led acquisition, in-product signup, enterprise expansion, and monetization — public teaser; full case on request.',
    meta: '2021 — now · Amsterdam',
    aspectRatio: '8 / 5',
    badge: 'Case 01 · Hub',
    imageSrc: `${import.meta.env.BASE_URL}cover_m.png`,
    imageAlt: 'Miro case cover',
  },
  {
    to: '/projects/wix-groups',
    external: false as const,
    title: 'Wix',
    desc: 'Cross-platform community add-on for 200M+ Wix sites across 190 countries.',
    meta: '2019 — 2021 · Kyiv',
    aspectRatio: '8 / 5',
    badge: 'Case 02 · Cover',
    imageSrc: `${import.meta.env.BASE_URL}cover_w_2.png`,
    imageAlt: 'Wix case cover',
  },
  {
    to: '/projects/star-global',
    external: false as const,
    title: 'Star (ex-Cogniance)',
    desc:
      'Led complex B2B/B2C UX from ideation to delivery across Fortune 500 client products in AdTech, HealthTech, IoT, and telematics.',
    meta: '2015 — 2019 · Kyiv',
    aspectRatio: '8 / 5',
    badge: 'Case 03 · Cover',
    imageSrc: `${import.meta.env.BASE_URL}cover_s.png`,
    imageAlt: 'Star case cover',
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
];

export default function Home() {
  return (
    <>
      <h1 className={`${styles.displayName} ${styles.homeDisplayName}`}>Senior Product Designer</h1>

      <section className={`${styles.intro} ${styles.homeIntro}`} aria-label="Introduction">
        <p className={styles.introLine}>
          Full-funnel growth product design for SaaS: Miro (80M+), Wix (200M+)
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
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
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
