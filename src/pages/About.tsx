import { useLayoutEffect, useRef, useState } from 'react';
import styles from '../styles/site.module.css';

const ABOUT_PHOTO_DEFAULT = `${import.meta.env.BASE_URL}about/eugene-default.png`;
const ABOUT_PHOTO_HOVER = `${import.meta.env.BASE_URL}about/eugene-hover.png`;

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
      'Product design across community, acquisition, enterprise, and monetization for 80M+ users; five growth-facing team contexts as priorities shifted.',
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
    desc:
      'A fintech app built for neurodivergent people, and a browser plugin for simple demo recordings aimed at developers.',
  },
  { year: '2023 — now', title: 'ADPList Mentor', desc: 'Career advice, CV & portfolio reviews, interview prep, whiteboard sessions.' },
  { year: '2024 — now', title: 'YouTube channel', desc: 'Design, AI, and product thinking — insights & discussions.' },
  { year: '2023 — now', title: 'VanBlum digital-print store', desc: 'AI-generated prints; a side store to stay creative.' },
  {
    year: '2023',
    title: 'Midjourney Mastery — Udemy',
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
  const aboutIntroRef = useRef<HTMLDivElement>(null);
  const [portraitHeightPx, setPortraitHeightPx] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const el = aboutIntroRef.current;
    if (!el) return;

    const mq = window.matchMedia('(max-width: 959px)');

    const sync = () => {
      if (mq.matches) {
        setPortraitHeightPx(undefined);
        return;
      }
      setPortraitHeightPx(Math.round(el.getBoundingClientRect().height));
    };

    const ro = new ResizeObserver(() => sync());
    ro.observe(el);
    mq.addEventListener('change', sync);
    sync();

    return () => {
      ro.disconnect();
      mq.removeEventListener('change', sync);
    };
  }, []);

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
            <div ref={aboutIntroRef} className={styles.aboutHeroIntro}>
              <p className={styles.prose}>
                At{' '}
                <a className={styles.inlineLink} href="https://miro.com" target="_blank" rel="noopener noreferrer">
                  Miro
                </a>
                , I design for 80M+ users across community, acquisition, enterprise, and monetization,
                moving between five growth-facing team contexts as priorities shifted.
              </p>
              <p className={styles.prose}>
                I partner with product, engineering, and GTM. AI speeds up prototyping and research
                synthesis. Reforge Growth Series alumni; ADPList mentor.
              </p>
            </div>

            <figure
              className={`${styles.aboutPortrait}${portraitHeightPx != null ? ` ${styles.aboutPortraitLockHeight}` : ''}`}
              style={portraitHeightPx != null ? { height: portraitHeightPx } : undefined}
            >
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

            <p className={`${styles.prose} ${styles.aboutGridRow2Col1}`}>
              Recent work spans Miroverse (templates, creator profiles, gamification), SERP
              pre-products, in-product signup and prompts for new users, enterprise trials and admin
              expansion, custom templates and shareable presentations — and monetization: contextual
              free-to-paid, checkout, pricing, and smart cancellation.
            </p>
            <p className={`${styles.prose} ${styles.aboutGridRow2Col2}`}>
              Before Miro I was sole designer on Wix Groups for most of its lifecycle after launch, with
              partial product ownership — a cross-platform community product for creators, coaches,
              trainers, and consultants, shipped to 200M+ users on web, iOS, and Android.
            </p>
            <p className={`${styles.prose} ${styles.aboutGridRow2Col3}`}>
              At Star (ex-Cogniance) I delivered 10+ end-to-end Fortune 500 engagements — often greenfield,
              regulated, or technically constrained — leading client workshops, IA, and handoff to
              distributed teams. Details under NDA.
            </p>
          </div>
        </div>
      </section>

      <h2 className={styles.sectionHead}>
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
              <span className={styles.tlRole}>{item.title}</span>
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
          English C2 (full professional) · Ukrainian (native) · Dutch B1/B2 · Spanish B1/B2
        </span>
      </div>
    </>
  );
}
