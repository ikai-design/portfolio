import styles from '../styles/site.module.css';
import { CONTACT_EMAIL, MAILTO } from '../components/site/SiteHeader';

const CALENDLY_30 = 'https://calendly.com/eugene_vo/30-min-call';
const PHONE = '+31 6 388 91 489';
const PHONE_HREF = 'tel:+31638891489';

export default function Contact() {
  return (
    <>
      <h1 className={styles.pageTitle}>Contact</h1>
      <p className={styles.pageLede}>
        Open to senior/lead growth-design roles and selective contract/advisory engagements.
      </p>

      <h2 className={styles.sectionHead}>
        <span>Hiring & contract inquiry</span>
        <small>Fastest way to connect</small>
      </h2>
      <section className={styles.ctaBlock}>
        <p className={styles.ctaText}>
          Book a short intro call, or email directly if you want a role-specific case deck.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.contactLink} href={CALENDLY_30} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
          <a className={styles.ctaLink} href={MAILTO}>
            Email for full case deck →
          </a>
        </div>
        <ul className={styles.caseAccessChecklist}>
          <li>Share role/company and which case area you want to review.</li>
          <li>Typical response time: within 24 hours on business days.</li>
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
