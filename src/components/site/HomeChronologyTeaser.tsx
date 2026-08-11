import styles from '../../styles/site.module.css';
import { CaseStudyFigure } from './CaseStudyFigure';
import { AppLink } from './AppLink';

/**
 * Chronology entry on Home — section title lives in `PageSection`; this is media + short link copy only.
 */
export function HomeChronologyTeaser() {
  return (
    <article className={styles.caseCard}>
      <AppLink to="/about#chronology" className={styles.caseCardLink}>
        <CaseStudyFigure
          aspectRatio="21 / 9"
          badge=""
          alt="Career chronology — design, product, lifecycle, AI"
          placeholderVariant="chronology"
          loading="lazy"
        />
        <p className={styles.homeChronologyLink}>View chronology →</p>
      </AppLink>
    </article>
  );
}
