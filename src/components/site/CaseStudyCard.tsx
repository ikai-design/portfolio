import { AppLink } from './AppLink';
import styles from '../../styles/site.module.css';
import { CASE_VIDEO_PLAYBACK_RATE } from '../../config/media';
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
  playOn?: 'viewport' | 'hover';
  /** Pass `eager` for above-the-fold media (faster first frame for hover previews). */
  loading?: 'eager' | 'lazy';
  placeholderVariant?: 'default' | 'chronology';
  /** Defaults to shared case teaser rate when a video is present. */
  playbackRate?: number;
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
  playOn,
  loading,
  placeholderVariant,
  playbackRate = videoSrc ? CASE_VIDEO_PLAYBACK_RATE : 1,
}: CaseStudyCardProps) {
  const figure = (
    <CaseStudyFigure
      aspectRatio={aspectRatio}
      badge={badge}
      src={imageSrc}
      videoSrc={videoSrc}
      videoPoster={videoPoster}
      playOn={playOn}
      loading={loading}
      alt={imageAlt ?? title}
      placeholderVariant={placeholderVariant}
      playbackRate={playbackRate}
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
      <AppLink to={to} className={styles.caseCardLink}>
        {figure}
        {text}
      </AppLink>
    </article>
  );
}
