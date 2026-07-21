import styles from '../styles/site.module.css';
import { CaseStack } from './site/CaseStack';
import { HeroDiffusion } from './site/HeroDiffusion';
import { HomeChronologyTeaser } from './site/HomeChronologyTeaser';
import { PageSection } from './site/PageSection';
import { HOME_CASE_ITEMS } from '../data/homeContent';

const CAL_30 = 'https://cal.com/eugene-vo-zjgfze/30min';

export default function Home() {
  return (
    <>
      <div className={styles.homeHero}>
        <HeroDiffusion />
        <h1 className={`${styles.displayName} ${styles.homeDisplayName}`}>
          Product design from signup to revenue
        </h1>

        <section className={`${styles.intro} ${styles.homeIntro}`} aria-label="Introduction">
          <p className={styles.introLine}>
            <span className={styles.introLineLead}>
              Senior Product Designer — Miro (80M+), Wix (200M+).{' '}
            </span>
            <span className={styles.introLineTail}>
              Systems, journeys, and shipped UI across acquisition, activation, and monetization.
            </span>
          </p>
        </section>

        <div className={`${styles.homeHeroCta} ${styles.ctaRow}`}>
          <a className={styles.contactLink} href={CAL_30} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
        </div>
      </div>

      <CaseStack items={HOME_CASE_ITEMS} flush />

      <PageSection
        id="chronology"
        sectionClassName={styles.homeChronologySection}
        title="Chronology"
        subtitle="2009 → now"
        headClassName={styles.aboutChronologyHead}
        lede="Full timeline on About — roles and employers from 2009 to now."
      >
        <HomeChronologyTeaser />
      </PageSection>

      <section className={styles.ctaBlock} aria-labelledby="cta-heading">
        <h2 id="cta-heading" className={styles.visuallyHidden}>
          Stay in touch
        </h2>
        <p className={styles.ctaText}>
          Open to senior, staff, and principal IC product design roles — including teams with
          heavy monetization, activation, or experimentation needs.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.contactLink} href={CAL_30} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
        </div>
      </section>
    </>
  );
}
