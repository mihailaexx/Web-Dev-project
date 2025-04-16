import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesoffcanvasService {

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
      document.getElementById("header-categories-overlay").classList.add('overlay')
    } else {
      // @ts-ignore
      document.getElementById("header-categories-overlay").classList.remove('overlay')
    }
  }
}
