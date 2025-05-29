import React, { useState } from 'react';
import './_Pages.css'
import Carousel from '../Components/Carousel/Carousel'

function Projects() {
  const [activeTab, setActiveTab] = useState('design');

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };
  const designProjects = [
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
        demo: "https://docs.google.com/presentation/d/e/2PACX-1vQuML0B_NIOFOHzWFC7PDCfCe-cVadFESsRBgGD1QGkSmDoSO_YdG6I40m__aZV42uH5bJPLwoymawz/embed?start=false&loop=false&delayms=3000"
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
        demo: "https://docs.google.com/presentation/d/e/2PACX-1vQgeh1fdcX2zunOIxK9VxjGgWX5kHayIw13Eo9_m0ptGNNgRgYTvJmsjl_ru0ZMavnQC7LzevOV29AZ/embed?start=false&loop=false&delayms=3000"
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
        demo: "https://docs.google.com/presentation/d/e/2PACX-1vRcI5sv8eHU2oQbEUZTQFbUkB74zvDGRAK0zn850VpRaTmKhODP61ik8ePNw9PnqV1hRPQlLQpgHGyP/embed?start=false&loop=false&delayms=3000"
      }
    }
  ];

  const developmentProjects = [
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
        github: "https://github.com/kainenw/portfolio_v2"
      }
    },
    {
      title: "Reddit App",
      description: "A custom Reddit client that improves browsing efficiency and user enjoyment with a streamlined interface.",
      image: require('../img/projects/reddit.png'),
      problem: [
        "Reddit browsing was cluttered and inefficient",
        "Power users needed better navigation",
        "Poor mobile experience and slow loading"
      ],
      process: [
        "Designed streamlined interface focusing on usability",
        "Built using React and Redux for state management",
        "Optimized for speed and performance",
        "Implemented responsive design patterns"
      ],
      solution: [
        "Custom Reddit client with improved UX",
        "Faster browsing and better performance",
        "Enhanced user enjoyment",
        "Efficient content discovery and navigation"
      ],
      technologies: ["React", "Redux", "JavaScript", "CSS", "API Integration"],
      links: {
        github: "https://github.com/kainenw/reddit"
      }
    },
    {
      title: "Tonnetz Visualizer",
      description: "An engaging tool that helps musicians explore and learn music theory through interactive harmonic visualizations.",
      image: require('../img/projects/TonnetzTorus.gif'),
      problem: [
        "Musicians struggled with advanced harmonic concepts",
        "Lack of visual tools for music theory",
        "Difficulty understanding complex musical relationships"
      ],
      process: [
        "Developed interactive visualization system",
        "Used React and custom graphics libraries",
        "Created intuitive user interface",
        "Implemented real-time harmonic analysis"
      ],
      solution: [
        "Interactive tool for visualizing harmonic relationships",
        "Engaging way to explore music theory",
        "Improved understanding of musical concepts",
        "Educational resource for musicians and students"
      ],
      technologies: ["React", "JavaScript", "Canvas API", "Music Theory"],
      links: {
        github: "https://github.com/kainenw/tonnetz"
      }
    },
    {
      title: "Savings Calculator",
      description: "A financial tool that empowers users to set and achieve their savings targets with clear visualization and planning.",
      image: require('../img/projects/scalc.png'),
      problem: [
        "Users needed simple savings goal planning",
        "Lack of clear visualization of financial progress",
        "Difficulty understanding compound interest effects"
      ],
      process: [
        "Designed calculator focusing on clarity and ease of use",
        "Built using JavaScript and jQuery",
        "Implemented interactive charts and graphs",
        "Added goal tracking and milestone features"
      ],
      solution: [
        "Simple and effective savings planning tool",
        "Clear visualization of financial goals",
        "Empowered users to achieve savings targets",
        "Educational component for financial literacy"
      ],
      technologies: ["JavaScript", "jQuery", "HTML", "CSS", "Chart.js"],
      links: {
        github: "https://github.com/kainenw/scalc"
      }
    }
  ];

  return (
    <div className="Projects Page">
      <div className="non-contrast-section">
        <h1>Projects</h1>
        <p>Explore my work in design and development through interactive case studies.</p>
        
        {/* Tab Toggle Switch */}
        <div className="projects-tab-container">
          <div className="projects-tab-switch">
            <button 
              className={`tab-button ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('design')}
              aria-pressed={activeTab === 'design'}
            >
              Design
            </button>
            <button 
              className={`tab-button ${activeTab === 'development' ? 'active' : ''}`}
              onClick={() => handleTabSwitch('development')}
              aria-pressed={activeTab === 'development'}
            >
              Development
            </button>
            <div className={`tab-slider ${activeTab === 'development' ? 'right' : 'left'}`}></div>
          </div>
        </div>
      </div>
      
      {/* Design Projects Section */}
      {activeTab === 'design' && (
        <div className="Design contrast-section">
          <h2>Design Projects</h2>
          <p>User-centered design solutions focusing on research, iteration, and impact.</p>
          <Carousel items={designProjects} autoAdvanceInterval={8000} />
        </div>
      )}
      
      {/* Development Projects Section */}
      {activeTab === 'development' && (
        <div className="Development non-contrast-section">
          <h2>Development Projects</h2>
          <p>Full-stack development work showcasing technical skills and problem-solving.</p>
          <Carousel items={developmentProjects} autoAdvanceInterval={8000} />
        </div>
      )}
    </div>
  )
}

export default Projects
