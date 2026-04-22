import styles from '../../styles/site.module.css';

type CaseStudyFigureProps = {
  /** CSS aspect-ratio value, e.g. `16 / 9` */
  aspectRatio?: string;
  /** Corner label (reference: small uppercase meta on frame) */
  badge?: string;
  /** Optional real image — when set, wireframe UI is hidden */
  src?: string;
  alt?: string;
  /** Shown under the frame (reference-style caption) */
  caption?: string;
};

/**
 * High-fidelity wireframe block: light “artboard” + dashed inset + optional figcaption.
 * Swap in `src` when the asset exists in /public/...
 */
export function CaseStudyFigure({
  aspectRatio = '16 / 9',
  badge = 'Placeholder',
  src,
  alt = '',
  caption,
}: CaseStudyFigureProps) {
  return (
    <figure className={styles.caseFigure}>
      <div className={styles.caseFrame} style={{ aspectRatio }}>
        {src ? (
          <img src={src} alt={alt} className={styles.caseFrameImg} />
        ) : (
          <>
            {badge && <span className={styles.caseFrameBadge}>{badge}</span>}
            <div className={styles.caseFrameWire} aria-hidden />
            <div className={styles.caseFrameHintWrap}>
              <span className={styles.caseFrameHint}>Image placeholder</span>
              <span className={styles.caseFrameDims}>{aspectRatio.replace(/\s*\/\s*/, '∶')}</span>
            </div>
          </>
        )}
      </div>
      {caption && <figcaption className={styles.caseFigCaption}>{caption}</figcaption>}
    </figure>
  );
}
