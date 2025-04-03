import {Routes} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {ProfileComponent} from './profile/profile.component';
import {CartComponent} from './cart/cart.component';
import {LikeComponent} from './like/like.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    title: 'Final project site',
  },
  {
    path: 'shop/p/:slug',
    component: ProductdetailComponent,
    title: 'Buy :slug',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile Page',
  },
  {
    path: 'profile/basket',
    component: CartComponent,
    title: 'Basket',
  },
  {
    path: 'profile/likes',
    component: LikeComponent,
    title: 'Likes',
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
