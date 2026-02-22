import { Component, inject, Input } from '@angular/core';
import { LocaleService } from '../services/locale.service';
import { STICKER_TEXTS, StickerVariant } from '../data/sticker-texts';

export type StickerColor = 'orange' | 'blue' | 'yellow';

type CenterImg = 'logo' | 'arrow';

interface VariantConfig {
  textFontSize: number;
  textLetterSpacing: number;
  bottomUpsideDown: boolean;
  ringSize: number;
  ringRadius: number;
  textFill: string;
  centerImg: CenterImg;
  topTextOffset: number;
  bottomTextOffset: number;
}

@Component({
  selector: 'app-sticker-circle',
  standalone: true,
  templateUrl: './sticker-circle.component.html',
  styleUrl: './sticker-circle.component.scss',
})
export class StickerCircleComponent {
  @Input() variant: StickerVariant = 'logo';
  @Input() stickerColor: StickerColor = 'orange';
  @Input() imgWidth = 54;
  @Input() imgHeight = 56;
  @Input() topOffset = '50%';
  @Input() bottomOffset = '50%';

  private locale = inject(LocaleService);

  readonly variantConfig: Record<StickerVariant, VariantConfig> = {
    logo: {
      textFontSize: 16,
      textLetterSpacing: 1.6,
      bottomUpsideDown: true,
      ringSize: 300,
      ringRadius: 110,
      textFill: '#0E1013',
      centerImg: 'logo',
      topTextOffset: 0,
      bottomTextOffset: 0,
    },
    feature: {
      textFontSize: 30,
      textLetterSpacing: 1,
      bottomUpsideDown: false,
      ringSize: 300,
      ringRadius: 95,
      textFill: '#F8F9FA',
      centerImg: 'arrow',
      topTextOffset: 4,
      bottomTextOffset: 15,
    },
  };

  readonly stickerSrc: Record<StickerColor, string> = {
    orange: '/assets/03_Stickers/00_Round/01_Color option 1- Orange.png',
    blue: '/assets/03_Stickers/00_Round/00_Color option 1 - Blue.png',
    yellow: '/assets/03_Stickers/00_Round/02_ Color option 3 - Yellow.png',
  };

  readonly centerSrc: Record<CenterImg, string> = {
    logo: '',
    arrow: '/assets/03_Stickers/Arrow.png',
  };

  get config(): VariantConfig {
    return this.variantConfig[this.variant];
  }

  get imgSrc(): string {
    return this.stickerSrc[this.stickerColor];
  }

  get centerImgSrc(): string {
    return this.centerSrc[this.config.centerImg];
  }

  readonly uid = Math.random().toString(36).slice(2);
  get topId(): string { return `topArc-${this.uid}`; }
  get bottomId(): string { return `bottomArc-${this.uid}`; }

  get cx(): number { return this.config.ringSize / 2; }
  get cy(): number { return this.config.ringSize / 2; }

  get topTextRadius(): number {
    return this.config.ringRadius + this.config.topTextOffset;
  }

  get bottomTextRadius(): number {
    return this.config.ringRadius + this.config.bottomTextOffset;
  }

  get topArcD(): string {
    const r = this.topTextRadius;
    return `M ${this.cx - r},${this.cy} A ${r},${r} 0 0 1 ${this.cx + r},${this.cy}`;
  }

  get bottomArcD(): string {
    const r = this.bottomTextRadius;
    return `M ${this.cx - r},${this.cy} A ${r},${r} 0 0 0 ${this.cx + r},${this.cy}`;
  }

  get bottomArcFlippedD(): string {
    const r = this.bottomTextRadius;
    return `M ${this.cx + r},${this.cy} A ${r},${r} 0 0 1 ${this.cx - r},${this.cy}`;
  }

  get topText(): string {
    return STICKER_TEXTS[this.locale.current][this.variant].top;
  }

  get bottomText(): string {
    return STICKER_TEXTS[this.locale.current][this.variant].bottom;
  }
}
