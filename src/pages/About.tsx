import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageSection } from '../components/site/PageSection';
import styles from '../styles/site.module.css';

const ABOUT_PHOTO_DEFAULT = `${import.meta.env.BASE_URL}about/eugene-default.png`;
const ABOUT_PHOTO_HOVER = `${import.meta.env.BASE_URL}about/eugene-hover.png`;
const CAL_30 = 'https://cal.com/eugene-vo-zjgfze/30min';

type Job = {
  year: string;
  role: string;
  company: string;
  location: string;
  blurb?: string;
};

const TIMELINE: Job[] = [
  {
    year: '2021 — now',
    role: 'Senior Product Designer, Growth',
    company: 'Miro',
    location: 'Amsterdam · 4y 11m',
    blurb: 'Community, acquisition, enterprise, and monetization for 100M+ users.',
  },
  {
    year: '2019 — 2021',
    role: 'Senior Product Designer',
    company: 'Wix.com',
    location: 'Kyiv · 1y 11m',
    blurb: 'Sole designer on Wix Groups — 300M+ users, web, iOS, Android.',
  },
  {
    year: '2015 — 2019',
    role: 'UX → Senior UX Designer',
    company: 'Star (ex-Cogniance)',
    location: 'Kyiv · 3y 7m',
    blurb: '10+ Fortune 500 programs under NDA; briefly led 4 designers in Wrocław.',
  },
  {
    year: '2013 — 2015',
    role: 'Graphic & Web Designer',
    company: 'Ciklum',
    location: 'Kyiv · 2y',
  },
  {
    year: '2011 — 2013',
    role: 'Web Designer',
    company: 'Vortex InterCom',
    location: 'Kyiv · 1y 4m',
  },
  {
    year: '2009 — 2011',
    role: 'Junior SEO Specialist',
    company: 'Web-Promo',
    location: 'Kyiv · 1y 9m',
  },
];

const PLG = [
  'Acquisition & signup',
  'Activation & onboarding',
  'Free → Paid · paywalls',
  'Seat & enterprise expansion',
  'Retention · behavioral UX',
  'Experimentation',
] as const;

const DESIGN = [
  'Design systems',
  'Customer journey mapping',
  'Research & usability testing',
  'Accessibility (WCAG)',
] as const;

const AI = [
  'AI-assisted prototyping',
  'Mixpanel · Amplitude · GA4',
  'Looker · Tableau · Snowflake',
] as const;

const LEADERSHIP = [
  {
    year: '2023 — now',
    title: 'ADPList Mentor',
    href: 'https://adplist.org/mentors/eugene-voroniuk',
    desc: 'CV, portfolio, and interview prep for early- to mid-career designers.',
  },
  {
    year: '2024 — now',
    title: 'YouTube channel',
    href: 'https://www.youtube.com/@EugeneVoroniuk',
    desc: 'Design, AI, and product thinking.',
  },
  {
    year: '2023',
    title: 'Midjourney Mastery — Udemy',
    href: 'https://www.udemy.com/course/midjourney-comprehensive/',
    desc: '28,682 students — AI visuals course.',
  },
  {
    year: '2018 — now',
    title: 'Startup advisor',
    desc: 'UX, product strategy, and PLG for startups and SMBs.',
  },
  {
    year: '2014 — 2018',
    title: 'Projector Institute — tutor',
    desc: '150 students — Web Design. Basics.',
  },
];

