import { useState } from 'react';
import type { FormEvent } from 'react';
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
      <input
        id="case-lock-password"
        className={styles.caseLockInput}
        type="password"
        name="password"
        autoComplete="current-password"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setWrong(false);
        }}
        placeholder="Enter password"
      />
      {wrong ? (
        <p className={styles.caseLockError} role="alert">
          Incorrect password.
        </p>
      ) : null}
      <button type="submit" className={styles.caseLockSubmit}>
        Unlock
      </button>
    </form>
  );
}
