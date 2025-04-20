import { Injectable } from '@angular/core';
import {Product} from '../.interfaces/product';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl = 'http://localhost:8000/catalog';

  constructor(private http: HttpClient) {}

  async getProducts() {
    return await firstValueFrom(this.http.get<Product[]>(`${this.baseUrl}/products/`));
  }

  async getProductsForCategory(category: string) {
    return await firstValueFrom(this.http.get<Product[]>(`${this.baseUrl}/categories/${category}/products/`));
  }

  async getProduct(id: string) {
    return await firstValueFrom(this.http.get<Product>(`${this.baseUrl}/products/${id}/`));
  }
}
