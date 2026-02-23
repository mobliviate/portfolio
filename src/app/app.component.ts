import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor() {
    inject(ViewportScroller).setOffset([0, 80]);

    let previousUrl = '';
    inject(Router).events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    ).subscribe((e) => {
      const sameUrl = e.urlAfterRedirects === previousUrl;
      previousUrl = e.urlAfterRedirects;
      window.scrollTo({ top: 0, left: 0, behavior: sameUrl ? 'smooth' : 'instant' });
    });
  }
}
