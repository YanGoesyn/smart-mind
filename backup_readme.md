
# Project Code Backup

This file contains a complete snapshot of all the code files in the project for archival purposes.

---

## `index.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
```

---

## `metadata.json`

```json
{
  "name": "Smart Mind - 26/07",
  "description": "Aplicação com KANBAN integrado",
  "requestFramePermissions": [
    "microphone"
  ],
  "prompt": ""
}
```

---

## `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#f8fafc">
    <title>Smart Mind</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
       html, body, #root {
        height: 100%;
      }
      /* For custom scrollbars */
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #aab;
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #889;
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.1.0/",
    "react": "https://esm.sh/react@^19.1.0",
    "react-dom/": "https://esm.sh/react-dom@^19.1.0/",
    "@google/genai": "https://esm.sh/@google/genai@^1.10.0",
    "@dnd-kit/utilities": "https://esm.sh/@dnd-kit/utilities@^3.2.2",
    "@dnd-kit/core": "https://esm.sh/@dnd-kit/core@^6.3.1",
    "@dnd-kit/sortable": "https://esm.sh/@dnd-kit/sortable@^10.0.0"
  }
}
</script>
</head>
  <body class="bg-gray-100 dark:bg-slate-900">
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
```

---

## `types.ts`

```ts
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
```

---

## `constants.tsx`

```tsx
import React from 'react';
import { Screen, JourneyStep } from './types';

export const JOURNEY_STEPS: JourneyStep[] = [
  { id: 'step1', screen: Screen.Step1, title: 'Definição dos Objetivos de Vida', description: 'Fundamentado em planejamento estratégico, Balanced Scorecard e Objetivos SMART.' },
  { id: 'step2', screen: Screen.Step2, title: 'Análise do Perfil e Essência', description: 'Autoconhecimento com traços, temperamentos e arquétipos.' },
  { id: 'step3', screen: Screen.Step3, title: 'Potência Profissional', description: 'Análise de suas competências e histórico profissional.' },
  { id: 'step4', screen: Screen.Step4, title: 'Análise de Mercado', description: 'Entenda tendências e oportunidades.' },
  { id: 'step5', screen: Screen.Step5, title: 'Ajuste de Posicionamento', description: 'Refine seu branding pessoal e profissional.' },
  { id: 'step6', screen: Screen.Step6, title: 'Metas, Execução e Hábitos', description: 'Crie um plano de ação ágil e eficiente.' },
  { id: 'step7', screen: Screen.Step7, title: 'Reprogramação Mental', description: 'Utilize conceitos da neurociência para mudar sua mentalidade.' },
  { id: 'step8', screen: Screen.Step8, title: 'Feedback & Rotina', description: 'Implemente um sistema de melhoria contínua.' },
];

export const STEP1_QUESTIONS = [
  { id: 'q1', text: 'Qual seu objetivo financeiro (curto/médio prazo)?' },
  { id: 'q2', text: 'Qual seu objetivo profissional?' },
  { id: 'q3', text: 'Qual seu objetivo para saúde física?' },
  { id: 'q4', text: 'Qual seu objetivo em relacionamentos/família?' },
];

export const STEP2_QUESTIONS = [
  { id: 'q1', text: 'Quais virtudes e fraquezas você tinha na infância?' },
  { id: 'q2', text: 'Quais características representam você hoje?' },
  { id: 'q3', text: 'Quais valores e princípios inegociáveis norteiam sua vida?' },
];

export const ICONS: Record<string, React.ReactNode> = {
  home: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3 10.5v.75a4.5 4.5 0 004.5 4.5h3.75a4.5 4.5 0 004.5-4.5v-.75M8.25 21V15.75a.75.75 0 01.75-.75h3.75a.75.75 0 01.75.75V21" />,
  chat: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m3.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />,
  users: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.375m-4.062-3.248a9.38 9.38 0 00-2.625.375M17.25 3.75l-1.625 1.625a3.75 3.75 0 00-5.304 0l-1.625-1.625M17.25 3.75a3.75 3.75 0 00-5.304 0m5.304 0a3.75 3.75 0 010 5.304m-5.304-5.304a3.75 3.75 0 00-5.304 5.304m0 0l-1.625 1.625m12.375-3.813a3.75 3.75 0 01-5.304 0M6 16.5a3.75 3.75 0 015.304 0M6 16.5l-1.625 1.625a3.75 3.75 0 01-5.304 0l1.625-1.625m5.304 0a3.75 3.75 0 010-5.304m-5.304 5.304a3.75 3.75 0 01-5.304-5.304m0 0l1.625-1.625" />,
  bell: <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />,
  calendar: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />,
  settings: <><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.332.183-.582.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.003-.827c.293-.24.438.613-.438.995s-.145-.755-.438-.995l-1.003-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37.49l1.217.456c.355.133.75.072 1.075-.124.073-.044.146-.087.22-.127.332-.183.582.495.645-.87l.213-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
  plus: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />,
  microphone: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m12 5.25v-1.5m-6 0v-1.5m-6 0a6 6 0 016-6v0a6 6 0 016 6v1.5m-6 7.5v-1.5" />,
  trash: <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />,
  send: <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />,
  arrowLeft: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />,
  check: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />,
  puzzle: <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25m-2.25-6.75a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25m-2.25-6.75v6.75m4.5-6.75v6.75m-6.75-6.75v6.75m-2.25-4.5v-2.25a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 012.25 2.25v2.25m-6.75 4.5v-2.25a2.25 2.25 0 012.25-2.25h2.25a2.25 2.25 0 012.25 2.25v2.25M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />,
  camera: <><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008v-.008z" /></>,
  menu: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />,
  chart: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3m-15.75 0h15.75M3.75 3A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21h15a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0018.75 3m-15.75 0h15.75" />,
  chevronLeft: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />,
  chevronRight: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />,
  xMark: <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />,
  kanban: <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.5-15h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 013.75 4.5z" />,
};
```

---

## `services/n8nService.ts`

```ts
import { Webhook, WebhookEvent } from '../types';

/**
 * Sends data to a webhook URL reliably, even if the page is unloading.
 * It sends data as 'text/plain' to ensure it's a CORS-simple request.
 * This avoids a preflight (OPTIONS) request which can fail on some webhook services.
 * Most services (like n8n, webhook.site) can parse a JSON string from a plain text body.
 * @param url The webhook URL.
 * @param data The JSON data to send.
 */
export const sendToWebhook = (url: string, data: any): void => {
  if (!url) {
    console.warn("Webhook URL not configured. Skipping send.", { data });
    return;
  }

  // Using fetch with keepalive is the modern, reliable way to send data
  // that needs to survive page navigation.
  fetch(url, {
    method: 'POST',
    headers: {
      // Using 'text/plain' makes this a CORS "simple request", avoiding
      // a preflight OPTIONS request that can be blocked by some webhook receivers.
      // Most services can parse JSON from a plain text body. This approach
      // fixes network errors caused by restrictive CORS policies on the server.
      'Content-Type': 'text/plain;charset=UTF-8',
    },
    body: JSON.stringify(data),
    keepalive: true, // Crucial for reliability on page unload
  })
  .then(response => {
    if (!response.ok) {
      // Log non-2xx responses but don't interrupt user flow.
      console.error(`Webhook request to ${url} failed with status: ${response.status} ${response.statusText}`);
    } else {
      console.log(`Webhook data successfully sent via fetch/keepalive to: ${url}`);
    }
  })
  .catch(error => {
    // When navigating away while a keepalive fetch is in flight, the browser may
    // abort listening for the response, causing a "Failed to fetch" TypeError.
    // This is expected behavior and doesn't mean the data wasn't sent.
    // We log it as info instead of an alarming error.
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.log(`[Webhook Info] Request to ${url} sent. The "Failed to fetch" log is expected during page navigation and can be safely ignored as the data is sent via 'keepalive'.`);
    } else {
        // Log other, unexpected errors more loudly.
        let errorMessage = 'An unknown network error occurred.';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.error(
            `[Webhook Error] Failed to send data to webhook: ${url}. This is likely a genuine network error (CORS, offline, invalid URL).`,
            'Error message:', errorMessage,
            'Full error object:', error
        );
    }
  });
};

/**
 * Triggers all webhooks associated with a specific event.
 * @param webhooks The list of all user-configured webhooks.
 * @param event The event that was triggered in the app.
 * @param data The payload to send to the webhooks.
 */
export const triggerWebhooks = (webhooks: Webhook[], event: WebhookEvent, data: any): void => {
    const matchingWebhooks = webhooks.filter(wh => wh.event === event);
    
    if (matchingWebhooks.length === 0) {
        return;
    }

    console.log(`Triggering ${matchingWebhooks.length} webhook(s) for event: ${event}`);
    matchingWebhooks.forEach(webhook => {
        // Add context to the payload for better debugging on the receiving end
        const payloadWithContext = {
          ...data,
          _webhookName: webhook.name,
          _triggeredEvent: event,
        };
        sendToWebhook(webhook.url, payloadWithContext);
    });
};


export const fetchFromWebhook = async (url: string, data: any): Promise<string | null> => {
  if (!url) {
    console.warn("Webhook URL is not set. Skipping fetch.");
    return "O URL do webhook não está configurado. Por favor, ajuste nas configurações.";
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(30000), // 30-second timeout
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Webhook request failed:", response.status, errorBody);
      throw new Error(`O webhook retornou um erro: ${response.status}. Verifique a URL e o serviço de destino.`);
    }

    const responseData = await response.json();
    // Be flexible with the response format, looking for a 'text' property.
    // Common n8n format is an array with one object: [{ json: { text: '...' }}]
    const text = responseData.text || responseData[0]?.json?.text;
    
    if (typeof text === 'string') {
        return text;
    }
    
    // Fallback for other JSON structures
    console.warn("Webhook response did not contain a 'text' property. Returning full JSON.", responseData);
    return JSON.stringify(responseData);

  } catch (error) {
    console.error("Error fetching from webhook:", error);
     if (error instanceof Error) {
        if (error.name === 'TimeoutError') {
            return "A requisição ao webhook demorou muito para responder. Tente novamente.";
        }
        // This will catch JSON parsing errors or the error thrown above
        if (error.message.includes('JSON')) {
            return "O webhook não retornou uma resposta JSON válida.";
        }
        return error.message; // Return the specific error message to the user
    }
    return "Ocorreu um erro desconhecido ao comunicar com o webhook.";
  }
};
```

---

## `services/geminiService.ts`

```ts
import { GoogleGenAI, Type } from "@google/genai";
import type { EssentialMirror } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("Gemini API key is not set. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const essentialMirrorSchema = {
  type: Type.OBJECT,
  properties: {
    temperament: { type: Type.STRING, description: "The user's dominant temperament (e.g., Choleric, Sanguine, Melancholic, Phlegmatic)." },
    central_personality_trait: { type: Type.STRING, description: "The single most defining personality trait." },
    virtues: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of the user's key virtues." },
    weaknesses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of the user's key weaknesses." },
    predominant_emotional_vice: { type: Type.STRING, description: "The main emotional challenge or vice the user faces." },
    fears: { type: Type.STRING, description: "The user's core fears." },
    desires: { type: Type.STRING, description: "The user's deepest desires." },
    self_image_distortions: { type: Type.STRING, description: "How the user might perceive themselves inaccurately." },
    central_beliefs: { type: Type.STRING, description: "Core beliefs about life, self, and others." },
  },
  required: [
    "temperament", "central_personality_trait", "virtues", "weaknesses", 
    "predominant_emotional_vice", "fears", "desires", "self_image_distortions", "central_beliefs"
  ]
};

