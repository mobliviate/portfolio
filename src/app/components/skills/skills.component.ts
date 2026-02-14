import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
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
