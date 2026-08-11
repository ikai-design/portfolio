import styles from '../../styles/site.module.css';
import { useTheme } from '../../theme/ThemeContext';

function SunIcon() {
  return (
    <svg className={styles.themeToggleIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="3.75" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2.5v1.8M12 19.7V21.5M5.05 5.05l1.27 1.27M17.68 17.68l1.27 1.27M2.5 12h1.8M19.7 12h1.8M5.05 18.95l1.27-1.27M17.68 6.32l1.27-1.27"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className={styles.themeToggleIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M19.8 13.8A7.6 7.6 0 0 1 10.2 4.2 7.9 7.9 0 1 0 19.8 13.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Outline sun/moon theme control — border only, no fill, quiet like header nav.
 * Classic pattern: sun left / moon right, thumb slides to the active side.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      className={`${styles.themeToggle} ${isDark ? styles.themeToggleDark : styles.themeToggleLight}`}
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <span className={styles.themeToggleSun} aria-hidden="true">
        <SunIcon />
      </span>
      <span className={styles.themeToggleMoon} aria-hidden="true">
        <MoonIcon />
      </span>
      <span className={styles.themeToggleThumb} aria-hidden="true" />
      <span className={styles.visuallyHidden}>{label}</span>
    </button>
  );
}
