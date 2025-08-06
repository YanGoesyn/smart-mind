
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
