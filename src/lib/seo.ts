import { LEDE_PROGRAM_MAP_LINK_TOKEN, PORTFOLIO_CASES } from '../data/portfolioCases';

/** Production site origin — matches `public/sitemap.xml` and Search Console property. */
export const SITE_ORIGIN = 'https://eugenevoroniuk.com' as const;

const DEFAULT_DESCRIPTION =
  'Eugene Voroniuk — Senior Product Designer. Complex SaaS, lifecycle design, activation, monetization, and growth surfaces.';

export type PageMeta = {
  title: string;
  description: string;
  /** Omit for default indexable behavior */
  robots?: string;
};

const HOME: PageMeta = {
  title: 'Eugene Voroniuk — Senior Product Designer · Miro · Amsterdam',
  description: DEFAULT_DESCRIPTION,
};

function stripLedeForMeta(lede: string): string {
  return lede
    .replace(LEDE_PROGRAM_MAP_LINK_TOKEN, 'program map')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateMetaDescription(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

/** Full canonical URL for the current path (supports Vite `base` / React Router `basename`). */
export function canonicalUrlForPathname(pathname: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base === '/' ? '' : base.replace(/\/$/, '');
  return `${SITE_ORIGIN}${normalizedBase}${pathname === '' ? '/' : pathname}`;
}

export function resolvePageMeta(pathname: string): PageMeta {
  const path = pathname === '' ? '/' : pathname;

  if (path === '/') {
    return HOME;
  }

  if (path === '/about') {
    return {
      title: 'About — Eugene Voroniuk · Senior Product Designer',
      description:
        'Background, skills, chronology, and leadership — Miro, Wix, Star, mentoring, and side projects. Senior product designer for complex SaaS.',
    };
  }

  if (path === '/contact') {
    return {
      title: 'Contact — Eugene Voroniuk',
      description:
        'Book an intro call or reach out by email. Open to senior/lead product design roles and selective contract or advisory work.',
    };
  }

  const projectMatch = /^\/projects\/([^/]+)\/?$/.exec(path);
  if (projectMatch) {
    const slug = projectMatch[1];
    const data = PORTFOLIO_CASES[slug];
    if (data) {
      return {
        title: `${data.title} — Eugene Voroniuk`,
        description: truncateMetaDescription(stripLedeForMeta(data.lede)),
      };
    }
    return {
      title: 'Case not available — Eugene Voroniuk',
      description: 'This portfolio case link is not available. Browse the homepage or contact Eugene for case access.',
      robots: 'noindex, follow',
    };
  }

  return {
    title: 'Page not found — Eugene Voroniuk',
    description: 'This page may have moved. Return to the homepage or use contact to request a link.',
    robots: 'noindex, follow',
  };
}
