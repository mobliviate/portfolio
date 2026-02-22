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
    title: { en: 'Legal Notice', de: 'Impressum' },
    sectionTitle: { en: 'Imprint', de: 'Impressum' },
    contactTitle: { en: 'Exploring the Board', de: 'Exploring the Board' },
    acceptanceTitle: { en: 'Acceptance of terms', de: 'Annahme der Bedingungen' },
    scopeTitle: { en: 'Scope and ownership of the product', de: 'Umfang und Eigentum des Produkts' },
    proprietaryTitle: { en: 'Proprietary rights', de: 'Eigentumsrechte' },
    useTitle: { en: 'Use of the product', de: 'Nutzung des Produkts' },
    disclaimerTitle: {
      en: 'Disclaimer of warranties and limitation of liability',
      de: 'Gewährleistungsausschluss und Haftungsbeschränkung',
    },
    indemnityTitle: { en: 'Indemnity', de: 'Schadloshaltung' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }
}
