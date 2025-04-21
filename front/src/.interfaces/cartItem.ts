import {Product} from './product';

export interface CartItem {
  id: number;
  product: number;
  quantity: number;
  productData?: Product;
}
