import {Routes} from '@angular/router';
import {ShopComponent} from '../shop/shop.component';
import {ProductdetailComponent} from '../productdetail/productdetail.component';
import {OrdersComponent} from '../orders/orders.component';
import {FavoritesComponent} from '../favorites/favorites.component';
import {ProfileComponent} from '../profile/profile.component';
import {BasketComponent} from '../basket/basket.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {ProductgridComponent} from '../productgrid/productgrid.component';

export const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    title: 'Final project site',
  },
  {
    path: 'product/:id',
    component: ProductdetailComponent,
    title: route => {
      const slug = route.params['slug'];
      return `Product ${slug}`;
    }
  },
  {
    path: 'category/:slug',
    component: ProductgridComponent,
    title: route => {
      const slug = route.params['slug'];
      return `Category ${slug}`;
    }
  },
  {
    path: 'profile/orders',
    component: OrdersComponent,
    title: 'My Orders',
  },
  {
    path: 'profile/favorites',
    component: FavoritesComponent,
    title: 'My Favorites',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'My Profile',
  },
  {
    path: 'profile/basket',
    component: BasketComponent,
    title: 'My Basket',
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
