import { Link } from 'react-router-dom';
import styles from '../../styles/site.module.css';
import { CaseStudyFigure } from './CaseStudyFigure';

export type CaseStudyCardProps = {
  to: string;
  external?: boolean;
  title: string;
  desc: string;
  meta?: string;
  aspectRatio?: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  videoPoster?: string;
  placeholderVariant?: 'default' | 'chronology';
};

/**
 * Reference-style stack: cover (figure) first, then title, description, and optional meta below.
 */
export function CaseStudyCard({
  to,
  external,
  title,
  desc,
  meta,
  aspectRatio,
  badge,
  imageSrc,
  imageAlt,
  videoSrc,
  videoPoster,
  placeholderVariant,
}: CaseStudyCardProps) {
  const figure = (
    <CaseStudyFigure
      aspectRatio={aspectRatio}
      badge={badge}
      src={imageSrc}
      videoSrc={videoSrc}
      videoPoster={videoPoster}
      alt={imageAlt ?? title}
      placeholderVariant={placeholderVariant}
    />
  );

  const text = (
    <div className={styles.caseCaption}>
      <h2 className={styles.caseTitle}>{title}</h2>
      <p className={styles.caseDesc}>{desc}</p>
      {meta ? <p className={styles.caseMetaLine}>{meta}</p> : null}
    </div>
  );

  if (external) {
    return (
      <article className={styles.caseCard}>
        <a href={to} target="_blank" rel="noopener noreferrer" className={styles.caseCardLink}>
          {figure}
          {text}
        </a>
      </article>
    );
  }

  return (
    <article className={styles.caseCard}>
      <Link to={to} className={styles.caseCardLink}>
        {figure}
        {text}
      </Link>
    </article>
  );
}
