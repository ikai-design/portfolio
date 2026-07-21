import { Fragment, type ReactNode } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import styles from '../styles/site.module.css';
import { CaseStudyFigure } from '../components/site/CaseStudyFigure';
import { CaseStudyPager } from '../components/site/CaseStudyPager';
import { CaseTrackAccordion } from '../components/site/CaseTrackAccordion';
import { MAILTO } from '../components/site/SiteHeader';
import {
  LEDE_PROGRAM_MAP_LINK_TOKEN,
  PORTFOLIO_CASES,
  SSR_CWS_LINK_TOKEN,
  SSR_SITE_LINK_TOKEN,
} from '../data/portfolioCases';
import { isCasePasswordProtected } from '../config/lockedCases';

const CALENDLY_30 = 'https://cal.com/eugene-vo-zjgfze/30min';

const SSR_SITE_URL = 'https://simple-screen-recorder.com/';
const SSR_CWS_URL =
  'https://chromewebstore.google.com/detail/simple-screen-recorder/iohegjmhpfcldjhpjnafinbbjoaakooi';

type InlineLinkSpec = { token: string; href: string; label: string; external?: boolean };

const INLINE_LINK_SPECS: InlineLinkSpec[] = [
  {
    token: LEDE_PROGRAM_MAP_LINK_TOKEN,
    href: '#program-map',
    label: 'Program map',
  },
  {
    token: SSR_SITE_LINK_TOKEN,
    href: SSR_SITE_URL,
    label: 'simple-screen-recorder.com',
    external: true,
  },
  {
    token: SSR_CWS_LINK_TOKEN,
    href: SSR_CWS_URL,
    label: 'Chrome Web Store',
    external: true,
  },
];

