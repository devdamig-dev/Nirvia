import { useAppStore } from '@/lib/services/state';
import { Project } from '@/lib/types';

export async function getProjects(userId: string): Promise<Project[]> {
  // TODO: Replace with Supabase query: select projects where user_id = userId.
  return useAppStore.getState().projects.filter((project) => project.userId === userId);
}

export async function getProjectById(projectId: string): Promise<Project | undefined> {
  // TODO: Replace with Supabase query by primary key.
  return useAppStore.getState().projects.find((project) => project.id === projectId);
}
