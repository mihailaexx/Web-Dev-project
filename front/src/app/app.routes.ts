import {Routes} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {OrdersComponent} from './orders/orders.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {ProfileComponent} from './profile/profile.component';
import {BasketComponent} from './basket/basket.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    title: 'Final project site',
  },
  {
    path: 'shop/p/:slug/',
    component: ProductdetailComponent,
    title: 'Buy :slug',
  },
  {
    path: 'profile/orders',
    component: OrdersComponent,
    title: 'Orders',
  },
  {
    path: 'profile/favorites',
    component: FavoritesComponent,
    title: 'Likes',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile Page',
  },
  {
    path: 'profile/basket',
    component: BasketComponent,
    title: 'Basket',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login Page',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page',
  }
];
