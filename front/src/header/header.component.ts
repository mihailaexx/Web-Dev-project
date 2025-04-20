import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '../.services/categories.service';
import { Category } from '../.interfaces/category';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  protected categories!: Category[];

  constructor(protected categoriesService: CategoriesService) { }

  async ngOnInit() {
    this.categories = await this.categoriesService.getCategories();
  }
}
