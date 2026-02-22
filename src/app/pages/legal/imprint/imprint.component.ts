import { Component, inject } from '@angular/core';
import { LocaleService } from '../../../shared/services/locale.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  locale = inject(LocaleService);

  labels: Record<string, Record<string, string>> = {
    title: { en: 'Imprint', de: 'Impressum' },
    address: { en: 'Address', de: 'Adresse' },
    contact: { en: 'Contact', de: 'Kontakt' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }
}
