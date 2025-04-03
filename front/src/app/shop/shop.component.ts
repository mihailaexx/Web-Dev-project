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
    'IMG_6435-1.jpg',
    'IMG_7960.jpg',
    'IMG_8074.jpg',
    'IMG_8198.jpg',
    'IMG_8202.jpg',
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

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopSlideshow() {
    clearInterval(this.intervalId);
  }
}
