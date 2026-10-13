import { Link } from 'react-router-dom';
import { PageSection } from '../components/site/PageSection';
import styles from '../styles/site.module.css';

const CAL_ADVISORY = 'https://cal.com/eugene-vo-zjgfze/30min?source=advisory';
const BOOK_LABEL = 'Book a 30-min intro';

const PATHS = [
  {
    id: 'new-idea',
    title: 'Test a new product idea',
    situation:
      'You have an idea for a product or feature and want to test it before investing in a full build.',
    work: 'I help define the first version, build a prototype, and test it with potential users.',
    outcomes: [
      'A prototype people can try.',
      'Findings from the test and a recommendation on what to do next.',
      'A first-version plan, if you’re ready to proceed.',
    ],
  },
  {
    id: 'existing-product',
    title: 'Improve an existing product',
    situation:
      'People sign up but don’t get started, miss useful features, or struggle to upgrade.',
    work: 'I review the journey and available research or data, then design changes with your team. The work can start with a review or continue into design.',
    outcomes: [
      'The problems to address first.',
      'Revised flows and a prototype or designs for your developers.',
      'A plan to check whether the changes helped.',
    ],
  },
] as const;

const PROOF = [
  {
    title: 'Simple Screen Recorder',
    desc: 'I designed, built, and launched a Chrome extension using AI-assisted development, then improved it from user feedback.',
    linkLabel: 'See the project',
    to: '/projects/simple-screen-recorder',
  },
  {
    title: 'Miro',
    desc: 'Product design across signup, feature discovery, and upgrade journeys — working with product, research, and engineering.',
    linkLabel: 'See selected work',
    to: '/projects/miro',
  },
] as const;

const NEW_IDEA_PRICE = 'Prototype and user test: from €9,000 · 2\u2060–\u20603\u00a0weeks.';

const EXISTING_PRODUCT_PRICES = [
  'Activation or monetization review: from €6,000 · 1\u2060–\u20602\u00a0weeks.',
  'Design sprint for one product journey: from €12,000 · 2\u2060–\u20604\u00a0weeks.',
  'Ongoing advisory: from €7,500 per\u00a0month.',
] as const;

const FAQ = [
  {
    q: 'Will I get a finished product?',
    a: 'The standard scope is design and a prototype. Production development and ongoing maintenance need a separate agreement.',
  },
  {
    q: 'Does testing prove people will buy?',
    a: 'Testing can show whether people understand and can use an idea. Willingness to pay needs its own test. We agree on what we’re checking before we start.',
  },
] as const;

function BookIntroLink() {
  return (
    <a className={styles.contactLink} href={CAL_ADVISORY} target="_blank" rel="noopener noreferrer">
      {BOOK_LABEL}
      <span className={styles.visuallyHidden}> (opens in a new tab)</span>
    </a>
  );
}

export default function Advisory() {
  return (
    <>
      <h1 className={styles.pageTitle}>Advisory</h1>
      <p className={`${styles.pageLede} ${styles.advisoryLede}`}>
        I help founders and product teams test new product ideas and improve the way people use
        existing products.
      </p>
      <div className={styles.ctaRow}>
        <BookIntroLink />
      </div>
      <p className={styles.advisoryHelper}>
        Bring an idea or a product problem. We’ll discuss what help would be useful.
      </p>

      <PageSection id="help" title="How I can help" headClassName={styles.advisorySectionHead}>
        <div className={styles.advisoryGrid}>
          {PATHS.map((path) => (
            <article
              key={path.id}
              className={styles.advisoryPath}
              aria-labelledby={`${path.id}-title`}
            >
              <h3 id={`${path.id}-title`} className={styles.advisoryPathTitle}>
                {path.title}
              </h3>
              <p className={styles.advisorySituation}>{path.situation}</p>
              <p className={styles.advisoryText}>{path.work}</p>
              <p className={styles.advisoryLabel}>What you leave with:</p>
              <ul className={styles.advisoryList}>
                {path.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection id="work" title="Relevant work" headClassName={styles.advisorySectionHead}>
        <div className={styles.advisoryGrid}>
          {PROOF.map((item) => (
            <div key={item.to} className={styles.advisoryItem}>
              <h3 className={styles.advisoryItemTitle}>{item.title}</h3>
              <p className={styles.advisoryText}>{item.desc}</p>
              <Link className={`${styles.inlineLink} ${styles.advisoryItemLink}`} to={item.to}>
                {item.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection id="budget" title="Budget & timing" headClassName={styles.advisorySectionHead}>
        <div className={styles.advisoryGrid}>
          <div className={styles.advisoryItem}>
            <h3 className={styles.advisoryItemTitle}>New ideas</h3>
            <ul className={styles.advisoryList}>
              <li>{NEW_IDEA_PRICE}</li>
            </ul>
            <p className={styles.advisoryText}>
              Participant recruiting and incentives are agreed separately.
            </p>
          </div>
          <div className={styles.advisoryItem}>
            <h3 className={styles.advisoryItemTitle}>Existing products</h3>
            <ul className={styles.advisoryList}>
              {EXISTING_PRODUCT_PRICES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles.advisoryNote}>
          Prices are in EUR, net. Final scope and availability are confirmed before kickoff.
        </p>
      </PageSection>

      <PageSection id="questions" title="Questions" headClassName={styles.advisorySectionHead}>
        <div className={styles.advisoryGrid}>
          {FAQ.map((item) => (
            <div key={item.q} className={styles.advisoryItem}>
              <h3 className={styles.advisoryItemTitle}>{item.q}</h3>
              <p className={styles.advisoryText}>{item.a}</p>
            </div>
          ))}
        </div>
        <div className={styles.advisoryClosing}>
          <p className={styles.ctaText}>Have something you want to test or improve?</p>
          <div className={styles.ctaRow}>
            <BookIntroLink />
          </div>
        </div>
      </PageSection>
    </>
  );
}
