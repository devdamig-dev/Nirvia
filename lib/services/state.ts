'use client';

import { create } from 'zustand';
import {
  mockChallenges,
  mockContentItem,
  mockDailyFocus,
  mockMentorMessages,
  mockProjects,
  mockReflection,
  mockUser,
  mockUserChallenge,
  mockWeeklyScore,
} from '@/lib/data/mock-data';
import { DailyFocus, MentorMessage, Project, Reflection, UserChallenge } from '@/lib/types';

type AppState = {
  user: typeof mockUser;
  projects: Project[];
  dailyFocus: DailyFocus;
  mentorMessages: MentorMessage[];
  reflection: Reflection;
  userChallenge: UserChallenge;
  checklist: { id: string; label: string; done: boolean }[];
  setProjects: (projects: Project[]) => void;
  setDailyFocus: (dailyFocus: DailyFocus) => void;
  addMentorMessage: (message: MentorMessage) => void;
  setReflectionAnswer: (answer: string) => void;
  updateUserChallenge: (payload: Partial<UserChallenge>) => void;
  toggleChecklistItem: (id: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  user: mockUser,
  projects: mockProjects,
  dailyFocus: mockDailyFocus,
  mentorMessages: mockMentorMessages,
  reflection: mockReflection,
  userChallenge: mockUserChallenge,
  checklist: [
    { id: 'c1', label: 'Do hard task before inbox', done: true },
    { id: 'c2', label: 'Complete one 45-min deep work block', done: false },
    { id: 'c3', label: 'Log end-of-day reflection', done: false },
  ],
  setProjects: (projects) => set({ projects }),
  setDailyFocus: (dailyFocus) => set({ dailyFocus }),
  addMentorMessage: (message) => set((state) => ({ mentorMessages: [...state.mentorMessages, message] })),
  setReflectionAnswer: (answer) => set((state) => ({ reflection: { ...state.reflection, answer } })),
  updateUserChallenge: (payload) => set((state) => ({ userChallenge: { ...state.userChallenge, ...payload } })),
  toggleChecklistItem: (id) =>
    set((state) => ({ checklist: state.checklist.map((item) => (item.id === id ? { ...item, done: !item.done } : item)) })),
}));

export const staticData = { challenges: mockChallenges, contentItem: mockContentItem, weeklyScore: mockWeeklyScore };
