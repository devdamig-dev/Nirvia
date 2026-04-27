import { useAppStore } from '@/lib/services/state';
import { DailyFocus } from '@/lib/types';

export async function getDailyFocus(userId: string): Promise<DailyFocus> {
  // TODO: Replace with Supabase query scoped by date + user.
  return useAppStore.getState().dailyFocus;
}

export async function updateDailyFocus(id: string, payload: Partial<DailyFocus>): Promise<DailyFocus> {
  // TODO: Replace with Supabase update query and row return.
  const current = useAppStore.getState().dailyFocus;
  const updated = { ...current, ...payload, id };
  useAppStore.getState().setDailyFocus(updated);
  return updated;
}
