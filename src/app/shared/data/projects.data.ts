export interface ProjectSkill {
  name: string;
  icon: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  description: Record<string, string>;
  process: Record<string, string>;
  duration: Record<string, string>;
  skills: ProjectSkill[];
  githubUrl: string;
  liveUrl: string;
  accent: string;
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'join',
    title: 'Join',
    description: {
      en: 'A Kanban-based project management tool built with Angular. Organize tasks, assign team members, and track progress in an intuitive drag-and-drop interface.',
      de: 'Ein Kanban-basiertes Projektmanagement-Tool mit Angular. Aufgaben organisieren, Teammitglieder zuweisen und Fortschritt in einer intuitiven Drag-and-Drop-Oberfläche verfolgen.',
    },
    process: {
      en: 'I started by defining the data model and implementing the board view. Then I built the drag-and-drop logic using Angular CDK, followed by user management and real-time sync with Firebase.',
      de: 'Ich begann mit der Definition des Datenmodells und der Implementierung der Board-Ansicht. Dann baute ich die Drag-and-Drop-Logik mit Angular CDK, gefolgt von Benutzerverwaltung und Echtzeit-Sync mit Firebase.',
    },
    duration: { en: '5 weeks', de: '5 Wochen' },
    skills: [
      { name: 'Angular', icon: '/assets/icons/skills/frontend/Angular.svg' },
      { name: 'TypeScript', icon: '/assets/icons/skills/frontend/Ts.svg' },
      { name: 'Firebase', icon: '/assets/icons/skills/frontend/Firebase.svg' },
      { name: 'CSS', icon: '/assets/icons/skills/frontend/CSS.svg' },
    ],
    githubUrl: '#',
    liveUrl: '#',
    accent: 'var(--color-highlight-2)',
  },
  {
    id: 'el-pollo-loco',
    title: 'El Pollo Loco',
    description: {
      en: 'A jump-and-run game built with vanilla JavaScript and HTML Canvas. Help Pepe collect coins and dodge enemies in this fun browser game.',
      de: 'Ein Jump-and-Run-Spiel mit Vanilla JavaScript und HTML Canvas. Hilf Pepe Münzen zu sammeln und Gegnern auszuweichen in diesem spassigen Browser-Spiel.',
    },
    process: {
      en: 'The game was built with an object-oriented approach. I created a game loop with requestAnimationFrame, implemented collision detection, parallax scrolling, and a state machine for character animations.',
      de: 'Das Spiel wurde objektorientiert aufgebaut. Ich erstellte einen Game Loop mit requestAnimationFrame, implementierte Kollisionserkennung, Parallax-Scrolling und eine State Machine für Charakter-Animationen.',
    },
    duration: { en: '4 weeks', de: '4 Wochen' },
    skills: [
      { name: 'JavaScript', icon: '/assets/icons/skills/frontend/Js.svg' },
      { name: 'HTML', icon: '/assets/icons/skills/frontend/HTML.svg' },
      { name: 'CSS', icon: '/assets/icons/skills/frontend/CSS.svg' },
    ],
    githubUrl: '#',
    liveUrl: '#',
    accent: 'var(--color-highlight-3)',
  },
];
