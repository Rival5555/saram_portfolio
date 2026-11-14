import type { PersonalInfo } from '../types/profile';

export const personalInfo: PersonalInfo = {
  fullName: 'Saram Zafar',
  shortName: 'Saram',
  monogram: 'SZ',
  professionalTitle: 'Business Development Executive',
  taglineEyebrow: 'ARTIFICIAL INTELLIGENCE / BUSINESS DEVELOPMENT / PUBLIC SERVICE',
  location: 'Pakistan',
  coordinates: '30.3753° N, 69.3451° E',
  availability: {
    status: 'Open to technical collaboration & discussions',
    isConfirmed: true,
  },
  bio: {
    heroParagraph:
      "I'm Saram Zafar, a Business Development Executive and BS Artificial Intelligence student combining a growing interest in intelligent systems with professional experience in business growth, public service, and customer communication.",
    perspectiveIntro:
      'A foundation built on discipline, strategic communication, and analytical curiosity.',
    perspectiveBody: [
      "My journey exists at an uncommon intersection: the formal academic exploration of intelligent algorithms, client-focused strategy as a Business Development Executive, the structured responsibility of Pakistan's Motorway Police, and two years of front-line customer communication.",
      'Where others see disparate fields, I recognize a continuous thread: systems require both technical clarity and human integrity. In public service, quick decisions impact real safety; in business development and customer communication, active listening builds trust and bridges complex needs; in artificial intelligence, deliberate logic models real-world reasoning.',
      'I am focused on disciplined skill development, principled problem-solving, and contributing to technical and commercial environments where diligence and clear communication matter as much as computational code.',
    ],
    pillars: [
      {
        number: '01',
        title: 'Public Service & Discipline',
        source: 'Pakistan Motorway Police',
        highlight:
          'Vigilance, protocol adherence, calm decision-making under pressure, and ethical responsibility to the public.',
      },
      {
        number: '02',
        title: 'Business Growth & Communication',
        source: 'Business Development & Call Center Operations',
        highlight:
          'Client relationship management, strategic outreach, active listening, rapid conflict de-escalation, and empathy-driven problem resolution.',
      },
      {
        number: '03',
        title: 'Intelligent Systems',
        source: 'BS Artificial Intelligence',
        highlight:
          'Mathematical foundations, algorithmic problem-solving, and an active commitment to building reliable technologies.',
      },
    ],
  },
  contact: {
    email: '[EMAIL]@example.com',
    linkedin: 'https://linkedin.com/in/[LINKEDIN-USERNAME]',
    github: 'https://github.com/Rival5555',
    resumeUrl: undefined,
    displayEmail: '[EMAIL]',
    invitationText:
      "Interested in AI, meaningful technical challenges, and opportunities to keep learning? Let's connect.",
  },
};
