import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../.interfaces/product';

@Component({
  selector: 'app-productcard',
  imports: [CommonModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
  @Input() product!: Product;
  protected readonly decodeURIComponent = decodeURIComponent;
}
