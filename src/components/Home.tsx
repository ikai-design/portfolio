import styles from '../styles/site.module.css';
import { CaseStack } from './site/CaseStack';
import { HomeChronologyTeaser } from './site/HomeChronologyTeaser';
import { PageSection } from './site/PageSection';
import { ENTERPRISE_CASE_ITEMS, PET_HOME_ITEMS } from '../data/homeContent';

const CALENDLY_30 = 'https://calendly.com/eugene_vo/30-min-call';
const TRUST_MARKERS = [
  'Miro (2021 — now)',
  'Wix',
  'Reforge Growth Series',
  'NN/g Certified',
  'ADPList Mentor',
] as const;

export default function Home() {
  return (
    <>
      <h1 className={`${styles.displayName} ${styles.homeDisplayName}`}>Senior Product Designer</h1>

      <section className={`${styles.intro} ${styles.homeIntro}`} aria-label="Introduction">
        <p className={styles.introLine}>
          Complex SaaS at scale: Miro (80M+), Wix (200M+). Strategy to shipped UI, with depth in
          lifecycle and monetization.
        </p>
      </section>

      <CaseStack items={ENTERPRISE_CASE_ITEMS} flush />

      <PageSection
        id="pet-projects"
        sectionClassName={styles.homePetSection}
        title="Independent products"
        subtitle="Built and shipped independently"
        lede="Live products built end-to-end with AI-assisted tooling — open in a new tab."
      >
        <CaseStack items={PET_HOME_ITEMS} nested />
      </PageSection>

      <PageSection
        id="chronology"
        title="Chronology"
        subtitle="2009 → now"
        headClassName={styles.aboutChronologyHead}
      >
        <HomeChronologyTeaser />
      </PageSection>

      <p className={styles.bio}>
        14+ years end-to-end SaaS design — framing, journeys, systems, and UI quality. Deep
        experience in activation, expansion, and monetization, including experimentation when stakes
        are high.
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
          Open to senior, staff, and principal IC product design roles — including teams with
          heavy monetization, activation, or experimentation needs. Selective advisory for SaaS
          product and GTM alignment.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.contactLink} href={CALENDLY_30} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
        </div>
      </section>
    </>
  );
}
