export const THEME_STORAGE_KEY = 'portfolio-theme';

export const BREAKPOINTS = {
  sm: 640,
  md: 860,
  lg: 900,
  xl: 1024,
} as const;

export const REVEAL_SELECTORS = [
  '.section-header',
  '.about-lead-col',
  '.about-body-col',
  '.about-pillar-card',
  '.experience-item-row',
  '.edu-main-col',
  '.edu-course-col',
  '.skill-card-col',
  '.project-editorial-card',
  '.contact-main-col',
  '.contact-sidebar-col',
].join(', ');
