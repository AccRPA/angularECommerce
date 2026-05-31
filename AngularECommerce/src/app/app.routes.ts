import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
