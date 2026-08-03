import { PET_PROJECTS, petAsset } from './petProjects';
import type { CaseStudyCardProps } from '../components/site/CaseStudyCard';

export type HomeCaseItem = CaseStudyCardProps;

const SSR_HOME: HomeCaseItem = (() => {
  const p = PET_PROJECTS.find((x) => x.id === 'simple-screen-recorder');
  if (!p) throw new Error('Missing simple-screen-recorder pet project');
  return {
    to: `/projects/${p.caseSlug}`,
    title: p.name,
    desc: p.homeDesc,
    meta: p.homeMeta,
    aspectRatio: p.aspectRatio,
    badge: 'Case · Live',
    videoSrc: petAsset(p.videoFile),
    videoPoster: petAsset(p.posterFile),
    imageAlt: `${p.name} — product demo`,
    playOn: 'hover' as const,
    loading: 'lazy' as const,
  };
})();

const MIRO_HOME: HomeCaseItem = {
  to: '/projects/miro',
  title: 'Miro',
  desc: 'Product design for 100M+ users — community, acquisition, enterprise, monetization.',
  meta: '2021 — now · Amsterdam · Solo designer, cross-functional teams',
  aspectRatio: '16 / 9',
  badge: 'Case · Hub',
  videoSrc: `${import.meta.env.BASE_URL}Miro_case_01_sign_up_in_prod.mp4`,
  videoPoster: `${import.meta.env.BASE_URL}miro_case_01_poster.jpg`,
  imageAlt: 'Miro — in-product sign-up flow',
  playOn: 'hover',
  loading: 'eager',
};

const WREN_HOME: HomeCaseItem = (() => {
  const p = PET_PROJECTS.find((x) => x.id === 'try-wren');
  if (!p) throw new Error('Missing try-wren pet project');
  return {
    to: p.href,
    external: true,
    title: p.name,
    desc: p.homeDesc,
    meta: p.homeMeta,
    aspectRatio: p.aspectRatio,
    badge: 'Case · Live',
    videoSrc: petAsset(p.videoFile),
    videoPoster: petAsset(p.posterFile),
    imageAlt: `${p.name} — product demo`,
    playOn: 'hover' as const,
    loading: 'lazy' as const,
  };
})();

const WIX_HOME: HomeCaseItem = {
  to: '/projects/wix-groups',
  title: 'Wix',
  desc: 'Product design — cross-platform community for creators and SMBs, 300M+ users.',
  meta: '2019 — 2021 · Kyiv · Solo designer, product ownership',
  aspectRatio: '8 / 5',
  badge: 'Case · Cover',
  videoSrc: `${import.meta.env.BASE_URL}Wix_case_01.mp4`,
  videoPoster: `${import.meta.env.BASE_URL}wix_case_01_poster.png`,
  imageAlt: 'Wix Groups — product screen recording',
  playOn: 'hover',
  loading: 'lazy',
};

const STAR_HOME: HomeCaseItem = {
  to: '/projects/star-global',
  title: 'Star (ex-Cogniance)',
  desc: 'Product & UX design for Fortune 500 — IoT, HealthTech, AdTech (greenfield, regulated).',
  meta: '2015 — 2019 · Kyiv · Senior UX',
  aspectRatio: '8 / 5',
  badge: 'Case · Cover',
  imageSrc: `${import.meta.env.BASE_URL}cover_s.png`,
  imageAlt: 'Star case cover',
};

/** Home case order: Miro first for recruiter scan, then SSR peer, then Wren → Wix → Star. */
export const HOME_CASE_ITEMS: HomeCaseItem[] = [
  MIRO_HOME,
  SSR_HOME,
  WREN_HOME,
  WIX_HOME,
  STAR_HOME,
];
