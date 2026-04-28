import styles from '../styles/site.module.css';

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
    location: 'Amsterdam · 4y 10m',
    blurb:
      'Growth product design for 80M+ users across Miroverse community growth, acquisition and in-product signup, enterprise expansion, and monetization.',
  },
  {
    year: '2019 — 2021',
    role: 'Senior Product Designer',
    company: 'Wix.com',
    location: 'Kyiv · 1y 11m',
    blurb:
      'Designed and launched Wix Groups — a cross-platform community app for 200M+ users across web, iOS and Android.',
  },
  {
    year: '2015 — 2019',
    role: 'UX → Senior UX Designer',
    company: 'Star (ex-Cogniance)',
    location: 'Kyiv · 3y 7m',
    blurb:
      'Fortune 500 clients across AdTech, HealthTech, IoT, GovTech, telematics and wearables. Temporarily led 4 designers in the Wrocław office.',
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
  { year: '2024 — now', title: 'YouTube channel', desc: 'Design, AI and product-led growth — insights & discussions.' },
  { year: '2023 — now', title: 'VanBlum digital-print store', desc: 'AI-generated prints; a side store to stay creative.' },
  { year: '2023', title: 'Midjourney Mastery — Udemy course', desc: 'Taught 98,875 students with SkillsBooster.' },
  { year: '2018 — now', title: 'Startup advisor', desc: 'Product strategy, UX and PLG for startups, scale-ups and SMBs.' },
  { year: '2019 — 2020', title: 'Do Not Lean — podcast', desc: 'Conversations with product designers from various companies.' },
  { year: '2014 — 2018', title: 'Projector Institute — tutor', desc: '150 students mentored across "Web Design. Basics".' },
];

export default function About() {
  return (
    <>
      <h1 className={styles.pageTitle}>About</h1>
      <p className={styles.pageLede}>
        Senior Product Designer with 14+ years shaping SaaS products end-to-end — from product
        strategy and prototyping to shipped growth systems and monetization surfaces.
      </p>

      <p className={styles.prose}>
        At <a className={styles.inlineLink} href="https://miro.com" target="_blank" rel="noopener noreferrer">Miro</a>,
        I led initiatives across the full funnel for 80M+ users: Miroverse community growth,
        SERP pre-products, in-product signup, enterprise trial and expansion, custom templates,
        and free-to-paid conversion including checkout redesign. I&apos;m Reforge Growth Series
        alumni and an active ADPList mentor.
      </p>
      <p className={styles.prose}>
        Before Miro I designed and shipped Wix Groups to 200M+ users, and spent 3 years 7 months at
        Star delivering end-to-end UX for Fortune 500
        clients across AdTech, HealthTech, IoT, GovTech, telematics and wearables.
      </p>

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
        <small>Depth across the full growth funnel</small>
      </h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCol}>
          <h3>Product-led growth</h3>
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
          <h3>Design & research</h3>
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
          Ukrainian (native) · English (full professional) · Spanish (limited working) ·
          French/German/Dutch/Mandarin (elementary)
        </span>
      </div>
    </>
  );
}
