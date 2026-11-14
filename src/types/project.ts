export type ProjectStatus = 'In Progress' | 'Planned' | 'Completed' | 'Research';

export interface ProjectItem {
  id: string;
  title: string;
  isPlaceholder: boolean;
  problem: string;
  approach: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: ProjectStatus;
}
