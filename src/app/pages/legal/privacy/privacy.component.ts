import { Component, inject } from '@angular/core';
import { LocaleService } from '../../../shared/services/locale.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  locale = inject(LocaleService);

  content: Record<string, { title: string; text: string }[]> = {
    en: [
      { title: 'Responsible Party', text: 'Marc Odermatt, Emmetten, Switzerland. Email: info@marcodermatt.ch' },
      { title: 'Data Collection', text: 'When you visit this website, your browser automatically transmits certain data (IP address, date/time, page visited). This data is used solely for providing the website and is not stored permanently.' },
      { title: 'Contact Form', text: 'If you send a message via the contact form, the data you provide (name, email, message) will be used exclusively for processing your inquiry. Your data will not be shared with third parties.' },
      { title: 'Hosting', text: 'This website is hosted externally. The hosting provider may collect server log files containing your IP address, browser type, and access times. This is necessary for the operation of the website.' },
      { title: 'Your Rights', text: 'You have the right to request information about your stored personal data, as well as the right to correction, deletion, or restriction of processing. Contact us at info@marcodermatt.ch for any privacy-related requests.' },
    ],
    de: [
      { title: 'Verantwortliche Stelle', text: 'Marc Odermatt, Emmetten, Schweiz. E-Mail: info@marcodermatt.ch' },
      { title: 'Datenerfassung', text: 'Beim Besuch dieser Website überträgt Ihr Browser automatisch bestimmte Daten (IP-Adresse, Datum/Uhrzeit, besuchte Seite). Diese Daten dienen ausschliesslich der Bereitstellung der Website und werden nicht dauerhaft gespeichert.' },
      { title: 'Kontaktformular', text: 'Wenn Sie eine Nachricht über das Kontaktformular senden, werden die von Ihnen angegebenen Daten (Name, E-Mail, Nachricht) ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet. Ihre Daten werden nicht an Dritte weitergegeben.' },
      { title: 'Hosting', text: 'Diese Website wird extern gehostet. Der Hosting-Anbieter kann Server-Logdateien erfassen, die Ihre IP-Adresse, den Browsertyp und die Zugriffszeiten enthalten. Dies ist für den Betrieb der Website erforderlich.' },
      { title: 'Ihre Rechte', text: 'Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Kontaktieren Sie uns unter info@marcodermatt.ch für datenschutzbezogene Anfragen.' },
    ],
  };

  get sections(): { title: string; text: string }[] {
    return this.content[this.locale.current] ?? this.content['en'];
  }

  pageTitle: Record<string, string> = { en: 'Privacy Policy', de: 'Datenschutzerklärung' };
}
