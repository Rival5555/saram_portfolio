import type { SkillCategory } from '../types/profile';

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming',
    code: 'PRG',
    description: 'Core languages and computational thinking foundations.',
    skills: [
      { name: 'Python [Core Foundations]', isPlaceholder: false },
      { name: 'C++ / OOP [Academic Core]', isPlaceholder: false },
      { name: '[ADDITIONAL PROGRAMMING SKILL]', isPlaceholder: true },
      { name: '[DATABASE / SQL]', isPlaceholder: true },
    ],
  },
  {
    title: 'Artificial Intelligence & ML',
    code: 'AIML',
    description: 'Academic coursework, mathematical foundations, and concepts in development.',
    skills: [
      { name: 'Machine Learning Concepts [In Progress]', isPlaceholder: false },
      { name: 'Search & Optimization Algorithms', isPlaceholder: false },
      { name: '[DATA ANALYSIS / NUMPY / PANDAS]', isPlaceholder: true },
      { name: '[DEEP LEARNING / FRAMEWORK]', isPlaceholder: true },
    ],
  },
  {
    title: 'Tools & Technologies',
    code: 'TOOL',
    description: 'Development environments, version management, and productivity tools.',
    skills: [
      { name: 'Git & Version Control', isPlaceholder: false },
      { name: 'Linux / CLI Environments', isPlaceholder: false },
      { name: 'VS Code / Development Tooling', isPlaceholder: false },
      { name: '[TECHNICAL TOOL PLACEHOLDER]', isPlaceholder: true },
    ],
  },
  {
    title: 'Professional & Operational Skills',
    code: 'PROF',
    description:
      'Practiced competencies developed through public service and customer communications.',
    skills: [
      { name: 'Public Communication & Active Listening', isPlaceholder: false },
      { name: 'High-Stress De-escalation & Composure', isPlaceholder: false },
      { name: 'Disciplined Protocol Adherence', isPlaceholder: false },
      { name: 'Cross-Functional Teamwork & Reporting', isPlaceholder: false },
      { name: 'Customer Needs Assessment & Empathy', isPlaceholder: false },
      { name: 'Situational Adaptability & Integrity', isPlaceholder: false },
    ],
  },
];
