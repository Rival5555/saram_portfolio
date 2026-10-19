/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Update this file to customize your personal details, experience,
 * education, skills, and projects. All placeholders are clearly indicated
 * with brackets like [FULL NAME].
 */

export interface ProjectItem {
  id: string;
  title: string;
  isPlaceholder: boolean;
  problem: string;
  approach: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'In Progress' | 'Planned' | 'Completed' | 'Research';
}

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

export interface EducationItem {
  degree: string;
  institution: string;
  statusPeriod: string;
  degreeStatus: string;
  location: string;
  academicPillars: string[];
  note?: string;
}

export interface SkillCategory {
  title: string;
  code: string;
  description: string;
  skills: { name: string; isPlaceholder?: boolean }[];
}

export const portfolioData = {
  // Personal & Identity
  personal: {
    fullName: "[FULL NAME]",
    shortName: "Saram", // Monogram / short identifier
    professionalTitle: "[PROFESSIONAL TITLE]",
    taglineEyebrow: "ARTIFICIAL INTELLIGENCE / PUBLIC SERVICE / COMMUNICATION",
    location: "Pakistan",
    coordinates: "30.3753° N, 69.3451° E",
    availability: {
      status: "Open to technical collaboration & discussions",
      isConfirmed: true, // Set to false if you wish to hide availability indicator
    },
    bio: {
      heroParagraph:
        "I'm [FULL NAME], a BS Artificial Intelligence student combining a growing interest in intelligent systems with professional experience in public service and customer communication.",
      perspectiveIntro:
        "A foundation built on discipline, human connection, and analytical curiosity.",
      perspectiveBody: [
        "My journey exists at an uncommon intersection: the formal academic exploration of intelligent algorithms, the structured responsibility of Pakistan's Motorway Police, and two years of front-line communication resolving high-stakes challenges in customer support.",
        "Where others see disparate fields, I recognize a continuous thread: systems require both technical clarity and human integrity. In public service, quick decisions impact real safety; in customer communication, active listening bridges high-stress misunderstandings; in artificial intelligence, deliberate logic models real-world reasoning.",
        "I am focused on disciplined skill development, principled problem-solving, and contributing to technical environments where diligence and clear communication matter as much as computational code."
      ],
      pillars: [
        {
          number: "01",
          title: "Public Service & Discipline",
          source: "Pakistan Motorway Police",
          highlight: "Vigilance, protocol adherence, calm decision-making under pressure, and ethical responsibility to the public.",
        },
        {
          number: "02",
          title: "Human Communication",
          source: "2 Years Call Center Operations",
          highlight: "Active listening, rapid conflict de-escalation, clear verbal articulation, and empathy-driven problem resolution.",
        },
        {
          number: "03",
          title: "Intelligent Systems",
          source: "BS Artificial Intelligence",
          highlight: "Mathematical foundations, algorithmic problem-solving, and an active commitment to building reliable technologies.",
        },
      ],
    },
    contact: {
      email: "[EMAIL]@example.com", // Replace with your real email
      linkedin: "https://linkedin.com/in/[LINKEDIN-USERNAME]", // Replace with your profile URL
      github: "https://github.com/[GITHUB-USERNAME]", // Replace with your GitHub URL
      displayEmail: "[EMAIL]",
      invitationText: "Interested in AI, meaningful technical challenges, and opportunities to keep learning? Let's connect.",
    },
  },

  // Experience timeline
  experience: [
    {
      id: "exp-01",
      sequence: "01",
      role: "[CURRENT MOTORWAY POLICE JOB TITLE]",
      organization: "Pakistan Motorway Police",
      location: "Pakistan",
      period: "[DATES]",
      description:
        "Serving in Pakistan's Motorway Police. Specific duties, operational milestones, and responsibilities will be updated once verified by the portfolio owner. Professional focus encompasses public safety, disciplined protocol execution, and situational awareness.",
      isPlaceholderDescription: true,
      tags: ["Public Service", "Operational Discipline", "Public Safety", "Regulatory Compliance"],
    },
    {
      id: "exp-02",
      sequence: "02",
      role: "[CALL CENTER JOB TITLE]",
      organization: "[CALL CENTER COMPANY]",
      location: "Pakistan",
      period: "[DATES]",
      duration: "Two years",
      description:
        "Delivered front-line customer communication and issue resolution across a two-year tenure. Handled customer inquiries, clarified complex procedures, and managed high-volume communications. Verified details regarding company, KPIs, and specific workflows will be added upon confirmation.",
      isPlaceholderDescription: true,
      tags: ["Customer Support", "Verbal Communication", "De-escalation", "Problem Resolution", "Active Listening"],
    },
  ] as ExperienceItem[],

  // Education
  education: {
    degree: "BS Artificial Intelligence",
    institution: "[UNIVERSITY NAME]",
    statusPeriod: "[CURRENT SEMESTER / EXPECTED GRADUATION YEAR]",
    degreeStatus: "Degree In Progress",
    location: "Pakistan",
    academicPillars: [
      "Foundational Mathematics & Calculus for Computing",
      "Object-Oriented Programming & Data Structures",
      "Introduction to Artificial Intelligence & Search Algorithms",
      "Probability, Statistics & Linear Algebra",
      "Ethical Dimensions of Autonomous & Intelligent Systems",
    ],
    note: "Academic coursework and specialized AI project modules will be populated as advanced semesters are completed.",
  } as EducationItem,

  // Skills
  skillCategories: [
    {
      title: "Programming",
      code: "PRG",
      description: "Core languages and computational thinking foundations.",
      skills: [
        { name: "Python [Core Foundations]", isPlaceholder: false },
        { name: "C++ / OOP [Academic Core]", isPlaceholder: false },
        { name: "[ADDITIONAL PROGRAMMING SKILL]", isPlaceholder: true },
        { name: "[DATABASE / SQL]", isPlaceholder: true },
      ],
    },
    {
      title: "Artificial Intelligence & ML",
      code: "AIML",
      description: "Academic coursework, mathematical foundations, and concepts in development.",
      skills: [
        { name: "Machine Learning Concepts [In Progress]", isPlaceholder: false },
        { name: "Search & Optimization Algorithms", isPlaceholder: false },
        { name: "[DATA ANALYSIS / NUMPY / PANDAS]", isPlaceholder: true },
        { name: "[DEEP LEARNING / FRAMEWORK]", isPlaceholder: true },
      ],
    },
    {
      title: "Tools & Technologies",
      code: "TOOL",
      description: "Development environments, version management, and productivity tools.",
      skills: [
        { name: "Git & Version Control", isPlaceholder: false },
        { name: "Linux / CLI Environments", isPlaceholder: false },
        { name: "VS Code / Development Tooling", isPlaceholder: false },
        { name: "[TECHNICAL TOOL PLACEHOLDER]", isPlaceholder: true },
      ],
    },
    {
      title: "Professional & Operational Skills",
      code: "PROF",
      description: "Practiced competencies developed through public service and customer communications.",
      skills: [
        { name: "Public Communication & Active Listening", isPlaceholder: false },
        { name: "High-Stress De-escalation & Composure", isPlaceholder: false },
        { name: "Disciplined Protocol Adherence", isPlaceholder: false },
        { name: "Cross-Functional Teamwork & Reporting", isPlaceholder: false },
        { name: "Customer Needs Assessment & Empathy", isPlaceholder: false },
        { name: "Situational Adaptability & Integrity", isPlaceholder: false },
      ],
    },
  ] as SkillCategory[],

  // Projects
  projects: [
    {
      id: "project-01",
      title: "[AI PROJECT 01: Intelligent Traffic Analysis / Data Simulation]",
      isPlaceholder: true,
      problem:
        "Placeholder for verified academic AI project: Investigating patterns in flow density, vehicular movement, or automated anomaly detection.",
      approach:
        "Designed to demonstrate data modeling, algorithmic classification, or computational simulations once completed and confirmed.",
      technologies: ["Python", "[AI FRAMEWORK]", "[DATASET / API]"],
      githubUrl: "https://github.com/[GITHUB-USERNAME]/[PROJECT-REPO]",
      demoUrl: undefined,
      status: "Planned",
    },
    {
      id: "project-02",
      title: "[AI PROJECT 02: Conversational Classification & Sentiment Processing]",
      isPlaceholder: true,
      problem:
        "Placeholder for applied NLP or text analysis project drawing from communication domain experience.",
      approach:
        "Explores automated customer intent classification or sentiment routing to enhance communication response clarity.",
      technologies: ["Python", "NLP Concepts", "[TEXT PROCESSING TOOL]"],
      githubUrl: "https://github.com/[GITHUB-USERNAME]/[PROJECT-REPO]",
      demoUrl: undefined,
      status: "In Progress",
    },
    {
      id: "project-03",
      title: "[AI PROJECT 03: Algorithmic Search & Decision Optimization]",
      isPlaceholder: true,
      problem:
        "Placeholder for coursework exploration in heuristic search, constraint satisfaction, or agent decision trees.",
      approach:
        "Implementation of core AI pathfinding and optimization routines with clean performance metrics and documentation.",
      technologies: ["Python / C++", "Algorithms", "Benchmark Data"],
      githubUrl: "https://github.com/[GITHUB-USERNAME]/[PROJECT-REPO]",
      demoUrl: undefined,
      status: "Research",
    },
  ] as ProjectItem[],

  // Navigation Links
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
