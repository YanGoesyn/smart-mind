# Smart Mind: Your Integrated Personal Growth OS

**Smart Mind** is a comprehensive web application designed to be an all-in-one operating system for your personal and professional development. It guides users through a structured journey of self-discovery, connects them with a personalized AI coach, and provides powerful tools like goal management and a Kanban board to turn insights into action.

---

## 🚀 Vision

In a world of scattered productivity apps and self-help content, Smart Mind aims to be a single, unified platform for intentional growth. It's built on the principle that true transformation comes from a cycle of **Reflection → Planning → Execution**.

1.  **Reflection (The Journey):** Understand who you are at your core.
2.  **Planning (Goal Management):** Define what you want to achieve.
3.  **Execution (Kanban Board):** Break down your goals into manageable tasks and track their progress.

The entire experience is amplified by an AI assistant that understands your unique personality profile, helping you overcome obstacles and stay motivated.

---

## ✨ Core Features

### 1. The Journey: A Structured Path to Self-Discovery
The heart of the application is a guided, 8-step program. Progress is sequential, ensuring a foundational understanding before moving to the next level.

-   **Progress Tracking:** A visual progress bar on the home screen provides a clear overview of your advancement.
-   **Step 1: Life Goals Definition:** A guided questionnaire based on strategic planning principles (like SMART goals) to help you define clear, meaningful objectives across key life areas: finance, career, health, and relationships.
-   **Step 2: Profile & Essence Analysis:** A series of deep, introspective questions about your past, present, and core values. This is where the magic begins.
-   **Essential Mirror (AI-Powered Analysis):** Upon completing Step 2, your answers are analyzed by the **Google Gemini API** to generate a detailed personality profile. This "Essential Mirror" is a synthetic, insightful summary of your inner world, including:
    -   **Temperament:** (e.g., Choleric, Sanguine, Melancholic, Phlegmatic)
    -   **Central Personality Trait:** Your most defining characteristic.
    -   **Virtues & Weaknesses:** Your core strengths and areas for growth.
    -   **Predominant Emotional Vice:** Your primary emotional challenge.
    -   **Core Fears & Desires:** What truly drives and limits you.
    -   **Self-Image Distortions & Central Beliefs:** Inaccurate self-perceptions and the core beliefs that shape your reality.
-   **Future Steps (3-8):** Placeholders for upcoming modules on professional skills, market analysis, personal branding, habit formation, and more.

### 2. Kanban Board: Organize Your Actions
The Kanban board is a powerful, integrated tool for task and project management, allowing you to visually organize your workflow.

-   **Seamless Integration:** The Kanban board is accessible from the side menu and fits perfectly within the app's mobile-first layout, complete with the standard bottom navigation bar.
-   **Inbox:** A dedicated column to quickly capture raw ideas, tasks, and thoughts without interrupting your flow. This is your digital "in-tray".
-   **Customizable Workflow:** Start with classic columns like "A Fazer" (To Do), "Em Progresso" (In Progress), and "Concluído" (Done). You can add, rename, and reorder columns to perfectly match your personal workflow.
-   **Drag & Drop Interface:** Intuitively move cards between columns and re-prioritize tasks within a column using a smooth drag-and-drop system powered by `@dnd-kit`.
-   **Detailed Cards:** Each card can be edited to include a title, detailed description, due date, priority level, and tags, turning a simple task into a well-defined action item.

### 3. AI Chat Assistant: Your Personal Coach
A conversational AI assistant is available via a Floating Action Button (FAB) on most screens. It's designed to be a supportive partner in your journey.

-   **Dual-Source Intelligence (Configurable):**
    1.  **Google Gemini API (Default):** Provides a rich, context-aware chat experience. It uses your unique "Essential Mirror" as a system instruction, allowing it to offer highly personalized advice, challenge your limiting beliefs, and provide encouragement tailored to your personality.
    2.  **Custom Webhook:** For power users and developers, the AI chat can be routed to an external service (like a custom n8n workflow or a private server). The app sends the conversation history, user profile, and Essential Mirror data to your specified URL, allowing you to use other AI models or integrate the chat with third-party tools.

### 4. Goal Management (Calendar)
A dedicated system for setting, tracking, and completing long-term goals.

-   **Full CRUD Functionality:** Create, Read, Update, and Delete goals with ease.
-   **Time-Bound:** Each goal has a specific date and time, anchoring your ambitions to a timeline.
-   **Status Tracking:** Goals are visually separated into "Metas Futuras" (Future Goals) and "Metas Realizadas" (Accomplished Goals), giving you a clear sense of progress and achievement.

### 5. Webhooks: Your Bridge to Other Services
This powerful feature allows you to automate workflows by connecting in-app events to external services like n8n, Zapier, or your own custom APIs.

-   **Event-Driven Triggers:** Send data automatically when specific events happen.
-   **Configurable Events:**
    -   `New User`: Fires when a new account is created.
    -   `Step 1 Completed`: Fires when a user defines their life goals.
    -   `Step 2 Completed`: Fires when a user submits their self-analysis answers.
    -   `AI Chat`: Used as the data source when the Gemini API is disabled.

---

## 🛠️ Getting Started & How to Use

1.  **Create an Account:** On the login screen, enter your name and email. An account will be created and saved locally in your browser. If you return later, just enter your email to log back in.
2.  **Begin Your Journey:** From the "Jornada" (Home) screen, click the first unlocked step. Answer the questions thoughtfully.
3.  **Generate Your Mirror:** Complete Step 2 to receive your unique AI-generated "Essential Mirror." This profile is key to unlocking personalized AI coaching.
4.  **Set Your Goals:** Navigate to the "Metas" (Goals) screen using the bottom navigation bar. Create time-bound goals that align with the objectives you defined in Step 1.
5.  **Organize with Kanban:**
    -   Access the Kanban board from the side menu.
    -   Use the **Caixa de Entrada (Inbox)** to quickly add new tasks or ideas.
    -   Drag cards from the Inbox to your "A Fazer" (To Do) column to commit to working on them.
    -   Move cards across the board as you make progress.
    -   Click "Adicionar outra lista" (Add another list) to create new columns for your custom workflow.
6.  **Chat with your AI Coach:** Click the chat icon (FAB) anytime you need guidance, motivation, or a new perspective.
7.  **Set Up Automations (Optional):** Go to "Ajustes" (Settings) to create webhooks that connect your progress in Smart Mind to other tools you use.

---

## 🔧 Technical Architecture

-   **Frontend Stack:** **React** with **TypeScript** for robust, type-safe components, and **Tailwind CSS** for rapid, utility-first styling.
-   **State Management:** A centralized state management system using React's built-in **Context API** and the `useReducer` hook for predictable state transitions.
-   **AI Integration:** The official **`@google/genai`** SDK for seamless interaction with the Google Gemini API, including advanced features like JSON schema enforcement.
-   **Drag & Drop:** The **`@dnd-kit`** library is used for the high-performance, accessible drag-and-drop functionality in the Kanban board.
-   **Data Persistence:** The entire application state is serialized to JSON and stored in the browser's **`localStorage`**. This makes the app function offline and preserves data between sessions without needing a backend database.
-   **Buildless Architecture:** The project uses a modern, build-tool-free setup with **ES Modules (ESM)** and **import maps**. Dependencies are loaded directly from a CDN (`esm.sh`), eliminating the need for complex build configurations and enabling extremely fast development cycles.
