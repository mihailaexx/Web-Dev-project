import {Component, OnInit} from '@angular/core';
import {ProductcardComponent} from '../productcard/productcard.component';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, ProductcardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})

export class FavoritesComponent implements OnInit {
  protected favorites : any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {

  }

}
