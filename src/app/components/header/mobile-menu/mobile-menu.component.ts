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

  goTo(section: string): void {
    this.nav.close();
    this.router.navigate(['/'], { fragment: section }).then(() => {
      setTimeout(() => this.scroller.scrollToAnchor(section), 120);
    });
  }
}
