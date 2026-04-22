import styles from '../../styles/site.module.css';
import { MAILTO } from './SiteHeader';

const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eugene-voroniuk/' },
  { label: 'X', href: 'https://x.com/ai_euge' },
  { label: 'ADPList', href: 'https://adplist.org/mentors/eugene-voroniuk' },
  { label: 'Instagram', href: 'https://www.instagram.com/eugeneworonyuk/' },
  { label: 'VanBlum', href: 'https://vanblum.shop' },
  { label: 'Email', href: MAILTO },
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <span>© 2026 Eugene Voroniuk</span>
        <span className={styles.footerMeta}>Amsterdam, NL · Set in PolySans</span>
      </div>
      <div className={styles.socials}>
        {SOCIAL.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
