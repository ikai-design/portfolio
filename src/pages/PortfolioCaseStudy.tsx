import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../styles/site.module.css';
import { CaseStudyFigure } from '../components/site/CaseStudyFigure';
import { CaseLockForm } from '../components/site/CaseLockForm';
import { MAILTO } from '../components/site/SiteHeader';
import { PORTFOLIO_CASES } from '../data/portfolioCases';
import {
  CASE_UNLOCK_STORAGE_PREFIX,
  isCasePasswordProtected,
} from '../config/lockedCases';

function readSessionUnlocked(slug: string): boolean {
  try {
    return sessionStorage.getItem(`${CASE_UNLOCK_STORAGE_PREFIX}${slug}`) === '1';
  } catch {
    return false;
  }
}

const PUBLIC_TEASER_TEMPLATE = [
  'Mandate: solve a high-stakes product problem with clear business and user impact.',
  'Execution: led end-to-end product design with PM and engineering from framing to shipped UI.',
  'Impact: drove measurable movement; full metrics and internal decision detail are private.',
];

export default function PortfolioCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? PORTFOLIO_CASES[slug] : undefined;
  const locked = Boolean(slug && isCasePasswordProtected(slug));

  const [unlocked, setUnlocked] = useState(() => {
    if (!slug || !locked) return true;
    return readSessionUnlocked(slug);
  });

  useEffect(() => {
    if (!slug) return;
    if (!isCasePasswordProtected(slug)) {
      setUnlocked(true);
      return;
    }
    setUnlocked(readSessionUnlocked(slug));
  }, [slug]);

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
          to private case studies.
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

      <section className={styles.caseTeaser}>
        <h2 className={styles.caseBlockHead}>Case teaser</h2>
        {(data.teaserBullets ?? PUBLIC_TEASER_TEMPLATE).map((line) => (
          <p key={line} className={styles.prose}>
            {line}
          </p>
        ))}
      </section>
      <p className={styles.pageLede}>{data.lede}</p>

      {locked && !unlocked ? (
        <section className={styles.caseAccessGate}>
          <p className={styles.caseLockIntro}>
            Full case access is password-protected for confidentiality. Request access via{' '}
            <a href={MAILTO}>email</a>.
          </p>
          {data.lockDisclaimer ? (
            <p className={styles.caseLockIntro}>{data.lockDisclaimer}</p>
          ) : null}
          <CaseLockForm slug={slug} onUnlocked={() => setUnlocked(true)} />
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
