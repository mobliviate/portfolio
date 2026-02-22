import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PROJECTS, ProjectDetail } from '../../shared/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective, RouterLink],
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
    details: { en: 'Project details', de: 'Projektdetails' },
  };

  projects: ProjectDetail[] = PROJECTS;

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }
}