export const generateEssentialMirror = async (
  answers: Record<string, string>
): Promise<EssentialMirror | null> => {
  if (!API_KEY) {
    console.error("Cannot generate essential mirror, API_KEY is missing.");
    return null;
  }
  
  const prompt = `
    Based on the following self-reflection answers, analyze the user's personality and generate a synthetic "Essential Mirror" profile.
    The user's answers are:
    - Virtues and weaknesses in childhood: "${answers.q1}"
    - Current characteristics: "${answers.q2}"
    - Core values and principles: "${answers.q3}"

    Analyze these inputs to infer the user's psychological and emotional patterns. Provide a concise and insightful summary in the requested JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: essentialMirrorSchema,
        },
    });
    
    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as EssentialMirror;

  } catch (error) {
    console.error("Error generating Essential Mirror from Gemini:", error);
    return null;
  }
};
```

---

## `context/AppContext.tsx`

```ts
import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { User, Screen, Goal, Notification, StepProgress, EssentialMirror, Webhook, WebhookEvent } from '../types';
import { JOURNEY_STEPS } from '../constants';

// State
interface AppState {
  users: User[];
  nextUserId: number;
  currentUser: User | null;
  currentScreen: Screen;
  editingGoalId: string | null;
  customWebhooks: Webhook[];
  isGeminiEnabled: boolean;
}

// Actions
type Action =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'CREATE_USER_AND_LOGIN'; payload: { name: string; email: string } }
  | { type: 'DELETE_USER'; payload: string }
  | { type: 'SET_SCREEN'; payload: Screen }
  | { type: 'ADD_GOAL'; payload: Goal }
  | { type: 'EDIT_GOAL'; payload: Goal }
  | { type: 'DELETE_GOAL'; payload: string }
  | { type: 'SET_EDITING_GOAL'; payload: string | null }
  | { type: 'MARK_GOAL_COMPLETED'; payload: string }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'read'> }
  | { type: 'MARK_NOTIFICATION_READ'; payload: string }
  | { type: 'ADD_WEBHOOK' }
  | { type: 'UPDATE_WEBHOOK'; payload: Webhook }
  | { type: 'DELETE_WEBHOOK'; payload: string }
  | { type: 'UPDATE_STEP_PROGRESS'; payload: { stepId: string; progress: Partial<StepProgress> } }
  | { type: 'SET_ESSENTIAL_MIRROR'; payload: { stepId: string; mirror: EssentialMirror } }
  | { type: 'TOGGLE_GEMINI_API' };

const initialState: AppState = {
  users: [],
  nextUserId: 1,
  currentUser: null,
  currentScreen: Screen.Login,
  editingGoalId: null,
  customWebhooks: [],
  isGeminiEnabled: true,
};

// Reducer
const appReducer = (state: AppState, action: Action): AppState => {
  // Helper to update the current user in both currentUser and the users array
  const updateCurrentUser = (updatedUser: User): Partial<AppState> => {
      return {
          currentUser: updatedUser,
          users: state.users.map(u => u.id === updatedUser.id ? updatedUser : u)
      };
  }

  switch (action.type) {
    case 'LOGIN':
        return { ...state, currentUser: action.payload, currentScreen: Screen.Home };

    case 'CREATE_USER_AND_LOGIN': {
        const initialProgress = JOURNEY_STEPS.reduce((acc, step, index) => {
            acc[step.id] = { status: index === 0 ? 'unlocked' : 'locked', answers: {} };
            return acc;
        }, {} as Record<string, StepProgress>);

        const newUser: User = {
          id: state.nextUserId.toString(),
          name: action.payload.name,
          email: action.payload.email,
          isAdmin: action.payload.email.toLowerCase() === 'ronald.fregona31@gmail.com',
          journeyProgress: initialProgress,
          goals: [],
          notifications: [{ id: new Date().toISOString(), message: `Bem-vindo, ${action.payload.name}! Sua jornada começa agora.`, read: false }]
        };
        
        const updatedUsers = [...state.users.slice(-4), newUser];

        return { 
            ...state, 
            users: updatedUsers,
            currentUser: newUser, 
            currentScreen: Screen.Home,
            nextUserId: state.nextUserId + 1,
        };
    }

    case 'LOGOUT':
      return { ...state, currentUser: null, currentScreen: Screen.Login };

    case 'DELETE_USER':
        return { ...state, users: state.users.filter(u => u.id !== action.payload) };
    
    case 'SET_SCREEN':
      // Reset editing goal when navigating away
      return { ...state, currentScreen: action.payload, editingGoalId: null };

    case 'ADD_GOAL': {
      if (!state.currentUser) return state;
      const updatedUser = { ...state.currentUser, goals: [...state.currentUser.goals, action.payload] };
      return { ...state, ...updateCurrentUser(updatedUser) };
    }
    
    case 'EDIT_GOAL': {
      if (!state.currentUser) return state;
      const updatedUser = {
        ...state.currentUser,
        goals: state.currentUser.goals.map(g => g.id === action.payload.id ? action.payload : g)
      };
      return { ...state, ...updateCurrentUser(updatedUser), editingGoalId: null, currentScreen: Screen.Calendar };
    }

    case 'DELETE_GOAL': {
      if (!state.currentUser) return state;
      const updatedUser = {
        ...state.currentUser,
        goals: state.currentUser.goals.filter(g => g.id !== action.payload)
      };
      return { ...state, ...updateCurrentUser(updatedUser) };
    }

    case 'SET_EDITING_GOAL': {
        return { ...state, editingGoalId: action.payload, currentScreen: Screen.EditGoal };
    }
      
    case 'MARK_GOAL_COMPLETED': {
        if (!state.currentUser) return state;
        const updatedUser = {
            ...state.currentUser,
            goals: state.currentUser.goals.map((g): Goal => g.id === action.payload ? { ...g, status: 'completed' } : g)
        };
        return { ...state, ...updateCurrentUser(updatedUser) };
    }

    case 'ADD_NOTIFICATION': {
      if (!state.currentUser) return state;
      const newNotification = { ...action.payload, id: new Date().toISOString(), read: false };
      const updatedUser = { ...state.currentUser, notifications: [newNotification, ...state.currentUser.notifications] };
      return { ...state, ...updateCurrentUser(updatedUser) };
    }

    case 'MARK_NOTIFICATION_READ': {
      if (!state.currentUser) return state;
      const updatedUser = {
        ...state.currentUser,
        notifications: state.currentUser.notifications.map(n => n.id === action.payload ? { ...n, read: true } : n)
      };
      return { ...state, ...updateCurrentUser(updatedUser) };
    }

    case 'ADD_WEBHOOK': {
        const newWebhook: Webhook = {
            id: new Date().toISOString() + Math.random(),
            name: 'Novo Webhook',
            url: '',
            event: WebhookEvent.NewUser,
        };
        return { ...state, customWebhooks: [...state.customWebhooks, newWebhook] };
    }

    case 'UPDATE_WEBHOOK': {
        return { 
            ...state, 
            customWebhooks: state.customWebhooks.map(wh => 
                wh.id === action.payload.id ? action.payload : wh
            )
        };
    }

    case 'DELETE_WEBHOOK': {
        return {
            ...state,
            customWebhooks: state.customWebhooks.filter(wh => wh.id !== action.payload)
        };
    }
      
    case 'TOGGLE_GEMINI_API':
      return { ...state, isGeminiEnabled: !state.isGeminiEnabled };

    case 'UPDATE_STEP_PROGRESS': {
      if (!state.currentUser) return state;
      const { stepId, progress } = action.payload;
      const updatedUser = {
          ...state.currentUser,
          journeyProgress: {
              ...state.currentUser.journeyProgress,
              [stepId]: {
                  ...state.currentUser.journeyProgress[stepId],
                  ...progress,
              },
          },
      };
      return { ...state, ...updateCurrentUser(updatedUser) };
    }

    case 'SET_ESSENTIAL_MIRROR': {
        if (!state.currentUser) return state;
        const mirrorUser = {
            ...state.currentUser,
            journeyProgress: {
                ...state.currentUser.journeyProgress,
                [action.payload.stepId]: {
                    ...state.currentUser.journeyProgress[action.payload.stepId],
                    essentialMirror: action.payload.mirror,
                },
            },
        };
        return { ...state, ...updateCurrentUser(mirrorUser) };
    }

    default:
      return state;
  }
};

// Context
const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

// Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, initialState, (initial) => {
        try {
            const localData = localStorage.getItem('smartMindState');
            if (localData) {
                const parsed = JSON.parse(localData);
                // Clear deprecated fields
                delete parsed.goals;
                delete parsed.notifications;
                delete parsed.webhooks; // <-- Remove old static webhooks

                if (!parsed.customWebhooks) {
                  parsed.customWebhooks = []; // Initialize if not present
                }
                
                const maxId = parsed.users?.reduce((max: number, u: User) => Math.max(max, parseInt(u.id)), 0) || 0;
                // Default isGeminiEnabled to true if it's not in localStorage
                if (parsed.isGeminiEnabled === undefined) {
                    parsed.isGeminiEnabled = true;
                }
                return { ...initial, ...parsed, nextUserId: parsed.nextUserId || (maxId + 1) };
            }
            return initial;
        } catch (error) {
            console.error("Could not parse local storage state:", error);
            return initial;
        }
    });

    useEffect(() => {
        localStorage.setItem('smartMindState', JSON.stringify(state));
    }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook
export const useApp = () => useContext(AppContext);
```

---

## `components/Icon.tsx`

```tsx
import React from 'react';

interface IconProps {
  svg: React.ReactNode;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ svg, className = 'w-6 h-6' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      {svg}
    </svg>
  );
};

export default Icon;
```

---

## `components/SideMenu.tsx`

```tsx
import React from 'react';
import { useApp } from '../context/AppContext';
import { Screen } from '../types';
import { ICONS } from '../constants';
import Icon from './Icon';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useApp();
  const { currentUser } = state;

  const handleNavigation = (screen: Screen) => {
    dispatch({ type: 'SET_SCREEN', payload: screen });
    onClose();
  }

  const menuItems = [
    { screen: Screen.Graphs, label: 'Gráficos', icon: ICONS.chart },
    { screen: Screen.Kanban, label: 'Kanban', icon: ICONS.kanban },
    { screen: Screen.UserManagement, label: 'Gerenciar Usuários', icon: ICONS.users },
  ];

  if (!currentUser) return null;

  return (
    <>
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        ></div>
        <div 
            className={`fixed top-0 left-0 w-64 bg-slate-800 text-white h-full p-4 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="flex items-center mb-6 p-2">
                        <div className="bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                            {currentUser.name.charAt(0)}
                        </div>
                        <span className="ml-3 font-semibold text-lg">{currentUser.name}</span>
                    </div>
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => handleNavigation(Screen.Home)}
                                    className="w-full flex items-center p-3 rounded-lg transition-colors duration-200 bg-indigo-600 text-white hover:bg-indigo-500"
                                >
                                    <Icon svg={ICONS.home} className="w-5 h-5 mr-3" />
                                    <span>Voltar à Jornada</span>
                                </button>
                            </li>

                            <hr className="border-slate-700 my-4" />

                            {menuItems.map(item => (
                            <li key={item.screen}>
                                <button
                                onClick={() => handleNavigation(item.screen)}
                                className="w-full flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-slate-700 text-gray-300"
                                >
                                <Icon svg={item.icon} className="w-5 h-5 mr-3" />
                                <span>{item.label}</span>
                                </button>
                            </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <button
                    onClick={() => {
                        dispatch({ type: 'LOGOUT' });
                        onClose();
                    }}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    Sair
                </button>
            </div>
        </div>
    </>
  );
};

export default SideMenu;
```

---

## `screens/LoginScreen.tsx`

```tsx
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, WebhookEvent } from '../types';
import { triggerWebhooks } from '../services/n8nService';

const LoginScreen: React.FC = () => {
  const { state, dispatch } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleCreateAccount = () => {
    if (!name.trim() || !email.trim()) {
      setError('Nome e E-mail são obrigatórios.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Por favor, insira um e-mail válido.');
        return;
    }

    const existingUser = state.users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existingUser) {
        // User exists, log them in. The name from the form is ignored.
        dispatch({ type: 'LOGIN', payload: existingUser });
        dispatch({ type: 'ADD_NOTIFICATION', payload: { message: `Bem-vindo de volta, ${existingUser.name}!` } });
    } else {
        // User does not exist, create a new one.
        dispatch({ type: 'CREATE_USER_AND_LOGIN', payload: { name, email } });

        // Trigger webhooks for the "New User" event.
        // The User ID is not available here since it's created in the reducer,
        // so we send the available information. The email can be used as a unique key.
        const payload = {
            'NomeUsuario': name,
            'E-mail': email,
            'DataHora': new Date().toISOString(),
        };
        triggerWebhooks(state.customWebhooks, WebhookEvent.NewUser, payload);
    }

    setName('');
    setEmail('');
    setError('');
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800">SMART MIND</h1>
            <p className="mt-2 text-gray-600">Sua jornada de transformação começa aqui.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleCreateAccount(); }} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-bold text-gray-700 tracking-wide">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-bold text-gray-700 tracking-wide">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <div>
            <button type="submit" className="w-full flex justify-center bg-indigo-500 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer hover:bg-indigo-600 transition-all duration-300 ease-in-out">
              Entrar ou Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
```

---

## `screens/HomeScreen.tsx`

```tsx
import React from 'react';
import { useApp } from '../context/AppContext';
import { JOURNEY_STEPS } from '../constants';
import { ICONS } from '../constants';
import Icon from '../components/Icon';

const ProgressBar: React.FC = () => {
    const { state } = useApp();
    const { currentUser } = state;

    if (!currentUser) return null;

    const completedSteps = Object.values(currentUser.journeyProgress).filter(p => p.status === 'completed').length;
    const totalSteps = JOURNEY_STEPS.length;
    const progressPercentage = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

    return (
        <div className="mb-6 p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-slate-700 mb-2">Seu Progresso</h2>
            <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <span className="ml-3 font-bold text-green-600 text-sm">{Math.round(progressPercentage)}%</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">{completedSteps} de {totalSteps} etapas completas.</p>
        </div>
    );
};

