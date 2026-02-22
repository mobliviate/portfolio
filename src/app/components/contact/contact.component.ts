import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { StickerCircleComponent } from '../../shared/sticker-circle/sticker-circle.component';
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective, StickerCircleComponent, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  locale = inject(LocaleService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);
  private scroller = inject(ViewportScroller);

  policyAccepted = signal(false);
  submitState = signal<'idle' | 'success' | 'error'>('idle');

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(4)]],
  });

  labels: Record<string, Record<string, string>> = {
    subtitle: { en: 'CONTACT ME', de: 'KONTAKTIERE MICH' },
    title: { en: 'Ready to work together?', de: 'Bereit zusammen\u00ADzu\u00ADarbeiten?' },
    intro: {
      en: 'Got a problem to solve? Interested in working together? Feel free to reach out — I look forward to hearing from you!',
      de: 'Ein Problem zu lösen? Interesse an einer Zusammenarbeit? Melde dich gerne — ich freue mich, von dir zu hören!',
    },
    name: { en: 'What\'s your name?', de: 'Wie heisst du?' },
    namePlaceholder: { en: 'Your name goes here', de: 'Dein Name hier' },
    nameError: { en: 'Please enter your name', de: 'Bitte gib deinen Namen ein' },
    email: { en: 'What\'s your email?', de: 'Wie lautet deine E-Mail?' },
    emailPlaceholder: { en: 'youremail@email.com', de: 'deine@email.com' },
    emailError: { en: 'Please enter a valid email', de: 'Bitte gib eine gültige E-Mail ein' },
    message: { en: 'How can I help you?', de: 'Wie kann ich dir helfen?' },
    messagePlaceholder: { en: 'Hello Marc, I am interested in...', de: 'Hallo Marc, ich bin interessiert an...' },
    messageError: { en: 'Message must be at least 4 characters', de: 'Nachricht muss mindestens 4 Zeichen lang sein' },
    privacyPrefix: { en: 'I\'ve read the', de: 'Ich habe die' },
    privacyLink: { en: 'privacy policy', de: 'Datenschutzerklärung' },
    privacySuffix: {
      en: 'and agree to the processing of my data as outlined.',
      de: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
    },
    send: { en: 'Send', de: 'Senden' },
    success: { en: 'Message sent successfully!', de: 'Nachricht erfolgreich gesendet!' },
    error: { en: 'Something went wrong. Please try again.', de: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.' },
  };

  t(key: string): string {
    return this.labels[key]?.[this.locale.current] ?? '';
  }

  togglePolicy(): void {
    this.policyAccepted.update(v => !v);
  }

  get canSubmit(): boolean {
    return this.form.valid && this.policyAccepted();
  }

  onSubmit(): void {
    if (!this.canSubmit) return;

    this.http
      .post('https://formspree.io/f/mwvnrzgg', this.form.value)
      .subscribe({
        next: () => {
          this.submitState.set('success');
          this.form.reset();
          this.policyAccepted.set(false);
          setTimeout(() => this.submitState.set('idle'), 4000);
        },
        error: () => {
          this.submitState.set('error');
          setTimeout(() => this.submitState.set('idle'), 4000);
        },
      });
  }

  scrollTo(id: string): void {
    this.router.navigate(['/'], { fragment: id }).then(() => {
      setTimeout(() => this.scroller.scrollToAnchor(id), 100);
    });
  }
}
