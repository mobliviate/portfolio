import { Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PROJECTS, ProjectDetail } from '../../shared/data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnDestroy {
  locale = inject(LocaleService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private scroller = inject(ViewportScroller);
  private destroy$ = new Subject<void>();

  project!: ProjectDetail;
  allIds = PROJECTS.map(p => p.id);

  labels: Record<string, Record<string, string>> = {
    back: { en: 'Go Back', de: 'Zurück' },
    descTitle: { en: 'What is this project?', de: 'Worum geht es?' },
    processTitle: { en: 'My approach', de: 'Mein Vorgehen' },
    durationLabel: { en: 'Duration', de: 'Dauer' },
    github: { en: 'GitHub', de: 'GitHub' },
    live: { en: 'Live Test', de: 'Live Test' },
    next: { en: 'Next Project', de: 'Nächstes Projekt' },
  };

  constructor() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = params.get('id');
      this.project = PROJECTS.find(p => p.id === id) ?? PROJECTS[0];
      window.scrollTo({ top: 0 });
    });
  }

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  goBackToOverview(): void {
    this.router.navigate(['/'], { fragment: this.project.id }).then(() => {
      setTimeout(() => this.scroller.scrollToAnchor(this.project.id), 120);
    });
  }

  nextProject(): void {
    const idx = this.allIds.indexOf(this.project.id);
    const nextId = this.allIds[(idx + 1) % this.allIds.length];
    this.router.navigate(['/projects', nextId]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
