import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { StickerCircleComponent } from '../../shared/sticker-circle/sticker-circle.component';
import { PROJECTS, ProjectDetail } from '../../shared/data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective, RouterLink, StickerCircleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  locale = inject(LocaleService);
  projects: ProjectDetail[] = PROJECTS;

  labels: Record<string, Record<string, string>> = {
    subtitle: { en: 'MY CRAFT', de: 'MEINE ARBEIT' },
    title: { en: 'Projects', de: 'Projekte' },
    intro: {
      en: 'Encourage people to take a look and interact with your projects. Highlight your approach to creating responsive, user-friendly projects with efficient code.',
      de: 'Ermutige andere, sich deine Projekte anzusehen. Hebe deinen Ansatz hervor, responsive und nutzerfreundliche Projekte mit effizientem Code zu erstellen.',
    },
    details: { en: 'Project details', de: 'Projektdetails' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }
}
