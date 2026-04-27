'use client';

import { useEffect, useState } from 'react';
import { getDailyFocus, updateDailyFocus } from '@/lib/services/focus-service';
import { DailyFocus } from '@/lib/types';

export function useDailyFocus(userId: string) {
  const [dailyFocus, setDailyFocus] = useState<DailyFocus | null>(null);

  useEffect(() => {
    getDailyFocus(userId).then(setDailyFocus);
  }, [userId]);

  const toggleComplete = async () => {
    if (!dailyFocus) return;
    const updated = await updateDailyFocus(dailyFocus.id, { completed: !dailyFocus.completed });
    setDailyFocus(updated);
  };

  return { dailyFocus, toggleComplete };
}
