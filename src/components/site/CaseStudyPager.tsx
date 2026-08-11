import styles from '../../styles/site.module.css';
import {
  getCaseNavLabel,
  getCaseNavNeighbors,
} from '../../data/portfolioCases';
import { AppLink } from './AppLink';

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
          <AppLink className={styles.caseStudyPagerLink} to={`/projects/${prev}`}>
            ← {getCaseNavLabel(prev)}
          </AppLink>
        ) : null}
      </span>
      <span className={styles.caseStudyPagerSlot}>
        {next === 'home' ? (
          <AppLink className={styles.caseStudyPagerLink} to="/">
            All work →
          </AppLink>
        ) : next ? (
          <AppLink className={styles.caseStudyPagerLink} to={`/projects/${next}`}>
            {getCaseNavLabel(next)} →
          </AppLink>
        ) : null}
      </span>
    </nav>
  );
}
