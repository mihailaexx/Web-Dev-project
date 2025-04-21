import {Component, OnInit} from '@angular/core';
import {ProductcardComponent} from '../productcard/productcard.component';
import {CommonModule} from '@angular/common';
import {AuthService} from '../auth/auth.service';
import {LoginaskComponent} from '../loginask/loginask.component';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, ProductcardComponent, LoginaskComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})

export class FavoritesComponent implements OnInit {
  protected favorites : any;

  constructor(protected authService: AuthService) { }

  ngOnInit() {

  }

}
