import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../.interfaces/product';
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

  async addToBasket(product: Product) {
    return await firstValueFrom(this.http.post(`${this.baseUrl}`, product)); // product or id?
  }

  async removeFromBasket(productId: number) {
    return await firstValueFrom(this.http.delete(`${this.baseUrl}${productId}/`)); // product or id?
  }
}
