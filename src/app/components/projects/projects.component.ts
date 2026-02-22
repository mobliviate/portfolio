import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface ProjectEntry {
  id: string;
  title: string;
  description: Record<string, string>;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  accent: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  locale = inject(LocaleService);

  labels: Record<string, Record<string, string>> = {
    subtitle: { en: 'FEATURED WORK', de: 'AUSGEWÄHLTE ARBEITEN' },
    title: { en: 'Projects', de: 'Projekte' },
    intro: {
      en: 'Explore a selection of my work — each project reflects a unique challenge and creative solution.',
      de: 'Entdecke eine Auswahl meiner Arbeiten — jedes Projekt spiegelt eine einzigartige Herausforderung und kreative Lösung wider.',
    },
    live: { en: 'Live Demo', de: 'Live Demo' },
    code: { en: 'GitHub', de: 'GitHub' },
  };

  projects: ProjectEntry[] = [
    {
      id: 'join',
      title: 'Join',
      description: {
        en: 'A Kanban-based project management tool built with Angular. Organize tasks, assign team members, and track progress in an intuitive drag-and-drop interface.',
        de: 'Ein Kanban-basiertes Projektmanagement-Tool mit Angular. Aufgaben organisieren, Teammitglieder zuweisen und Fortschritt in einer intuitiven Drag-and-Drop-Oberfläche verfolgen.',
      },
      tech: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
      liveUrl: '#',
      repoUrl: '#',
      accent: 'var(--color-highlight-2)',
    },
    {
      id: 'el-pollo-loco',
      title: 'El Pollo Loco',
      description: {
        en: 'A jump-and-run game built with vanilla JavaScript and HTML Canvas. Help Pepe collect coins and dodge enemies in this fun browser game.',
        de: 'Ein Jump-and-Run-Spiel mit Vanilla JavaScript und HTML Canvas. Hilf Pepe Münzen zu sammeln und Gegnern auszuweichen in diesem spassigen Browser-Spiel.',
      },
      tech: ['JavaScript', 'HTML', 'CSS', 'Canvas'],
      liveUrl: '#',
      repoUrl: '#',
      accent: 'var(--color-highlight-3)',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: {
        en: 'This very site! A responsive portfolio built with Angular, featuring smooth animations, a contact form, and a dark theme.',
        de: 'Genau diese Seite! Ein responsives Portfolio mit Angular, fliessenden Animationen, einem Kontaktformular und einem dunklen Theme.',
      },
      tech: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: '#',
      accent: 'var(--color-highlight-1)',
    },
  ];

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }
}
