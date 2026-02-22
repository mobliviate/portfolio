import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LocaleService } from '../../shared/services/locale.service';
import { IconRollDirective } from '../../shared/directives/icon-roll.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconRollDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  locale = inject(LocaleService);
  private router = inject(Router);
  private scroller = inject(ViewportScroller);

  labels: Record<string, Record<string, string>> = {
    imprint: { en: 'Legal Notice', de: 'Impressum' },
    privacy: { en: 'Privacy Policy', de: 'Datenschutz' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  goToContact(): void {
    this.router.navigate(['/'], { fragment: 'contact' }).then(() => {
      setTimeout(() => this.scroller.scrollToAnchor('contact'), 200);
    });
  }
}
