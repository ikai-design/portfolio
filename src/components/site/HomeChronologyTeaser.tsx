import { Link } from 'react-router-dom';
import styles from '../../styles/site.module.css';
import { CaseStudyFigure } from './CaseStudyFigure';

/**
 * Chronology entry on Home — section title lives in `PageSection`; this is media + short link copy only.
 */
export function HomeChronologyTeaser() {
  return (
    <article className={styles.caseCard}>
      <Link to="/about#chronology" className={styles.caseCardLink}>
        <CaseStudyFigure
          aspectRatio="21 / 9"
          badge=""
          alt="Career chronology — design, product, lifecycle, AI"
          placeholderVariant="chronology"
          loading="lazy"
        />
        <div className={styles.caseCaption}>
          <p className={styles.caseDesc}>
            Roles, skills, side projects, and how the work above fits together.
          </p>
          <p className={styles.homeChronologyLink}>View full chronology →</p>
        </div>
      </Link>
    </article>
  );
}
