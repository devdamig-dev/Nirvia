'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { Card } from '@/components/ui/card';

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <motion.button whileTap={{ scale: 0.98 }} onClick={() => onOpen(project)} className="w-full text-left">
      <Card className="space-y-2 bg-[color:var(--card-alt)]">
        <div className="flex items-center justify-between">
          <p className="font-medium">{project.name}</p>
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs capitalize text-[color:var(--muted)]">{project.status}</span>
        </div>
        <p className="text-sm text-[color:var(--muted)]">Goal: {project.goal}</p>
        <p className="text-sm">Next: {project.nextAction}</p>
      </Card>
    </motion.button>
  );
}
