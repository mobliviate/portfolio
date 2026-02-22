import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  locale = inject(LocaleService);
  private scroller = inject(ViewportScroller);

  labels: Record<string, Record<string, string>> = {
    badge: { en: 'Hello world', de: 'Hallo Welt' },
    badgeHover: { en: 'I\'M MARC ODERMATT', de: 'MARC ODERMATT' },
    cta: { en: 'Get in Touch', de: 'Kontakt aufnehmen' },
    headlineSecondary: { en: 'DEVELOPER', de: 'ENTWICKLER' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  get secondaryLetters(): string[] {
    return this.t('headlineSecondary').split('');
  }

  scrollToContact(): void {
    this.scroller.scrollToAnchor('contact');
  }
}
