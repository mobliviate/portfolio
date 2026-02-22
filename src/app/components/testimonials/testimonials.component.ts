import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface Review {
  author: string;
  role: Record<string, string>;
  quote: Record<string, string>;
  linkedIn?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  locale = inject(LocaleService);

  labels: Record<string, Record<string, string>> = {
    subtitle: { en: 'IN THEIR WORDS', de: 'IN IHREN WORTEN' },
    title: { en: "Colleagues' Thoughts", de: 'Feedback von Kollegen' },
  };

  reviews: Review[] = [
    {
      author: 'Anna Müller',
      role: { en: 'Team Lead at softli.ch', de: 'Teamleiterin bei softli.ch' },
      quote: {
        en: 'Marc is a talented developer who delivers clean, well-structured code. His attention to detail and dedication to quality made a real difference in our project.',
        de: 'Marc ist ein talentierter Entwickler, der sauberen, gut strukturierten Code liefert. Seine Liebe zum Detail und sein Qualitätsanspruch haben unser Projekt wirklich bereichert.',
      },
      linkedIn: 'https://linkedin.com',
    },
    {
      author: 'Thomas Weber',
      role: { en: 'Product Owner at softli.ch', de: 'Product Owner bei softli.ch' },
      quote: {
        en: 'Working with Marc was a great experience. He understood our requirements quickly and implemented them with creativity and precision.',
        de: 'Die Zusammenarbeit mit Marc war grossartig. Er hat unsere Anforderungen schnell verstanden und mit Kreativität und Präzision umgesetzt.',
      },
      linkedIn: 'https://linkedin.com',
    },
    {
      author: 'Sarah Fischer',
      role: { en: 'UX Designer', de: 'UX Designerin' },
      quote: {
        en: 'Marc has an excellent eye for design implementation. He translated our Figma mockups into pixel-perfect, responsive interfaces effortlessly.',
        de: 'Marc hat ein hervorragendes Auge für Design-Umsetzung. Er hat unsere Figma-Entwürfe mühelos in pixelgenaue, responsive Interfaces übertragen.',
      },
    },
  ];

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  getRotation(index: number): string {
    return `rotate(${-4 + index * 4}deg)`;
  }
}
