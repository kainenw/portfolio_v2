// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toBeInTheDocument()
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Global test setup
global.gtag = jest.fn();

// Ensure a valid DOM container for rendering components
document.body.innerHTML = '<div id="root"></div>';
