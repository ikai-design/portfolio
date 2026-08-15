import { Link } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CONTACT_EMAIL, MAILTO } from '../components/site/SiteHeader';

const CAL_30 = 'https://cal.com/eugene-vo-zjgfze/30min';
const PHONE = '+31 6 388 91 489';
const PHONE_HREF = 'tel:+31638891489';

export default function Contact() {
  return (
    <>
      <h1 className={styles.pageTitle}>Contact</h1>
      <p className={`${styles.pageLede} ${styles.pageLedeNoBottom}`}>
        Open to senior, staff, and principal IC product design roles — including teams with heavy
        monetization, activation, or experimentation needs.
      </p>

      <h2 className={styles.sectionHead}>
        <span>Hiring inquiry</span>
        <small>Fastest way to connect</small>
      </h2>
      <section className={`${styles.ctaBlock} ${styles.ctaBlockNoDivider}`}>
        <div className={styles.ctaRow}>
          <a className={styles.contactLink} href={CAL_30} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
        </div>
        <ul className={`${styles.caseAccessChecklist} ${styles.contactLeadChecklist}`}>
          <li>Share role/company and which case area you want to review.</li>
          <li>Typical response time: within 24 hours on business days.</li>
          <li>
            For selective advisory, see{' '}
            <Link className={styles.inlineLink} to="/advisory">
              Advisory
            </Link>
            .
          </li>
        </ul>
      </section>

      <h2 className={styles.sectionHead}>
        <span>Direct channels</span>
        <small>Backup options</small>
      </h2>
      <div className={styles.metaGrid}>
        <span className={styles.metaKey}>Email</span>
        <span className={styles.metaValue}>
          <a href={MAILTO}>{CONTACT_EMAIL}</a>
        </span>
        <span className={styles.metaKey}>Phone</span>
        <span className={styles.metaValue}>
          <a href={PHONE_HREF}>{PHONE}</a>
        </span>
        <span className={styles.metaKey}>LinkedIn</span>
        <span className={styles.metaValue}>
          <a
            href="https://www.linkedin.com/in/eugene-voroniuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/eugene-voroniuk
          </a>
        </span>
      </div>

      <h2 className={styles.sectionHead}>
        <span>Availability</span>
        <small>Based in Amsterdam · CET</small>
      </h2>
      <div className={styles.metaGrid}>
        <span className={styles.metaKey}>Timezone</span>
        <span className={styles.metaValue}>EU time zones (CET, GMT, CEST)</span>
        <span className={styles.metaKey}>Relocation</span>
        <span className={styles.metaValue}>Visa sponsorship or EOR required</span>
        <span className={styles.metaKey}>Start window</span>
        <span className={styles.metaValue}>Flexible, based on role scope and process timing</span>
      </div>

      <h2 className={styles.sectionHead}>
        <span>Elsewhere</span>
        <small>Socials</small>
      </h2>
      <div className={styles.metaGrid}>
        <span className={styles.metaKey}>X</span>
        <span className={styles.metaValue}>
          <a href="https://x.com/ai_euge" target="_blank" rel="noopener noreferrer">
            @ai_euge
          </a>
        </span>
        <span className={styles.metaKey}>Instagram</span>
        <span className={styles.metaValue}>
          <a
            href="https://www.instagram.com/eugeneworonyuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @eugeneworonyuk
          </a>
        </span>
        <span className={styles.metaKey}>Mentorship</span>
        <span className={styles.metaValue}>
          <a
            href="https://adplist.org/mentors/eugene-voroniuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            ADPList — free 30-min sessions
          </a>
        </span>
        <span className={styles.metaKey}>VanBlum</span>
        <span className={styles.metaValue}>
          <a href="https://vanblum.shop" target="_blank" rel="noopener noreferrer">
            AI-generated digital prints
          </a>
        </span>
      </div>
    </>
  );
}
