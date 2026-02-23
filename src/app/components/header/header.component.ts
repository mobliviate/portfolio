import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LocaleService } from '../../shared/services/locale.service';
import { MobileNavService } from '../../shared/services/mobile-nav.service';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  locale = inject(LocaleService);
  mobileNav = inject(MobileNavService);
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
    this.router.navigate(['/'], { fragment: section }).then(() => {
      setTimeout(() => this.scroller.scrollToAnchor(section), 120);
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 620 && this.mobileNav.isOpen()) {
      this.mobileNav.close();
    }
  }
}
