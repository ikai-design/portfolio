import styles from '../styles/site.module.css';
import { CONTACT_EMAIL, MAILTO } from '../components/site/SiteHeader';

const PHONE = '+31 6 388 91 489';
const PHONE_HREF = 'tel:+31638891489';

export default function Contact() {
  return (
    <>
      <h1 className={styles.pageTitle}>Contact</h1>
      <p className={styles.pageLede}>
        Open to senior growth-design roles, mentorship via ADPList, and a short freelance
        engagement per quarter.
      </p>

      <h2 className={styles.sectionHead}>
        <span>Direct</span>
        <small>Fastest route</small>
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
        <span className={styles.metaKey}>X</span>
        <span className={styles.metaValue}>
          <a
            href="https://x.com/ai_euge"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ai_euge
          </a>
        </span>
      </div>

      <h2 className={styles.sectionHead}>
        <span>Availability</span>
        <small>Based in Amsterdam · CET</small>
      </h2>
      <div className={styles.metaGrid}>
        <span className={styles.metaKey}>Work</span>
        <span className={styles.metaValue}>
          Senior growth design roles · advisory · one short engagement per quarter
        </span>
        <span className={styles.metaKey}>Remote</span>
        <span className={styles.metaValue}>EU time zones (CET, GMT, CEST)</span>
        <span className={styles.metaKey}>Relocation</span>
        <span className={styles.metaValue}>Visa sponsorship or EOR required</span>
        <span className={styles.metaKey}>Notice</span>
        <span className={styles.metaValue}>Flexible</span>
      </div>

      <h2 className={styles.sectionHead}>
        <span>Mentorship</span>
        <small>Free — 2–3 slots / week</small>
      </h2>
      <p className={styles.prose}>
        Free 30-minute sessions on{' '}
        <a
          className={styles.inlineLink}
          href="https://adplist.org/mentors/eugene-voroniuk"
          target="_blank"
          rel="noopener noreferrer"
        >
          ADPList
        </a>
        : CV reviews, portfolio critiques, interview prep and whiteboard exercises for designers
        early- to mid-career. Mentoring there since 2023.
      </p>

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
        <span className={styles.metaKey}>ADPList</span>
        <span className={styles.metaValue}>
          <a
            href="https://adplist.org/mentors/eugene-voroniuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a session
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
