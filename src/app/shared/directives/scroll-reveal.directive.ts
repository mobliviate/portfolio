import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealClass = 'revealed';
  @Input() hideClass?: string;
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => this.handleIntersection(entry),
      { threshold: 0.6 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  private handleIntersection(entry: IntersectionObserverEntry): void {
    if (entry.isIntersecting) {
      const apply = () => this.renderer.addClass(this.el.nativeElement, this.revealClass);
      this.revealDelay > 0 ? setTimeout(apply, this.revealDelay) : apply();
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.revealClass);
      if (this.hideClass) {
        this.renderer.addClass(this.el.nativeElement, this.hideClass);
      }
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
