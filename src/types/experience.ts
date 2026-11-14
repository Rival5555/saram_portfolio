export interface ExperienceItem {
  id: string;
  sequence: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  duration?: string;
  description: string;
  isPlaceholderDescription: boolean;
  tags: string[];
}
