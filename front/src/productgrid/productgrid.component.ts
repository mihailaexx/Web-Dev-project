import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductcardComponent} from '../productcard/productcard.component';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../.services/product.service';

@Component({
  selector: 'app-productgrid',
  imports: [CommonModule, ProductcardComponent],
  templateUrl: './productgrid.component.html',
  styleUrl: './productgrid.component.css'
})

export class ProductgridComponent implements OnInit {

  private categorySlug: string = '';
  protected products : any;

  constructor(private route: ActivatedRoute, private productsService: ProductService) { }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.categorySlug = params['slug'];
      this.products = await this.productsService.getProductsForCategory(this.categorySlug);
    });
  }
}
