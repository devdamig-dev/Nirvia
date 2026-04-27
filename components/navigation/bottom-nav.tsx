'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, House, Target, Trophy, User } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Home', icon: House },
  { href: '/projects', label: 'Projects', icon: Target },
  { href: '/mentor', label: 'Mentor', icon: Bot },
  { href: '/challenges', label: 'Challenges', icon: Trophy },
  { href: '/profile', label: 'Profile', icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-3 left-1/2 w-[calc(100%-1.5rem)] max-w-[404px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1020]/90 p-2 backdrop-blur">
      <ul className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const ActiveIcon = item.icon;
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[11px] transition ${
                  active ? 'bg-gradient-to-r from-violet-500/30 to-sky-400/30 text-white' : 'text-[color:var(--muted)]'
                }`}
              >
                <ActiveIcon size={16} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
