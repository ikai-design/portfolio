export const PET_TRY_WREN_URL = 'https://trywren.app/' as const;
export const PET_SCREEN_RECORDER_URL = 'https://simple-screen-recorder.com/' as const;

export type PetProject = {
  id: string;
  name: string;
  href: string;
  stack: string;
  description: string;
  homeDesc: string;
  meta: string;
  badge: string;
  videoFile: string;
  /** Still shown until video is ready (important on mobile). */
  posterFile: string;
  aspectRatio: string;
};

export function petAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export const PET_PROJECTS: PetProject[] = [
  {
    id: 'try-wren',
    name: 'Try Wren',
    href: PET_TRY_WREN_URL,
    stack: 'Lovable · PWA · database · speech and AI-assisted input',
    description:
      'A Lovable-built PWA: voice and text in one place, backed by data and modern speech/AI-assisted input.',
    homeDesc:
      'Privacy-first expense PWA for ADHD workflows — voice/text capture, no bank connection.',
    meta: '2026 · Live PWA · Solo ship',
    badge: 'Shipped · Pet project',
    videoFile: 'Wren_demo_video.mp4',
    posterFile: 'Wren_case_poster.png',
    aspectRatio: '16 / 9',
  },
  {
    id: 'simple-screen-recorder',
    name: 'Simple Screen Recorder',
    href: PET_SCREEN_RECORDER_URL,
    stack: 'Chrome · Cursor · Codex · Antigravity · Claude Code',
    description:
      'Minimal Chrome extension for quick screen recordings—shipped to the Web Store and iterated with AI-assisted dev tools.',
    homeDesc:
      'Chrome extension for fast screen recordings — clean UI, local MP4, browser frames and Spotlight-friendly flow.',
    meta: '2026 · Chrome Web Store · Solo ship',
    badge: 'Shipped · Pet project',
    videoFile: 'Recording_Demo.mp4',
    posterFile: 'Screen_recorder_poster.png',
    aspectRatio: '16 / 9',
  },
];
