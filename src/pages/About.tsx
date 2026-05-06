import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/site.module.css';

const ABOUT_PHOTO_DEFAULT = `${import.meta.env.BASE_URL}about/eugene-default.png`;
const ABOUT_PHOTO_HOVER = `${import.meta.env.BASE_URL}about/eugene-hover.png`;

const PET_TRY_WREN_URL = 'https://trywren.app/';
const PET_SCREEN_RECORDER_URL =
  'https://simple-screen-recorder.com/';

const PET_PROJECTS = [
  {
    name: 'Try Wren',
    href: PET_TRY_WREN_URL,
    stack: 'Lovable · PWA · database · speech and AI-assisted input',
    description:
      'A Lovable-built PWA: voice and text in one place, backed by data and modern speech/AI-assisted input.',
  },
  {
    name: 'Simple Screen Recorder',
    href: PET_SCREEN_RECORDER_URL,
    stack: 'Chrome · Cursor · Codex · Antigravity · Claude Code',
    description:
      'Minimal Chrome extension for quick screen recordings—shipped to the Web Store and iterated with AI-assisted dev tools.',
  },
] as const;

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
    blurb:
      'Product design across community, acquisition, enterprise, and monetization for 80M+ users; multiple growth-facing product team contexts as priorities shifted.',
  },
  {
    year: '2019 — 2021',
    role: 'Senior Product Designer',
    company: 'Wix.com',
    location: 'Kyiv · 1y 11m',
    blurb:
      'Sole designer for most of the lifecycle after launch; partial product ownership. Wix Groups — community for creators and SMBs — 200M+ users, web, iOS, Android.',
  },
  {
    year: '2015 — 2019',
    role: 'UX → Senior UX Designer',
    company: 'Star (ex-Cogniance)',
    location: 'Kyiv · 3y 7m',
    blurb:
      '10+ Fortune 500 engagements (IoT, telematics, HealthTech, wearables, GovTech, AdTech); greenfield and regulated work, client workshops, NDA. Led 4 designers in Wrocław briefly.',
  },
  {
    year: '2013 — 2015',
    role: 'Graphic & Web Designer',
    company: 'Ciklum',
    location: 'Kyiv · 2y',
    blurb:
      'Data visualisation, infographics, training materials and web design with a management-consulting team.',
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
  ['Acquisition & signup optimisation', '01'],
  ['Activation & onboarding', '02'],
  ['Free → Paid · paywalls', '03'],
  ['Seat & enterprise expansion', '04'],
  ['Retention · behavioral UX', '05'],
  ['Community-led growth', '06'],
  ['A/B testing · experimentation', '07'],
] as const;

const DESIGN = [
  ['Product & interface design', '01'],
  ['Design systems (Material · Carbon · Atlassian)', '02'],
  ['Customer journey mapping', '03'],
  ['Interactive prototypes · wireframes', '04'],
  ['User research & usability testing', '05'],
  ['Figma · Sketch · Axure · Maze · UserZoom', '06'],
  ['WCAG · accessibility', '07'],
] as const;

const AI = [
  ['Miro AI · ChatGPT · Claude', '01'],
  ['Cursor · Replit', '02'],
  ['HTML · CSS · JS', '03'],
  ['Mixpanel · Amplitude · GA4', '04'],
  ['Looker · Tableau · Snowflake', '05'],
  ['Reforge Growth Series Alumni', '06'],
  ['NN/g UX Certification (2021)', '07'],
] as const;

