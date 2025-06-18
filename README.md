
# Kainen's Portfolio v2

A modern, responsive portfolio built with React, showcasing my UX design and front-end development work. The site features a minimalist aesthetic, adaptive theming, and a focus on accessibility and user experience.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Live Demo](#live-demo)
- [Contact](#contact)

## Overview
This project is a complete redesign of my personal portfolio to better highlight my skills as a designer and developer. It follows Design Thinking principles and modern coding best practices.

## Features
- **Intuitive Navigation:** Fixed header and clear routes for About, Projects, Resources, and Contact.
- **Project Showcases:** Interactive sections for both design and development projects, with links and embedded previews.
- **Adaptive Theme:** Toggle between light and dark modes, with user preference saved in local storage.
- **Responsive Design:** Optimized for all devices, including mobile and desktop.
- **Full Accessibility:** WCAG 2.1 AA compliant with automated testing and CI/CD integration.
- **Automated Testing:** Comprehensive accessibility testing with pa11y, Lighthouse, and axe-core.
- **Resource Hub:** Curated resources for design and development learning.

## Project Structure
```
src/
  App/           # Main App component and styles
  Components/    # Reusable UI components (Header, etc.)
  Pages/         # Main pages: About, Projects, Resources, Contact
  Theme/         # Theme logic and styles
  Images/        # Project and profile images
  img/           # Additional images and icons
  _tests_/       # Test files and setup
public/          # Static assets and HTML template
build/           # Production build output
```

## Technologies Used
- **Frontend:** React, JavaScript, HTML, CSS (with Emotion and Sass)
- **Design:** Figma
- **Testing:** Jest, React Testing Library
- **Deployment:** Netlify, GitHub

## Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/kainenw/portfolio_v2.git
   cd portfolio_v2
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up accessibility automation (one-time setup):**
   ```bash
   ./setup-accessibility-automation.sh
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
5. **Run accessibility tests:**
   ```bash
   npm run test:accessibility
   ```
6. **Build for production:**
   ```bash
   npm run build
   ```

## Accessibility Testing

This portfolio maintains **WCAG 2.1 AA compliance** with comprehensive automated testing:

### Available Commands
```bash
npm run test:accessibility  # Full accessibility test suite
npm run test:a11y          # Shorthand command
./test-accessibility.sh    # Direct script execution
```

### Automated Testing Features
- **Pre-commit hooks**: Quick accessibility validation before commits
- **CI/CD integration**: GitHub Actions run comprehensive tests on push/PR
- **Multiple tools**: pa11y, Lighthouse, and axe-core testing
- **Zero violations**: Build fails if any accessibility issues found
- **Detailed reporting**: HTML reports with violation details and fix suggestions

### Documentation
- [ACCESSIBILITY_AUTOMATION_GUIDE.md](./ACCESSIBILITY_AUTOMATION_GUIDE.md) - Developer workflow guide
- [ACCESSIBILITY_MAINTENANCE_GUIDE.md](./ACCESSIBILITY_MAINTENANCE_GUIDE.md) - Ongoing maintenance procedures
- [ACCESSIBILITY_TESTING_CHECKLIST.md](./ACCESSIBILITY_TESTING_CHECKLIST.md) - Manual testing checklist
- [ACCESSIBILITY_STATEMENT.md](./ACCESSIBILITY_STATEMENT.md) - Public accessibility commitment

### Current Accessibility Status
- ✅ **0 accessibility violations** across all pages
- ✅ **WCAG 2.1 AA compliance** achieved and maintained
- ✅ **Automated testing** integrated into development workflow
- ✅ **Comprehensive documentation** for ongoing maintenance

## Live Demo
- [kainen.netlify.app](https://kainen.netlify.app)

## Contact
- **Email:** [kainen.white@gmail.com](mailto:kainen.white@gmail.com)
- **GitHub:** [kainenw](https://github.com/kainenw)

Feedback and suggestions are welcome! Open an issue or use the contact form on the site.

## License
This project is open source and available under the [MIT License](LICENSE).
