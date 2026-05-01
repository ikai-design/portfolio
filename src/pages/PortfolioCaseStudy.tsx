import { Link, Navigate, useParams } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyFigure } from '../components/site/CaseStudyFigure';
import { MAILTO } from '../components/site/SiteHeader';
import { PORTFOLIO_CASES } from '../data/portfolioCases';
import { isCasePasswordProtected } from '../config/lockedCases';

const CALENDLY_30 = 'https://calendly.com/eugene_vo/30-min-call';

const PUBLIC_TEASER_TEMPLATE = [
  'Scope: solve a high-stakes product problem with clear business and user impact.',
  'Execution: lead end-to-end product design with PM and engineering from framing to shipped UI.',
  'Impact: drive measurable movement; full metrics and internal decision detail are shared on request via email.',
];

export default function PortfolioCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? PORTFOLIO_CASES[slug] : undefined;
  const locked = Boolean(slug && isCasePasswordProtected(slug));

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  if (!data) {
    return (
      <>
        <Link className={styles.backLink} to="/">
          ← Back
        </Link>
        <h1 className={styles.pageTitle}>This case is not available</h1>
        <p className={styles.caseLockIntro}>
          The project link may be outdated. Please return to the homepage or contact me for access
          to full case decks shared on request via email.
        </p>
        <Link className={styles.ctaLink} to="/contact">
          Contact →
        </Link>
      </>
    );
  }

  return (
    <>
      <Link className={styles.backLink} to="/">
        ← Back
      </Link>
      <h1 className={styles.pageTitle}>{data.eyebrow ?? data.title}</h1>
      {data.period ? <p className={styles.pageEyebrow}>{data.period}</p> : null}
      <CaseStudyFigure
        aspectRatio={data.hero.aspectRatio}
        badge={data.hero.badge}
        caption={data.hero.caption}
        src={data.hero.src}
        alt={data.hero.alt}
        loading="eager"
      />

      {data.publicTracks?.length ? (
        <section className={styles.caseTrackMap} aria-label="Program map">
          <h2 className={styles.caseBlockHead}>Program map</h2>
          <ul className={styles.caseTrackPills} aria-label="Case tracks">
            {data.publicTracks.map((track) => (
              <li key={track.label} className={styles.caseTrackPill}>
                {track.label}
              </li>
            ))}
          </ul>
          <div className={styles.caseTrackList}>
            {data.publicTracks.map((track) => (
              <p key={`${track.label}-summary`} className={styles.prose}>
                <strong>{track.label}:</strong> {track.summary}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      <section className={styles.caseTeaser}>
        <h2 className={styles.caseBlockHead}>Case teaser</h2>
        {(data.teaserBullets ?? PUBLIC_TEASER_TEMPLATE).map((line) => (
          <p key={line} className={styles.prose}>
            {line}
          </p>
        ))}
      </section>
      <p className={styles.pageLede}>{data.lede}</p>

      {locked ? (
        <section className={styles.caseAccessGate}>
          <p className={styles.caseLockIntro}>
            Full case decks with detailed process, decisions, and outcomes — including experiments
            where they were part of the work — are shared on request via{' '}
            <a href={MAILTO}>email</a>.
          </p>
          <ul className={styles.caseAccessChecklist}>
            <li>Include your role, company, and the case area you want to review.</li>
            <li>Typical response time: within 24 hours on business days.</li>
          </ul>
          {data.lockDisclaimer ? (
            <p className={styles.caseLockIntro}>{data.lockDisclaimer}</p>
          ) : null}
          <div className={styles.ctaRow}>
            <a className={styles.contactLink} href={CALENDLY_30} target="_blank" rel="noopener noreferrer">
              Book a 30-min intro call
            </a>
            <a className={styles.ctaLink} href={MAILTO}>
              Request full case deck via email →
            </a>
          </div>
        </section>
      ) : (
        <>
          <div className={styles.caseStream}>
            {data.body.map((block, i) =>
              block.kind === 'text' ? (
                <div key={`text-${i}`} className={styles.caseTextBlock}>
                  {block.paragraphs.map((p, j) => (
                    <p key={j} className={styles.prose}>
                      {p}
                    </p>
                  ))}
                </div>
              ) : (
                <CaseStudyFigure
                  key={`fig-${i}`}
                  aspectRatio={block.spec.aspectRatio}
                  badge={block.spec.badge}
                  caption={block.spec.caption}
                  src={block.spec.src}
                  alt={block.spec.alt}
                  loading="lazy"
                />
              ),
            )}
          </div>

          {data.cta ? (
            <Link className={styles.ctaLink} to={data.cta.to}>
              {data.cta.label}
            </Link>
          ) : null}
        </>
      )}
    </>
  );
}
