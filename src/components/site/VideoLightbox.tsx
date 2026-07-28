import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../styles/site.module.css';

type VideoLightboxProps = {
  src: string;
  poster?: string;
  alt?: string;
  playbackRate?: number;
  onClose: () => void;
};

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Near-fullscreen video viewer for case-study pages.
 * Focus returns to the previously focused element on close.
 */
export function VideoLightbox({
  src,
  poster,
  alt = '',
  playbackRate = 1,
  onClose,
}: VideoLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const closeBtn = closeRef.current;
    closeBtn?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
    if (!prefersReducedMotion()) {
      video.play().catch(() => undefined);
    }
  }, [src, playbackRate]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], video, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className={styles.videoLightbox}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className={styles.videoLightboxDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className={styles.videoLightboxBar}>
          <p id={titleId} className={styles.videoLightboxTitle}>
            {alt || 'Case video'}
          </p>
          <button
            ref={closeRef}
            type="button"
            className={styles.videoLightboxClose}
            onClick={onClose}
            aria-label="Close video"
          >
            Close
          </button>
        </div>
        <div className={styles.videoLightboxStage}>
          <video
            ref={videoRef}
            className={styles.videoLightboxVideo}
            src={src}
            poster={poster || undefined}
            controls
            playsInline
            loop
            muted
            autoPlay={!prefersReducedMotion()}
            aria-label={alt}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
