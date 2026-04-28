import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nirvia — Founder Execution System',
  description: 'Clarity and execution for founders.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
