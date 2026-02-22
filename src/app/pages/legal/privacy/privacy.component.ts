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

  labels: Record<string, Record<string, string>> = {
    pageTitle: { en: 'Privacy Policy', de: 'Datenschutzerklärung' },

    s1Title: { en: '1. Responsible Party', de: '1. Verantwortliche Stelle' },
    s1Intro: {
      en: 'Responsible for data processing on this website:',
      de: 'Verantwortlich für die Datenbearbeitung auf dieser Website:',
    },

    s2Title: { en: '2. Principle', de: '2. Grundsatz' },
    s2Text: {
      en: 'The protection of your personal data is an important concern for us. This website does not collect, store, or process any personal data. No user tracking, analytics, cookies, or server log files are used. The website is purely informational and operates without any form of data collection.',
      de: 'Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Diese Website erhebt, speichert oder verarbeitet keinerlei personenbezogene Daten. Es werden kein User-Tracking, keine Analysetools, keine Cookies und keine Server-Logfiles eingesetzt. Die Website dient rein informativen Zwecken und funktioniert ohne jegliche Form der Datenerhebung.',
    },

    s3Title: { en: '3. Cookies', de: '3. Cookies' },
    s3Text: {
      en: 'This website does not use cookies of any kind — neither technically necessary, nor tracking, marketing, or third-party cookies.',
      de: 'Diese Website verwendet keinerlei Cookies — weder technisch notwendige noch Tracking-, Marketing- oder Drittanbieter-Cookies.',
    },

    s4Title: { en: '4. Disclosure to Third Parties', de: '4. Weitergabe an Dritte' },
    s4Text: {
      en: 'Since no personal data is collected, no data is disclosed to third parties, sold, or otherwise transferred.',
      de: 'Da keine personenbezogenen Daten erhoben werden, erfolgt auch keine Weitergabe an Dritte, kein Verkauf und keine anderweitige Übermittlung.',
    },

    s5Title: { en: '5. Hosting', de: '5. Hosting' },
    s5Text: {
      en: 'This website is hosted as a static site. No server-side processing of personal data takes place.',
      de: 'Diese Website wird als statische Seite gehostet. Es findet keine serverseitige Verarbeitung personenbezogener Daten statt.',
    },

    s6Title: { en: '6. Rights of Data Subjects', de: '6. Rechte der betroffenen Personen' },
    s6Intro: {
      en: 'Even though no personal data is collected on this website, you have the following rights under the Federal Act on Data Protection (nDSG):',
      de: 'Auch wenn auf dieser Website keine personenbezogenen Daten erhoben werden, stehen Ihnen gemäss dem Bundesgesetz über den Datenschutz (nDSG) folgende Rechte zu:',
    },
    s6Rights: {
      en: 'Right to information (Art. 25 nDSG)|Right to rectification (Art. 32 nDSG)|Right to deletion (Art. 32 nDSG)|Right to data portability|Right to lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC): www.edoeb.admin.ch',
      de: 'Auskunftsrecht (Art. 25 nDSG)|Recht auf Berichtigung (Art. 32 nDSG)|Recht auf Löschung (Art. 32 nDSG)|Recht auf Datenübertragbarkeit|Beschwerderecht beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB): www.edoeb.admin.ch',
    },

    s7Title: { en: '7. Contact', de: '7. Kontakt' },
    s7Text: {
      en: 'For questions about data protection or to exercise your rights, please contact:',
      de: 'Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:',
    },

    lastUpdated: { en: 'Last updated: February 2026', de: 'Stand: Februar 2026' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  getItems(key: string): string[] {
    return (this.labels[key]?.[this.locale.current] ?? '').split('|');
  }
}
