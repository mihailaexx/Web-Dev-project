import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Final project site',
  },
  {
    path: 'shop',
    component: ShopComponent,
    title: 'Shop',
  },
  {
    path: 'shop/p/:slug',
    component: ProductdetailComponent,
    title: 'Buy :slug',
  }
  // {
  //   path: '',
  //   redirectTo: '',
  // },
];
