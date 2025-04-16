import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProductcardComponent} from '../productcard/productcard.component';
import {HttpClient} from '@angular/common/http';
import {Product} from '../.interfaces/product';
import {BannerService} from '../.services/banner.service';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, ProductcardComponent, NgOptimizedImage],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent implements OnInit, OnDestroy {
  protected products : any;

  constructor(private http: HttpClient, public bannerService: BannerService) { }

  ngOnInit() {
    const images : string[] = [
      'banner/1.webp',
      'banner/2.webp',
      'banner/3.webp',
      'banner/4.webp',
      'banner/5.webp',
      'banner/6.webp',
    ];
    const interval : number = 10000;
    this.bannerService.init(images, interval);

    this.getProducts();
  }

  ngOnDestroy() {
    this.bannerService.ngOnDestroy();
  }

  getProducts() {
    this.http.get<Product[]>('http://localhost:8000/catalog/products/').subscribe((response: Product[]) => {
      this.products = response;
    });
  }
}
