import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [NgOptimizedImage],
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
    this.startSlideshow()
  }

  ngOnDestroy() {
    this.stopSlideshow()
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
}
