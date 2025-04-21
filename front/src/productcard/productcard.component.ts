import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../.interfaces/product';
import {CartService} from '../.services/cart.service';
import {ReviewService} from '../.services/review.service';

@Component({
  selector: 'app-productcard',
  imports: [CommonModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent implements OnInit {
  @Input() product!: Product;
  protected readonly decodeURIComponent = decodeURIComponent;

  avgRating: number = 0;
  reviewsCount: number = 0;

  constructor(protected cartService: CartService, protected reviewService: ReviewService) { }

  async ngOnInit() {
    let reviews = await this.reviewService.getReviews("" + this.product.id);
    this.reviewsCount = reviews.length;
    let sum = 0;

    for (let review of reviews) {
      sum += review.rating;
    }

    this.avgRating = this.reviewsCount > 0 ? sum / this.reviewsCount : 0;
    this.avgRating = Math.round(this.avgRating * 10) / 10;
  }
}
