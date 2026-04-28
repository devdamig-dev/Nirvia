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
    name: 'Funnel de onboarding de Nirvia',
    status: 'building',
    goal: 'Llevar la activación al 45%',
    currentStage: 'Entrevistas con usuarios y rediseño del flujo',
    nextAction: 'Lanzar el asistente guiado de primer uso',
    blocker: 'Falta cerrar el copy de pantallas de propuesta de valor',
    metricName: 'Tasa de activación',
    metricValue: 31,
    createdAt: '2026-03-10',
  },
  {
    id: 'proj_2',
    userId: 'user_1',
    name: 'Sprint de ventas outbound',
    status: 'launched',
    goal: 'Agendar 15 llamadas de descubrimiento este mes',
    currentStage: 'Consistencia diaria de prospección',
    nextAction: 'Enviar 20 mensajes personalizados como founder',
    blocker: 'La calidad de la lista de leads es irregular',
    metricName: 'Llamadas agendadas',
    metricValue: 9,
    createdAt: '2026-02-02',
  },
];

export const mockDailyFocus: DailyFocus = {
  id: 'focus_1',
  userId: 'user_1',
  date: '2026-04-27',
  focusTitle: 'Ejecución antes que optimización',
  action: 'Publicá los cambios de onboarding v2 antes de las 14:00.',
  completed: false,
};

export const mockChallenges: Challenge[] = [
  {
    id: 'challenge_1',
    title: 'Reset antiprocrastinación de 7 días',
    description: 'Una tarea difícil primero, todos los días, antes de revisar mensajes.',
    durationDays: 7,
  },
  {
    id: 'challenge_2',
    title: 'Foco en ingresos de 14 días',
    description: 'Una acción diaria de ventas con reflexión de cierre de día.',
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
    content: 'Modo founder: elegí una prioridad que mueva ingresos esta semana. ¿Cuál es?',
    createdAt: new Date().toISOString(),
  },
];

export const mockReflection: Reflection = {
  id: 'ref_1',
  userId: 'user_1',
  question: '¿Qué acción incómoda haría que esta semana sea claramente mejor?',
  answer: '',
  date: '2026-04-27',
};

export const mockContentItem: ContentItem = {
  id: 'content_1',
  type: 'podcast',
  title: 'Mentalidad operativa: creá impulso en semanas de baja energía',
  url: 'https://example.com/podcast/operator-mindset',
  category: 'Ejecución',
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
