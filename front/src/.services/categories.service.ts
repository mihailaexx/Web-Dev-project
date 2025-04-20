import { Injectable } from '@angular/core';
import {Category} from '../.interfaces/category';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private baseUrl = 'http://localhost:8000/catalog/categories';

  constructor(private http: HttpClient) {}

  isCategoriesOpen: boolean = false;

  toggleCategories() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
    this.toggleScroll();
    this.toggleBlackout();
  }

  toggleScroll() {
    if (this.isCategoriesOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  }

  toggleBlackout() {
    if (this.isCategoriesOpen) {
      // @ts-ignore
      document.getElementById("header-categories-overlay").classList.add('overlay');
    } else {
      // @ts-ignore
      document.getElementById("header-categories-overlay").classList.remove('overlay');
    }
  }

  async getCategories() {
    return await firstValueFrom(this.http.get<Category[]>(`${this.baseUrl}/`));
  }

  async getCategory(id: string) {
    return await firstValueFrom(this.http.get<Category>(`${this.baseUrl}/${id}/`));
  }
}
