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
  /** Optional custom placeholder mode when src is absent */
  placeholderVariant?: 'default' | 'chronology';
  /** Prefer eager only for above-the-fold hero images */
  loading?: 'eager' | 'lazy';
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
  placeholderVariant = 'default',
  loading = 'lazy',
}: CaseStudyFigureProps) {
  const chronologyNodes = [
    { id: 'design', label: 'Design', state: 'past', tooltip: 'Foundational UX craft' },
    { id: 'product', label: 'Product', state: 'past', tooltip: 'Product thinking' },
    { id: 'plg', label: 'PLG/Growth', state: 'core', tooltip: 'Core growth focus' },
    { id: 'ai', label: 'AI · Now', state: 'current', tooltip: 'AI-driven experiments' },
  ] as const;

  return (
    <figure className={styles.caseFigure}>
      <div className={styles.caseFrame} style={{ aspectRatio }}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={styles.caseFrameImg}
            loading={loading}
            decoding="async"
            sizes="(max-width: 639px) 100vw, 1160px"
          />
        ) : placeholderVariant === 'chronology' ? (
          <div className={styles.storyFrame} aria-label="Career chronology timeline teaser">
            {badge && <span className={styles.storyFrameBadge}>{badge}</span>}

            <div className={styles.storyAuraTop} aria-hidden />
            <div className={styles.storyAuraBottom} aria-hidden />

            <div className={styles.storyTimeline}>
              <div className={styles.storyTrack} aria-hidden />

              <div className={styles.storyNodeRow}>
                {chronologyNodes.map((node) => (
                  <div key={node.id} className={styles.storyNodeGroup}>
                    <span className={styles.storyTooltip}>{node.tooltip}</span>
                    <span
                      className={`${styles.storyNodeDot} ${
                        node.state === 'core'
                          ? styles.storyNodeDotCore
                          : node.state === 'current'
                            ? styles.storyNodeDotCurrent
                            : styles.storyNodeDotPast
                      }`}
                      aria-hidden
                    />
                    <span
                      className={`${styles.storyNodeLabel} ${
                        node.state === 'core'
                          ? styles.storyNodeLabelCore
                          : node.state === 'current'
                            ? styles.storyNodeLabelCurrent
                            : styles.storyNodeLabelPast
                      }`}
                    >
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
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
