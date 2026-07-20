import { useId, useState } from 'react';
import styles from '../../styles/site.module.css';
import type { PublicTrack } from '../../data/portfolioCases';

type CaseTrackAccordionProps = {
  tracks: PublicTrack[];
};

type CaseTrackItemProps = {
  label: string;
  summary: string;
};

function CaseTrackItem({ label, summary }: CaseTrackItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={styles.caseTrackDetails} data-open={open ? '' : undefined}>
      <button
        type="button"
        id={buttonId}
        className={styles.caseTrackSummary}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.caseTrackSummaryLabel}>{label}</span>
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
          <p className={`${styles.prose} ${styles.caseTrackSummaryBody}`}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export function CaseTrackAccordion({ tracks }: CaseTrackAccordionProps) {
  return (
    <div className={styles.caseTrackAccordions}>
      {tracks.map((track) => (
        <CaseTrackItem key={track.label} label={track.label} summary={track.summary} />
      ))}
    </div>
  );
}
