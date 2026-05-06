import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';

export default function NotFound() {
  return (
    <>
      <h1 className={styles.pageTitle}>Page not found</h1>
      <p className={styles.caseLockIntro}>
        This page may have moved or the link might be outdated. You can return to the homepage or
        contact me for a direct case link.
      </p>
      <div className={styles.ctaRow}>
        <Link className={styles.ctaLink} to="/">
          Back to homepage
        </Link>
        <Link className={styles.ctaLink} to="/contact">
          Contact
        </Link>
      </div>
    </>
  );
}