const StepCard: React.FC<{ step: typeof JOURNEY_STEPS[0] }> = ({ step }) => {
    const { state, dispatch } = useApp();
    const progress = state.currentUser?.journeyProgress[step.id];
    const isLocked = progress?.status === 'locked';

    const getStatusStyles = () => {
        if (isLocked) return { bg: 'bg-gray-100', text: 'text-gray-400', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /> };
        if (progress?.status === 'completed') return { bg: 'bg-green-50 border-green-200', text: 'text-green-700', icon: ICONS.check };
        return { bg: 'bg-white hover:bg-indigo-50', text: 'text-slate-800', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /> };
    };

    const { bg, text, icon } = getStatusStyles();

    return (
        <button
            onClick={() => !isLocked && dispatch({ type: 'SET_SCREEN', payload: step.screen })}
            disabled={isLocked}
            className={`w-full p-4 text-left rounded-xl shadow-sm transition-all duration-300 border ${bg} ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
            <div className="flex justify-between items-center">
                <div>
                    <h3 className={`text-base font-bold ${text}`}>{step.title}</h3>
                    <p className={`mt-1 text-sm ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                </div>
                <div className={`p-2 rounded-full ${isLocked ? 'bg-gray-200' : 'bg-gray-100'}`}>
                   <Icon svg={icon} className={`w-5 h-5 ${text}`} />
                </div>
            </div>
        </button>
    );
};


const HomeScreen: React.FC = () => {
  return (
    <div className="p-4">
      <ProgressBar />

      <div className="space-y-4">
        {JOURNEY_STEPS.map(step => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
```

---

## `screens/StepScreen.tsx`

```tsx
import React from 'react';

interface StepScreenProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const StepScreen: React.FC<StepScreenProps> = ({ title, description, children }) => {
  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <p className="text-base text-gray-600 mt-2 mb-6">{description}</p>
        <div className="border-t border-gray-200 pt-6">
            {children}
        </div>
      </div>
    </div>
  );
};

export default StepScreen;
```

---

## `screens/Step1Screen.tsx`

```tsx
import React, { useState, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import StepScreen from './StepScreen';
import { STEP1_QUESTIONS, JOURNEY_STEPS } from '../constants';
import { Screen, WebhookEvent } from '../types';
import { triggerWebhooks } from '../services/n8nService';
import Icon from '../components/Icon';
import { ICONS } from '../constants';

const UserInput: React.FC<{ value: string; onChange: (value: string) => void; onRecord: () => void; isRecording: boolean }> = ({ value, onChange, onRecord, isRecording }) => (
    <div className="relative">
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            className="w-full p-3 pr-12 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            placeholder="Digite sua resposta ou use o microfone..."
        />
        <button onClick={onRecord} className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${isRecording ? 'bg-red-500 text-white' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}>
            <Icon svg={ICONS.microphone} className="w-5 h-5" />
        </button>
    </div>
);

const Step1Screen: React.FC = () => {
  const { state, dispatch } = useApp();
  const { customWebhooks, currentUser } = state;
  const stepId = 'step1';

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isRecording, setIsRecording] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < STEP1_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finalize step
      const finalAnswers = { ...answers };
      dispatch({ type: 'UPDATE_STEP_PROGRESS', payload: { stepId, progress: { status: 'completed', answers: finalAnswers } } });
      dispatch({ type: 'UPDATE_STEP_PROGRESS', payload: { stepId: 'step2', progress: { status: 'unlocked' } } });
      dispatch({ type: 'ADD_NOTIFICATION', payload: { message: 'Etapa 1 concluída! Você definiu seus objetivos.' } });
      
      if (currentUser) {
        const stepDetails = JOURNEY_STEPS.find(s => s.id === stepId);
        const perguntas = STEP1_QUESTIONS.map(q => q.text).join('; ');
        const respostas = STEP1_QUESTIONS.map(q => finalAnswers[q.id] || '').join('; ');
        
        const payload = {
          'Etapa': stepDetails?.title || 'Etapa 1',
          'Perguntas': perguntas,
          'Respostas': respostas,
          'ID do Usuário': currentUser.id,
          'NomeUsuario': currentUser.name,
          'E-mail': currentUser.email,
          'DataHora': new Date().toISOString(),
        };

        triggerWebhooks(customWebhooks, WebhookEvent.Step1Completed, payload);
      }

      dispatch({ type: 'SET_SCREEN', payload: Screen.Home });
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleExit = () => {
      dispatch({ type: 'SET_SCREEN', payload: Screen.Home });
  };


  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };
  
  const handleRecord = useCallback(() => {
    const questionId = STEP1_QUESTIONS[currentQuestionIndex].id;
    setIsRecording(true);
    // Simulate recording
    setTimeout(() => {
        handleAnswerChange(questionId, (answers[questionId] || '') + '[Áudio gravado] - Transcrição simulada da sua meta. ');
        setIsRecording(false);
    }, 1500);
  }, [currentQuestionIndex, answers]);


  const currentQuestion = STEP1_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === STEP1_QUESTIONS.length - 1;

  return (
    <StepScreen
      title="Etapa 1 – Defina sua Vida"
      description="Vamos definir seus objetivos gerais. Responda com clareza e honestidade."
    >
      <div className="space-y-6">
        <div>
          <label className="text-lg font-semibold text-slate-800 mb-2 block">
            {currentQuestion.text}
          </label>
           <UserInput 
             value={answers[currentQuestion.id] || ''}
             onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
             onRecord={handleRecord}
             isRecording={isRecording}
           />
        </div>
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
            <button
                onClick={handleExit}
                className="text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
            >
                Sair da Etapa
            </button>
            <div className="flex items-center gap-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    aria-label="Pergunta Anterior"
                >
                    <Icon svg={ICONS.chevronLeft} className="w-5 h-5 text-gray-700" />
                </button>

                <span className="text-sm font-semibold text-gray-600">{currentQuestionIndex + 1} / {STEP1_QUESTIONS.length}</span>

                {isLastQuestion ? (
                     <button
                        onClick={handleNext}
                        disabled={!answers[currentQuestion.id]}
                        className="px-5 py-2.5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        Finalizar <Icon svg={ICONS.check} className="w-5 h-5"/>
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        disabled={!answers[currentQuestion.id]}
                        className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                        aria-label="Próxima Pergunta"
                    >
                        <Icon svg={ICONS.chevronRight} className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
      </div>
    </StepScreen>
  );
};

export default Step1Screen;
```

---

## `screens/Step2Screen.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import StepScreen from './StepScreen';
import { STEP2_QUESTIONS, JOURNEY_STEPS } from '../constants';
import { Screen, WebhookEvent } from '../types';
import { triggerWebhooks } from '../services/n8nService';
import { generateEssentialMirror } from '../services/geminiService';
import Icon from '../components/Icon';
import { ICONS } from '../constants';

const Step2Screen: React.FC = () => {
    const { state, dispatch } = useApp();
    const { customWebhooks, currentUser } = state;
    const stepId = 'step2';
    const stepProgress = currentUser?.journeyProgress[stepId];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [view, setView] = useState<'questions' | 'loading' | 'mirror'>('questions');
    
    useEffect(() => {
        if (stepProgress?.essentialMirror) {
            setView('mirror');
        }
    }, [stepProgress]);

    const handleNext = async () => {
        if (currentQuestionIndex < STEP2_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setView('loading');
            const finalAnswers = { ...answers };
            dispatch({ type: 'UPDATE_STEP_PROGRESS', payload: { stepId, progress: { answers: finalAnswers } } });
            
            if (currentUser) {
                const stepDetails = JOURNEY_STEPS.find(s => s.id === stepId);
                const perguntas = STEP2_QUESTIONS.map(q => q.text).join('; ');
                const respostas = STEP2_QUESTIONS.map(q => finalAnswers[q.id] || '').join('; ');
                
                const payload = {
                  'Etapa': stepDetails?.title || 'Etapa 2',
                  'Perguntas': perguntas,
                  'Respostas': respostas,
                  'ID do Usuário': currentUser.id,
                  'NomeUsuario': currentUser.name,
                  'E-mail': currentUser.email,
                  'DataHora': new Date().toISOString(),
                };
                triggerWebhooks(customWebhooks, WebhookEvent.Step2Completed, payload);
            }

            const mirror = await generateEssentialMirror(finalAnswers);
            if (mirror) {
                dispatch({ type: 'SET_ESSENTIAL_MIRROR', payload: { stepId, mirror } });
                dispatch({ type: 'UPDATE_STEP_PROGRESS', payload: { stepId, progress: { status: 'completed' } } });
                dispatch({ type: 'UPDATE_STEP_PROGRESS', payload: { stepId: 'step3', progress: { status: 'unlocked' } } });
                dispatch({ type: 'ADD_NOTIFICATION', payload: { message: 'Seu Espelho Essencial foi gerado!' } });
            } else {
                dispatch({ type: 'ADD_NOTIFICATION', payload: { message: 'Houve um erro ao gerar seu Espelho Essencial. Tente novamente mais tarde.' } });
                setView('questions'); // Go back to questions on error
            }
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleExit = () => {
        dispatch({ type: 'SET_SCREEN', payload: Screen.Home });
    };
    
    const renderContent = () => {
        switch (view) {
            case 'loading':
                return <div className="text-center p-8"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto"></div><p className="mt-4 text-lg text-gray-600">Analisando suas respostas e gerando seu Espelho Essencial...</p></div>;
            case 'mirror':
                const mirror = stepProgress?.essentialMirror;
                if (!mirror) return <p>Erro ao carregar o espelho.</p>;
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Seu Espelho Essencial</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                           {Object.entries(mirror).map(([key, value]) => (
                               <div key={key} className="bg-indigo-50 p-4 rounded-lg">
                                   <h3 className="font-bold text-indigo-800 capitalize">{key.replace(/_/g, ' ')}</h3>
                                   <p className="text-gray-700 mt-1">{Array.isArray(value) ? value.join(', ') : value}</p>
                               </div>
                           ))}
                        </div>
                         <button onClick={() => dispatch({ type: 'SET_SCREEN', payload: Screen.Home })} className="mt-8 w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
                            Concluir e Voltar para a Jornada
                        </button>
                    </div>
                );
            case 'questions':
            default:
                const currentQuestion = STEP2_QUESTIONS[currentQuestionIndex];
                const isLastQuestion = currentQuestionIndex === STEP2_QUESTIONS.length - 1;
                return (
                    <div className="space-y-6">
                        <div>
                            <label className="text-lg font-semibold text-slate-800 mb-2 block">{currentQuestion.text}</label>
                            <textarea
                                value={answers[currentQuestion.id] || ''}
                                onChange={(e) => setAnswers(prev => ({...prev, [currentQuestion.id]: e.target.value}))}
                                rows={5}
                                className="w-full p-3 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                                placeholder="Seja detalhado em sua resposta..."
                            />
                        </div>
                        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                           <button
                                onClick={handleExit}
                                className="text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Sair da Etapa
                            </button>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentQuestionIndex === 0}
                                    className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
                                    aria-label="Pergunta Anterior"
                                >
                                    <Icon svg={ICONS.chevronLeft} className="w-5 h-5 text-gray-700" />
                                </button>

                                <span className="text-sm font-semibold text-gray-600">{currentQuestionIndex + 1} / {STEP2_QUESTIONS.length}</span>

                                {isLastQuestion ? (
                                     <button
                                        onClick={handleNext}
                                        disabled={!answers[currentQuestion.id]}
                                        className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        Gerar Espelho <Icon svg={ICONS.puzzle} className="w-5 h-5"/>
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleNext}
                                        disabled={!answers[currentQuestion.id]}
                                        className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
                                        aria-label="Próxima Pergunta"
                                    >
                                        <Icon svg={ICONS.chevronRight} className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <StepScreen title="Etapa 2 – Quem é você?" description="Uma profunda análise do seu perfil e essência para revelar seus padrões.">
            {renderContent()}
        </StepScreen>
    );
};

export default Step2Screen;
```

---

## `screens/AiChatScreen.tsx`

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import { ICONS } from '../constants';
import { GoogleGenAI } from "@google/genai";
import type { Chat } from "@google/genai";
import { fetchFromWebhook } from '../services/n8nService';
import { WebhookEvent } from '../types';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const API_KEY = process.env.API_KEY;

const AiChatScreen: React.FC = () => {
  const { state } = useApp();
  const { currentUser, isGeminiEnabled, customWebhooks } = state;

  const [messages, setMessages] = useState<Message[]>([
      { text: "Olá! Como posso te ajudar a avançar na sua jornada hoje?", sender: 'ai'}
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isGeminiEnabled) {
      chatRef.current = null;
      return;
    }

    if (!API_KEY) {
        console.error("Gemini API key is not set.");
        if (messages.length < 2) {
           setMessages(prev => [...prev, { text: "A chave da API Gemini não está configurada. Por favor, adicione a variável de ambiente API_KEY ou desative a API Gemini nos Ajustes para usar um webhook.", sender: 'ai' }]);
        }
        return;
    }
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const essentialMirrorSummary = currentUser?.journeyProgress.step2?.essentialMirror 
      ? `Resumo do usuário: ${JSON.stringify(currentUser.journeyProgress.step2.essentialMirror)}` 
      : 'O usuário ainda não completou a Etapa 2.';

    chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `Você é um assistente de IA para o aplicativo Smart Mind. Seu objetivo é ajudar o usuário em sua jornada de autodesenvolvimento. Seja encorajador, perspicaz e prático. Use o Espelho Essencial do usuário para personalizar suas respostas. ${essentialMirrorSummary}`,
        },
    });

  }, [currentUser, isGeminiEnabled]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    const conversationHistory = [...messages];

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
    }
    setIsLoading(true);
    
    try {
      let aiResponseText: string | null = null;
      if (isGeminiEnabled) {
        if (!chatRef.current) {
          throw new Error('A sessão de chat Gemini não foi iniciada. Verifique a configuração da chave de API.');
        }
        const response = await chatRef.current.sendMessage({ message: currentInput });
        aiResponseText = response.text;
      } else {
        // Find the user-configured webhook for AI Chat
        const aiWebhook = customWebhooks.find(wh => wh.event === WebhookEvent.AiChat);
        
        if (!aiWebhook || !aiWebhook.url) {
            aiResponseText = "O webhook para o Chat IA não está configurado. Por favor, vá em 'Ajustes' e crie um webhook com a fonte de dados 'Chat IA'.";
        } else {
            const essentialMirror = currentUser?.journeyProgress.step2?.essentialMirror;
            aiResponseText = await fetchFromWebhook(aiWebhook.url, {
                mensagem: currentInput,
                historico: conversationHistory,
                perfilEssencial: essentialMirror,
                usuario: {
                    'ID do Usuário': currentUser?.id,
                    'NomeUsuario': currentUser?.name,
                    'E-mail': currentUser?.email
                },
                DataHora: new Date().toISOString()
            });
        }
      }

      if (aiResponseText) {
        const aiMessage: Message = { text: aiResponseText, sender: 'ai' };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error("A IA não retornou uma resposta válida.");
      }

    } catch (error) {
      console.error("Error with AI chat:", error);
      const errorMessageText = error instanceof Error ? error.message : 'Desculpe, ocorreu um erro desconhecido.';
      const errorMessage: Message = { text: errorMessageText, sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      <div className="flex-grow bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 overflow-y-auto" aria-live="polite">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
               {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                    IA
                  </div>
                )}
              <div className={`max-w-lg px-4 py-2 rounded-xl whitespace-pre-wrap break-words ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                    IA
                  </div>
                <div className="bg-gray-200 dark:bg-slate-700 px-4 py-3 rounded-xl">
                    <div className="flex items-center justify-center space-x-1">
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
          )}
           <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="mt-2">
        <div className="relative flex items-end">
            <textarea
                ref={textAreaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
                placeholder="Digite sua mensagem..."
                className="w-full p-3 pr-12 text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none leading-tight"
                disabled={isLoading}
                rows={1}
                style={{maxHeight: '120px'}}
                onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
                }}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 bottom-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              aria-label="Enviar mensagem"
            >
              <Icon svg={ICONS.send} className="w-5 h-5" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default AiChatScreen;
```

---

## `screens/UserManagementScreen.tsx`

```tsx
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import { ICONS } from '../constants';
import Modal from '../components/Modal';
import { User } from '../types';

const UserManagementScreen: React.FC = () => {
  const { state, dispatch } = useApp();
  const { users, currentUser } = state;
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  
  const isAdmin = currentUser?.isAdmin;

  const openDeleteModal = (user: User) => {
    if (user.id === currentUser?.id) {
        alert("Você não pode apagar o usuário logado.");
        return;
    }
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  }

  const closeDeleteModal = () => {
    setUserToDelete(null);
    setIsDeleteModalOpen(false);
  }

  const confirmDelete = () => {
    if (userToDelete) {
        dispatch({ type: 'DELETE_USER', payload: userToDelete.id });
    }
    closeDeleteModal();
  }

  return (
    <>
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-lg font-semibold text-slate-700 mb-1">Gerenciar Usuários</h2>
          <p className="text-xs text-gray-500 mb-4">Mini banco de dados de usuários. Máximo de 5 usuários salvos.</p>
          
          {/* Mobile View: Cards */}
          <div className="md:hidden space-y-3">
            {users.map(user => (
              <div key={user.id} className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold text-slate-800">{user.name} {user.id === currentUser?.id && <span className="text-xs text-indigo-500">(Você)</span>}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                {isAdmin && (
                  <button
                      onClick={() => openDeleteModal(user)}
                      className="p-2 text-red-500 hover:bg-red-100 rounded-full transition"
                      title="Apagar usuário"
                  >
                      <Icon svg={ICONS.trash} className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Desktop View: Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase tracking-wider">Nome</th>
                  <th className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                  {isAdmin && <th className="px-4 py-2 text-sm font-semibold text-gray-600 uppercase tracking-wider text-right">Ações</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-slate-800 font-medium">{user.name} {user.id === currentUser?.id && '(Você)'}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-600">{user.email}</td>
                    {isAdmin && (
                      <td className="px-4 py-3 whitespace-nowrap text-right">
                          <button
                          onClick={() => openDeleteModal(user)}
                          className="p-2 text-red-500 hover:bg-red-100 rounded-full transition"
                          title="Apagar usuário"
                          >
                          <Icon svg={ICONS.trash} className="w-5 h-5" />
                          </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {users.length === 0 && (
              <p className="text-center text-gray-500 py-8">Nenhum usuário cadastrado.</p>
          )}
        </div>
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        title="Confirmar Exclusão de Usuário"
      >
        <p className="text-gray-600 mb-6">Tem certeza que deseja apagar o usuário <span className="font-bold">{userToDelete?.name}</span>? Todos os seus dados serão perdidos.</p>
        <div className="flex justify-end gap-4">
          <button onClick={closeDeleteModal} className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">
            Não
          </button>
          <button onClick={confirmDelete} className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
            Sim
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UserManagementScreen;
```

---

## `screens/NotificationsScreen.tsx`

```tsx
// This file is intentionally left empty. 
// Notifications are handled by the slide-in NotificationsPanel component.
```

---

## `screens/CalendarScreen.tsx`

```tsx
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Screen, Goal } from '../types';
import Icon from '../components/Icon';
import { ICONS } from '../constants';
import Modal from '../components/Modal';

const PendingGoalCard: React.FC<{ goal: Goal, onDeleteClick: (goal: Goal) => void }> = ({ goal, onDeleteClick }) => {
    const { dispatch } = useApp();

    const handleEdit = () => {
        dispatch({ type: 'SET_EDITING_GOAL', payload: goal.id });
    }

    const handleComplete = () => {
        dispatch({ type: 'MARK_GOAL_COMPLETED', payload: goal.id });
        dispatch({ type: 'ADD_NOTIFICATION', payload: { message: `Parabéns por concluir a meta "${goal.title}"!` } });
    }

    return (
        <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-bold text-indigo-800">{goal.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
                </div>
                <div className="flex items-center space-x-1 ml-2">
                    <button onClick={handleEdit} className="p-1.5 text-slate-600 hover:bg-slate-200 rounded-full transition"><Icon svg={ICONS.settings} className="w-5 h-5" /></button>
                    <button onClick={() => onDeleteClick(goal)} className="p-1.5 text-red-500 hover:bg-red-100 rounded-full transition"><Icon svg={ICONS.trash} className="w-5 h-5" /></button>
                </div>
            </div>
            <p className="text-xs text-indigo-500 font-semibold mt-2">{new Date(goal.dateTime).toLocaleString()}</p>
            <button
                onClick={handleComplete}
                className="mt-3 w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
            >
                <Icon svg={ICONS.check} className="w-5 h-5 mr-2" />
                CONCLUÍDA
            </button>
        </div>
    );
};


const CalendarScreen: React.FC = () => {
  const { state, dispatch } = useApp();
  const goals = state.currentUser?.goals || [];

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState<Goal | null>(null);

  const pendingGoals = goals.filter(g => g.status === 'pending').sort((a,b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
  const completedGoals = goals.filter(g => g.status === 'completed').sort((a,b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

  const openDeleteModal = (goal: Goal) => {
    setGoalToDelete(goal);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setGoalToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const confirmDelete = () => {
    if (goalToDelete) {
        dispatch({ type: 'DELETE_GOAL', payload: goalToDelete.id });
        dispatch({ type: 'ADD_NOTIFICATION', payload: { message: `Meta "${goalToDelete.title}" apagada.` } });
    }
    closeDeleteModal();
  };

  return (
    <>
      <div className="p-4">
          <button 
              onClick={() => dispatch({ type: 'SET_SCREEN', payload: Screen.NewGoal })}
              className="w-full mb-4 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center shadow-md"
          >
              <Icon svg={ICONS.plus} className="w-5 h-5 mr-2" />
              Criar Nova Meta
          </button>

          <p className="text-xs text-center text-gray-500 mb-4 p-2 bg-yellow-100 border border-yellow-200 rounded-md">Integração com Google Calendar é simulada. As metas são salvas localmente.</p>
          
          <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-4">
                  <h2 className="text-lg font-semibold text-slate-700 border-b pb-2 mb-4">Metas Futuras</h2>
                  <div className="space-y-3">
                      {pendingGoals.length > 0 ? pendingGoals.map(goal => (
                          <PendingGoalCard key={goal.id} goal={goal} onDeleteClick={openDeleteModal} />
                      )) : <p className="text-gray-500 text-sm p-4 text-center">Nenhuma meta futura agendada.</p>}
                  </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4">
                  <h2 className="text-lg font-semibold text-slate-700 border-b pb-2 mb-4">Metas Realizadas</h2>
                  <div className="space-y-3">
                      {completedGoals.length > 0 ? completedGoals.map(goal => (
                          <div key={goal.id} className="p-3 bg-green-50 rounded-lg opacity-70">
                              <p className="font-bold text-green-800 line-through">{goal.title}</p>
                              <p className="text-sm text-gray-600">{goal.description}</p>
                              <p className="text-xs text-green-500 font-semibold mt-2">Concluída em: {new Date(goal.dateTime).toLocaleString()}</p>
                          </div>
                      )) : <p className="text-gray-500 text-sm p-4 text-center">Nenhuma meta realizada ainda.</p>}
                  </div>
              </div>
          </div>
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        title="Confirmar Exclusão"
      >
        <p className="text-gray-600 mb-6">Tem certeza que deseja apagar a meta "{goalToDelete?.title}"?</p>
        <div className="flex justify-end gap-4">
          <button onClick={closeDeleteModal} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">
            Não
          </button>
          <button onClick={confirmDelete} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
            Sim, Excluir
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CalendarScreen;
```

---

## `screens/NewGoalScreen.tsx`

```tsx
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Screen, Goal } from '../types';

const NewGoalScreen: React.FC = () => {
  const { dispatch } = useApp();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    const titleIsEmpty = !title.trim();
    const dateTimeIsEmpty = !dateTime;

    const selectedDate = dateTime ? new Date(dateTime) : null;
    const now = new Date();
    // Compare date and time without seconds/milliseconds for a fair comparison,
    // as datetime-local input only has minute precision.
    now.setSeconds(0, 0);

    const isDateTimeInPast = selectedDate && selectedDate.getTime() < now.getTime();
    const isDateTimeInPresent = selectedDate && selectedDate.getTime() === now.getTime();

    if (titleIsEmpty && isDateTimeInPast) {
      setError('Título obrigatório e Data/Hora não podem estar no passado.');
      return;
    }
    if (titleIsEmpty && dateTimeIsEmpty) {
      setError('Título e Data/Hora são obrigatórios.');
      return;
    }
    if (titleIsEmpty) {
      setError('Título obrigatório.');
      return;
    }
    if (dateTimeIsEmpty) {
      setError('A Data/Hora da meta é obrigatória.');
      return;
    }
    if (isDateTimeInPast) {
      setError('A Data/Hora não pode estar no passado.');
      return;
    }
    if (isDateTimeInPresent) {
      setError('A Data/Hora não pode estar no presente.');
      return;
    }

    setError('');

    const newGoal: Goal = {
      id: new Date().toISOString(),
      title,
      description,
      dateTime,
      status: 'pending',
    };

    dispatch({ type: 'ADD_GOAL', payload: newGoal });
    dispatch({ type: 'ADD_NOTIFICATION', payload: { message: `Nova meta criada: ${title}` } });
    
    // Here you would call the Google Calendar API via webhook/service
    // sendToWebhook(state.webhooks.googleCalendar, newGoal);
    
    dispatch({ type: 'SET_SCREEN', payload: Screen.Calendar });
  };

  return (
    <div className="p-4">
      <div className="w-full mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Criar Nova Meta</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm font-bold text-gray-700">Nome da Meta</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mt-1 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
              placeholder="Ex: Concluir relatório"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-bold text-gray-700">Descrição (Opcional)</label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-1 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
              placeholder="Detalhes adicionais sobre a meta"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 cursor-pointer">
              Data/Hora
              <input
                id="dateTime"
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="w-full p-3 mt-1 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
              />
            </label>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            onClick={handleSave}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Salvar Meta
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewGoalScreen;
```

---

## `screens/SettingsScreen.tsx`

```tsx
import React from 'react';
import { useApp } from '../context/AppContext';
import { Webhook, WebhookEvent } from '../types';
import Icon from '../components/Icon';
import { ICONS } from '../constants';

const WebhookCard: React.FC<{
  webhook: Webhook;
  onUpdate: (webhook: Webhook) => void;
  onDelete: (id: string) => void;
}> = ({ webhook, onUpdate, onDelete }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-4">
        <div className="flex justify-between items-start">
            <input
              type="text"
              value={webhook.name}
              onChange={(e) => onUpdate({ ...webhook, name: e.target.value })}
              className="font-bold text-slate-800 bg-transparent text-lg w-full -ml-1 p-1 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-400"
              placeholder="Nome do Webhook"
            />
            <button
                onClick={() => onDelete(webhook.id)}
                className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors flex-shrink-0 ml-2"
                aria-label="Apagar Webhook"
            >
                <Icon svg={ICONS.trash} className="w-5 h-5" />
            </button>
        </div>
      <div>
        <label className="text-sm font-bold text-gray-700">URL</label>
        <input
          type="url"
          value={webhook.url}
          onChange={(e) => onUpdate({ ...webhook, url: e.target.value })}
          className="w-full p-3 mt-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="https://seu-servico.com/webhook"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-gray-700">Fonte dos Dados (Gatilho)</label>
        <select
          value={webhook.event}
          onChange={(e) => onUpdate({ ...webhook, event: e.target.value as WebhookEvent })}
          className="w-full p-3 mt-1 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {Object.values(WebhookEvent).map(event => (
            <option key={event} value={event}>{event}</option>
          ))}
        </select>
      </div>
    </div>
  );
};


const SettingsScreen: React.FC = () => {
  const { state, dispatch } = useApp();
  const { customWebhooks, isGeminiEnabled } = state;

  const handleToggleGemini = () => {
    dispatch({ type: 'TOGGLE_GEMINI_API' });
  };
  
  const handleAddWebhook = () => dispatch({ type: 'ADD_WEBHOOK' });
  const handleUpdateWebhook = (webhook: Webhook) => dispatch({ type: 'UPDATE_WEBHOOK', payload: webhook });
  const handleDeleteWebhook = (id: string) => dispatch({ type: 'DELETE_WEBHOOK', payload: id });

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Configurações</h1>
      
       <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-slate-700 mb-2">Fonte da IA para o Chat</h2>
        <p className="text-sm text-gray-500 mb-4">
          Ative para usar a API do Google Gemini. Desative para usar um webhook customizado com a fonte de dados "Chat IA".
        </p>
        <label htmlFor="gemini-toggle" className="flex items-center cursor-pointer p-2 -ml-2">
          <div className="relative">
            <input id="gemini-toggle" type="checkbox" className="sr-only" checked={isGeminiEnabled} onChange={handleToggleGemini} />
            <div className={`block w-14 h-8 rounded-full transition-colors ${isGeminiEnabled ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transition-transform transform ${isGeminiEnabled ? 'translate-x-6' : ''}`}></div>
          </div>
          <div className="ml-4">
              <span className="text-base font-medium text-slate-800">Usar API Gemini</span>
              <p className={`text-xs font-bold ${isGeminiEnabled ? 'text-indigo-600' : 'text-gray-500'}`}>{isGeminiEnabled ? 'Ativado' : 'Desativado'}</p>
          </div>
        </label>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2 className="text-xl font-semibold text-slate-700">Pontes de Conexão (Webhooks)</h2>
                <p className="text-sm text-gray-500 mt-1">Conecte eventos do aplicativo a URLs externas (ex: n8n).</p>
            </div>
             <button
                onClick={handleAddWebhook}
                className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
              >
                <Icon svg={ICONS.plus} className="w-5 h-5"/>
                Criar
              </button>
        </div>
        
        <div className="space-y-6">
          {customWebhooks.length > 0 ? (
            customWebhooks.map(webhook => (
              <WebhookCard
                key={webhook.id}
                webhook={webhook}
                onUpdate={handleUpdateWebhook}
                onDelete={handleDeleteWebhook}
              />
            ))
          ) : (
            <div className="text-center py-8 px-4 border-2 border-dashed border-gray-300 rounded-xl">
                <p className="text-gray-500">Nenhuma ponte de conexão criada.</p>
                <p className="text-sm text-gray-400 mt-1">Clique em "Criar" para começar.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
```

---

## `App.tsx`

```tsx
import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { Screen } from './types';

// Core Components
import SideMenu from './components/SideMenu';
import TopBar from './components/TopBar';
import BottomNavBar from './components/BottomNavBar';
import AIChatFab from './components/AIChatFab';
import NotificationsPanel from './components/NotificationsPanel';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Step1Screen from './screens/Step1Screen';
import Step2Screen from './screens/Step2Screen';
import AiChatScreen from './screens/AiChatScreen';
import UserManagementScreen from './screens/UserManagementScreen';
import CalendarScreen from './screens/CalendarScreen';
import NewGoalScreen from './screens/NewGoalScreen';
import EditGoalScreen from './screens/EditGoalScreen';
import SettingsScreen from './screens/SettingsScreen';
import CameraScreen from './screens/CameraScreen';
import PuzzleScreen from './screens/PuzzleScreen';
import GraphsScreen from './screens/GraphsScreen';
import KanbanBoard from './kanban/KanbanBoard';

const App: React.FC = () => {
  const { state, dispatch } = useApp();
  const { currentUser, currentScreen } = state;
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isNotificationsPanelOpen, setIsNotificationsPanelOpen] = useState(false);

  const renderScreen = () => {
    // Placeholder screens for steps 3-8
    const UnimplementedStepScreen = ({stepNumber}: {stepNumber: number}) => (
        <div className="p-4 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">Etapa {stepNumber}</h1>
                <p className="text-gray-600 mt-2">Esta etapa da jornada ainda está em desenvolvimento.</p>
                <button onClick={() => dispatch({type: 'SET_SCREEN', payload: Screen.Home})} className="mt-6 bg-indigo-500 text-white font-bold py-2 px-4 rounded">
                  Voltar
                </button>
            </div>
        </div>
    );
    
    switch (currentScreen) {
      case Screen.Login:
        return <LoginScreen />;
      case Screen.Home:
        return <HomeScreen />;
      case Screen.Step1:
        return <Step1Screen />;
      case Screen.Step2:
        return <Step2Screen />;
      case Screen.Step3:
          return <UnimplementedStepScreen stepNumber={3} />;
      case Screen.Step4:
          return <UnimplementedStepScreen stepNumber={4} />;
      case Screen.Step5:
          return <UnimplementedStepScreen stepNumber={5} />;
      case Screen.Step6:
          return <UnimplementedStepScreen stepNumber={6} />;
      case Screen.Step7:
          return <UnimplementedStepScreen stepNumber={7} />;
      case Screen.Step8:
          return <UnimplementedStepScreen stepNumber={8} />;
      case Screen.AiChat:
        return <AiChatScreen />;
      case Screen.UserManagement:
        return <UserManagementScreen />;
      case Screen.Calendar:
        return <CalendarScreen />;
      case Screen.NewGoal:
        return <NewGoalScreen />;
      case Screen.EditGoal:
        return <EditGoalScreen />;
      case Screen.Settings:
        return <SettingsScreen />;
      case Screen.Camera:
        return <CameraScreen />;
      case Screen.Puzzle:
        return <PuzzleScreen />;
      case Screen.Graphs:
        return <GraphsScreen />;
      case Screen.Kanban:
        return <KanbanBoard />;
      default:
        // Screen.Notifications is handled by the panel, so default to Home.
        return <HomeScreen />;
    }
  };

  if (!currentUser) {
    return <LoginScreen />;
  }

  return (
    <div className="h-full w-full font-sans bg-gray-100">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
        <NotificationsPanel isOpen={isNotificationsPanelOpen} onClose={() => setIsNotificationsPanelOpen(false)} />
        
        <div className="flex flex-col h-full">
            <TopBar 
              onMenuClick={() => setIsSideMenuOpen(true)}
              onNotificationsClick={() => setIsNotificationsPanelOpen(prev => !prev)} 
            />
            
            <main className="flex-1 overflow-y-auto pb-24 pt-16">
                {renderScreen()}
            </main>
            
            <AIChatFab />
            <BottomNavBar />
        </div>
    </div>
  );
};

export default App;
```

---

## `components/TopBar.tsx`

```tsx
import React from 'react';
import { useApp } from '../context/AppContext';
import { Screen } from '../types';
import Icon from './Icon';
import { ICONS } from '../constants';

interface TopBarProps {
    onMenuClick: () => void;
    onNotificationsClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick, onNotificationsClick }) => {
    const { state } = useApp();
    const { currentUser } = state;

    const unreadCount = currentUser?.notifications.filter(n => !n.read).length || 0;

    const getScreenTitle = () => {
        const screen = state.currentScreen;
        switch(screen) {
            case Screen.Home: return "Jornada";
            case Screen.Calendar: return "Metas";
            case Screen.NewGoal: return "Nova Meta";
            case Screen.EditGoal: return "Editar Meta";
            case Screen.Puzzle: return "Perguntas";
            case Screen.Settings: return "Configurações";
            case Screen.Camera: return "Mídia";
            case Screen.UserManagement: return "Usuários";
            case Screen.Graphs: return "Gráficos";
            case Screen.AiChat: return "Chat IA";
            case Screen.Kanban: return "Kanban";
            // Screen.Notifications is now a panel, so no title needed here
            default: return "SMART MIND";
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-30 flex items-center justify-between px-4">
            <button onClick={onMenuClick} className="p-2 text-slate-600 hover:text-indigo-500">
                <Icon svg={ICONS.menu} className="w-6 h-6" />
            </button>

            <h1 className="text-lg font-bold text-slate-800">{getScreenTitle()}</h1>

            <button onClick={onNotificationsClick} className="p-2 relative text-slate-600 hover:text-indigo-500">
                <Icon svg={ICONS.bell} className="w-6 h-6" />
                {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 block w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                        {unreadCount}
                    </span>
                )}
            </button>
        </header>
    );
}

export default TopBar;
```

---

## `components/BottomNavBar.tsx`

```tsx
import React from 'react';
import { useApp } from '../context/AppContext';
import { Screen } from '../types';
import Icon from './Icon';
import { ICONS } from '../constants';

const NavItem: React.FC<{ screen: Screen, icon: React.ReactNode, label: string }> = ({ screen, icon, label }) => {
    const { state, dispatch } = useApp();
    const isActive = state.currentScreen === screen;
    const color = isActive ? 'text-indigo-600' : 'text-gray-500';

    return (
        <button
            onClick={() => dispatch({ type: 'SET_SCREEN', payload: screen })}
            className="flex flex-col items-center justify-center w-full h-full"
        >
            <Icon svg={icon} className={`w-6 h-6 mb-1 transition-colors ${color}`} />
            <span className={`text-xs transition-colors ${color}`}>{label}</span>
        </button>
    );
};

const CenterNavItem: React.FC<{ screen: Screen, icon: React.ReactNode }> = ({ screen, icon }) => {
    const { dispatch } = useApp();
    
    return (
         <button
            onClick={() => dispatch({ type: 'SET_SCREEN', payload: screen })}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 transition"
        >
            <Icon svg={icon} className="w-8 h-8" />
        </button>
    );
};


const BottomNavBar: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 h-20 bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.05)] z-30">
            <div className="flex justify-around items-center h-full w-full relative">
                <NavItem screen={Screen.Calendar} icon={ICONS.calendar} label="Metas" />
                <NavItem screen={Screen.Camera} icon={ICONS.camera} label="Mídia" />
                <div className="w-16 h-16"> {/* Spacer for center button */}
                     <CenterNavItem screen={Screen.Home} icon={ICONS.home} />
                </div>
                <NavItem screen={Screen.Puzzle} icon={ICONS.puzzle} label="Perguntas" />
                <NavItem screen={Screen.Settings} icon={ICONS.settings} label="Ajustes" />
            </div>
        </footer>
    );
};

export default BottomNavBar;
```

---

## `components/AIChatFab.tsx`

```tsx
import React from 'react';
import { useApp } from '../context/AppContext';
import { Screen } from '../types';
import Icon from './Icon';
import { ICONS } from '../constants';

const AIChatFab: React.FC = () => {
    const { state, dispatch } = useApp();

    // Do not show on the chat screen itself or on the login page
    if (state.currentScreen === Screen.AiChat || !state.currentUser) {
        return null;
    }

    return (
        <button
            onClick={() => dispatch({ type: 'SET_SCREEN', payload: Screen.AiChat })}
            className="fixed bottom-24 right-4 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition z-40 border-2 border-indigo-200"
            aria-label="Open AI Chat"
        >
            <Icon svg={ICONS.chat} className="w-8 h-8" />
        </button>
    );
};

export default AIChatFab;
```

---

## `screens/CameraScreen.tsx`

```tsx
import React from 'react';
import Icon from '../components/Icon';
import { ICONS } from '../constants';

const CameraScreen: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center text-center">
        <div className="bg-white p-8 rounded-xl shadow-md">
            <Icon svg={ICONS.camera} className="w-16 h-16 mx-auto text-indigo-500" />
            <h1 className="text-2xl font-bold text-slate-800 mt-4">Carregar Mídia</h1>
            <p className="text-gray-600 mt-2 max-w-sm">
                Esta área é para fazer o upload de fotos e vídeos. A funcionalidade de edição e retorno do vídeo será implementada em breve.
            </p>
            <button className="mt-6 w-full bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-600 transition">
                Selecionar Arquivos
            </button>
        </div>
    </div>
  );
};

export default CameraScreen;
```

---

## `screens/PuzzleScreen.tsx`

```tsx
import React from 'react';
import Icon from '../components/Icon';
import { ICONS } from '../constants';

const PuzzleScreen: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center text-center">
        <div className="bg-white p-8 rounded-xl shadow-md">
            <Icon svg={ICONS.puzzle} className="w-16 h-16 mx-auto text-indigo-500" />
            <h1 className="text-2xl font-bold text-slate-800 mt-4">Perguntas de Acompanhamento</h1>
            <p className="text-gray-600 mt-2 max-w-sm">
                Em breve, o sistema fará perguntas aqui para entender seu progresso, verificar se as metas foram cumpridas e o que você aprendeu com elas.
            </p>
             <button className="mt-6 w-full bg-gray-300 text-gray-500 font-bold py-3 px-4 rounded-lg cursor-not-allowed">
                Indisponível
            </button>
        </div>
    </div>
  );
};

export default PuzzleScreen;
```

---

## `screens/GraphsScreen.tsx`

```tsx
import React from 'react';
import Icon from '../components/Icon';
import { ICONS } from '../constants';

const GraphsScreen: React.FC = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center text-center">
        <div className="bg-white p-8 rounded-xl shadow-md">
            <Icon svg={ICONS.chart} className="w-16 h-16 mx-auto text-indigo-500" />
            <h1 className="text-2xl font-bold text-slate-800 mt-4">Visualização de Gráficos</h1>
            <p className="text-gray-600 mt-2 max-w-sm">
                Esta funcionalidade está em desenvolvimento. Em breve, você poderá visualizar seus gráficos de progresso e gerar novos relatórios aqui.
            </p>
            <button className="mt-6 w-full bg-gray-300 text-gray-500 font-bold py-3 px-4 rounded-lg cursor-not-allowed">
                Indisponível
            </button>
        </div>
    </div>
  );
};

export default GraphsScreen;
```

---

## `screens/EditGoalScreen.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Screen, Goal } from '../types';

const EditGoalScreen: React.FC = () => {
  const { state, dispatch } = useApp();
  const { editingGoalId, currentUser } = state;
  
  const goalToEdit = currentUser?.goals.find(g => g.id === editingGoalId);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (goalToEdit) {
      setTitle(goalToEdit.title);
      setDescription(goalToEdit.description);
      // Format dateTime for the input field
      const date = new Date(goalToEdit.dateTime);
      const formattedDateTime = date.toISOString().slice(0, 16);
      setDateTime(formattedDateTime);
    } else {
      // If no goal is found (e.g., on page refresh), navigate back
      dispatch({ type: 'SET_SCREEN', payload: Screen.Calendar });
    }
  }, [goalToEdit, dispatch]);

  const handleSave = () => {
    if (!goalToEdit) {
        setError('Ocorreu um erro. A meta não foi encontrada.');
        return;
    }

    const titleIsEmpty = !title.trim();
    const dateTimeIsEmpty = !dateTime;

    const selectedDate = dateTime ? new Date(dateTime) : null;
    const now = new Date();
    // Compare date and time without seconds/milliseconds for a fair comparison,
    // as datetime-local input only has minute precision.
    now.setSeconds(0, 0);

    const isDateTimeInPast = selectedDate && selectedDate.getTime() < now.getTime();
    const isDateTimeInPresent = selectedDate && selectedDate.getTime() === now.getTime();
    
    if (titleIsEmpty && isDateTimeInPast) {
      setError('Título obrigatório e Data/Hora não podem estar no passado.');
      return;
    }
    if (titleIsEmpty && dateTimeIsEmpty) {
      setError('Título e Data/Hora são obrigatórios.');
      return;
    }
    if (titleIsEmpty) {
      setError('Título obrigatório.');
      return;
    }
    if (dateTimeIsEmpty) {
      setError('A Data/Hora da meta é obrigatória.');
      return;
    }
    if (isDateTimeInPast) {
      setError('A Data/Hora não pode estar no passado.');
      return;
    }
    if (isDateTimeInPresent) {
      setError('A Data/Hora não pode estar no presente.');
      return;
    }

    setError('');

    const updatedGoal: Goal = {
      ...goalToEdit,
      title,
      description,
      dateTime,
    };

    dispatch({ type: 'EDIT_GOAL', payload: updatedGoal });
    dispatch({ type: 'ADD_NOTIFICATION', payload: { message: `Meta atualizada: ${title}` } });
  };

  if (!goalToEdit) {
    return (
        <div className="p-4 text-center">
            <p>Carregando meta...</p>
        </div>
    );
  }

  return (
    <div className="p-4">
      <div className="w-full mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Editar Meta</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm font-bold text-gray-700">Nome da Meta</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 mt-1 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-sm font-bold text-gray-700">Descrição (Opcional)</label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-1 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>
          <div>
             <label className="block text-sm font-bold text-gray-700 cursor-pointer">
              Data/Hora
              <input
                id="dateTime"
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="w-full p-3 mt-1 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
              />
            </label>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex gap-4">
            <button
                onClick={() => dispatch({ type: 'SET_SCREEN', payload: Screen.Calendar })}
                className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition"
            >
                Cancelar
            </button>
            <button
                onClick={handleSave}
                className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition"
            >
                Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGoalScreen;
```

---

## `components/Modal.tsx`

```tsx
import React, { useEffect } from 'react';
import Icon from './Icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-800">
             <Icon svg={<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />} className="w-6 h-6" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
```

---

## `components/NotificationsPanel.tsx`

```tsx
import React from 'react';
import { useApp } from '../context/AppContext';
import Icon from './Icon';
import { ICONS } from '../constants';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, onClose }) => {
    const { state, dispatch } = useApp();
    const notifications = state.currentUser?.notifications || [];

    return (
    <>
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        ></div>
        <div 
            className={`fixed top-0 right-0 w-80 max-w-[90%] bg-white h-full z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-slate-800">Notificações</h2>
            </div>

            <div className="flex-grow overflow-y-auto">
                 <ul className="divide-y divide-gray-100">
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                        <li
                            key={notification.id}
                            className={`p-4 flex items-start justify-between transition-colors duration-200 ${
                            notification.read ? 'bg-gray-50' : 'hover:bg-gray-100'
                            }`}
                        >
                            <div className="flex items-start">
                            <div className={`w-2 h-2 mt-1.5 rounded-full mr-3 flex-shrink-0 ${notification.read ? 'bg-gray-300' : 'bg-indigo-500'}`}></div>
                            <p className={`text-sm ${notification.read ? 'text-gray-500' : 'text-slate-800'}`}>{notification.message}</p>
                            </div>
                            {!notification.read && (
                            <button
                                onClick={() => dispatch({ type: 'MARK_NOTIFICATION_READ', payload: notification.id })}
                                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 ml-2 flex-shrink-0"
                            >
                                Lida
                            </button>
                            )}
                        </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 p-8">Nenhuma notificação.</p>
                    )}
                    </ul>
            </div>
        </div>
    </>
    );
};

export default NotificationsPanel;
```

---

## `README.md`

```md
# Smart Mind - Personal Development Journey

**Smart Mind** is a comprehensive web application designed to guide users on a structured journey of self-discovery, goal setting, and personal growth. It combines psychological principles with modern technology, including AI assistance and external service integrations, to create a deeply personalized experience.

---

## 🚀 Overview

The application is built around a core concept called "The Journey," an 8-step program that helps users define their life objectives, understand their core personality, and build a plan for the future. With an integrated AI chat, goal management system, and powerful webhook capabilities, Smart Mind is more than just a note-taking app—it's an interactive partner for personal transformation.

---

## ✨ Core Features

### 1. The Journey
The heart of the application is a structured, 8-step program for personal and professional growth.

- **Sequential Progress:** Steps are unlocked one by one as the user completes them, ensuring a structured progression.
- **Progress Bar:** A visual progress bar on the home screen shows the user's overall completion percentage of the journey.
- **Step 1: Life Goals Definition:** A guided questionnaire to help users define their objectives across key life areas: finance, career, health, and relationships.
- **Step 2: Profile & Essence Analysis:** A series of introspective questions about the user's past, present, and core values.
- **Essential Mirror (IA-Powered):** After completing Step 2, the application uses the **Google Gemini API** to analyze the user's answers and generate a detailed personality profile. This "Essential Mirror" includes:
    - Temperament (e.g., Choleric, Sanguine)
    - Central Personality Trait
    - Virtues & Weaknesses
    - Predominant Emotional Vice
    - Core Fears & Desires
    - Self-Image Distortions & Central Beliefs
- **Future Steps (3-8):** These are currently placeholders for upcoming modules on professional skills, market analysis, personal branding, and more.

### 2. AI Chat Assistant
A conversational AI assistant is available to help the user at any point in their journey. It can be powered by two different sources, configurable in the settings:

- **Google Gemini API (Default):** Provides a rich, context-aware chat experience. It uses the user's "Essential Mirror" as a system instruction to offer highly personalized advice and encouragement.
- **Custom Webhook:** For advanced users, the AI chat can be routed to an external service (like a custom n8n workflow). The app sends the current conversation history, user profile, and Essential Mirror data to the specified URL.

### 3. Goal Management (Calendar)
A complete system for setting and tracking personal and professional goals.

- **CRUD Operations:** Users can Create, Read, Update, and Delete goals.
- **Detailed Goals:** Each goal includes a title, an optional description, and a specific date and time.
- **Status Tracking:** Goals can be marked as 'pending' or 'completed'. The UI separates these into "Future Goals" and "Accomplished Goals".
- **Notifications:** The user is notified when they create, update, or complete a goal.

### 4. Connectivity: Webhooks (Connection Bridges)
This powerful feature allows users to connect in-app events to external services (like Zapier, n8n, or custom servers).

- **Fully Configurable:** In the "Settings" screen, users can create multiple webhooks.
- **Supported Trigger Events:**
    - `New User`: Fires when a new account is created.
    - `Step 1 Completed`: Fires when the user submits their life goals.
    - `Step 2 Completed`: Fires when the user's answers are submitted (before the Essential Mirror is generated).
    - `AI Chat`: Used as the data source when the Gemini API is disabled.

### 5. User Management & Persistence
- **Simple Login/Creation:** Users log in or create an account using their email address.
- **Local Persistence:** The entire application state, including all users, progress, and goals, is saved in the browser's `localStorage`. This means your data is preserved between sessions on the same device.
- **Admin Role:** The user with the email `ronald.fregona31@gmail.com` is granted admin privileges, allowing them to delete other user profiles from the local database.
- **User Database:** The app locally stores a list of up to 5 recent user profiles.

### 6. Modern Mobile-First UI/UX
- **Responsive Design:** Optimized for a seamless experience on both mobile devices and desktops.
- **Intuitive Navigation:**
    - A **bottom navigation bar** provides quick access to core screens (Goals, Media, Home, Questions, Settings).
    - A **Floating Action Button (FAB)** offers instant access to the AI Chat.
    - A **side menu** contains secondary navigation items like User Management and Graphs.
    - **Slide-in panels** are used for non-disruptive components like Notifications.

---

## 🛠️ How to Use

#### Getting Started
1.  **Create an Account:** On the first screen, enter your name and email. An account will be created and saved locally.
2.  **Log In:** If you are a returning user, simply enter your email address to load your profile.

#### Navigating Your Journey
1.  **Start with Step 1:** From the "Jornada" (Home) screen, click the first unlocked step.
2.  **Answer the Questions:** Proceed through the questions. Your progress is saved as you go.
3.  **Generate Your Mirror:** Complete Step 2 to receive your unique AI-generated "Essential Mirror." This profile will be used to personalize your AI chat experience.

#### Setting Up Connections
1.  **Go to Settings:** Use the bottom navigation bar to go to "Ajustes" (Settings).
2.  **Configure AI Source:** Use the toggle to choose between the **Gemini API** (requires an `API_KEY`) or a **Custom Webhook** for the AI Chat.
3.  **Create a Webhook:**
    - Click "Criar" under "Pontes de Conexão".
    - Give your connection a descriptive name (e.g., "n8n - New User").
    - Paste the URL from your external service.
    - Select the "Fonte dos Dados" (Trigger Event) that should send data to this URL.

---

## 🔧 Technical Details

- **Frontend Stack:** React, TypeScript, Tailwind CSS
- **State Management:** React Context API combined with the `useReducer` hook for predictable state management.
- **AI Integration:** Official `@google/genai` SDK for interacting with the Gemini API.
- **Data Persistence:** The entire app state is serialized to JSON and stored in the browser's `localStorage`.
- **Architecture:** A modern, buildless setup using **ES Modules** and **import maps**, which allows the browser to handle dependencies directly without a bundling step.
```

---

## `kanban/types.ts`

```ts
// # types.ts - Centralized type definitions for the application

// # Enum for card priority levels
export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

// # Enum for webhook trigger events
export enum WebhookEvent {
  NEW_CARD = 'NewCard',
  CARD_MOVED = 'CardMoved',
  CARD_COMPLETED = 'CardCompleted',
  CARD_DELETED = 'CardDeleted',
}

// # Interface for a single Kanban card
export interface Card {
  id: string;
  title: string;
  description?: string;
  priority?: Priority;
  tags?: string[];
  date?: string; // # Added date field
}

// # Interface for a single Kanban column (Normalized)
export interface Column {
  id:string;
  title: string;
  cardIds: string[]; // Cards are now referenced by ID
  color: string;
}

// # Interface for a configured webhook
export interface Webhook {
  id: string;
  url: string;
}

// # The main state shape for the Kanban board (Normalized)
export interface KanbanState {
  cards: { [key: string]: Card };
  columns: { [key: string]: Column };
  columnOrder: string[];
  webhooks: Webhook[];
}

// # Discriminated union for all possible reducer actions
export type Action =
  | { type: 'LOAD_STATE'; payload: KanbanState }
  | { type: 'ADD_COLUMN'; payload: { column: Column } }
  | { type: 'UPDATE_COLUMN_TITLE'; payload: { columnId: string; title: string } }
  | { type: 'UPDATE_COLUMN_COLOR'; payload: { columnId: string; color: string } }
  | { type: 'DELETE_COLUMN'; payload: { columnId: string } }
  | { type: 'REORDER_COLUMNS'; payload: { newOrder: string[] } }
  | { type: 'ADD_CARD'; payload: { columnId: string; card: Card } }
  | { type: 'UPDATE_CARD'; payload: { cardId: string; updates: Partial<Card> } }
  | { type: 'DELETE_CARD'; payload: { cardId: string } }
  | { type: 'MOVE_CARD'; payload: { sourceColumnId: string; destColumnId: string; sourceIndex: number; destIndex: number; cardId: string } }
  | { type: 'ADD_WEBHOOK'; payload: Webhook }
  | { type: 'DELETE_WEBHOOK'; payload: { webhookId: string } };
```

---

## `kanban/constants.ts`

```ts
import { Column, KanbanState } from './types';

// # The key used to store the Kanban state in localStorage
export const LOCAL_STORAGE_KEY = 'rotinaKanbanState';

// # Colors to cycle through when creating new columns
export const COLUMN_COLORS = [
  '#FCE7F3', // pink-100
  '#E0E7FF', // indigo-100
  '#D1FAE5', // green-100
  '#FEF3C7', // amber-100
  '#E0F2FE', // sky-100
];

// # Default columns for a new board, matching the new prompt (Normalized)
const INITIAL_COLUMNS: { [key: string]: Column } = {
  'inbox': { id: 'inbox', title: 'Inbox', cardIds: [], color: '#F3F4F6' /* gray-100 */ },
  'col-1': { id: 'col-1', title: 'A Fazer', cardIds: [], color: '#FEF9C3' /* yellow-100 */ },
  'col-2': { id: 'col-2', title: 'Em Progresso', cardIds: [], color: '#D1FAE5' /* green-100 */ },
  'col-3': { id: 'col-3', title: 'Concluído', cardIds: [], color: '#FFFFFF' /* white */ },
};

// # The initial state of the entire application (Normalized)
export const INITIAL_STATE: KanbanState = {
  cards: {},
  columns: INITIAL_COLUMNS,
  webhooks: [],
  columnOrder: ['inbox', 'col-1', 'col-2', 'col-3'],
};
```

---

## `kanban/context/KanbanReducer.ts`

```ts
import { KanbanState, Action, Card, Column } from '../types';

// # The reducer function manages all state transitions for the Kanban board using a normalized state structure.
export const kanbanReducer = (state: KanbanState, action: Action): KanbanState => {
  switch (action.type) {
    // # Loads the entire state, usually from localStorage
    case 'LOAD_STATE':
      return action.payload;

    // # Adds a new column to the board
    case 'ADD_COLUMN': {
      const { column } = action.payload;
      return {
        ...state,
        columns: {
          ...state.columns,
          [column.id]: column,
        },
        columnOrder: [...state.columnOrder, column.id],
      };
    }
    
    // # Updates the title of an existing column
    case 'UPDATE_COLUMN_TITLE': {
      const { columnId, title } = action.payload;
      if (!state.columns[columnId]) return state;
      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: { ...state.columns[columnId], title },
        },
      };
    }
    
    // # Updates the color of an existing column
    case 'UPDATE_COLUMN_COLOR': {
      const { columnId, color } = action.payload;
      if (!state.columns[columnId]) return state;
      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: { ...state.columns[columnId], color },
        },
      };
    }

    // # Deletes a column and all its associated cards
    case 'DELETE_COLUMN': {
      const { columnId } = action.payload;
      const { [columnId]: deletedColumn, ...restOfColumns } = state.columns;
      if (!deletedColumn) return state;

      const cardIdsToDelete = new Set(deletedColumn.cardIds);
      const restOfCards = Object.entries(state.cards).reduce((acc, [cardId, card]) => {
        if (!cardIdsToDelete.has(cardId)) {
          acc[cardId] = card;
        }
        return acc;
      }, {} as { [key: string]: Card });

      return {
        ...state,
        columns: restOfColumns,
        cards: restOfCards,
        columnOrder: state.columnOrder.filter(id => id !== columnId),
      };
    }

    // # Reorders the columns on the board
    case 'REORDER_COLUMNS':
      return {
        ...state,
        columnOrder: action.payload.newOrder,
      };

    // # Adds a new card and associates it with a column
    case 'ADD_CARD': {
      const { columnId, card } = action.payload;
      const targetColumn = state.columns[columnId];
      if (!targetColumn) return state;

      return {
        ...state,
        cards: {
          ...state.cards,
          [card.id]: card,
        },
        columns: {
          ...state.columns,
          [columnId]: {
            ...targetColumn,
            cardIds: [...targetColumn.cardIds, card.id],
          },
        },
      };
    }
    
    // # Updates the details of an existing card
    case 'UPDATE_CARD': {
      const { cardId, updates } = action.payload;
      const card = state.cards[cardId];
      if (!card) return state;

      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: { ...card, ...updates },
        },
      };
    }

    // # Deletes a card from the board
    case 'DELETE_CARD': {
      const { cardId } = action.payload;
      const { [cardId]: deletedCard, ...restOfCards } = state.cards;

      if (!deletedCard) return state; // Card didn't exist anyway

      // Find which column has the card.
      const columnId = Object.keys(state.columns).find(id => state.columns[id].cardIds.includes(cardId));

      // If card is not in any column, just remove it from the cards object
      if (!columnId) {
        return {
          ...state,
          cards: restOfCards
        };
      }

      // If card is in a column, remove its ID from that column's cardIds array
      const sourceColumn = state.columns[columnId];
      const newCardIds = sourceColumn.cardIds.filter(id => id !== cardId);

      return {
        ...state,
        cards: restOfCards,
        columns: {
          ...state.columns,
          [columnId]: {
            ...sourceColumn,
            cardIds: newCardIds
          }
        }
      };
    }

    // # Moves a card between or within columns
    case 'MOVE_CARD': {
      const { sourceColumnId, destColumnId, sourceIndex, destIndex, cardId } = action.payload;

      const sourceCol = state.columns[sourceColumnId];
      const destCol = state.columns[destColumnId];
      if (!sourceCol || !destCol) return state;

      const sourceCardIds = Array.from(sourceCol.cardIds);
      sourceCardIds.splice(sourceIndex, 1);

      const destCardIds = (sourceColumnId === destColumnId) 
          ? sourceCardIds 
          : Array.from(destCol.cardIds);
      destCardIds.splice(destIndex, 0, cardId);

      return {
          ...state,
          columns: {
              ...state.columns,
              [sourceColumnId]: {
                  ...sourceCol,
                  cardIds: sourceCardIds
              },
              [destColumnId]: {
                  ...destCol,
                  cardIds: destCardIds
              }
          }
      };
    }

    // # Adds a new webhook endpoint
    case 'ADD_WEBHOOK':
      return {
        ...state,
        webhooks: [...state.webhooks, action.payload],
      };
      
    // # Deletes a webhook endpoint
    case 'DELETE_WEBHOOK':
      return {
        ...state,
        webhooks: state.webhooks.filter(wh => wh.id !== action.payload.webhookId),
      };

    default:
      return state;
  }
};
```

---

## `kanban/context/KanbanContext.tsx`

```tsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { kanbanReducer } from './KanbanReducer';
import { INITIAL_STATE, LOCAL_STORAGE_KEY } from '../constants';
import { KanbanState, Action } from '../types';

// # Context for the Kanban state
const KanbanStateContext = createContext<{ state: KanbanState }>({ state: INITIAL_STATE });

// # Context for the dispatch function. This is more robust against stale closures.
const KanbanDispatchContext = createContext<React.Dispatch<Action>>(() => null);

// # The provider component that wraps the app and provides Kanban state and actions.
export const KanbanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(kanbanReducer, INITIAL_STATE);

  // # Effect to load state from localStorage on initial render
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        // # More robust validation for the new normalized state shape
        if (parsedState.columns && parsedState.columnOrder && parsedState.cards && 
            typeof parsedState.columns === 'object' && !Array.isArray(parsedState.columns)) {
          dispatch({ type: 'LOAD_STATE', payload: parsedState });
        } else {
            console.warn('Old or invalid state structure detected in localStorage, ignoring.');
        }
      }
    } catch (error) {
      console.error('Failed to load state from localStorage', error);
    }
  }, []);

  // # Effect to save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state to localStorage', error);
    }
  }, [state]);

  return (
    <KanbanStateContext.Provider value={{ state }}>
      <KanbanDispatchContext.Provider value={dispatch}>
        {children}
      </KanbanDispatchContext.Provider>
    </KanbanStateContext.Provider>
  );
};

// # Custom hook to easily access the Kanban state
export const useKanbanState = () => useContext(KanbanStateContext);

// # Custom hook to easily access the action dispatchers
export const useKanbanActions = () => {
    const dispatch = useContext(KanbanDispatchContext);
    if (!dispatch) {
        throw new Error('useKanbanActions must be used within a KanbanProvider');
    }
    return dispatch;
};
```

---

## `kanban/context/ModalContext.tsx`

```tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ConfirmationModal } from '../components/ConfirmationModal';

interface ConfirmationConfig {
  title: string;
  message: React.ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  confirmButtonClassName?: string;
}

interface ModalContextType {
  showConfirmation: (config: ConfirmationConfig) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    message: React.ReactNode;
    onConfirm: (() => void) | null;
    confirmText?: string;
    confirmButtonClassName?: string;
  }>({ isOpen: false, title: '', message: '', onConfirm: null });

  const showConfirmation = (config: ConfirmationConfig) => {
    setModalState({
      isOpen: true,
      title: config.title,
      message: config.message,
      onConfirm: config.onConfirm,
      confirmText: config.confirmText,
      confirmButtonClassName: config.confirmButtonClassName,
    });
  };

  const handleClose = () => {
    setModalState({ isOpen: false, title: '', message: '', onConfirm: null });
  };

  const handleConfirm = () => {
    if (modalState.onConfirm) {
      modalState.onConfirm();
    }
    handleClose();
  };

  return (
    <ModalContext.Provider value={{ showConfirmation }}>
      {children}
      <ConfirmationModal
        isOpen={modalState.isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={modalState.title}
        confirmButtonText={modalState.confirmText}
        confirmButtonClassName={modalState.confirmButtonClassName}
      >
        {modalState.message}
      </ConfirmationModal>
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
```

---

## `kanban/icons/EllipsisIcon.tsx`

```tsx
import React from 'react';

export const EllipsisIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
);
```

---

## `kanban/icons/EnvelopeIcon.tsx`

```tsx
import React from 'react';

export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);
```

---

## `kanban/icons/GripVerticalIcon.tsx`

```tsx
import React from 'react';

// # SVG Icon for a drag handle
export const GripVerticalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="9" cy="12" r="1"></circle>
    <circle cx="9" cy="5" r="1"></circle>
    <circle cx="9" cy="19" r="1"></circle>
    <circle cx="15" cy="12" r="1"></circle>
    <circle cx="15" cy="5" r="1"></circle>
    <circle cx="15" cy="19" r="1"></circle>
  </svg>
);
```

---

## `kanban/icons/MenuIcon.tsx`

```tsx
import React from 'react';

// # SVG Icon for Menu (Hamburger)
export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
```

---

## `kanban/icons/PlusIcon.tsx`

```tsx
import React from 'react';

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
```

---

## `kanban/icons/SettingsIcon.tsx`

```tsx
import React from 'react';

// # SVG Icon for Settings
export const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
```

---

## `kanban/icons/TrashIcon.tsx`

```tsx
import React from 'react';

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);
```

---

## `kanban/icons/XIcon.tsx`

```tsx
import React from 'react';

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
```

---

## `kanban/components/AddColumn.tsx`

```tsx
import React, { useState } from 'react';
import { useKanbanActions, useKanbanState } from '../context/KanbanContext';
import { PlusIcon } from '../icons/PlusIcon';
import { COLUMN_COLORS } from '../constants';
import { Column } from '../types';

// # This component allows users to add a new column to the board.
export const AddColumn: React.FC = () => {
  const dispatch = useKanbanActions();
  const { state } = useKanbanState();
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const boardColumnOrder = state.columnOrder.filter(id => id !== 'inbox');
      const nextColor = COLUMN_COLORS[boardColumnOrder.length % COLUMN_COLORS.length];
      const newColumn: Column = {
          id: `col-${crypto.randomUUID()}`,
          title: title.trim(),
          cardIds: [],
          color: nextColor,
      };
      dispatch({ type: 'ADD_COLUMN', payload: { column: newColumn } });
      setTitle('');
      setIsAdding(false);
    }
  };

  if (isAdding) {
    return (
      <div className="w-72 flex-shrink-0 p-2 rounded-lg bg-white/20">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o título da lista..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="w-full p-2 rounded-md border-none shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <div className="mt-2 flex items-center gap-2">
            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700 focus:outline-none">Adicionar Lista</button>
            <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-300/50 rounded-md">Cancelar</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="w-72 flex-shrink-0">
      <button 
        onClick={() => setIsAdding(true)}
        className="flex items-center gap-2 p-3 w-full text-white bg-white/10 hover:bg-white/20 rounded-lg"
      >
        <PlusIcon className="w-4 h-4" />
        <span>Adicionar outra lista</span>
      </button>
    </div>
  );
};
```

---

## `kanban/components/Card.tsx`

```tsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card as CardType } from '../types';
import { TrashIcon } from '../icons/TrashIcon';
import { useKanbanActions } from '../context/KanbanContext';
import { useModal } from '../context/ModalContext';
import { GripVerticalIcon } from '../icons/GripVerticalIcon';

// # Prop types for the Card component
interface CardProps {
  card: CardType;
  columnId: string;
  onEdit: (card: CardType) => void;
}

// # This component renders a single card in the Kanban board.
export const Card: React.FC<CardProps> = ({ card, columnId, onEdit }) => {
  const dispatch = useKanbanActions();
  const { showConfirmation } = useModal();
  
  // # dnd-kit hook for making the card sortable
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
    data: {
      type: 'Card',
      card,
      columnId,
    },
  });

  // # CSS for drag-and-drop transformations
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    // # Fade the card slightly when dragging for better visual feedback
    opacity: isDragging ? 0.5 : 1,
  };
  
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // # Prevent card click when deleting
    showConfirmation({
      title: 'Excluir Cartão',
      message: <p>Tem certeza que deseja excluir o cartão <span className="font-bold">"{card.title}"</span>?</p>,
      onConfirm: () => {
          dispatch({ type: 'DELETE_CARD', payload: { cardId: card.id } });
      },
      confirmText: 'Sim, Excluir',
    });
  };

  return (
    // # The main container for the card, it gets the ref for dnd-kit.
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => onEdit(card)}
      // # Use cursor-pointer to indicate the whole card is clickable to edit
      className="bg-white rounded-md shadow-sm mb-2 group cursor-pointer"
    >
      <div className="flex justify-between items-start p-3">
        <p className="font-medium text-slate-800 break-words flex-grow pr-2">{card.title}</p>
        <div className="flex items-center flex-shrink-0">
          {/* # This button is the drag handle. It gets the listeners and attributes. */}
          <button
            {...attributes}
            {...listeners}
            // # touch-action: none prevents scrolling on touch devices when using the handle
            style={{ touchAction: 'none' }}
            className="text-slate-400 hover:text-slate-600 p-1 cursor-grab active:cursor-grabbing"
            aria-label="Arrastar cartão"
            // # Stop propagation to prevent the card's onClick from firing when using the handle.
            onClick={(e) => e.stopPropagation()}
          >
            <GripVerticalIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={handleDelete}
            className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
            aria-label="Excluir cartão"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-[-8px] px-3 pb-3">
          {card.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs bg-sky-100 text-sky-800 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## `kanban/components/CardModal.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { Card, Priority } from '../types';
import { XIcon } from '../icons/XIcon';
import { useKanbanActions } from '../context/KanbanContext';

// # Prop types for the CardModal component
interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardToEdit: Card | null;
}

// # This component is a modal for creating or editing cards.
export const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose, cardToEdit }) => {
  const dispatch = useKanbanActions();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority | undefined>(undefined);
  const [tags, setTags] = useState('');
  const [date, setDate] = useState(''); // # Add date state

  // # Populate form when a card is selected for editing
  useEffect(() => {
    if (cardToEdit) {
      setTitle(cardToEdit.title);
      setDescription(cardToEdit.description || '');
      setPriority(cardToEdit.priority);
      setTags((cardToEdit.tags || []).join(', '));
      setDate(cardToEdit.date || ''); // # Set date
    }
  }, [cardToEdit, isOpen]);

  if (!isOpen || !cardToEdit) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('O título é obrigatório.');
      return;
    }

    const cardData = {
      title,
      description,
      priority,
      date,
      tags: tags ? tags.split(',').map(tag => tag.trim()).filter(Boolean) : [],
    };

    dispatch({ type: 'UPDATE_CARD', payload: { cardId: cardToEdit.id, updates: cardData } });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            Editar Tarefa
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
            <XIcon className="w-6 h-6"/>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Título</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Descrição</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Prioridade</label>
              <select
                id="priority"
                value={priority || ''}
                onChange={(e) => setPriority(e.target.value as Priority || undefined)}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              >
                <option value="">Nenhuma</option>
                {Object.values(Priority).map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
             <div>
              <label htmlFor="date" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Data</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Etiquetas (separadas por vírgula)</label>
              <input
                id="tags"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
```

---

## `kanban/components/Column.tsx`

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Column as ColumnType, Card as CardType } from '../types';
import { Card } from './Card';
import { PlusIcon } from '../icons/PlusIcon';
import { EllipsisIcon } from '../icons/EllipsisIcon';
import { useKanbanActions } from '../context/KanbanContext';

// # Prop types for the Column component
interface ColumnProps {
  column: ColumnType;
  cards: CardType[];
  onEditCard: (card: CardType) => void;
  onOpenSettings: (column: ColumnType) => void;
}

// # This component renders a column and its associated cards.
export const Column: React.FC<ColumnProps> = ({ column, cards, onEditCard, onOpenSettings }) => {
  const dispatch = useKanbanActions();
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [columnTitle, setColumnTitle] = useState(column.title);
  const titleInputRef = useRef<HTMLInputElement>(null);

  // # Effect to focus the input when title editing begins
  useEffect(() => {
    if (isEditingTitle) {
      titleInputRef.current?.focus();
      titleInputRef.current?.select();
    }
  }, [isEditingTitle]);
  
  // # dnd-kit hook for making the column sortable
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
    disabled: isEditingTitle, // # Disable dragging while editing the title
  });
  
  // # CSS for drag-and-drop transformations
  const style: React.CSSProperties = {
    transition,
    transform: CSS.Translate.toString(transform),
    visibility: isDragging ? 'hidden' : 'visible',
  };

  const handleAddCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCardTitle.trim()) {
      const newCard = { id: `card-${crypto.randomUUID()}`, title: newCardTitle.trim() };
      dispatch({ type: 'ADD_CARD', payload: { columnId: column.id, card: newCard } });
      setNewCardTitle('');
      setIsAddingCard(false);
    }
  };

  // # Saves the new title on blur
  const handleTitleBlur = () => {
    if (columnTitle.trim() && columnTitle.trim() !== column.title) {
      dispatch({ type: 'UPDATE_COLUMN_TITLE', payload: { columnId: column.id, title: columnTitle.trim() } });
    } else {
      setColumnTitle(column.title);
    }
    setIsEditingTitle(false);
  };
  
  // # Handles Enter and Escape keys for the title input
  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTitleBlur();
    } else if (e.key === 'Escape') {
      setColumnTitle(column.title);
      setIsEditingTitle(false);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="w-[90vw] sm:w-72 flex-shrink-0 flex flex-col"
    >
      <div 
        className="flex flex-col max-h-[calc(100vh-14rem)] rounded-lg p-2"
        style={{ backgroundColor: column.color }}
      >
        <div 
          {...attributes}
          {...listeners}
          className="flex items-center justify-between px-2 py-1 mb-2 cursor-grab active:cursor-grabbing"
        >
          {isEditingTitle ? (
             <input
              ref={titleInputRef}
              value={columnTitle}
              onChange={(e) => setColumnTitle(e.target.value)}
              onBlur={handleTitleBlur}
              onKeyDown={handleTitleKeyDown}
              className="w-full bg-transparent font-semibold text-slate-700 border-b-2 border-sky-500 focus:outline-none"
            />
          ) : (
            <h2 onClick={() => setIsEditingTitle(true)} className="font-semibold text-slate-700">{column.title}</h2>
          )}
          <button onClick={() => onOpenSettings(column)} className="text-slate-500 hover:text-slate-700 p-1" aria-label="Opções da coluna">
            <EllipsisIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-1 min-h-[80px]">
          <SortableContext items={cards.map(c => c.id)} strategy={verticalListSortingStrategy}>
            {cards.map(card => (
              <Card key={card.id} card={card} columnId={column.id} onEdit={onEditCard} />
            ))}
          </SortableContext>
        </div>

        {isAddingCard ? (
          <form onSubmit={handleAddCardSubmit} className="p-1 mt-2">
            <textarea
              placeholder="Digite um título para este cartão..."
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              autoFocus
              className="w-full p-2 rounded-md border-none shadow-sm resize-none bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              onKeyDown={(e) => { if (e.key === 'Enter') handleAddCardSubmit(e); }}
            />
            <div className="mt-2 flex items-center gap-2">
              <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700 focus:outline-none">Adicionar Cartão</button>
              <button type="button" onClick={() => setIsAddingCard(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-300/50 rounded-md">Cancelar</button>
            </div>
          </form>
        ) : (
          <button 
            onClick={() => setIsAddingCard(true)}
            className="flex items-center gap-2 p-2 mt-2 text-slate-500 hover:bg-black/10 rounded-lg w-full text-left"
          >
            <PlusIcon className="w-4 h-4" />
            <span>Adicionar um cartão</span>
          </button>
        )}
      </div>
    </div>
  );
};
```

---

## `kanban/components/ColumnSettingsModal.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '../types';
import { useKanbanActions } from '../context/KanbanContext';
import { useModal } from '../context/ModalContext';
import { XIcon } from '../icons/XIcon';
import { TrashIcon } from '../icons/TrashIcon';
import { COLUMN_COLORS } from '../constants';

// # Prop types for the ColumnSettingsModal component
interface ColumnSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  column: Column | null;
}

// # This component is a modal for editing a column's properties.
export const ColumnSettingsModal: React.FC<ColumnSettingsModalProps> = ({ isOpen, onClose, column }) => {
  const dispatch = useKanbanActions();
  const { showConfirmation } = useModal();
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');

  // # Populate form when a column is selected for editing
  useEffect(() => {
    if (column) {
      setTitle(column.title);
      setColor(column.color);
    }
  }, [column, isOpen]);

  if (!isOpen || !column) return null;

  const handleSave = () => {
    if (!title.trim()) {
      alert('O título da coluna não pode ficar em branco.');
      return;
    }
    if (title.trim() !== column.title) {
      dispatch({ type: 'UPDATE_COLUMN_TITLE', payload: { columnId: column.id, title: title.trim() } });
    }
    if (color !== column.color) {
      dispatch({ type: 'UPDATE_COLUMN_COLOR', payload: { columnId: column.id, color } });
    }
    onClose();
  };
  
  const handleDelete = () => {
    showConfirmation({
      title: 'Excluir Coluna',
      message: (
        <p>
          Tem certeza que deseja excluir a coluna <span className="font-bold">"{column.title}"</span> e todos os seus cartões?
          <br/><br/>
          <span className="font-bold text-red-600 dark:text-red-500">Esta ação não pode ser desfeita.</span>
        </p>
      ),
      onConfirm: () => {
        dispatch({ type: 'DELETE_COLUMN', payload: { columnId: column.id } });
        onClose(); // Close the settings modal after deletion is confirmed
      },
      confirmText: 'Sim, Excluir Coluna',
    });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            Configurações da Coluna
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
            <XIcon className="w-6 h-6"/>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label htmlFor="column-title" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Título da Coluna
            </label>
            <input
              id="column-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Cor da Coluna
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {COLUMN_COLORS.map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-10 h-10 rounded-full border-2 ${color === c ? 'border-sky-500 ring-2 ring-sky-500' : 'border-transparent'}`}
                  style={{ backgroundColor: c }}
                  aria-label={`Select color ${c}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 py-4 mt-auto bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <button
              onClick={handleDelete}
              className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800"
            >
              <TrashIcon className="w-4 h-4"/>
              Excluir Coluna
            </button>
            <button
              onClick={handleSave}
              className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Salvar Alterações
            </button>
        </div>
      </div>
    </div>
  );
};
```

---

## `kanban/components/ConfirmationModal.tsx`

```tsx
import React from 'react';
import { XIcon } from '../icons/XIcon';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonClassName?: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmButtonText = 'Confirmar',
  cancelButtonText = 'Cancelar',
  confirmButtonClassName = 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-dialog-title"
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 id="confirmation-dialog-title" className="text-xl font-bold text-slate-800 dark:text-slate-100">
            {title}
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200" aria-label="Fechar">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 text-slate-600 dark:text-slate-300">
          {children}
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex justify-end items-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-transparent hover:bg-slate-200/50 dark:text-slate-200 dark:hover:bg-slate-700 rounded-md"
          >
            {cancelButtonText}
          </button>
          <button
            onClick={onConfirm}
            className={`inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${confirmButtonClassName}`}
          >
            {confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
```

---

## `kanban/components/FilterBar.tsx`

```tsx
import React from 'react';
import { ExpandIcon } from '../icons/ExpandIcon';

interface FilterBarProps {
  isInboxVisible: boolean;
  onOpenInbox: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ isInboxVisible, onOpenInbox }) => {
  return (
    <div className="p-4 flex flex-wrap items-center gap-4 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700 flex-shrink-0">
      {!isInboxVisible && (
        <button
          onClick={onOpenInbox}
          className="p-2 text-slate-600 dark:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          aria-label="Mostrar caixa de entrada"
        >
          <ExpandIcon className="w-6 h-6" />
        </button>
      )}
      <input 
        type="text"
        placeholder="Filtrar por título..."
        className="w-full sm:w-auto flex-grow sm:flex-grow-0 px-3 py-2 text-sm bg-slate-100 dark:bg-slate-700 rounded-md border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400"
        aria-label="Filter cards by title"
      />
      <button className="px-3 py-2 text-sm text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-600 rounded-md hover:bg-slate-300 dark:hover:bg-slate-500">
        Prioridade
      </button>
      <button className="px-3 py-2 text-sm text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-600 rounded-md hover:bg-slate-300 dark:hover:bg-slate-500">
        Tag
      </button>
    </div>
  );
};
```

---

## `kanban/components/Inbox.tsx`

```tsx
import React, { useState } from 'react';
import { SortableContext } from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { Card as CardType } from '../types';
import { Card } from './Card';
import { EnvelopeIcon } from '../icons/EnvelopeIcon';
import { useKanbanActions, useKanbanState } from '../context/KanbanContext';
import { ShrinkIcon } from '../icons/ShrinkIcon';

// # Prop types for the Inbox component
interface InboxProps {
  onEditCard: (card: CardType) => void;
  isVisible: boolean;
  onClose: () => void;
}

// # This component renders the new Inbox column on the left.
export const Inbox: React.FC<InboxProps> = ({ onEditCard, isVisible, onClose }) => {
  const { state } = useKanbanState();
  const dispatch = useKanbanActions();
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');

  const inboxColumn = state.columns['inbox'];
  
  // # dnd-kit hook to make the column a droppable area
  const { setNodeRef } = useDroppable({
    id: 'inbox',
    data: {
      type: 'Column',
      column: inboxColumn,
    },
  });
  
  if (!inboxColumn) return null;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const newCard: CardType = { id: `card-${crypto.randomUUID()}`, title: title.trim() };
      dispatch({ type: 'ADD_CARD', payload: { columnId: 'inbox', card: newCard } });
      setTitle('');
      setIsAdding(false);
    }
  };
  
  const inboxCards = inboxColumn.cardIds.map(id => state.cards[id]).filter(Boolean);

  return (
    <div 
        ref={setNodeRef} 
        className={`
            bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border-r border-slate-200 dark:border-slate-700
            h-full flex flex-col p-4 w-80 max-w-[85vw] flex-shrink-0
            transform transition-transform duration-300 ease-in-out
            fixed z-40
            ${isVisible ? 'translate-x-0' : '-translate-x-full'}
        `}
    >
       <div className="flex items-center gap-2 mb-4 px-1">
            <EnvelopeIcon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">Caixa de Entrada</h2>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 ml-auto mr-2">{inboxCards.length}</span>
            <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full" 
                aria-label="Esconder Caixa de Entrada"
            >
                <ShrinkIcon className="w-5 h-5" />
            </button>
       </div>
       
       {!isAdding ? (
         <button 
           onClick={() => setIsAdding(true)}
           className="w-full text-left p-3 mb-2 rounded-lg shadow-sm bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600"
         >
           <span className="text-slate-500 dark:text-slate-300">Adicionar um cartão</span>
         </button>
       ) : (
         <div className="p-3 mb-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm">
            <form onSubmit={handleAddSubmit}>
                <input
                    type="text"
                    placeholder="Digite um título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    className="w-full p-2 rounded-md border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <div className="mt-3 flex items-center gap-2">
                    <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700 focus:outline-none">Adicionar Cartão</button>
                    <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-md">Cancelar</button>
                </div>
            </form>
         </div>
       )}

       <div className="overflow-y-auto flex-grow -mr-2 pr-2 mt-2">
          <SortableContext items={inboxColumn.cardIds}>
            {inboxCards.map(card => (
              <Card key={card.id} card={card} columnId={inboxColumn.id} onEdit={onEditCard} />
            ))}
          </SortableContext>
        </div>
    </div>
  )
}
```

---

## `kanban/components/ProgressBar.tsx`

```tsx
import React from 'react';
import { useKanbanState } from '../context/KanbanContext';

// # This component displays the progress of completed tasks.
export const ProgressBar: React.FC = () => {
  const { state } = useKanbanState();

  const completedColumn = state.columns['col-3']; // # 'Concluído' column ID
  const completedTasks = completedColumn ? completedColumn.cardIds.length : 0;
  
  // # Exclude Inbox from total task count for progress calculation
  const totalTasks = Object.values(state.columns)
    .filter(col => col.id !== 'inbox')
    .reduce((acc, col) => acc + col.cardIds.length, 0);

  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="px-4 py-2 w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-100">Progresso</span>
        <span className="text-sm font-bold text-white">{progress}%</span>
      </div>
      <div className="w-full bg-slate-300/50 rounded-full h-2">
        <div 
          className="bg-green-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
    </div>
  );
};
```

---

## `kanban/components/SettingsModal.tsx`

```tsx
import React, { useState } from 'react';
import { useKanbanState, useKanbanActions } from '../context/KanbanContext';
import { XIcon } from '../icons/XIcon';
import { TrashIcon } from '../icons/TrashIcon';

// # Prop types for the SettingsModal component
interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// # This component is a modal for managing app settings like webhooks.
export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { state } = useKanbanState();
  const dispatch = useKanbanActions();
  const [newWebhookUrl, setNewWebhookUrl] = useState('');

  if (!isOpen) return null;

  const handleAddWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWebhookUrl.trim()) {
      try {
        new URL(newWebhookUrl); // # Basic URL validation
        const newWebhook = { id: `wh-${crypto.randomUUID()}`, url: newWebhookUrl.trim() };
        dispatch({ type: 'ADD_WEBHOOK', payload: newWebhook });
        setNewWebhookUrl('');
      } catch (error) {
        alert('Por favor, insira uma URL válida.');
      }
    }
  };
  
  const handleDeleteWebhook = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este webhook?')) {
        dispatch({ type: 'DELETE_WEBHOOK', payload: { webhookId: id } });
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
            Configurações
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
            <XIcon className="w-6 h-6"/>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            
            {/* # Webhooks Section */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Webhooks</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Dispare automações externas quando eventos acontecerem no seu quadro.
              </p>
              
              <form onSubmit={handleAddWebhook} className="flex items-center gap-2 mb-4">
                <input
                  type="url"
                  placeholder="https://sua-url-de-webhook.com"
                  value={newWebhookUrl}
                  onChange={(e) => setNewWebhookUrl(e.target.value)}
                  className="flex-grow block w-full rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  required
                />
                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                  Adicionar
                </button>
              </form>

              <div className="space-y-2">
                {state.webhooks.length > 0 ? state.webhooks.map(webhook => (
                  <div key={webhook.id} className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-700 rounded-md">
                    <span className="text-sm text-slate-600 dark:text-slate-300 truncate">{webhook.url}</span>
                    <button onClick={() => handleDeleteWebhook(webhook.id)} className="text-slate-400 hover:text-red-500 p-1">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                )) : (
                  <p className="text-sm text-slate-400 dark:text-slate-500 text-center py-4">Nenhum webhook configurado.</p>
                )}
              </div>
            </div>

            {/* # Future settings can be added here */}

          </div>
        </div>
      </div>
    </div>
  );
};
```

---

## `kanban/KanbanBoard.tsx`

```tsx
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { DndContext, DragEndEvent, DragStartEvent, PointerSensor, TouchSensor, useSensor, useSensors, rectIntersection, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { KanbanProvider, useKanbanState, useKanbanActions } from './context/KanbanContext';
import { Card } from './components/Card';
import { CardModal } from './components/CardModal';
import { Column } from './components/Column';
import { Inbox } from './components/Inbox';
import { AddColumn } from './components/AddColumn';
import { Card as CardType, Column as ColumnType } from './types';
import { ProgressBar } from './components/ProgressBar';
import { FilterBar } from './components/FilterBar';
import { SettingsModal } from './components/SettingsModal';
import { ColumnSettingsModal } from './components/ColumnSettingsModal';
import { ModalProvider } from './context/ModalContext';

const AutoScroller: React.FC<{ scrollableContainerRef: React.RefObject<HTMLDivElement> }> = ({ scrollableContainerRef }) => {
  const scrollDirectionRef = useRef<'left' | 'right' | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const stopScrolling = useCallback(() => {
    isDraggingRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    scrollDirectionRef.current = null;
  }, []);

  const autoScroll = useCallback(() => {
    if (!isDraggingRef.current) {
      stopScrolling();
      return;
    }
    
    if (scrollableContainerRef.current && scrollDirectionRef.current) {
        const scrollSpeed = 6;
        if (scrollDirectionRef.current === 'right') {
            scrollableContainerRef.current.scrollLeft += scrollSpeed;
        } else if (scrollDirectionRef.current === 'left') {
            scrollableContainerRef.current.scrollLeft -= scrollSpeed;
        }
    }
    
    animationFrameRef.current = requestAnimationFrame(autoScroll);
  }, [scrollableContainerRef, stopScrolling]);

  useDndMonitor({
    onDragStart: () => {
      isDraggingRef.current = true;
    },
    onDragMove: (event) => {
      if (!isDraggingRef.current || !scrollableContainerRef.current) return;

      const { active } = event;
      const rect = active.rect.current.translated;
      if (!rect) return;
      
      const viewport = scrollableContainerRef.current.getBoundingClientRect();
      const threshold = 45;

      const isNearRightEdge = rect.right > viewport.right - threshold;
      const isNearLeftEdge = rect.left < viewport.left + threshold;

      let newDirection: 'left' | 'right' | null = null;
      if (isNearRightEdge) {
        newDirection = 'right';
      } else if (isNearLeftEdge) {
        newDirection = 'left';
      }

      if (newDirection !== scrollDirectionRef.current) {
        scrollDirectionRef.current = newDirection;
        if (scrollDirectionRef.current && !animationFrameRef.current) {
          autoScroll();
        }
      }
    },
    onDragEnd: stopScrolling,
    onDragCancel: stopScrolling,
  });

  return null;
};

const KanbanBoardContent: React.FC = () => {
  const [isCardModalOpen, setCardModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isColumnSettingsModalOpen, setColumnSettingsModalOpen] = useState(false);
  const [isInboxVisible, setIsInboxVisible] = useState(true);
  const [cardToEdit, setCardToEdit] = useState<CardType | null>(null);
  const [columnToEdit, setColumnToEdit] = useState<ColumnType | null>(null);
  const [activeColumn, setActiveColumn] = useState<ColumnType | null>(null);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);
  const [activeCardSourceColumnId, setActiveCardSourceColumnId] = useState<string | null>(null);

  const { state } = useKanbanState();
  const dispatch = useKanbanActions();
  
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  const handleOpenEditCardModal = useCallback((card: CardType) => {
    setCardToEdit(card);
    setCardModalOpen(true);
  }, []);

  const handleCloseCardModal = () => {
    setCardModalOpen(false);
    setCardToEdit(null);
  };
  
  const handleOpenColumnSettingsModal = useCallback((column: ColumnType) => {
    setColumnToEdit(column);
    setColumnSettingsModalOpen(true);
  }, []);

  const handleCloseColumnSettingsModal = () => {
    setColumnSettingsModalOpen(false);
    setColumnToEdit(null);
  };

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column);
      return;
    }
    if (event.active.data.current?.type === 'Card') {
      const cardData = event.active.data.current;
      setActiveCard(cardData.card);
      setActiveCardSourceColumnId(cardData.columnId);

      if (cardData.columnId === 'inbox') {
        setIsInboxVisible(false);
      }
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveCard(null);
    setActiveCardSourceColumnId(null);

    const { active, over } = event;
    if (!over) return;

    const isActiveAColumn = active.data.current?.type === 'Column';
    if (isActiveAColumn) {
      if (active.id === over.id) return;
      if (active.id !== 'inbox' && over.id !== 'inbox') {
          const boardColumnOrder = state.columnOrder.filter(id => id !== 'inbox');
          const oldIndex = boardColumnOrder.indexOf(active.id as string);
          const newIndex = boardColumnOrder.indexOf(over.id as string);
          if (oldIndex === -1 || newIndex === -1) return;
          const newOrder = arrayMove(boardColumnOrder, oldIndex, newIndex);
          dispatch({ type: 'REORDER_COLUMNS', payload: { newOrder: ['inbox', ...newOrder] } });
      }
      return;
    }

    const isActiveACard = active.data.current?.type === 'Card';
    if (isActiveACard) {
        const sourceCardId = active.id as string;
        const sourceColumnId = active.data.current?.columnId as string;
        
        let destColumnId: string;
        const isOverAColumn = over.data.current?.type === 'Column';
        const isOverACard = over.data.current?.type === 'Card';

        if (isOverAColumn) {
            destColumnId = over.id as string;
        } else if (isOverACard) {
            destColumnId = over.data.current?.columnId as string;
        } else {
            return;
        }

        const sourceColumn = state.columns[sourceColumnId];
        const destColumn = state.columns[destColumnId];

        if (!sourceColumn || !destColumn) return;

        const sourceIndex = sourceColumn.cardIds.indexOf(sourceCardId);
        let destIndex: number;

        if (isOverACard) {
            destIndex = destColumn.cardIds.indexOf(over.id as string);
        } else {
            destIndex = destColumn.cardIds.length;
        }
        
        if(sourceColumnId === destColumnId && sourceIndex === destIndex) return;

        dispatch({
          type: 'MOVE_CARD',
          payload: { sourceColumnId, destColumnId, sourceIndex, destIndex, cardId: sourceCardId }
        });
    }
  };
  
  const boardColumns = state.columnOrder
    .filter(id => id !== 'inbox')
    .map(id => state.columns[id])
    .filter((c): c is ColumnType => !!c);

  const boardColumnIds = boardColumns.map(c => c.id);

  return (
    <DndContext 
        sensors={sensors} 
        collisionDetection={rectIntersection}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd} 
    >
      <AutoScroller scrollableContainerRef={scrollableContainerRef} />
      <div className="flex h-full font-sans bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
        <Inbox 
            onEditCard={handleOpenEditCardModal} 
            isVisible={isInboxVisible}
            onClose={() => setIsInboxVisible(false)}
        />

        <main className={`flex-grow flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isInboxVisible ? 'md:ml-80' : ''}`}>
            <FilterBar 
                isInboxVisible={isInboxVisible}
                onOpenInbox={() => setIsInboxVisible(true)}
            />
           <div ref={scrollableContainerRef} className="flex-grow w-full overflow-x-auto overflow-y-hidden">
             <div className="flex gap-4 p-4 h-full items-start">
               <SortableContext items={boardColumnIds} strategy={horizontalListSortingStrategy}>
                  {boardColumns.map(col => {
                    const cards = col.cardIds.map(cardId => state.cards[cardId]).filter(Boolean);
                    return (
                      <Column
                        key={col.id}
                        column={col}
                        cards={cards}
                        onEditCard={handleOpenEditCardModal}
                        onOpenSettings={handleOpenColumnSettingsModal}
                      />
                    )
                  })}
                </SortableContext>
                <AddColumn />
             </div>
          </div>
        </main>
        
        <CardModal
          isOpen={isCardModalOpen}
          onClose={handleCloseCardModal}
          cardToEdit={cardToEdit}
        />
        <SettingsModal 
            isOpen={isSettingsModalOpen}
            onClose={() => setSettingsModalOpen(false)}
        />
        <ColumnSettingsModal
          isOpen={isColumnSettingsModalOpen}
          onClose={handleCloseColumnSettingsModal}
          column={columnToEdit}
        />
      </div>
      <DragOverlay>
        {activeColumn ? (
          <Column
            column={activeColumn}
            cards={activeColumn.cardIds.map(id => state.cards[id]).filter(Boolean)}
            onEditCard={handleOpenEditCardModal}
            onOpenSettings={handleOpenColumnSettingsModal}
          />
        ) : null}
        {activeCard && activeCardSourceColumnId ? (
          <Card
            card={activeCard}
            columnId={activeCardSourceColumnId}
            onEdit={handleOpenEditCardModal}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

const KanbanBoard: React.FC = () => {
  return (
    <KanbanProvider>
      <ModalProvider>
        <KanbanBoardContent />
      </ModalProvider>
    </KanbanProvider>
  );
};

export default KanbanBoard;
```

---

## `kanban/icons/ExpandIcon.tsx`

```tsx
import React from 'react';

export const ExpandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 9h6V3" />
    <path d="M15 21h6v-6" />
    <path d="M21 3l-7 7" />
    <path d="M9 15l-6 6" />
  </svg>
);
```

---

## `kanban/icons/ShrinkIcon.tsx`

```tsx
import React from 'react';

export const ShrinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14h6v6" />
    <path d="M20 10h-6V4" />
    <path d="M14 10l7-7" />
    <path d="M3 21l7-7" />
  </svg>
);
```
