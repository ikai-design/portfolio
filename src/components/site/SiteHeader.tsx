import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/site.module.css';
import { ThemeToggle } from './ThemeToggle';
import { AppLink, AppNavLink } from './AppLink';

export const CONTACT_EMAIL = 'eu.voroniuk@gmail.com';
export const MAILTO = `mailto:${CONTACT_EMAIL}`;

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
}

/**
 * Haven-style header: sits normally at the top, stays away while you scroll
 * down through the first screens, then slides back in on scroll-up once deep.
 */
export function SiteHeader() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);
  const [pinned, setPinned] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;
    setHidden(false);
    setPinned(false);
  }, [pathname]);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const prev = lastY.current;
      const delta = y - prev;
      const activation = Math.min(window.innerHeight * 1.5, 1200);

      if (y < 32) {
        setHidden(false);
        setPinned(false);
      } else if (y < activation) {
        // Mid-scroll through the first screens — keep chrome out of the way
        setHidden(true);
        setPinned(false);
      } else {
        // Deep enough: sticky bar, show on scroll-up / hide on scroll-down
        setPinned(true);
        if (delta > 8) setHidden(true);
        else if (delta < -8) setHidden(false);
      }

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const className = [
    styles.top,
    pinned ? styles.topPinned : '',
    hidden ? styles.topHidden : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={className}>
      <AppLink to="/" className={styles.name}>
        Eugene Voroniuk
      </AppLink>
      <div className={styles.topMeta}>
        <AppNavLink to="/about" className={navClass}>
          About
        </AppNavLink>
        <AppNavLink to="/contact" className={navClass}>
          Contact
        </AppNavLink>
        <ThemeToggle />
      </div>
    </header>
  );
}
