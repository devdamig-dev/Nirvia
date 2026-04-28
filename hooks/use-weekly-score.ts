'use client';

import { useEffect, useState } from 'react';
import { getWeeklyScore } from '@/lib/services/score-service';
import { WeeklyScore } from '@/lib/types';

export function useWeeklyScore(userId: string) {
  const [weeklyScore, setWeeklyScore] = useState<WeeklyScore | null>(null);

  useEffect(() => {
    getWeeklyScore(userId).then(setWeeklyScore);
  }, [userId]);

  return { weeklyScore };
}
