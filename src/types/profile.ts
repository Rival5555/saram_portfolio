export interface PillarItem {
  number: string;
  title: string;
  source: string;
  highlight: string;
}

export interface AvailabilityInfo {
  status: string;
  isConfirmed: boolean;
}

export interface BioInfo {
  heroParagraph: string;
  perspectiveIntro: string;
  perspectiveBody: string[];
  pillars: PillarItem[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  resumeUrl?: string;
  displayEmail: string;
  invitationText: string;
}

export interface PersonalInfo {
  fullName: string;
  shortName: string;
  monogram: string;
  professionalTitle: string;
  taglineEyebrow: string;
  location: string;
  coordinates: string;
  availability: AvailabilityInfo;
  bio: BioInfo;
  contact: ContactInfo;
}

export interface EducationItem {
  degree: string;
  institution: string;
  statusPeriod: string;
  degreeStatus: string;
  location: string;
  academicPillars: string[];
  note?: string;
}

export interface SkillItem {
  name: string;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  title: string;
  code: string;
  description: string;
  skills: SkillItem[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLinkItem {
  id: 'github' | 'linkedin' | 'email';
  label: string;
  category: string;
  url: string;
  isPlaceholder?: boolean;
}
