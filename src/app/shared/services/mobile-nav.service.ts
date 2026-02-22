import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MobileNavService {
  readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }

  close(): void {
    this.isOpen.set(false);
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
}
