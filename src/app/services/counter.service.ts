import { Injectable } from '@angular/core';

export interface CounterConfig {
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  refreshRate?: number;
}

export interface CounterItem {
  label: string;
  target: number;
  icon: string;
  count: number;
  interval?: any;
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly DEFAULT_ANIMATION_DURATION = 2000;
  private readonly DEFAULT_REFRESH_RATE = 16;
  private readonly DEFAULT_THRESHOLD = 0.5;
  private readonly DEFAULT_ROOT_MARGIN = '0px 0px -10% 0px';

  getCounters(): CounterItem[] {
    return [
      {
        label: 'العقارات المُباعة',
        target: 120,
        icon: 'fa-solid fa-building-circle-check',
        count: 0,
        duration: 1800,
      },
      {
        label: 'المزادات الناجحة',
        target: 35,
        icon: 'fa-solid fa-gavel',
        count: 0,
        duration: 1500,
      },
      {
        label: 'العملاء الراضون',
        target: 500,
        icon: 'fa-solid fa-user-check',
        count: 0,
        duration: 2000,
      },
      {
        label: 'المشاريع العقارية',
        target: 18,
        icon: 'fa-solid fa-city',
        count: 0,
        duration: 1200,
      },
    ];
  }

  createIntersectionObserver(
    callback: IntersectionObserverCallback,
    config?: CounterConfig
  ): IntersectionObserver {
    return new IntersectionObserver(callback, {
      threshold: config?.threshold || this.DEFAULT_THRESHOLD,
      rootMargin: config?.rootMargin || this.DEFAULT_ROOT_MARGIN,
    });
  }

  calculateProgress(
    startTime: number,
    duration: number = this.DEFAULT_ANIMATION_DURATION
  ): { progress: number; easeProgress: number } {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Use easeOutExpo for smooth deceleration
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

    return { progress, easeProgress };
  }

  formatNumber(value: number, locale: string = 'ar-EG'): string {
    return new Intl.NumberFormat(locale).format(value);
  }
}
