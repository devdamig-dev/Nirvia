'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { es } from '@/lib/i18n/es';

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <motion.button whileTap={{ scale: 0.98 }} onClick={() => onOpen(project)} className="w-full text-left">
      <Card className="space-y-2 bg-[color:var(--card-alt)]">
        <div className="flex items-center justify-between">
          <p className="font-medium">{project.name}</p>
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs capitalize text-[color:var(--muted)]">
            {es.projects.statusLabel[project.status] ?? project.status}
          </span>
        </div>
        <p className="text-sm text-[color:var(--muted)]">{es.projects.goal}: {project.goal}</p>
        <p className="text-sm">{es.projects.next}: {project.nextAction}</p>
      </Card>
    </motion.button>
  );
}
