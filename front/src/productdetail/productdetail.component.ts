import {Component, OnInit} from '@angular/core';
import {ProductService} from '../.services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReviewService} from '../.services/review.service';
import {Product} from '../.interfaces/product';
import {Review} from '../.interfaces/review';

@Component({
  selector: 'app-productdetail',
  imports: [CommonModule],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})

export class ProductdetailComponent implements OnInit {

  private productId: string = '';
  protected product!: Product;
  protected reviews: Review[] = [];
  protected readonly decodeURIComponent = decodeURIComponent;

  constructor(private route: ActivatedRoute, private productService: ProductService, private reviewService: ReviewService) {  }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.productId = params['id'];
      this.product = await this.productService.getProduct(this.productId);
      this.reviews = await this.reviewService.getReviews(this.productId);
    });
  }
}
