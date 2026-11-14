/**
 * PORTFOLIO DATA AGGREGATOR
 *
 * All portfolio data is modularly organized inside `src/data/`:
 * - `personalInfo.ts`  — Name, bio, pillars, availability, and contact info
 * - `navigation.ts`    — Header & drawer navigation links
 * - `experience.ts`    — Chronological work experience entries
 * - `education.ts`     — Academic degree & curriculum pillars
 * - `skills.ts`        — Categorized technical and operational skills
 * - `projects.ts`      — AI & engineering project directory
 * - `socialLinks.ts`   — External profile links (LinkedIn, GitHub)
 */

export * from '../types';
export { personalInfo } from './personalInfo';
export { navigationItems } from './navigation';
export { experienceData } from './experience';
export { educationData } from './education';
export { skillsData } from './skills';
export { projectsData } from './projects';
export { socialLinksData } from './socialLinks';

import { personalInfo } from './personalInfo';
import { navigationItems } from './navigation';
import { experienceData } from './experience';
import { educationData } from './education';
import { skillsData } from './skills';
import { projectsData } from './projects';
import { socialLinksData } from './socialLinks';

export const portfolioData = {
  personal: personalInfo,
  experience: experienceData,
  education: educationData,
  skillCategories: skillsData,
  projects: projectsData,
  navigation: navigationItems,
  socialLinks: socialLinksData,
};
