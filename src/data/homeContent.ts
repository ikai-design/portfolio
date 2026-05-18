import { PET_PROJECTS, petAsset } from './petProjects';
import type { CaseStudyCardProps } from '../components/site/CaseStudyCard';

export type HomeCaseItem = CaseStudyCardProps;

export const ENTERPRISE_CASE_ITEMS: HomeCaseItem[] = [
  {
    to: '/projects/miro',
    title: 'Miro',
    desc:
      'End-to-end design for 80M+ users across community, acquisition, enterprise, and monetization. Public teaser: signup, templates, and share-as-presentation—full deck on request via email.',
    meta: '2021 — now · Amsterdam',
    aspectRatio: '16 / 9',
    badge: 'Case 01 · Hub',
    videoSrc: `${import.meta.env.BASE_URL}Miro_case_01_sign_up_in_prod.mp4`,
    videoPoster: `${import.meta.env.BASE_URL}miro_case_01_poster.jpg`,
    imageAlt: 'Miro — in-product sign-up flow',
    playOn: 'hover',
    loading: 'eager',
  },
  {
    to: '/projects/wix-groups',
    title: 'Wix',
    desc:
      'Sole designer for most of the lifecycle — cross-platform community product for creators and SMBs, 200M+ users, 190 countries.',
    meta: '2019 — 2021 · Kyiv',
    aspectRatio: '8 / 5',
    badge: 'Case 02 · Cover',
    videoSrc: `${import.meta.env.BASE_URL}Wix_case_01.mp4`,
    videoPoster: `${import.meta.env.BASE_URL}wix_case_01_poster.png`,
    imageAlt: 'Wix Groups — product screen recording',
    playOn: 'hover',
    loading: 'lazy',
  },
  {
    to: '/projects/star-global',
    title: 'Star (ex-Cogniance)',
    desc:
      '10+ Fortune 500 engagements — greenfield and regulated — AdTech, HealthTech, IoT, telematics, GovTech; client workshops and NDA.',
    meta: '2015 — 2019 · Kyiv',
    aspectRatio: '8 / 5',
    badge: 'Case 03 · Cover',
    imageSrc: `${import.meta.env.BASE_URL}cover_s.png`,
    imageAlt: 'Star case cover',
  },
];

export const PET_HOME_ITEMS: HomeCaseItem[] = PET_PROJECTS.map((p) => ({
  to: p.href,
  external: true,
  title: p.name,
  desc: p.homeDesc,
  meta: p.meta,
  aspectRatio: p.aspectRatio,
  badge: p.badge,
  videoSrc: petAsset(p.videoFile),
  videoPoster: petAsset(p.posterFile),
  imageAlt: `${p.name} — product demo`,
  playOn: 'hover' as const,
  loading: 'lazy' as const,
}));
