import type { SocialLinkItem } from '../types/profile';
import { personalInfo } from './personalInfo';

export const socialLinksData: SocialLinkItem[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    category: 'Professional Network',
    url: personalInfo.contact.linkedin,
    isPlaceholder: personalInfo.contact.linkedin.includes('['),
  },
  {
    id: 'github',
    label: 'GitHub Profile',
    category: 'Code & Repositories',
    url: personalInfo.contact.github,
    isPlaceholder: personalInfo.contact.github.includes('['),
  },
];
