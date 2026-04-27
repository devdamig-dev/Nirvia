'use client';

import { useEffect, useState } from 'react';
import { getChallenges, getUserChallenge, updateUserChallenge } from '@/lib/services/challenges-service';
import { Challenge, UserChallenge } from '@/lib/types';

export function useChallenges(userId: string) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [userChallenge, setUserChallenge] = useState<UserChallenge | null>(null);

  useEffect(() => {
    getChallenges().then(setChallenges);
    getUserChallenge(userId).then(setUserChallenge);
  }, [userId]);

  const bumpProgress = async () => {
    if (!userChallenge) return;
    const progress = Math.min(100, userChallenge.progress + 10);
    const currentDay = Math.min(userChallenge.currentDay + 1, 7);
    const updated = await updateUserChallenge(userChallenge.id, { progress, currentDay, status: progress >= 100 ? 'completed' : 'active' });
    setUserChallenge(updated);
  };

  return { challenges, userChallenge, bumpProgress };
}
