import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Page',
  description: 'Test page',
};

export default function TestPage() {
  return <div>Test</div>;
}
