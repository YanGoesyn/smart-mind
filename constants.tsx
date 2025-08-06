
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