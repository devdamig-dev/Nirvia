import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm transition active:scale-[0.98]',
        variant === 'default' ? 'bg-gradient-to-r from-violet-500 to-sky-500 text-white' : 'border border-white/15 bg-transparent text-white',
        className,
      )}
      {...props}
    />
  );
}
