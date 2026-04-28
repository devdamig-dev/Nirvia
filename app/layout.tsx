import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nirvia — Sistema de ejecución para founders',
  description: 'Claridad y ejecución para founders.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
