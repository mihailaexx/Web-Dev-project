import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CartService} from '../.services/cart.service';
import {BasketitemComponent} from "../basketitem/basketitem.component";
import {AuthService} from '../auth/auth.service';
import {LoginaskComponent} from '../loginask/loginask.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, RouterModule, BasketitemComponent, LoginaskComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})

export class BasketComponent implements OnInit {

  protected basketItems: any = [];
  protected totalPrice: number = 0;

  constructor(private cartService: CartService, protected authService: AuthService) {  }

  async ngOnInit() {
    try {
      this.basketItems = await this.cartService.getBasketItems();
    } catch (error) {
      console.error('Error loading basket items:', error);
      this.basketItems = [];
    }
  }
}