const LEADERSHIP = [
  {
    year: '2026',
    title: 'Pet projects — shipping',
    href: 'https://trywren.app/',
    desc: 'Try Wren (PWA) and Simple Screen Recorder (Chrome Web Store)—links and context in Pet projects below.',
  },
  {
    year: '2023 — now',
    title: 'ADPList Mentor',
    href: 'https://adplist.org/mentors/eugene-voroniuk',
    desc: 'Career advice, CV & portfolio reviews, interview prep, whiteboard sessions.',
  },
  {
    year: '2024 — now',
    title: 'YouTube channel',
    href: 'https://www.youtube.com/@EugeneVoroniuk',
    desc: 'Design, AI, and product thinking — insights & discussions.',
  },
  {
    year: '2023 — now',
    title: 'VanBlum digital-print store',
    href: 'https://www.instagram.com/vanblum.store/',
    desc: 'AI-generated prints; a side store to stay creative.',
  },
  {
    year: '2023',
    title: 'Midjourney Mastery — Udemy',
    href: 'https://www.udemy.com/course/midjourney-comprehensive/',
    desc: '28,682 students — "Midjourney Mastery: Creating Visuals Using AI".',
  },
  {
    year: '2018 — now',
    title: 'Startup advisor',
    desc: 'UX, product strategy, go-to-market, and PLG for startups, scale-ups and SMBs.',
  },
  { year: '2019 — 2020', title: 'Do Not Lean — podcast', desc: 'Conversations with product designers from various companies.' },
  {
    year: '2014 — 2018',
    title: 'Projector Institute — tutor',
    desc: '150 students in person — "Web Design. Basics".',
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
      <section className={styles.aboutHero}>
        <h1 className={`${styles.pageTitle} ${styles.aboutHeroTitle}`}>About</h1>
        <div className={styles.aboutHeroCopy}>
          <p className={`${styles.pageLede} ${styles.aboutHeroLede}`}>
            Senior Product Designer with 14+ years shipping SaaS end-to-end — strategy, journeys,
            systems, and UI quality — with depth from signup to revenue when stakes are high.
          </p>

          <div className={styles.aboutHeroGrid}>
            <div className={styles.aboutHeroIntro}>
              <p className={styles.prose}>
                At{' '}
                <a className={styles.inlineLink} href="https://miro.com" target="_blank" rel="noopener noreferrer">
                  Miro
                </a>
                , I design for 80M+ users across community, acquisition, enterprise, and monetization,
                moving between multiple product team contexts as priorities shifted.
              </p>
              <p className={styles.prose}>
                I partner with product, engineering, and GTM. AI speeds up prototyping and research
                synthesis.{' '}
                <a
                  className={styles.inlineLink}
                  href="https://www.reforge.com/programs/growth-series"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reforge Growth Series
                </a>{' '}
                alumni;{' '}
                <a
                  className={styles.inlineLink}
                  href="https://adplist.org/mentors/eugene-voroniuk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ADPList mentor
                </a>
                .
              </p>
              <p className={styles.prose}>
                Recent work spans{' '}
                <a
                  className={styles.inlineLink}
                  href="https://miro.com/templates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miroverse
                </a>{' '}
                (templates, creator profiles, gamification), acquisition surfaces for high-intent
                search traffic, in-product signup and prompts for guest users, enterprise trials and
                admin expansion, custom templates and shareable presentations — and monetization:
                contextual free-to-paid, checkout, pricing, and cancellation flow and retention UX.
              </p>
              <p className={styles.prose}>
                Before Miro I was sole designer on{' '}
                <a className={styles.inlineLink} href="https://www.wix.com/" target="_blank" rel="noopener noreferrer">
                  Wix
                </a>{' '}
                Groups for most of its lifecycle after launch, with partial product ownership — a
                cross-platform community product for creators, coaches, trainers, and consultants,
                shipped to 200M+ users on web, iOS, and Android.
              </p>
              <p className={styles.prose}>
                At{' '}
                <a className={styles.inlineLink} href="https://star.global/" target="_blank" rel="noopener noreferrer">
                  Star
                </a>{' '}
                (ex-Cogniance) I delivered 10+ end-to-end Fortune 500 engagements — often greenfield,
                regulated, or technically constrained — leading client workshops, IA, and handoff to
                distributed teams. Details under NDA.
              </p>
            </div>

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
          </div>
        </div>
      </section>

      <section id="chronology" className={styles.aboutChronology}>
        <h2 className={`${styles.sectionHead} ${styles.aboutChronologyHead}`}>
          <span>Chronology</span>
          <small>2009 → now</small>
        </h2>
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
      </section>

      <section id="pet-projects" className={styles.aboutPetSection} aria-labelledby="pet-projects-heading">
        <h2 id="pet-projects-heading" className={styles.sectionHead}>
          <span>Pet projects</span>
          <small>Shipped outside the day job</small>
        </h2>
        <p className={styles.prose}>
          Small products built end-to-end with AI-assisted tooling—useful for demonstrating builder-product
          instincts alongside enterprise SaaS work.
        </p>
        <ul className={styles.aboutPetGrid}>
          {PET_PROJECTS.map((p) => (
            <li key={p.name} className={styles.aboutPetCard}>
              <a className={styles.aboutPetTitle} href={p.href} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
              <p className={styles.aboutPetStack}>{p.stack}</p>
              <p className={`${styles.prose} ${styles.aboutPetDesc}`}>{p.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <h2 className={styles.sectionHead}>
        <span>Top skills</span>
        <small>Craft, lifecycle, and execution</small>
      </h2>
      <p className={styles.prose}>
        Delivery: Agile teams (Scrum, Kanban), design sprint facilitation, stakeholder presentations,
        production QA collaboration, async-first communication. Adobe Creative Suite when high-fidelity
        or brand work requires it.
      </p>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCol}>
          <h3>Product & craft</h3>
          <ul>
            {DESIGN.map(([label, n]) => (
              <li key={label}>
                <span>{label}</span>
                <em>{n}</em>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.skillCol}>
          <h3>Lifecycle & business</h3>
          <ul>
            {PLG.map(([label, n]) => (
              <li key={label}>
                <span>{label}</span>
                <em>{n}</em>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.skillCol}>
          <h3>AI · data · stack</h3>
          <ul>
            {AI.map(([label, n]) => (
              <li key={label}>
                <span>{label}</span>
                <em>{n}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className={styles.sectionHead}>
        <span>Leadership & side-work</span>
        <small>Beyond the day-job</small>
      </h2>
      <div className={styles.timeline}>
        {LEADERSHIP.map((item) => (
          <div key={item.title} style={{ display: 'contents' }}>
            <div className={styles.tlYear}>{item.year}</div>
            <div className={styles.tlRow}>
              {item.href ? (
                <a className={`${styles.tlRole} ${styles.inlineLink}`} href={item.href} target="_blank" rel="noopener noreferrer">
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

      <h2 className={styles.sectionHead}>
        <span>Education & languages</span>
        <small>Kyiv → Amsterdam</small>
      </h2>
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
    </>
  );
}
