import styles from '../../styles/site.module.css';
import { CaseStudyCard, type CaseStudyCardProps } from './CaseStudyCard';

type CaseStackProps = {
  items: CaseStudyCardProps[];
  /** Inside a `PageSection` — drops outer stack bottom margin. */
  nested?: boolean;
  /** Before a `PageSection` — section heading supplies vertical rhythm. */
  flush?: boolean;
};

export function CaseStack({ items, nested, flush }: CaseStackProps) {
  const className = [
    styles.caseStack,
    nested && styles.caseStackNested,
    flush && styles.caseStackFlush,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.title}>
          <CaseStudyCard {...item} />
        </li>
      ))}
    </ul>
  );
}
