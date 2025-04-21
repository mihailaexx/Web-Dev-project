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
    try {
      return await firstValueFrom(this.http.get<Product[]>(`${this.baseUrl}/products/`));
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProductsForCategory(category: string) {
    try {
      return await firstValueFrom(this.http.get<Product[]>(`${this.baseUrl}/categories/${category}/products/`));
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      throw error;
    }
  }

  async getProduct(id: string) {
    try {
      return await firstValueFrom(this.http.get<Product>(`${this.baseUrl}/products/${id}/`));
    } catch (error) {
      console.error(`Failed to fetch product with ID ${id}:`, error);
      throw error;
    }
  }
}
