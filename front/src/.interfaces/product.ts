import {Category} from './category';

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  amount: number;
  price: number;
  discount: number;
  category: Category;
}
