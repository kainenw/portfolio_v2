export interface Impact {
  metric: string;
  value: string;
  description: string;
}

export interface BusinessResults {
  roi?: string;
  conversionIncrease?: string;
  conversion?: string;
  efficiencyGain?: string;
  efficiency?: string;
  userSatisfaction?: string;
  revenue?: string;
  users?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  photo?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  problem: string | string[];
  challenge?: string;
  role: string;
  team: string | TeamMember[] | string[];
  process: string[];
  solution: string | string[];
  impact: Impact[];
  businessResults: BusinessResults;
  businessImpact?: string[];
  testimonial?: Testimonial;
  testimonials?: Testimonial[];
  technologies: string[];
  images: string[];
  thumbnail?: string;
  image?: any;
  featured: boolean;
  category: 'design' | 'development';
  learnings?: string[];
  year?: number;
  client?: string;
  tags?: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  links?: {
    demo?: string;
    caseStudy?: string;
    repository?: string;
  };
  prototypeEmbed?: string;
  processDocs?: any;
  challenges?: Challenge[];
}

export const projects: Project[] = [
  // Additional projects from projectsData.js consolidated here
  {
    id: '4',
    title: 'Voting App',
    slug: 'voting-app',
    description: 'An intuitive app designed to guide users through the voting process, increasing engagement and confidence in elections.',
    longDescription: 'An intuitive voting application that simplifies the electoral process for users, making voting more accessible and increasing civic participation through thoughtful UX design.',
    problem: [
      'Voters often find the election process confusing and disengaging',
      'Low participation rates due to complexity',
      'Lack of confidence in the voting process'
    ],
    role: 'Lead UX Designer & Frontend Developer',
    team: '2 designers, 3 developers, 1 project manager',
    process: [
      'Conducted comprehensive user research and interviews',
      'Created detailed user personas and journey maps',
      'Designed wireframes and prototypes in Figma',
      'Iterated based on user feedback and usability testing'
    ],
    solution: [
      'Developed an intuitive app that guides users step-by-step',
      'Increased user engagement and confidence',
      'Simplified the voting process with clear visual cues',
      'Improved accessibility for all user groups'
    ],
    impact: [
      {
        metric: 'User Engagement',
        value: '+40%',
        description: 'User engagement increased after launch'
      },
      {
        metric: 'Completion Rate',
        value: '+26%',
        description: 'Voter completion rate improved from 62% to 88%'
      },
      {
        metric: 'Support Requests',
        value: '-70%',
        description: 'Support requests related to voting process dropped'
      }
    ],
    businessResults: {
      efficiency: '70% reduction in support requests',
      users: '26% improvement in completion rates',
      userSatisfaction: '40% increase in user engagement'
    },
    businessImpact: [
      'User engagement increased by 40% after launch',
      'Voter completion rate improved from 62% to 88%',
      'Support requests related to voting process dropped by 70%'
    ],
    testimonials: [
      {
        quote: 'The new voting app made the process so much easier for our users. We saw a huge jump in engagement and positive feedback.',
        author: 'Sarah Lee',
        title: 'Product Manager',
        company: 'Acme Corp',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    ],
    technologies: ['Figma', 'User Research', 'Prototyping', 'UX Design', 'React'],
    images: ['/img/projects/vote.webp'],
    featured: true,
    category: 'design',
    links: {
      demo: 'https://docs.google.com/presentation/d/e/2PACX-1vQuML0B_NIOFOHzWFC7PDCfCe-cVadFESsRBgGD1QGkSmDoSO_YdG6I40m__aZV42uH5bJPLwoymawz/embed?start=false&loop=false&delayms=3000',
      caseStudy: '/projects/voting-app-case-study'
    },
    prototypeEmbed: `<iframe style="border:1px solid #ccc;border-radius:8px" width="100%" height="400" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/xyz" allowfullscreen loading="lazy"></iframe>`
  },
  {
    id: '5',
    title: 'Portfolio v2',
    slug: 'portfolio-v2',
    description: 'A modern, responsive portfolio that highlights my skills and projects, improving engagement with potential clients and employers.',
    longDescription: 'A complete redesign of my personal portfolio focusing on user experience, performance, and showcasing my growth as a designer and developer.',
    problem: [
      'Previous portfolio did not effectively showcase growth',
      'Failed to highlight best work as designer and developer',
      'Poor user experience and navigation'
    ],
    role: 'Sole Designer & Developer',
    team: 'Individual project (with feedback from 2 mentors)',
    process: [
      'Applied Design Thinking methodology',
      'Focused on user experience and clean navigation',
      'Created responsive layouts and mockups',
      'Iterated based on user feedback and testing'
    ],
    solution: [
      'Modern, responsive portfolio design',
      'Improved showcase of skills and projects',
      'Enhanced user engagement',
      'Better accessibility and performance'
    ],
    impact: [
      {
        metric: 'Engagement Rate',
        value: '+55%',
        description: 'Portfolio engagement rate increased after redesign'
      },
      {
        metric: 'Session Duration',
        value: '+95%',
        description: 'Average session duration improved from 1:10 to 2:05'
      },
      {
        metric: 'Client Inquiries',
        value: '3x',
        description: 'Received 3x more client inquiries within 2 months of launch'
      }
    ],
    businessResults: {
      users: '55% increase in engagement rate',
      efficiency: '95% improvement in session duration'
    },
    businessImpact: [
      'Portfolio engagement rate increased by 55% after redesign',
      'Average session duration improved from 1:10 to 2:05',
      'Received 3x more client inquiries within 2 months of launch'
    ],
    testimonials: [
      {
        quote: 'The new portfolio site is clean, fast, and easy to navigate. It made it much easier for us to evaluate Kainen\'s work.',
        author: 'Brad Smith',
        title: 'CEO',
        company: 'Smith Digital',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    ],
    technologies: ['Figma', 'Responsive Design', 'UX Research', 'Prototyping', 'React', 'CSS'],
    images: ['/img/projects/portfolio.webp'],
    featured: true,
    category: 'design',
    links: {
      demo: 'https://docs.google.com/presentation/d/e/2PACX-1vQgeh1fdcX2zunOIxK9VxjGgWX5kHayIw13Eo9_m0ptGNNgRgYTvJmsjl_ru0ZMavnQC7LzevOV29AZ/embed?start=false&loop=false&delayms=3000',
      caseStudy: '/projects/portfolio-v2-case-study'
    },
    prototypeEmbed: `<iframe style="border:1px solid #ccc;border-radius:8px" width="100%" height="400" src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/abc" allowfullscreen loading="lazy"></iframe>`
  }
];

// Helper functions for data access
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: 'design' | 'development'): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Legacy exports for backward compatibility
export const designProjects = projects.filter(p => p.category === 'design');
export const developmentProjects = projects.filter(p => p.category === 'development');