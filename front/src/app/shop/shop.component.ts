import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ProductcardComponent} from '../productcard/productcard.component';

@Component({
  selector: 'app-shop',
  imports: [NgOptimizedImage, ProductcardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent implements OnInit, OnDestroy {
  currentImageIndex = 0
  private intervalId: any
  images: string[] = [
    'banner/1.webp',
    'banner/2.webp',
    'banner/3.webp',
    'banner/4.webp',
    'banner/5.webp',
    'banner/6.webp',
  ];

  ngOnInit() {
    // this.startSlideshow()
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  ngOnDestroy() {
    // this.stopSlideshow()
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  stopSlideshow() {
    clearInterval(this.intervalId);
  }


  private handleVisibilityChange = () => {
    if (document.hidden) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  };
}
