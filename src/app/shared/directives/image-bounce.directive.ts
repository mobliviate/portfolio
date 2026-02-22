import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageBounce]',
  standalone: true,
})
export class ImageBounceDirective implements OnInit, OnDestroy {
  @Input() appImageBounce = false;
  private cardElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appImageBounce) {
      this.renderer.addClass(this.el.nativeElement, 'bounce-animation');

      this.cardElement = this.el.nativeElement.closest('.showcase__card');

      if (this.cardElement) {
        this.cardElement.addEventListener('mouseenter', this.pauseAnimation);
        this.cardElement.addEventListener('mouseleave', this.resumeAnimation);
      }
    }
  }

  private pauseAnimation = () => {
    this.renderer.setStyle(this.el.nativeElement, 'animation-play-state', 'paused');
  };

  private resumeAnimation = () => {
    this.renderer.setStyle(this.el.nativeElement, 'animation-play-state', 'running');
  };

  ngOnDestroy() {
    if (this.cardElement) {
      this.cardElement.removeEventListener('mouseenter', this.pauseAnimation);
      this.cardElement.removeEventListener('mouseleave', this.resumeAnimation);
    }
    this.renderer.removeClass(this.el.nativeElement, 'bounce-animation');
  }
}
