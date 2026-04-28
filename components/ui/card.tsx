import { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-[color:var(--card)] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ${className}`}>
      {children}
    </section>
  );
}
