import type { ReactNode } from 'react';
import styles from '../../styles/site.module.css';

export type PageSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  lede?: string;
  /** Extra class on the section heading (e.g. tighter margin below Chronology). */
  headClassName?: string;
  /** Extra class on the `<section>` wrapper (e.g. About-specific scroll margin). */
  sectionClassName?: string;
  children: ReactNode;
};

/**
 * Standard page section: divider heading (`.sectionHead`) + optional lede + content.
 * Matches About rhythm — margin-top 144px desktop on the heading.
 */
export function PageSection({
  id,
  title,
  subtitle,
  lede,
  headClassName,
  sectionClassName,
  children,
}: PageSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const sectionClass = [styles.pageSection, sectionClassName].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClass} aria-labelledby={headingId}>
      <h2 id={headingId} className={`${styles.sectionHead} ${headClassName ?? ''}`.trim()}>
        <span>{title}</span>
        {subtitle ? <small>{subtitle}</small> : null}
      </h2>
      {lede ? <p className={`${styles.prose} ${styles.pageSectionLede}`}>{lede}</p> : null}
      {children}
    </section>
  );
}
