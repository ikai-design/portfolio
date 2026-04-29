/**
 * Cases that should stay teaser-only on the public site.
 * Detailed evidence is shared manually via email/figma deck.
 *
 * Slugs must match `PORTFOLIO_CASES` keys.
 */
export const LOCKED_CASE_SLUGS: Record<string, true> = {
  miro: true,
  'wix-groups': true,
  'star-global': true,
};

export function isCasePasswordProtected(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(LOCKED_CASE_SLUGS, slug);
}

/** Legacy compatibility shim: password flow is disabled on public pages. */
export function getCasePassword(slug: string): string | undefined {
  return LOCKED_CASE_SLUGS[slug] ? 'disabled' : undefined;
}

/** Legacy compatibility shim: unlock state is no longer used on public pages. */
export const CASE_UNLOCK_STORAGE_PREFIX = 'portfolio-case-unlock:';
