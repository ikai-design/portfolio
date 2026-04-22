import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../styles/site.module.css';
import { CaseStudyFigure } from '../components/site/CaseStudyFigure';
import { CaseLockForm } from '../components/site/CaseLockForm';
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

  if (!slug || !data) {
    return <Navigate to="/" replace />;
  }

  if (locked && !unlocked) {
    return (
      <>
        <Link className={styles.backLink} to="/">
          ← Back
        </Link>
        {data.eyebrow ? <p className={styles.pageEyebrow}>{data.eyebrow}</p> : null}
        <h1 className={styles.pageTitle}>{data.title}</h1>
        <p className={styles.caseLockIntro}>
          This project is password-protected. Enter the password to view the case.
        </p>
        <CaseLockForm slug={slug} onUnlocked={() => setUnlocked(true)} />
      </>
    );
  }

  return (
    <>
      <Link className={styles.backLink} to="/">
        ← Back
      </Link>

      {data.eyebrow ? <p className={styles.pageEyebrow}>{data.eyebrow}</p> : null}
      <h1 className={styles.pageTitle}>{data.title}</h1>
      <p className={styles.pageLede}>{data.lede}</p>

      <div className={styles.caseStream}>
        <CaseStudyFigure
          aspectRatio={data.hero.aspectRatio}
          badge={data.hero.badge}
          caption={data.hero.caption}
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
  );
}
