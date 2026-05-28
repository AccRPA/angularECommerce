import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [    
    FormsModule, 
    ButtonModule,
    CardModule,
    RouterModule,
    AsyncPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  products$: Observable<ProductModel[] | undefined> | undefined;

  constructor(private productSrv: ProductsService,
    private cartSrv: CartService){}

  ngOnInit(){
    this.products$ = this.productSrv.getProducts();
  }

  addToCart(){
    this.cartSrv.addProduct();
  }
}
