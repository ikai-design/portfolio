import { useId, useState } from 'react';
import styles from '../../styles/site.module.css';
import type { PublicTrack, VisualPlaceholderTone } from '../../data/portfolioCases';
import { CaseStudyFigure } from './CaseStudyFigure';

type CaseTrackAccordionProps = {
  tracks: PublicTrack[];
  /** Faster teasers on Miro, etc. */
  playbackRate?: number;
  /** Opt-in video lightbox for program-map previews (case pages only). */
  allowLightbox?: boolean;
  /** Near-white tint for empty stream previews (case-level). */
  placeholderTone?: VisualPlaceholderTone;
};

function firstVisualIndex(tracks: PublicTrack[]) {
  const withMedia = tracks.findIndex((t) => t.visualSrc || t.visualVideoSrc);
  return withMedia >= 0 ? withMedia : 0;
}

/** Quiet recruiter-facing empty preview — intentional, not unfinished. */
function TrackVisualPlaceholder({
  label,
  badge = 'Stream',
}: {
  label: string;
  badge?: string;
}) {
  return (
    <figure className={styles.caseFigure}>
      <div
        className={`${styles.caseFrame} ${styles.caseTrackVisualPlaceholder}`}
        style={{ aspectRatio: '16 / 9' }}
        role="img"
        aria-label={`${label} — available on request`}
      >
        <span className={styles.caseFrameBadge}>{badge}</span>
        <div className={styles.caseTrackVisualPlaceholderBody}>
          <p className={styles.caseTrackVisualPlaceholderLabel}>{label}</p>
          <p className={styles.caseTrackVisualPlaceholderHint}>Available on request</p>
        </div>
      </div>
    </figure>
  );
}

export function CaseTrackAccordion({
  tracks,
  playbackRate = 1,
  allowLightbox = false,
  placeholderTone = 'neutral',
}: CaseTrackAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(() => firstVisualIndex(tracks));
  const active = tracks[activeIndex] ?? tracks[0];
  const baseId = useId();

  if (!tracks.length || !active) return null;

  return (
    <div className={styles.caseTrackMapLayout} data-placeholder-tone={placeholderTone}>
      <div className={styles.caseTrackAccordions}>
        {tracks.map((track, index) => {
          const open = index === activeIndex;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-btn-${index}`;

          return (
            <div
              key={track.label}
              className={styles.caseTrackDetails}
              data-open={open ? '' : undefined}
            >
              <button
                type="button"
                id={buttonId}
                className={styles.caseTrackSummary}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setActiveIndex(index)}
              >
                <span className={styles.caseTrackSummaryLabel}>{track.label}</span>
                <span className={styles.caseTrackSummaryIcon} aria-hidden="true" />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={styles.caseTrackPanel}
                aria-hidden={!open}
              >
                <div className={styles.caseTrackPanelInner}>
                  <p className={`${styles.prose} ${styles.caseTrackSummaryBody}`}>{track.summary}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.caseTrackVisual} aria-live="polite">
        {active.visualSrc || active.visualVideoSrc ? (
          <CaseStudyFigure
            key={active.label}
            aspectRatio="16 / 9"
            badge={active.visualBadge ?? 'Stream'}
            caption={active.label}
            src={active.visualSrc}
            videoSrc={active.visualVideoSrc}
            videoPoster={active.visualPoster}
            alt={active.visualAlt ?? active.label}
            loading="lazy"
            playbackRate={playbackRate}
            allowLightbox={allowLightbox}
          />
        ) : (
          <TrackVisualPlaceholder
            key={active.label}
            label={active.label}
            badge={active.visualBadge ?? 'Stream'}
          />
        )}
      </div>
    </div>
  );
}
