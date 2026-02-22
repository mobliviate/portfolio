import { Injectable } from '@angular/core';

export type Locale = 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly STORE_KEY = 'mo-locale';
  current: Locale;

  constructor() {
    this.current = this.restore();
  }

  toggle(): void {
    this.set(this.current === 'en' ? 'de' : 'en');
  }

  set(locale: Locale): void {
    this.current = locale;
    localStorage.setItem(this.STORE_KEY, locale);
  }

  private restore(): Locale {
    const stored = localStorage.getItem(this.STORE_KEY);
    return stored === 'en' || stored === 'de' ? stored : 'en';
  }
}
