import { Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {CartListComponent} from './cart-list/cart-list.component';
export const routes: Routes = [
 { path: 'productlist-component', component: ProductListComponent },  { path: 'cartlist-component', component: CartListComponent },

];
