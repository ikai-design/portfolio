import { useId, useState } from 'react';
import styles from '../../styles/site.module.css';
import type { PublicTrack } from '../../data/portfolioCases';
import { CaseStudyFigure } from './CaseStudyFigure';

type CaseTrackAccordionProps = {
  tracks: PublicTrack[];
  /** Faster teasers on Miro, etc. */
  playbackRate?: number;
};

function firstVisualIndex(tracks: PublicTrack[]) {
  const withMedia = tracks.findIndex((t) => t.visualSrc || t.visualVideoSrc);
  return withMedia >= 0 ? withMedia : 0;
}

export function CaseTrackAccordion({ tracks, playbackRate = 1 }: CaseTrackAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(() => firstVisualIndex(tracks));
  const active = tracks[activeIndex] ?? tracks[0];
  const baseId = useId();

  if (!tracks.length || !active) return null;

  return (
    <div className={styles.caseTrackMapLayout}>
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
          />
        ) : (
          <figure className={styles.caseFigure}>
            <div className={`${styles.caseFrame} ${styles.caseTrackVisualPlaceholder}`}>
              <span className={styles.caseFrameBadge}>{active.visualBadge ?? 'Stream'}</span>
              <p className={styles.caseTrackVisualPlaceholderLabel}>{active.label}</p>
              <p className={styles.caseTrackVisualPlaceholderHint}>
                Teaser visual for this stream — production UI in the private deck.
              </p>
            </div>
          </figure>
        )}
      </div>
    </div>
  );
}
