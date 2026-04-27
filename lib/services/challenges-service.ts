import { staticData, useAppStore } from '@/lib/services/state';
import { Challenge, UserChallenge } from '@/lib/types';

export async function getChallenges(): Promise<Challenge[]> {
  // TODO: Replace with Supabase challenge catalog table fetch.
  return staticData.challenges;
}

export async function getUserChallenge(userId: string): Promise<UserChallenge> {
  // TODO: Replace with Supabase user_challenges fetch.
  return useAppStore.getState().userChallenge;
}

export async function updateUserChallenge(id: string, payload: Partial<UserChallenge>): Promise<UserChallenge> {
  // TODO: Replace with Supabase update query.
  useAppStore.getState().updateUserChallenge(payload);
  return { ...useAppStore.getState().userChallenge, ...payload, id };
}
