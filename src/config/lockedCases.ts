/**
 * Password-protected case studies (slug must match `PORTFOLIO_CASES` keys).
 * Edit passwords only in this file.
 *
 * Note: This is browseable obfuscation only — the bundle can be inspected.
 * Do not rely on this for confidential material.
 */
export const LOCKED_CASE_PASSWORDS: Record<string, string> = {
  'star-global': 'changeme',
};

export function isCasePasswordProtected(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(LOCKED_CASE_PASSWORDS, slug);
}

export function getCasePassword(slug: string): string | undefined {
  return LOCKED_CASE_PASSWORDS[slug];
}

export const CASE_UNLOCK_STORAGE_PREFIX = 'portfolio-case-unlock:';
