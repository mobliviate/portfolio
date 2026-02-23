import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MobileNavService } from '../../../shared/services/mobile-nav.service';
import { LocaleService } from '../../../shared/services/locale.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  nav = inject(MobileNavService);
  locale = inject(LocaleService);
  private router = inject(Router);
  private scroller = inject(ViewportScroller);

  labels: Record<string, Record<string, string>> = {
    about: { en: 'About me', de: 'Über mich' },
    skills: { en: 'Skills', de: 'Fähigkeiten' },
    projects: { en: 'Projects', de: 'Projekte' },
    contact: { en: 'Contact', de: 'Kontakt' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  private static readonly SCROLL_OFFSET = 0;

  goTo(section: string): void {
    this.nav.close();
    const html = document.documentElement;
    html.style.scrollBehavior = 'auto';
    this.router.navigate(['/'], { fragment: section }).then(() => {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - MobileMenuComponent.SCROLL_OFFSET;
          window.scrollTo(0, Math.max(0, top));
        }
        html.style.scrollBehavior = '';
      }, 120);
    });
  }
}