export default function About() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const id = hash.replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(decodeURIComponent(id));
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pathname, hash]);

  return (
    <>
      <section className={styles.aboutHero} aria-labelledby="about-heading">
        <h1 id="about-heading" className={styles.pageTitle}>
          About
        </h1>
        <p className={styles.pageLede}>
          Senior Product Designer with 14+ years shipping SaaS — strategy, journeys, systems, and
          UI — with depth from signup to revenue.
        </p>
        <div className={styles.aboutHeroIntro}>
          <p className={`${styles.prose} ${styles.proseNoBottom}`}>
            At{' '}
            <a className={styles.inlineLink} href="https://miro.com" target="_blank" rel="noopener noreferrer">
              Miro
            </a>{' '}
            I design for 100M+ users across high stakes growth surfaces. Before that: sole designer on{' '}
            <a className={styles.inlineLink} href="https://www.wix.com/" target="_blank" rel="noopener noreferrer">
              Wix
            </a>{' '}
            Groups (300M+), and Fortune 500 product work at{' '}
            <a className={styles.inlineLink} href="https://star.global/" target="_blank" rel="noopener noreferrer">
              Star
            </a>
            . See the{' '}
            <a className={styles.inlineLink} href="/projects/miro">
              Miro case teaser
            </a>{' '}
            for production surfaces; shipped products live on the{' '}
            <a className={styles.inlineLink} href="/">
              home page
            </a>
            .
          </p>
        </div>
      </section>

      <figure className={styles.aboutPortrait}>
        <div className={styles.aboutPortraitFrame}>
          <img
            src={ABOUT_PHOTO_DEFAULT}
            alt="Portrait of Eugene Voroniuk"
            className={`${styles.aboutPortraitImg} ${styles.aboutPortraitImgDefault}`}
            loading="eager"
            decoding="async"
          />
          <img
            src={ABOUT_PHOTO_HOVER}
            alt=""
            aria-hidden="true"
            className={`${styles.aboutPortraitImg} ${styles.aboutPortraitImgHover}`}
            loading="eager"
            decoding="async"
          />
        </div>
      </figure>

      <PageSection
        id="chronology"
        sectionClassName={styles.aboutChronology}
        title="Chronology"
        subtitle="2009 → now"
        headClassName={styles.aboutChronologyHead}
      >
        <div className={styles.timeline}>
          {TIMELINE.map((job) => (
            <div key={`${job.year}-${job.company}`} style={{ display: 'contents' }}>
              <div className={styles.tlYear}>{job.year}</div>
              <div className={styles.tlRow}>
                <span className={styles.tlRole}>
                  {job.role} — <em>{job.company}</em>
                </span>
                <span className={styles.tlMeta}>{job.location}</span>
                {job.blurb && <span className={styles.tlBlurb}>{job.blurb}</span>}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection id="skills" title="Top skills" subtitle="Craft, lifecycle, and execution">
        <div className={styles.skillsGrid}>
          <div className={styles.skillCol}>
            <h3>Product & craft</h3>
            <ul>
              {DESIGN.map((label) => (
                <li key={label}>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillCol}>
            <h3>Lifecycle & business</h3>
            <ul>
              {PLG.map((label) => (
                <li key={label}>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillCol}>
            <h3>AI · data · stack</h3>
            <ul>
              {AI.map((label) => (
                <li key={label}>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection id="leadership" title="Leadership & side-work" subtitle="Beyond the day-job">
        <div className={styles.timeline}>
          {LEADERSHIP.map((item) => (
            <div key={item.title} style={{ display: 'contents' }}>
              <div className={styles.tlYear}>{item.year}</div>
              <div className={styles.tlRow}>
                {item.href ? (
                  <a
                    className={`${styles.tlRole} ${styles.inlineLink}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className={styles.tlRole}>{item.title}</span>
                )}
                <span className={styles.tlBlurb}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection id="education" title="Education & languages" subtitle="Kyiv → Amsterdam">
        <div className={styles.metaGrid}>
          <span className={styles.metaKey}>Education</span>
          <span className={styles.metaValue}>
            BA Graphic Design — Kyiv National University of Technologies & Design (2009–2013)
          </span>
          <span className={styles.metaKey}>Continuing</span>
          <span className={styles.metaValue}>Reforge Growth Series Alumni (2022–2023)</span>
          <span className={styles.metaKey}>Certification</span>
          <span className={styles.metaValue}>NN/g UX Certification — ID 1046980 (2021)</span>
          <span className={styles.metaKey}>Award</span>
          <span className={styles.metaValue}>UA Very Best of — Fravel travel & planning concept (2016)</span>
          <span className={styles.metaKey}>Languages</span>
          <span className={styles.metaValue}>
            English (fluent) · Ukrainian (native) · Dutch (conversational) · Spanish (conversational)
          </span>
        </div>
      </PageSection>

      <section className={styles.ctaBlock} aria-labelledby="about-cta-heading">
        <h2 id="about-cta-heading" className={styles.visuallyHidden}>
          Stay in touch
        </h2>
        <p className={styles.ctaText}>
          Open to senior, staff, and principal IC product design roles — including teams with
          heavy monetization, activation, or experimentation needs.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.contactLink} href={CAL_30} target="_blank" rel="noopener noreferrer">
            Book a 30-min intro call
          </a>
        </div>
      </section>
    </>
  );
}
