import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesoffcanvasService} from '../.services/categoriesoffcanvas.service';
import {Category} from '../.interfaces/category';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  protected readonly CategoriesoffcanvasService = inject(CategoriesoffcanvasService);
  protected categories : any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get<Category[]>('http://localhost:8000/catalog/categories').subscribe((response: Category[]) => {
      this.categories = response;
    });
  }
}
