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
  {
    id: '1',
    title: 'E-Commerce Platform Redesign',
    slug: 'ecommerce-platform-redesign',
    description: 'Redesigned checkout flow resulting in 35% increase in conversion rates and $2M additional annual revenue.',
    longDescription: 'A comprehensive UX overhaul that transformed cart abandonment into revenue. Through strategic user research, data analysis, and iterative testing, I redesigned the entire checkout experience to eliminate friction points and build user confidence.',
    thumbnail: '/projects/ecommerce-thumb.svg',
    images: [
      '/projects/ecommerce-1.jpg',
      '/projects/ecommerce-2.jpg',
      '/projects/ecommerce-3.jpg',
    ],
    tags: ['UX Design', 'Conversion Optimization', 'E-commerce'],
    featured: true,
    client: 'TechRetail Corp',
    year: 2024,
    role: 'Lead UX Designer & Frontend Developer',
    team: ['Product Manager', 'Frontend Developer', 'Data Analyst'],
    problem: 'TechRetail Corp was losing $3.2M annually due to 68% cart abandonment rate. Users complained about confusing checkout steps, hidden fees, and lack of trust signals during payment.',
    challenge: 'The existing checkout process had a 68% abandonment rate, costing the company millions in lost revenue. Users reported confusion about shipping costs, security concerns, and a lengthy form process.',
    solution: 'Implemented a progressive disclosure checkout, integrated real-time shipping calculations, added trust signals, and streamlined the form fields from 23 to 8 required inputs.',
    process: [
      'User Research & Analytics Analysis',
      'Competitive Analysis',
      'User Journey Mapping',
      'Wireframing & Prototyping',
      'Usability Testing',
      'A/B Testing Implementation',
    ],
    impact: [
      {
        metric: 'Conversion Rate',
        value: '+35%',
        description: 'Increased from 32% to 43.2%'
      },
      {
        metric: 'Revenue Impact',
        value: '+$2M',
        description: 'Additional annual revenue'
      },
      {
        metric: 'Cart Abandonment',
        value: '-23%',
        description: 'Reduced from 68% to 45%'
      }
    ],
    businessResults: {
      revenue: '$2.1M additional annual revenue generated',
      conversion: '35% increase in checkout completion rate',
      efficiency: '60% reduction in customer support tickets related to checkout',
      users: '23% decrease in cart abandonment rate'
    },
    challenges: [
      {
        challenge: 'Complex multi-step checkout process causing user confusion',
        solution: 'Implemented progressive disclosure with clear step indicators and the ability to edit previous steps inline'
      },
      {
        challenge: 'Hidden shipping costs revealed at final step',
        solution: 'Integrated real-time shipping calculator displaying costs upfront with postal code entry'
      },
      {
        challenge: 'Lack of trust signals during payment',
        solution: 'Added security badges, SSL indicators, and customer testimonials at key decision points'
      },
      {
        challenge: 'Form fatigue from 23 required fields',
        solution: 'Streamlined to 8 essential fields and implemented smart auto-fill and address lookup'
      }
    ],
    testimonial: {
      quote: 'The redesign exceeded our expectations. The ROI was immediate and substantial.',
      author: 'Sarah Johnson',
      title: 'VP of Digital Experience',
      company: 'TechRetail Corp',
      image: '/testimonials/sarah-johnson.jpg'
    },
    learnings: [
      'Progressive disclosure significantly reduces cognitive load',
      'Trust signals are crucial for first-time buyers',
      'Real-time feedback prevents user uncertainty'
    ],
    technologies: ['Figma', 'Maze', 'Hotjar', 'Google Analytics'],
    demoUrl: 'https://demo.techretail-corp.com',
    repositoryUrl: 'https://github.com/yourusername/ecommerce-redesign',
    category: 'design'
  },
  {
    id: '2',
    title: 'FinTech Mobile App',
    slug: 'fintech-mobile-app',
    description: 'Designed intuitive mobile banking app that increased user engagement by 150% and reduced support tickets by 40%.',
    longDescription: 'Created a comprehensive mobile banking experience for a challenger bank, focusing on simplicity, security, and financial wellness features.',
    thumbnail: '/projects/fintech-thumb.svg',
    images: [
      '/projects/fintech-1.jpg',
      '/projects/fintech-2.jpg',
      '/projects/fintech-3.jpg',
    ],
    tags: ['Mobile Design', 'FinTech', 'User Research'],
    featured: true,
    client: 'NeoBank Solutions',
    year: 2024,
    role: 'Senior UX/UI Designer',
    team: ['Product Owner', 'iOS Developer', 'Android Developer', 'Backend Engineer'],
    problem: 'Traditional banking apps were complex and intimidating, with poor user engagement. NeoBank needed to differentiate in a crowded market while building trust with digitally-native users who expected seamless, intuitive financial management tools.',
    challenge: 'Traditional banking apps were complex and intimidating. Users, especially millennials and Gen Z, needed a simpler, more engaging way to manage their finances.',
    solution: 'Designed a clean, card-based interface with smart categorization, spending insights, and gamified savings goals. Implemented biometric authentication and progressive onboarding.',
    process: [
      'User Interviews & Surveys',
      'Persona Development',
      'Information Architecture',
      'Design System Creation',
      'Prototype Testing',
      'Accessibility Audit',
    ],
    impact: [
      {
        metric: 'User Engagement',
        value: '+150%',
        description: 'Daily active users increased significantly'
      },
      {
        metric: 'Support Tickets',
        value: '-40%',
        description: 'Reduced confusion and errors'
      },
      {
        metric: 'App Store Rating',
        value: '4.8/5',
        description: 'Consistently high user satisfaction'
      }
    ],
    businessResults: {
      revenue: '50,000 new customers acquired in first quarter representing $12M in deposits',
      conversion: '150% increase in daily active users within 6 months',
      efficiency: '40% reduction in customer support tickets',
      users: '4.8/5 App Store rating with 95% user retention rate'
    },
    challenges: [
      {
        challenge: 'Building trust in a new financial platform among security-conscious users',
        solution: 'Implemented biometric authentication, clear security messaging, and transparent fee structure with educational tooltips'
      },
      {
        challenge: 'Competing with established banking apps with complex feature sets',
        solution: 'Focused on core banking needs with intuitive design and added unique features like spending insights and automated savings'
      },
      {
        challenge: 'Onboarding users with varying levels of financial literacy',
        solution: 'Created progressive onboarding with optional educational content and smart defaults based on user behavior'
      },
      {
        challenge: 'Designing for both iOS and Android with consistent experience',
        solution: 'Developed comprehensive design system with platform-specific adaptations while maintaining brand consistency'
      }
    ],
    testimonial: {
      quote: 'The app design helped us acquire 50,000 new customers in the first quarter alone.',
      author: 'Michael Chen',
      title: 'Head of Product',
      company: 'NeoBank Solutions',
      image: '/testimonials/michael-chen.jpg'
    },
    learnings: [
      'Financial apps require extra attention to security perception',
      'Micro-interactions can make complex tasks feel simple',
      'Progressive disclosure works well for financial onboarding'
    ],
    technologies: ['Sketch', 'Principle', 'InVision', 'Maze', 'Lookback'],
    demoUrl: 'https://demo.neobank-solutions.com',
    repositoryUrl: 'https://github.com/yourusername/fintech-mobile-app',
    category: 'design'
  },
  {
    id: '3',
    title: 'Healthcare Dashboard',
    slug: 'healthcare-dashboard',
    description: 'Streamlined patient management system reducing administrative time by 60% for healthcare providers.',
    longDescription: 'Redesigned a complex healthcare management system to improve workflow efficiency for doctors, nurses, and administrative staff.',
    thumbnail: '/projects/healthcare-thumb.svg',
    images: [
      '/projects/healthcare-1.jpg',
      '/projects/healthcare-2.jpg',
      '/projects/healthcare-3.jpg',
    ],
    tags: ['Dashboard Design', 'Healthcare', 'Enterprise UX'],
    featured: true,
    client: 'MedFlow Systems',
    year: 2023,
    role: 'UX Designer',
    team: ['Clinical Consultant', 'Frontend Team', 'Backend Team'],
    problem: 'Healthcare providers at MedFlow Systems were spending 40% of their time navigating complex software rather than focusing on patient care. The inefficient system was causing workflow bottlenecks, increasing costs, and impacting patient satisfaction scores.',
    challenge: 'Healthcare providers were spending too much time navigating complex software instead of focusing on patient care. The existing system had poor information hierarchy and required multiple steps for common tasks.',
    solution: 'Created a role-based dashboard with customizable widgets, streamlined patient lookup, and quick-action buttons for common tasks. Implemented smart defaults and contextual information display.',
    process: [
      'Stakeholder Interviews',
      'Workflow Analysis',
      'Task Analysis',
      'Wireframing',
      'Usability Testing with Healthcare Professionals',
      'Iterative Design',
    ],
    impact: [
      {
        metric: 'Administrative Time',
        value: '-60%',
        description: 'Reduced time spent on system navigation'
      },
      {
        metric: 'User Satisfaction',
        value: '+85%',
        description: 'Improved workflow satisfaction scores'
      },
      {
        metric: 'Training Time',
        value: '-45%',
        description: 'Reduced onboarding time for new staff'
      }
    ],
    businessResults: {
      revenue: '$1.8M annual savings through improved operational efficiency',
      conversion: '85% user satisfaction increase leading to 99% system adoption rate',
      efficiency: '60% reduction in administrative time per patient interaction',
      users: '45% faster onboarding for new healthcare staff'
    },
    challenges: [
      {
        challenge: 'Information overload with critical patient data scattered across multiple screens',
        solution: 'Designed unified patient overview dashboard with contextual information hierarchy and customizable widgets'
      },
      {
        challenge: 'Time-critical tasks buried in complex navigation menus',
        solution: 'Implemented role-based quick-action buttons and shortcuts for frequent workflows'
      },
      {
        challenge: 'Inconsistent interface patterns causing user confusion and errors',
        solution: 'Created comprehensive design system with standardized components and interaction patterns'
      },
      {
        challenge: 'Lengthy training periods for new staff due to system complexity',
        solution: 'Simplified workflows with intuitive icons, clear labeling, and progressive disclosure of advanced features'
      }
    ],
    learnings: [
      'Healthcare professionals need immediate access to critical information',
      'Reducing clicks is crucial in time-sensitive environments',
      'Role-based customization improves adoption rates'
    ],
    technologies: ['Figma', 'Miro', 'UserTesting', 'Optimal Workshop'],
    demoUrl: 'https://demo.medflow-systems.com',
    repositoryUrl: 'https://github.com/yourusername/healthcare-dashboard',
    category: 'design'
  },
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