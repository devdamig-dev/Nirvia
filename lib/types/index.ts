export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  plan: 'starter' | 'growth' | 'pro';
  createdAt: string;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  status: 'idea' | 'building' | 'launched' | 'paused';
  goal: string;
  currentStage: string;
  nextAction: string;
  blocker: string;
  metricName: string;
  metricValue: number;
  createdAt: string;
}

export interface DailyFocus {
  id: string;
  userId: string;
  date: string;
  focusTitle: string;
  action: string;
  completed: boolean;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  durationDays: number;
}

export interface UserChallenge {
  id: string;
  userId: string;
  challengeId: string;
  currentDay: number;
  progress: number;
  status: 'active' | 'completed' | 'paused';
}

export interface MentorMessage {
  id: string;
  userId: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

export interface Reflection {
  id: string;
  userId: string;
  question: string;
  answer: string;
  date: string;
}

export interface ContentItem {
  id: string;
  type: 'podcast' | 'article' | 'video';
  title: string;
  url: string;
  category: string;
}

export interface WeeklyScore {
  id: string;
  userId: string;
  weekStart: string;
  executionScore: number;
  focusScore: number;
  salesScore: number;
  learningScore: number;
  totalScore: number;
}
