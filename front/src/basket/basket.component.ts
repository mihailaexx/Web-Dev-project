import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CartService} from '../.services/cart.service';
import {BasketitemComponent} from "../basketitem/basketitem.component";

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, RouterModule, BasketitemComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})

export class BasketComponent implements OnInit {

  protected basketItems: any = [];
  protected totalPrice: number = 0;

  constructor(private cartService: CartService) {  }

  async ngOnInit() {
    try {
      this.basketItems = await this.cartService.getBasketItems();
      this.calculateTotalPrice();
    } catch (error) {
      console.error('Error loading basket items:', error);
      this.basketItems = [];
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.basketItems.reduce((total: number, item: any) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }
}
