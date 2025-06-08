import { render, screen, fireEvent } from '@testing-library/react';
import DownloadResumeButton from './DownloadResumeButton';

describe('DownloadResumeButton', () => {
  test('renders with default primary variant', () => {
    render(<DownloadResumeButton />);
    
    const button = screen.getByRole('button', { name: /download resume/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('download-resume-btn', 'primary');
  });

  test('renders with secondary variant when specified', () => {
    render(<DownloadResumeButton variant="secondary" />);
    
    const button = screen.getByRole('button', { name: /download resume/i });
    expect(button).toHaveClass('download-resume-btn', 'secondary');
  });

  test('renders with outline variant when specified', () => {
    render(<DownloadResumeButton variant="outline" />);
    
    const button = screen.getByRole('button', { name: /download resume/i });
    expect(button).toHaveClass('download-resume-btn', 'outline');
  });

  test('applies custom className and style props', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <DownloadResumeButton 
        className="custom-class" 
        style={customStyle}
      />
    );
    
    const button = screen.getByRole('button', { name: /download resume/i });
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveStyle(customStyle);
  });

  test('triggers download when clicked', () => {
    // Mock document.createElement to return a mock anchor element
    const mockAnchor = {
      href: '',
      download: '',
      click: jest.fn(),
    };
    const originalCreateElement = document.createElement;
    document.createElement = jest.fn().mockReturnValue(mockAnchor);
    
    // Mock body methods
    const originalAppendChild = document.body.appendChild;
    const originalRemoveChild = document.body.removeChild;
    document.body.appendChild = jest.fn();
    document.body.removeChild = jest.fn();
    
    render(<DownloadResumeButton />);
    
    const button = screen.getByRole('button', { name: /download resume/i });
    fireEvent.click(button);
    
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(document.body.appendChild).toHaveBeenCalledWith(mockAnchor);
    expect(mockAnchor.click).toHaveBeenCalled();
    expect(document.body.removeChild).toHaveBeenCalledWith(mockAnchor);
    
    // Restore original methods
    document.createElement = originalCreateElement;
    document.body.appendChild = originalAppendChild;
    document.body.removeChild = originalRemoveChild;
  });

  test('tracks analytics when gtag is available', () => {
    const mockGtag = jest.fn();
    window.gtag = mockGtag;
    
    render(<DownloadResumeButton />);
    
    const button = screen.getByRole('button', { name: /download resume/i });
    fireEvent.click(button);
    
    expect(mockGtag).toHaveBeenCalledWith('event', 'resume_download', {
      event_category: 'Engagement',
      event_label: 'Resume Download',
      value: 1
    });
    
    delete window.gtag;
  });

  test('has proper accessibility attributes', () => {
    render(<DownloadResumeButton />);
    
    const button = screen.getByRole('button', { name: /download resume/i });
    expect(button).toHaveAttribute('aria-label', 'Download Resume PDF');
    
    // Check for download icon with proper aria-hidden
    const icon = button.querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});
