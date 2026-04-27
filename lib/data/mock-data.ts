import { Challenge, ContentItem, DailyFocus, MentorMessage, Project, Reflection, User, UserChallenge, WeeklyScore } from '@/lib/types';

export const mockUser: User = {
  id: 'user_1',
  name: 'Ava Mendes',
  email: 'ava@nirvia.app',
  avatarUrl: 'https://i.pravatar.cc/150?img=32',
  plan: 'pro',
  createdAt: '2026-01-13',
};

export const mockProjects: Project[] = [
  {
    id: 'proj_1',
    userId: 'user_1',
    name: 'Nirvia Onboarding Funnel',
    status: 'building',
    goal: 'Increase activation to 45%',
    currentStage: 'User interviews and flow redesign',
    nextAction: 'Ship step-by-step first-run wizard',
    blocker: 'Need final copy for value proposition screens',
    metricName: 'Activation Rate',
    metricValue: 31,
    createdAt: '2026-03-10',
  },
  {
    id: 'proj_2',
    userId: 'user_1',
    name: 'Outbound Sales Sprint',
    status: 'launched',
    goal: 'Book 15 discovery calls this month',
    currentStage: 'Daily outreach consistency',
    nextAction: 'Send 20 personalized founder DMs',
    blocker: 'Lead list quality is inconsistent',
    metricName: 'Calls Booked',
    metricValue: 9,
    createdAt: '2026-02-02',
  },
];

export const mockDailyFocus: DailyFocus = {
  id: 'focus_1',
  userId: 'user_1',
  date: '2026-04-27',
  focusTitle: 'Execution before optimization',
  action: 'Publish the onboarding v2 changes before 2 PM.',
  completed: false,
};

export const mockChallenges: Challenge[] = [
  {
    id: 'challenge_1',
    title: '7-Day Anti-Procrastination Reset',
    description: 'One hard thing first every day before checking messages.',
    durationDays: 7,
  },
  {
    id: 'challenge_2',
    title: '14-Day Revenue Focus',
    description: 'Daily sales action with end-of-day reflection.',
    durationDays: 14,
  },
];

export const mockUserChallenge: UserChallenge = {
  id: 'user_challenge_1',
  userId: 'user_1',
  challengeId: 'challenge_1',
  currentDay: 3,
  progress: 43,
  status: 'active',
};

export const mockMentorMessages: MentorMessage[] = [
  {
    id: 'msg_1',
    userId: 'user_1',
    role: 'assistant',
    content: 'Founder mode: pick one priority that moves revenue this week. What is it?',
    createdAt: new Date().toISOString(),
  },
];

export const mockReflection: Reflection = {
  id: 'ref_1',
  userId: 'user_1',
  question: 'What uncomfortable action would make this week undeniably better?',
  answer: '',
  date: '2026-04-27',
};

export const mockContentItem: ContentItem = {
  id: 'content_1',
  type: 'podcast',
  title: 'Operator Mindset: Build Momentum in Low-Energy Weeks',
  url: 'https://example.com/podcast/operator-mindset',
  category: 'Execution',
};

export const mockWeeklyScore: WeeklyScore = {
  id: 'score_1',
  userId: 'user_1',
  weekStart: '2026-04-21',
  executionScore: 82,
  focusScore: 79,
  salesScore: 68,
  learningScore: 74,
  totalScore: 76,
};
