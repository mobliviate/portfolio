import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  locale = inject(LocaleService);
  private scroller = inject(ViewportScroller);

  labels: Record<string, Record<string, string>> = {
    location: { en: 'Based in Emmetten', de: 'Wohnhaft in Emmetten' },
    relocate: { en: 'Open to relocate', de: 'Offen für Umzug' },
    remote: { en: 'Open to work remote', de: 'Offen für Remote-Arbeit' },
    subtitle: { en: 'WHO\'S MARC?', de: 'WER IST MARC?' },
    title: { en: 'About me', de: 'Über mich' },
    text: {
      en: 'Hey there, I\'m Marc. I\'m a passionate software engineer with a strong focus on front-end development. I enjoy creating intuitive, visually appealing interfaces using Angular and modern web technologies. My fascination with coding started at an early age, driven by the endless possibilities to build and solve problems creatively. I thrive on challenges that push me to find not just functional but elegant solutions, constantly learning new concepts and sharing ideas with other developers. Continuous improvement and curiosity keep me motivated every day in the world of IT.',
      de: 'Hallo, ich bin Marc. Ich bin ein leidenschaftlicher Software-Entwickler mit starkem Fokus auf Frontend-Entwicklung. Ich liebe es, intuitive und visuell ansprechende Oberflächen mit Angular und modernen Web-Technologien zu gestalten. Meine Faszination für das Programmieren begann früh, angetrieben von den endlosen Möglichkeiten, kreativ zu bauen und Probleme zu lösen. Ich lebe für Herausforderungen, die mich dazu bringen, nicht nur funktionale, sondern auch elegante Lösungen zu finden — immer auf der Suche nach neuen Konzepten und dem Austausch mit anderen Entwicklern. Ständige Verbesserung und Neugier motivieren mich jeden Tag in der Welt der IT.',
    },
    textSuffix: {
      en: 'Let\'s collaborate and build something remarkable together!',
      de: 'Lass uns zusammenarbeiten und etwas Grossartiges erschaffen!',
    },
    cta: { en: 'Let\'s talk', de: 'Lass uns reden' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  scrollToContact(): void {
    this.scroller.scrollToAnchor('contact');
  }
}
