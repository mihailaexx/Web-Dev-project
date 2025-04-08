import { Component } from '@angular/core';
import {ProductcardComponent} from '../productcard/productcard.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, ProductcardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})

export class FavoritesComponent {

}
