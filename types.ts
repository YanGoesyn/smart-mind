
export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
  journeyProgress: Record<string, StepProgress>;
  goals: Goal[];
  notifications: Notification[];
}

export interface StepProgress {
  status: 'locked' | 'unlocked' | 'in_progress' | 'completed';
  answers?: Record<string, string>;
  essentialMirror?: EssentialMirror;
}

export interface EssentialMirror {
  temperament: string;
  central_personality_trait: string;
  virtues: string[];
  weaknesses: string[];
  predominant_emotional_vice: string;
  fears: string;
  desires: string;
  self_image_distortions: string;
  central_beliefs: string;
}

export enum Screen {
  Login,
  Home,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  AiChat,
  UserManagement,
  Notifications,
  Calendar,
  NewGoal,
  EditGoal,
  Settings,
  // New mobile screens
  Camera,
  Puzzle,
  Graphs,
  Kanban,
}

export interface JourneyStep {
  id: string;
  screen: Screen;
  title: string;
  description: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  status: 'pending' | 'completed';
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
}

export enum WebhookEvent {
  NewUser = 'Novo Usuário',
  Step1Completed = 'Etapa 1 Concluída',
  Step2Completed = 'Etapa 2 Concluída',
  AiChat = 'Chat IA',
}

export interface Webhook {
  id: string;
  name: string;
  url: string;
  event: WebhookEvent;
}