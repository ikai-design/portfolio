import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/site.module.css';

export const CONTACT_EMAIL = 'eu.voroniuk@gmail.com';
export const MAILTO = `mailto:${CONTACT_EMAIL}`;

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
}

export function SiteHeader() {
  return (
    <header className={styles.top}>
      <Link to="/" className={styles.name}>
        Eugene Voroniuk
      </Link>
      <div className={styles.topMeta}>
        <NavLink to="/projects" className={navClass}>
          Work
        </NavLink>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
      </div>
    </header>
  );
}
