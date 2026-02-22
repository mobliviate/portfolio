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
  imgUrl: string;
  detailImgUrl?: string;
  showSticker: boolean;
  animationImg: boolean;
  accent: string;
  sticker: {
    variant: 'feature' | 'logo';
    stickerColor: 'orange' | 'blue' | 'yellow';
  };
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'join',
    title: 'Join',
    description: {
      en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      de: 'Taskmanager inspiriert vom Kanban-System. Aufgaben erstellen und organisieren per Drag-and-Drop, Benutzer und Kategorien zuweisen.',
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
    imgUrl: '/assets/09_Projects/Laptop.png',
    detailImgUrl: '/assets/09_Projects/Join.png',
    showSticker: true,
    animationImg: true,
    accent: 'var(--color-highlight-2)',
    sticker: { variant: 'feature', stickerColor: 'blue' },
  },
  {
    id: 'el-pollo-loco',
    title: 'El Pollo Loco',
    description: {
      en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      de: 'Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
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
    imgUrl: '/assets/09_Projects/El_Pollo_Loco.png',
    showSticker: false,
    animationImg: false,
    accent: 'var(--color-highlight-3)',
    sticker: { variant: 'feature', stickerColor: 'orange' },
  },
];
