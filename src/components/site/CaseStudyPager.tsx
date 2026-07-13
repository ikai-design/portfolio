import { Link } from 'react-router-dom';
import styles from '../../styles/site.module.css';
import {
  getCaseNavLabel,
  getCaseNavNeighbors,
} from '../../data/portfolioCases';

type CaseStudyPagerProps = {
  slug: string;
};

export function CaseStudyPager({ slug }: CaseStudyPagerProps) {
  const neighbors = getCaseNavNeighbors(slug);
  if (!neighbors) return null;

  const { prev, next } = neighbors;

  return (
    <nav aria-label="Case study navigation" className={styles.caseStudyPager}>
      <span className={styles.caseStudyPagerSlot} aria-hidden={prev ? undefined : true}>
        {prev ? (
          <Link className={styles.caseStudyPagerLink} to={`/projects/${prev}`}>
            ← {getCaseNavLabel(prev)}
          </Link>
        ) : null}
      </span>
      <span className={styles.caseStudyPagerSlot}>
        {next === 'home' ? (
          <Link className={styles.caseStudyPagerLink} to="/">
            All work →
          </Link>
        ) : next ? (
          <Link className={styles.caseStudyPagerLink} to={`/projects/${next}`}>
            {getCaseNavLabel(next)} →
          </Link>
        ) : null}
      </span>
    </nav>
  );
}
