import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../.interfaces/cartItem';
import { CartService } from '../.services/cart.service';
import { Product } from '../.interfaces/product';
import { ProductService } from '../.services/product.service';

@Component({
  selector: 'app-basketitem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basketitem.component.html',
  styleUrl: './basketitem.component.css'
})

export class BasketitemComponent implements OnInit {
  @Input() item!: CartItem;

  product?: Product;
  isLoading: boolean = true;

  constructor(protected cartService: CartService, private productService: ProductService) { }

  async ngOnInit() {
    if (!this.item || !this.item.product) {
      console.error('Invalid cart item:', this.item);
      this.isLoading = false;
      return;
    }

    try {
      let productId = this.item.product;

      this.product = await this.productService.getProduct(productId.toString());

      if (!this.product) {
        console.error('Failed to load product data for ID:', productId);
      }
    } catch (error) {
      console.error('Error loading product:', error);
    } finally {
      this.isLoading = false;
    }
  }

  getTotalPrice(): number {
    if (!this.product) return 0;
    return (this.product.price - this.product.price*this.product.discount/100) * this.item.quantity;
  }

  updateQuantity(quantity: number): void {
    if (quantity > 0) {
      this.item.quantity = quantity;
    }
  }
}
