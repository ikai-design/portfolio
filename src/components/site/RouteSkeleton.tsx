import styles from '../../styles/skeleton.module.css';
import site from '../../styles/site.module.css';

/**
 * Shown while lazy route chunks load (Suspense fallback).
 * Mirrors intro → title → lines → large frame rhythm of the portfolio pages.
 */
export function RouteSkeleton() {
  return (
    <div className={styles.wrap} aria-busy="true" aria-live="polite">
      <span className={site.visuallyHidden}>Loading page</span>
      <div className={styles.row}>
        <div className={`${styles.bar} ${styles.barWide}`} />
        <div className={`${styles.bar} ${styles.barShort}`} />
      </div>
      <div className={`${styles.bar} ${styles.title}`} />
      <div className={`${styles.bar} ${styles.line}`} />
      <div className={`${styles.bar} ${styles.line}`} />
      <div className={`${styles.bar} ${styles.lineNarrow}`} />
      <div className={styles.frame} />
      <div className={`${styles.bar} ${styles.line}`} />
      <div className={styles.frameSmall} />
    </div>
  );
}
