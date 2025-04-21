import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../.services/categories.service';
import { CommonModule } from '@angular/common';
import { Category } from '../.interfaces/category';
import {AuthService} from '../auth/auth.service';
import {LoginaskComponent} from '../loginask/loginask.component';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink, FormsModule, NgbDropdownModule, LoginaskComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  protected categories!: Category[];

  protected categoryName!: string;
  protected productName!: string;
  protected productDescription!: string;
  protected productImage: any;
  protected productAmount!: number;
  protected productPrice!: number;
  protected productDiscount!: number;
  protected productCategory: Category | undefined;

  constructor(private modalService: NgbModal, private http: HttpClient, private categoriesService: CategoriesService,
              protected authService: AuthService) {}

  async ngOnInit() {
    this.categories = await this.categoriesService.getCategories();
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, scrollable: true });
  }

  saveCategory() {
    let request = {
      "name" : this.categoryName,
    }
    this.http.post('http://localhost:8000/catalog/categories/', request).subscribe((response: any) => {
      console.log(response);
    })
  }

  saveProduct() {
    const formData = new FormData();
    formData.append('name', this.productName);
    formData.append('description', this.productDescription);
    formData.append('image', this.productImage);
    formData.append('amount', this.productAmount.toString());
    formData.append('price', this.productPrice.toString());
    formData.append('discount', this.productDiscount.toString());
    formData.append('category', this.productCategory!.id.toString());
    console.log(formData);
    this.http.post('http://localhost:8000/catalog/products/', formData).subscribe((response: any) => {
      console.log(response);
    })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.productImage = file;
    }
  }

  selectCategory(category: Category) {
    this.productCategory = category;
  }
}
