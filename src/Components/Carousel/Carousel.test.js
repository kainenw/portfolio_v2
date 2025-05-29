import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';

// Mock CSS import
jest.mock('./Carousel.css', () => ({}));

const mockProjects = [
  {
    title: "Test Project 1",
    description: "A test project description",
    image: "/test-image1.jpg",
    problem: ["Test problem 1", "Test problem 2"],
    process: ["Test process 1", "Test process 2"],
    solution: ["Test solution 1", "Test solution 2"],
    technologies: ["React", "JavaScript"],
    links: {
      demo: "https://demo1.com",
      github: "https://github.com/test1"
    }
  },
  {
    title: "Test Project 2",
    description: "Another test project description",
    image: "/test-image2.jpg",
    problem: ["Another problem 1", "Another problem 2"],
    process: ["Another process 1", "Another process 2"],
    solution: ["Another solution 1", "Another solution 2"],
    technologies: ["Vue", "TypeScript"],
    links: {
      demo: "https://demo2.com",
      github: "https://github.com/test2"
    }
  },
  {
    title: "Test Project 3",
    description: "Third test project description",
    image: "/test-image3.jpg",
    problem: ["Third problem 1", "Third problem 2"],
    process: ["Third process 1", "Third process 2"],
    solution: ["Third solution 1", "Third solution 2"],
    technologies: ["Angular", "Python"],
    links: {
      demo: "https://demo3.com"
    }
  }
];

// Mock timers for auto-advance functionality
jest.useFakeTimers();

describe('Carousel Component', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.useFakeTimers();
  });

  test('renders carousel with projects', () => {
    render(<Carousel items={mockProjects} />);
    
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /previous project/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next project/i })).toBeInTheDocument();
  });

  test('renders empty state when no items provided', () => {
    render(<Carousel items={[]} />);
    
    expect(screen.getByText('No projects to display')).toBeInTheDocument();
  });

  test('renders empty state when items is null', () => {
    render(<Carousel items={null} />);
    
    expect(screen.getByText('No projects to display')).toBeInTheDocument();
  });

  test('displays project details correctly', () => {
    render(<Carousel items={mockProjects} />);
    
    // Check project content
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    
    // Check problem section
    expect(screen.getByText('Problem')).toBeInTheDocument();
    expect(screen.getByText('Test problem 1')).toBeInTheDocument();
    expect(screen.getByText('Test problem 2')).toBeInTheDocument();
    
    // Check process section
    expect(screen.getByText('Process')).toBeInTheDocument();
    expect(screen.getByText('Test process 1')).toBeInTheDocument();
    expect(screen.getByText('Test process 2')).toBeInTheDocument();
    
    // Check solution section
    expect(screen.getByText('Solution')).toBeInTheDocument();
    expect(screen.getByText('Test solution 1')).toBeInTheDocument();
    expect(screen.getByText('Test solution 2')).toBeInTheDocument();
    
    // Check technologies
    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    
    // Check links
    expect(screen.getByText('View Demo')).toBeInTheDocument();
    expect(screen.getByText('View Code')).toBeInTheDocument();
  });

  test('navigation buttons work correctly', async () => {
    render(<Carousel items={mockProjects} />);
    
    const nextButton = screen.getByRole('button', { name: /next project/i });
    const prevButton = screen.getByRole('button', { name: /previous project/i });
    
    // Initially should show first project
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    
    // Click next button
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    });
    
    // Click previous button
    fireEvent.click(prevButton);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    });
  });

  test('indicators work correctly', async () => {
    render(<Carousel items={mockProjects} />);
    
    const indicators = screen.getAllByRole('button', { name: /go to project/i });
    expect(indicators).toHaveLength(3);
    
    // Click on second indicator
    fireEvent.click(indicators[1]);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    });
    
    // Click on third indicator
    fireEvent.click(indicators[2]);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 3')).toBeInTheDocument();
    });
  });

  test('auto-advance functionality works', async () => {
    render(<Carousel items={mockProjects} autoAdvanceInterval={1000} />);
    
    // Initially should show first project
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    
    // Advance time by the auto-advance interval
    jest.advanceTimersByTime(1000);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    });
    
    // Advance time again
    jest.advanceTimersByTime(1000);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 3')).toBeInTheDocument();
    });
    
    // Should wrap back to first project
    jest.advanceTimersByTime(1000);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    });
  });

  test('auto-advance pause/resume functionality works', async () => {
    render(<Carousel items={mockProjects} autoAdvanceInterval={1000} />);
    
    const autoAdvanceToggle = screen.getByRole('button', { name: /pause auto-advance/i });
    
    // Initially auto-advance should be active
    expect(autoAdvanceToggle).toHaveClass('active');
    expect(autoAdvanceToggle.textContent).toBe('⏸️');
    
    // Pause auto-advance
    fireEvent.click(autoAdvanceToggle);
    
    expect(screen.getByRole('button', { name: /resume auto-advance/i })).toBeInTheDocument();
    expect(autoAdvanceToggle.textContent).toBe('▶️');
    expect(autoAdvanceToggle).not.toHaveClass('active');
    
    // Resume auto-advance
    fireEvent.click(autoAdvanceToggle);
    
    expect(screen.getByRole('button', { name: /pause auto-advance/i })).toBeInTheDocument();
    expect(autoAdvanceToggle.textContent).toBe('⏸️');
    expect(autoAdvanceToggle).toHaveClass('active');
  });

  test('clicking on non-center slide navigates to that slide', async () => {
    render(<Carousel items={mockProjects} />);
    
    // Initially should show first project
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    
    // Find all slides
    const slides = screen.container.querySelectorAll('.carousel-slide');
    
    // Click on the second slide (should be positioned to the right)
    fireEvent.click(slides[1]);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 2')).toBeInTheDocument();
    });
  });

  test('renders project without optional fields', () => {
    const minimalProject = [{
      title: "Minimal Project",
      description: "A minimal project",
      image: "/minimal.jpg",
      problem: ["Test problem"],
      process: ["Test process"],
      solution: ["Test solution"]
      // No technologies or links
    }];
    
    render(<Carousel items={minimalProject} />);
    
    expect(screen.getByText('Minimal Project')).toBeInTheDocument();
    expect(screen.getByText('A minimal project')).toBeInTheDocument();
    expect(screen.queryByText('Technologies')).not.toBeInTheDocument();
    expect(screen.queryByText('View Demo')).not.toBeInTheDocument();
    expect(screen.queryByText('View Code')).not.toBeInTheDocument();
  });

  test('handles edge case navigation correctly', async () => {
    render(<Carousel items={mockProjects} />);
    
    const prevButton = screen.getByRole('button', { name: /previous project/i });
    const nextButton = screen.getByRole('button', { name: /next project/i });
    
    // Initially at first project, clicking previous should go to last project
    fireEvent.click(prevButton);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 3')).toBeInTheDocument();
    });
    
    // From last project, clicking next should go to first project
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    });
  });
});
