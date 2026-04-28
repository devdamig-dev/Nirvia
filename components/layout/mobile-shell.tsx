'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BottomNav } from '@/components/navigation/bottom-nav';

export function MobileShell({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[420px] px-4 pb-24 pt-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-4">
        {children}
      </motion.div>
      <BottomNav />
    </main>
  );
}
