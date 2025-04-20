import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../.interfaces/cartItem';

@Component({
  selector: 'app-basketitem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basketitem.component.html',
  styleUrl: './basketitem.component.css'
})

export class BasketitemComponent implements OnInit {
  @Input() item!: CartItem;

  constructor() { }

  ngOnInit(): void {
  }

  getTotalPrice(): number {
    return this.item.product.price * this.item.quantity;
  }

  updateQuantity(quantity: number): void {
    this.item.quantity = quantity;
  }

  removeFromBasket(): void {

  }
}
