'use client';

import { useState } from 'react';
import { MobileShell } from '@/components/layout/mobile-shell';
import { SectionTitle } from '@/components/cards/section-title';
import { ProjectCard } from '@/components/projects/project-card';
import { Card } from '@/components/ui/card';
import { useProjects } from '@/hooks/use-projects';
import { useAppStore } from '@/lib/services/state';
import { Project } from '@/lib/types';
import { es } from '@/lib/i18n/es';

export default function ProjectsPage() {
  const user = useAppStore((s) => s.user);
  const { projects } = useProjects(user.id);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <MobileShell>
      <SectionTitle title={es.projects.title} subtitle={es.projects.subtitle} />
      <div className="space-y-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </div>

      {selected ? (
        <Card className="space-y-2 border-violet-400/50">
          <p className="text-base font-semibold">{selected.name}</p>
          <p className="text-sm text-[color:var(--muted)]">{es.projects.status}: {es.projects.statusLabel[selected.status] ?? selected.status}</p>
          <p className="text-sm">{es.projects.goal}: {selected.goal}</p>
          <p className="text-sm">{es.projects.currentStage}: {selected.currentStage}</p>
          <p className="text-sm">{es.projects.nextAction}: {selected.nextAction}</p>
          <p className="text-sm">{es.projects.blocker}: {selected.blocker}</p>
          <p className="text-sm">{selected.metricName}: {selected.metricValue}</p>
          <button onClick={() => setSelected(null)} className="mt-2 rounded-xl border border-white/20 px-3 py-1 text-sm">{es.projects.close}</button>
        </Card>
      ) : null}
    </MobileShell>
  );
}