function renderCaseCopyWithInlineLinks(text: string): ReactNode {
  for (const spec of INLINE_LINK_SPECS) {
    if (!text.includes(spec.token)) continue;

    const parts = text.split(spec.token);
    return parts.map((part, index) => (
      <Fragment key={`${spec.token}-${index}`}>
        {part ? renderCaseCopyWithInlineLinks(part) : null}
        {index < parts.length - 1 ? (
          <a
            href={spec.href}
            className={styles.inlineLink}
            {...(spec.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {spec.label}
          </a>
        ) : null}
      </Fragment>
    ));
  }

  return text;
}

function renderLedeWithOptionalProgramMapLink(lede: string) {
  return renderCaseCopyWithInlineLinks(lede);
}

const PUBLIC_TEASER_TEMPLATE = [
  'Scope: high-stakes product problem with clear user and business impact.',
  'Execution: end-to-end product design with PM and engineering through shipped UI.',
  'Impact: measurable movement where safe to share; full detail on request via email.',
];

const MAX_TEASER_BULLETS = 3;

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

  const teaserBullets = (data.teaserBullets ?? PUBLIC_TEASER_TEMPLATE).slice(0, MAX_TEASER_BULLETS);

  return (
    <>
      <Link className={styles.backLink} to="/">
        ← Back
      </Link>
      <h1 className={styles.pageTitle}>{data.eyebrow ?? data.title}</h1>
      {data.period ? <p className={styles.pageEyebrow}>{data.period}</p> : null}
      <section className={styles.caseTopTeaser} aria-label="Case teaser highlights">
        <CaseStudyFigure
          aspectRatio={data.hero.aspectRatio}
          badge={data.hero.badge}
          caption={data.hero.caption}
          src={data.hero.src}
          videoSrc={data.hero.videoSrc}
          videoPoster={data.hero.videoPoster}
          alt={data.hero.alt}
          loading="eager"
        />

        {locked && data.lockedTeaserAfterHero?.length ? (
          <div className={styles.caseTopTeaserStack}>
            {data.lockedTeaserAfterHero.map((spec, i) => (
              <CaseStudyFigure
                key={`after-hero-${spec.badge}-${i}`}
                aspectRatio={spec.aspectRatio}
                badge={spec.badge}
                caption={spec.caption}
                src={spec.src}
                videoSrc={spec.videoSrc}
                videoPoster={spec.videoPoster}
                alt={spec.alt ?? ''}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        ) : null}
      </section>

      {locked ? (
        <>
          <p className={styles.pageLede}>{renderLedeWithOptionalProgramMapLink(data.lede)}</p>

          <section className={styles.caseTeaser}>
            <h2 className={styles.caseBlockHead}>At a glance</h2>
            {teaserBullets.map((line) => (
              <p key={line} className={styles.prose}>
                {line}
              </p>
            ))}
          </section>

          {data.publicTracks?.length ? (
            <section id="program-map" className={styles.caseTrackMap} aria-label="Program map">
              <h2 className={styles.caseBlockHead}>Program map</h2>
              <p className={styles.caseTrackMapHint}>
                Expand a stream for a one-line summary of the work.
              </p>
              <CaseTrackAccordion tracks={data.publicTracks} />
            </section>
          ) : null}

          {data.lockedTeaserFigures?.length ? (
            <div className={styles.caseLockedTeaserStack}>
              {data.lockedTeaserFigures.map((spec, i) => (
                <CaseStudyFigure
                  key={`${spec.badge}-${i}`}
                  aspectRatio={spec.aspectRatio}
                  badge={spec.badge}
                  caption={spec.caption}
                  src={spec.src}
                  videoSrc={spec.videoSrc}
                  videoPoster={spec.videoPoster}
                  alt={spec.alt ?? ''}
                  loading="lazy"
                />
              ))}
            </div>
          ) : null}

          <section className={styles.caseAccessGate}>
            <p className={styles.caseLockIntro}>
              Full case decks — process, decisions, and outcomes — are shared on request via{' '}
              <a href={MAILTO}>email</a>.
            </p>
            <ul className={styles.caseAccessChecklist}>
              <li>Include your role, company, and the case area you want to review.</li>
              <li>Typical response time: within 24 hours on business days.</li>
              <li>
                NDA-aware summary (PDF / Figma) tailored to the streams you name — shared on request
                via email.
              </li>
            </ul>
            {data.lockDisclaimer ? (
              <p className={styles.caseLockIntro}>{data.lockDisclaimer}</p>
            ) : null}
            <div className={styles.ctaRow}>
              <a className={styles.contactLink} href={MAILTO}>
                Request full case deck via email
              </a>
              <a
                className={styles.ctaLink}
                href={CALENDLY_30}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-min intro call
              </a>
            </div>
          </section>
        </>
      ) : (
        <>
          {data.throughLine ? (
            <section className={styles.caseThroughLine} aria-label={data.throughLine.title}>
              <h2 className={styles.caseBlockHead}>{data.throughLine.title}</h2>
              {data.throughLine.paragraphs.map((p, i) => (
                <p key={i} className={styles.prose}>
                  {p}
                </p>
              ))}
            </section>
          ) : null}

          {data.publicTracks?.length ? (
            <section id="program-map" className={styles.caseTrackMap} aria-label="Program map">
              <h2 className={styles.caseBlockHead}>Program map</h2>
              <p className={styles.caseTrackMapHint}>
                Expand a stream for a one-line summary of the work.
              </p>
              <CaseTrackAccordion tracks={data.publicTracks} />
            </section>
          ) : null}

          <section className={styles.caseTeaser}>
            <h2 className={styles.caseBlockHead}>At a glance</h2>
            {teaserBullets.map((line) => (
              <p key={line} className={styles.prose}>
                {line}
              </p>
            ))}
          </section>
          <p className={styles.pageLede}>{renderLedeWithOptionalProgramMapLink(data.lede)}</p>

          <div className={`${styles.caseStream} ${data.cta ? styles.caseStreamBeforeNext : ''}`}>
            {data.body.map((block, i) => {
              if (block.kind === 'text') {
                return (
                  <div key={`text-${i}`} className={styles.caseTextBlock}>
                    {block.heading ? (
                      <h2 className={styles.caseBlockHead}>{block.heading}</h2>
                    ) : null}
                    {block.paragraphs.map((p, j) => (
                      <p key={j} className={styles.prose}>
                        {renderCaseCopyWithInlineLinks(p)}
                      </p>
                    ))}
                  </div>
                );
              }

              if (block.kind === 'quote') {
                return (
                  <figure key={`quote-${i}`} className={styles.caseQuote}>
                    <blockquote className={styles.caseQuoteText}>{block.text}</blockquote>
                    <figcaption className={styles.caseQuoteAttr}>{block.attribution}</figcaption>
                  </figure>
                );
              }

              if (block.kind === 'shipList') {
                return (
                  <div key={`ship-${i}`} className={styles.caseShipList}>
                    {block.heading ? (
                      <h2 className={styles.caseBlockHead}>{block.heading}</h2>
                    ) : null}
                    <dl className={styles.caseShipRows}>
                      {block.rows.map((row, j) => (
                        <div key={j} className={styles.caseShipRow}>
                          <dt className={styles.caseShipSignal}>{row.signal}</dt>
                          <dd className={styles.caseShipShipped}>{row.shipped}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                );
              }

              return (
                <CaseStudyFigure
                  key={`fig-${i}`}
                  aspectRatio={block.spec.aspectRatio}
                  badge={block.spec.badge}
                  caption={block.spec.caption}
                  src={block.spec.src}
                  videoSrc={block.spec.videoSrc}
                  videoPoster={block.spec.videoPoster}
                  alt={block.spec.alt}
                  loading="lazy"
                />
              );
            })}
          </div>

          {data.cta ? (
            <section className={styles.caseNextSteps} aria-label="Next steps">
              <div className={styles.ctaRow}>
                <Link className={styles.contactLink} to={data.cta.to}>
                  {data.cta.label}
                </Link>
              </div>
            </section>
          ) : null}
        </>
      )}

      <CaseStudyPager slug={slug} />
    </>
  );
}
