import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private baseUrl = 'http://localhost:8000/cart/items/';

  constructor(private http: HttpClient) { }

  async getBasketItems() {
    return await firstValueFrom(this.http.get(`${this.baseUrl}`));
  }

  async addToBasket(productId: number) {
    try {
      return await firstValueFrom(this.http.post(`${this.baseUrl}`, productId));
    } catch (error) {
      console.error('Error adding to basket:', error);
      throw error;
    }
  }

  async removeFromBasket(productId: number) {
    try {
      return await firstValueFrom(this.http.delete(`${this.baseUrl}${productId}/`));
    } catch (error) {
      console.error('Error removing from basket:', error);
      throw error;
    }
  }
}
