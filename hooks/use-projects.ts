'use client';

import { useEffect, useState } from 'react';
import { getProjects } from '@/lib/services/projects-service';
import { Project } from '@/lib/types';

export function useProjects(userId: string) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects(userId).then(setProjects);
  }, [userId]);

  return { projects };
}
