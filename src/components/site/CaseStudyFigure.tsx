import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/site.module.css';
import { VideoLightbox } from './VideoLightbox';

type CaseStudyFigureProps = {
  /** CSS aspect-ratio value, e.g. `16 / 9` */
  aspectRatio?: string;
  /** Corner label (reference: small uppercase meta on frame) */
  badge?: string;
  /** Optional real image — when set, wireframe UI is hidden */
  src?: string;
  videoSrc?: string;
  videoPoster?: string;
  alt?: string;
  /** Shown under the frame (reference-style caption) */
  caption?: string;
  /** Optional custom placeholder mode when src is absent */
  placeholderVariant?: 'default' | 'chronology';
  /** Prefer eager only for above-the-fold hero images */
  loading?: 'eager' | 'lazy';
  /** `viewport` (default) autoplays when scrolled into view; `hover` plays only while the cursor is over the figure */
  playOn?: 'viewport' | 'hover';
  /** HTMLMediaElement.playbackRate — e.g. 2 for faster case teasers */
  playbackRate?: number;
  /**
   * Opt-in lightbox for case pages. Leave off on Home cards so hover-play /
   * card links stay undisturbed.
   */
  allowLightbox?: boolean;
};

/**
 * High-fidelity wireframe block: light “artboard” + dashed inset + optional figcaption.
 * Swap in `src` when the asset exists in /public/...
 */
export function CaseStudyFigure({
  aspectRatio = '16 / 9',
  badge = 'Placeholder',
  src,
  videoSrc,
  videoPoster,
  alt = '',
  caption,
  placeholderVariant = 'default',
  loading = 'lazy',
  playOn = 'viewport',
  playbackRate = 1,
  allowLightbox = false,
}: CaseStudyFigureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [resolvedAspectRatio, setResolvedAspectRatio] = useState(aspectRatio);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const wasPlayingBeforeLightbox = useRef(false);

  const canExpand = Boolean(allowLightbox && videoSrc);

  useEffect(() => {
    setResolvedAspectRatio(aspectRatio);
  }, [aspectRatio]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;
    video.playbackRate = playbackRate;
  }, [videoSrc, playbackRate]);

  useEffect(() => {
    if (!videoSrc || !videoRef.current || playOn !== 'viewport') return;

    const video = videoRef.current;
    let hasEnteredViewport = false;

    const tryPlay = () => {
      if (lightboxOpen) return;
      video.playbackRate = playbackRate;
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => undefined);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          hasEnteredViewport = true;
          tryPlay();
          return;
        }

        if (hasEnteredViewport) {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [videoSrc, playOn, playbackRate, lightboxOpen]);

  const openLightbox = () => {
    if (!canExpand) return;
    const v = videoRef.current;
    wasPlayingBeforeLightbox.current = Boolean(v && !v.paused);
    v?.pause();
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = playbackRate;
    if (wasPlayingBeforeLightbox.current && playOn === 'viewport') {
      v.play().catch(() => undefined);
    }
  };

  const handleMouseEnter =
    playOn === 'hover' && videoSrc
      ? () => {
          if (lightboxOpen) return;
          const v = videoRef.current;
          if (!v) return;
          v.playbackRate = playbackRate;
          v.currentTime = 0;
          v.play().catch(() => undefined);
        }
      : undefined;

  const handleMouseLeave =
    playOn === 'hover' && videoSrc
      ? () => {
          const v = videoRef.current;
          if (!v) return;
          v.pause();
          v.currentTime = 0;
        }
      : undefined;

  const chronologyNodes = [
    { id: 'design', label: 'Design', state: 'past', tooltip: 'Foundational UX/UI Craft' },
    { id: 'product', label: 'Product', state: 'past', tooltip: 'Product thinking' },
    { id: 'plg', label: 'Lifecycle', state: 'core', tooltip: 'From signup to revenue' },
    { id: 'ai', label: 'AI · Now', state: 'current', tooltip: 'AI-assisted workflows' },
  ] as const;

  return (
    <figure className={styles.caseFigure} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={`${styles.caseFrame}${canExpand ? ` ${styles.caseFrameExpandable}` : ''}`}
        style={{ aspectRatio: resolvedAspectRatio }}
      >
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={videoPoster || undefined}
              className={styles.caseFrameVideo}
              autoPlay={playOn === 'viewport'}
              loop
              muted
              playsInline
              preload="metadata"
              aria-label={alt}
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                if (v.videoWidth > 0 && v.videoHeight > 0) {
                  setResolvedAspectRatio(`${v.videoWidth} / ${v.videoHeight}`);
                }
              }}
              onLoadedData={(e) => {
                if (playOn !== 'hover' || videoPoster) return;
                const v = e.currentTarget;
                v.currentTime = 0;
                v.pause();
              }}
            />
            {canExpand ? (
              <button
                type="button"
                className={styles.caseFrameExpandHit}
                onClick={openLightbox}
                aria-label={`Expand video${alt ? `: ${alt}` : ''}`}
              />
            ) : null}
          </>
        ) : src ? (
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

      {lightboxOpen && videoSrc ? (
        <VideoLightbox
          src={videoSrc}
          poster={videoPoster}
          alt={alt || caption || 'Case video'}
          playbackRate={playbackRate}
          onClose={closeLightbox}
        />
      ) : null}
    </figure>
  );
}
