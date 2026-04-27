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
  'Context: high-level product area, target users, and why this direction mattered for growth.',
  'Role: end-to-end product design in close partnership with PM and engineering, from framing through delivery.',
  'Approach: hypotheses, experiments, and iterative UX refinements informed by qualitative and quantitative signals.',
  'Outcome: measurable movement in activation, conversion, and product clarity (details are shared in the full case).',
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
        <p className={styles.caseContextHint}>Case study</p>
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
      <p className={styles.caseContextHint}>Case study</p>

      {data.eyebrow ? <p className={styles.pageEyebrow}>{data.eyebrow}</p> : null}
      <h1 className={styles.pageTitle}>{data.title}</h1>
      <p className={styles.pageLede}>{data.lede}</p>

      <section className={styles.caseTeaser}>
        <h2 className={styles.caseBlockHead}>Case teaser</h2>
        {(data.teaserBullets ?? PUBLIC_TEASER_TEMPLATE).map((line) => (
          <p key={line} className={styles.prose}>
            {line}
          </p>
        ))}
      </section>

      {locked && !unlocked ? (
        <section className={styles.caseAccessGate}>
          <p className={styles.caseLockIntro}>
            The full case study is available only with a password due to confidentiality constraints.
            To request access, please <a href={MAILTO}>write to me</a>.
          </p>
          {data.lockDisclaimer ? (
            <p className={styles.caseLockIntro}>{data.lockDisclaimer}</p>
          ) : null}
          <CaseLockForm slug={slug} onUnlocked={() => setUnlocked(true)} />
        </section>
      ) : (
        <>
          <div className={styles.caseStream}>
            <CaseStudyFigure
              aspectRatio={data.hero.aspectRatio}
              badge={data.hero.badge}
              caption={data.hero.caption}
              src={data.hero.src}
              alt={data.hero.alt}
            />

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
