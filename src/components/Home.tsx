import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyCard } from './site/CaseStudyCard';

const CALENDLY_30 = 'https://calendly.com/eugene_vo/30-min-call';
const TRUST_MARKERS = [
  'Miro (2021 — now)',
  'Wix',
  'Reforge Growth Series',
  'NN/g Certified',
  'ADPList Mentor',
] as const;

type HomeCaseItem = {
  to: string;
  external: false;
  title: string;
  desc: string;
  meta?: string;
  aspectRatio: string;
  badge: string;
  imageSrc?: string;
  imageAlt?: string;
  placeholderVariant?: 'default' | 'chronology';
};

const CASE_ITEMS: HomeCaseItem[] = [
  {
    to: '/projects/miro',
    external: false as const,
    title: 'Miro',
    desc:
      'Product design across high-stakes surfaces: community, acquisition, signup, enterprise expansion, and monetization — public teaser; full case deck shared on request via email.',
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
    desc:
      'Sole designer for most of the lifecycle — cross-platform community product for creators and SMBs, 200M+ users, 190 countries.',
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
      '10+ Fortune 500 engagements — greenfield and regulated — AdTech, HealthTech, IoT, telematics, GovTech; client workshops and NDA.',
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
    aspectRatio: '21 / 9',
    badge: '',
    placeholderVariant: 'chronology',
  },
];

export default function Home() {
  return (
    <>
      <h1 className={`${styles.displayName} ${styles.homeDisplayName}`}>Senior Product Designer</h1>

      <section className={`${styles.intro} ${styles.homeIntro}`} aria-label="Introduction">
        <p className={styles.introLine}>
          Design for complex SaaS at scale — Miro (80M+),
          <br />
          Wix (200M+) — from strategy and journeys to shipped quality, with depth in lifecycle, from signup to revenue.
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
              placeholderVariant={item.placeholderVariant}
            />
          </li>
        ))}
      </ul>

      <p className={styles.bio}>
        14+ years shipping SaaS end-to-end: framing ambiguous problems, designing journeys and
        systems implications, and partnering with PM, engineering, and GTM. I have deep experience
        in activation, expansion, and monetization — including experimentation when uncertainty is
        high — without reducing the work to funnels alone.
      </p>
      <ul className={styles.trustStrip} aria-label="Selected trust markers">
        {TRUST_MARKERS.map((marker) => (
          <li key={marker} className={styles.trustChip}>
            {marker}
          </li>
        ))}
      </ul>

      <section className={styles.ctaBlock} aria-labelledby="cta-heading">
        <h2 id="cta-heading" className={styles.visuallyHidden}>
          Stay in touch
        </h2>
        <p className={styles.ctaText}>
          Open to senior/lead product design roles — including teams with heavy monetization,
          activation, or experimentation needs. Selective advisory for SaaS product and GTM
          alignment.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.contactLink} href={CALENDLY_30} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
          <Link className={styles.ctaLink} to="/contact">
            Or email for full case deck →
          </Link>
        </div>
      </section>
    </>
  );
}
