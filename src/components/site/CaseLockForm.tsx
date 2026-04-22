import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/site.module.css';
import {
  CASE_UNLOCK_STORAGE_PREFIX,
  getCasePassword,
} from '../../config/lockedCases';

type CaseLockFormProps = {
  slug: string;
  onUnlocked: () => void;
};

export function CaseLockForm({ slug, onUnlocked }: CaseLockFormProps) {
  const [value, setValue] = useState('');
  const [wrong, setWrong] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const expected = getCasePassword(slug);
    if (!expected) {
      onUnlocked();
      return;
    }
    if (value.trim() === expected) {
      try {
        sessionStorage.setItem(`${CASE_UNLOCK_STORAGE_PREFIX}${slug}`, '1');
      } catch {
        /* private mode / blocked storage */
      }
      setWrong(false);
      onUnlocked();
    } else {
      setWrong(true);
    }
  }

  return (
    <form className={styles.caseLockForm} onSubmit={handleSubmit} noValidate>
      <label className={styles.caseLockLabel} htmlFor="case-lock-password">
        Password
      </label>
      <div className={styles.caseLockInputRow}>
        <input
          id="case-lock-password"
          className={styles.caseLockInput}
          type={revealed ? 'text' : 'password'}
          name="password"
          autoComplete="current-password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setWrong(false);
          }}
          placeholder="Enter password"
        />
        <button
          type="button"
          className={styles.caseLockReveal}
          aria-label={revealed ? 'Hide password' : 'Show password'}
          onClick={() => setRevealed((v) => !v)}
        >
          {revealed ? 'Hide' : 'Show'}
        </button>
      </div>
      <p className={styles.caseLockHelp}>
        Need access?{' '}
        <Link to="/contact" className={styles.inlineLink}>
          Request password
        </Link>
        .
      </p>
      {wrong ? (
        <p className={styles.caseLockError} role="alert">
          Incorrect password. Please try again or request access.
        </p>
      ) : null}
      <button type="submit" className={styles.caseLockSubmit}>
        Unlock
      </button>
    </form>
  );
}
