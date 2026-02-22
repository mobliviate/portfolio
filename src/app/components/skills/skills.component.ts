import { Component, inject } from '@angular/core';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  locale = inject(LocaleService);
  stickerState: 'default' | 'transition' | 'final' = 'default';

  skills = [
    { name: 'HTML', icon: '/assets/05_Skills/HTML.png' },
    { name: 'CSS', icon: '/assets/05_Skills/CSS.png' },
    { name: 'JavaScript', icon: '/assets/05_Skills/Js.png' },
    { name: 'TypeScript', icon: '/assets/05_Skills/Ts.png' },
    { name: 'Angular', icon: '/assets/05_Skills/Angular.png' },
    { name: 'Firebase', icon: '/assets/05_Skills/Firebase.png' },
    { name: 'Git', icon: '/assets/05_Skills/Git.png' },
    { name: 'REST-API', icon: '/assets/05_Skills/Rest-Api.png' },
    { name: 'Scrum', icon: '/assets/05_Skills/Scrum.png' },
    { name: 'Material Design', icon: '/assets/05_Skills/Material Design.png' },
  ];

  labels: Record<string, Record<string, string>> = {
    subtitle: { en: 'MY STACK', de: 'MEIN STACK' },
    title: { en: 'Skill set', de: 'Skill set' },
    description: {
      en: 'A short introduction of your skills. Highlight your experience of using different front-end technologies and emphasise your openness to learning and adapting to new technologies.',
      de: 'Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Frontend-Technologien und Konzepten. Ich bin stets offen, neue Technologien zu erlernen und mich an sie anzupassen.',
    },
    stickerHeading: {
      en: 'Also, I\'m interested in diving into:',
      de: 'Ausserdem interessiere ich mich für:',
    },
    stickerPull: { en: 'Pull to<br>peel', de: 'Ziehen zum<br>abziehen' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  peelSticker(): void {
    if (this.stickerState === 'default') {
      this.stickerState = 'transition';
      setTimeout(() => {
        this.stickerState = 'final';
      }, 300);
    } else if (this.stickerState === 'final') {
      this.stickerState = 'default';
    }
  }
}
