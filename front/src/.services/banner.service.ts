import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BannerService implements OnDestroy {
  images: string[] = [];
  private interval: number = 5000;
  currentImageIndex = 0;
  private intervalId: any;
  isBannerButtonsHover: boolean = false;

  init(images: string[], interval: number): void {
    this.images = images;
    this.interval = interval;
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.stopSlideshow();
  }

  private handleVisibilityChange = () => {
    if (document.hidden) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  };

  showBannerButtons() {
    this.isBannerButtonsHover = true;
  }

  hideBannerButtons() {
    this.isBannerButtonsHover = false;
  }

  startSlideshow() {
    this.stopSlideshow(); // Очищаем старый таймер
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
