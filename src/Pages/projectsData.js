// filepath: src/Pages/projectsData.js

export const designProjects = [
  {
    title: "Voting App",
    description: "An intuitive app designed to guide users through the voting process, increasing engagement and confidence in elections.",
    image: require('../img/projects/vote.png'),
    problem: [
      "Voters often find the election process confusing and disengaging",
      "Low participation rates due to complexity",
      "Lack of confidence in the voting process"
    ],
    process: [
      "Conducted comprehensive user research and interviews",
      "Created detailed user personas and journey maps",
      "Designed wireframes and prototypes in Figma",
      "Iterated based on user feedback and usability testing"
    ],
    solution: [
      "Developed an intuitive app that guides users step-by-step",
      "Increased user engagement and confidence",
      "Simplified the voting process with clear visual cues",
      "Improved accessibility for all user groups"
    ],
    technologies: ["Figma", "User Research", "Prototyping", "UX Design"],
    links: {
      demo: "https://docs.google.com/presentation/d/e/2PACX-1vQuML0B_NIOFOHzWFC7PDCfCe-cVadFESsRBgGD1QGkSmDoSO_YdG6I40m__aZV42uH5bJPLwoymawz/embed?start=false&loop=false&delayms=3000",
      caseStudy: "/projects/voting-app-case-study"
    }
  },
  {
    title: "Portfolio v2",
    description: "A modern, responsive portfolio that highlights my skills and projects, improving engagement with potential clients and employers.",
    image: require('../img/projects/portfolio.png'),
    problem: [
      "Previous portfolio did not effectively showcase growth",
      "Failed to highlight best work as designer and developer",
      "Poor user experience and navigation"
    ],
    process: [
      "Applied Design Thinking methodology",
      "Focused on user experience and clean navigation",
      "Created responsive layouts and mockups",
      "Iterated based on user feedback and testing"
    ],
    solution: [
      "Modern, responsive portfolio design",
      "Improved showcase of skills and projects",
      "Enhanced user engagement",
      "Better accessibility and performance"
    ],
    technologies: ["Figma", "Responsive Design", "UX Research", "Prototyping"],
    links: {
      demo: "https://docs.google.com/presentation/d/e/2PACX-1vQgeh1fdcX2zunOIxK9VxjGgWX5kHayIw13Eo9_m0ptGNNgRgYTvJmsjl_ru0ZMavnQC7LzevOV29AZ/embed?start=false&loop=false&delayms=3000",
      caseStudy: "/projects/portfolio-v2-case-study"
    }
  },
  {
    title: "Sushi App",
    description: "A user-friendly app that simplifies the food ordering process, improving customer satisfaction and order accuracy.",
    image: require('../img/projects/sushi.png'),
    problem: [
      "Ordering food online was confusing and inefficient",
      "Poor user experience at local restaurants",
      "High rate of order errors and customer frustration"
    ],
    process: [
      "Conducted user interviews and research",
      "Mapped customer pain points and journey",
      "Designed streamlined interface in Figma",
      "Prototyped and tested with real users"
    ],
    solution: [
      "Created user-friendly ordering interface",
      "Simplified food ordering process",
      "Improved customer satisfaction",
      "Reduced order errors and confusion"
    ],
    technologies: ["Figma", "User Research", "Mobile Design", "Prototyping"],
    links: {
      demo: "https://docs.google.com/presentation/d/e/2PACX-1vRcI5sv8eHU2oQbEUZTQFbUkB74zvDGRAK0zn850VpRaTmKhODP61ik8ePNw9PnqV1hRPQlLQpgHGyP/embed?start=false&loop=false&delayms=3000",
      caseStudy: "/projects/sushi-app-case-study"
    }
  }
];

export const developmentProjects = [
  {
    title: "Portfolio v2 (Development)",
    description: "A maintainable, scalable portfolio site with improved performance and developer experience.",
    image: require('../img/projects/portfolio.png'),
    problem: [
      "Previous portfolio site was not maintainable",
      "Lacked modern features and performance",
      "Poor code quality and developer experience"
    ],
    process: [
      "Rebuilt using React and modular components",
      "Implemented theme system and accessibility features",
      "Focused on code quality and performance",
      "Added comprehensive testing and documentation"
    ],
    solution: [
      "Maintainable and scalable codebase",
      "Improved performance and loading times",
      "Better developer experience",
      "Modern React architecture with best practices"
    ],
    technologies: ["React", "JavaScript", "CSS", "Git"],
    links: {
      github: "https://github.com/kainenw/portfolio_v2",
      caseStudy: "/projects/portfolio-v2-dev-case-study"
    }
  }
  // add other development projects as needed
];
