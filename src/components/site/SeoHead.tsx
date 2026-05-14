import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalUrlForPathname, resolvePageMeta, SITE_ORIGIN } from '../../lib/seo';

const INDEX_ROBOTS = 'index, follow, max-image-preview:large';

function upsertLinkRel(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * SPA route head tags: correct canonical per URL (static `index.html` alone cannot do this).
 * Runs in `useLayoutEffect` so updates happen before paint when possible.
 */
export function SeoHead() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const meta = resolvePageMeta(pathname);
    const canonical = canonicalUrlForPathname(pathname);

    document.title = meta.title;
    upsertLinkRel('canonical', canonical);
    upsertMetaName('description', meta.description);
    upsertMetaName('robots', meta.robots ?? INDEX_ROBOTS);

    upsertMetaProperty('og:type', 'website');
    upsertMetaProperty('og:site_name', 'Eugene Voroniuk');
    upsertMetaProperty('og:title', meta.title);
    upsertMetaProperty('og:description', meta.description);
    upsertMetaProperty('og:url', canonical);

    upsertMetaName('twitter:card', 'summary_large_image');
    upsertMetaName('twitter:title', meta.title);
    upsertMetaName('twitter:description', meta.description);

    const ogImage = `${SITE_ORIGIN}/about/eugene-default.png`;
    upsertMetaProperty('og:image', ogImage);
    upsertMetaName('twitter:image', ogImage);
  }, [pathname]);

  return null;
}
