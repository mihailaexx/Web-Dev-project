import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../.interfaces/review';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  private baseUrl = 'http://localhost:8000/catalog/products';

  constructor(private http: HttpClient) {}

  async getReviews(productId: string): Promise<Review[]> {
    return await firstValueFrom(
      this.http.get<Review[]>(`${this.baseUrl}/${productId}/reviews/`)
    );
  }

  async addReview(productId: string, review: Review): Promise<Review> {
    return await firstValueFrom(
      this.http.post<Review>(`${this.baseUrl}/${productId}/reviews/`, review)
    );
  }

  async deleteReview(productId: string, reviewId: number): Promise<void> {
    await firstValueFrom(
      this.http.delete(`${this.baseUrl}/${productId}/reviews/${reviewId}/`)
    );
  }
}
