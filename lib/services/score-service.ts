import { staticData } from '@/lib/services/state';
import { WeeklyScore } from '@/lib/types';

export async function getWeeklyScore(userId: string): Promise<WeeklyScore> {
  // TODO: Replace with Supabase score retrieval by user and current week.
  return { ...staticData.weeklyScore, userId };
}
