import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [    
    FormsModule, 
    ButtonModule,
    CardModule,
    RouterModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  products: ProductModel[] | undefined = [];
  
  constructor(private productSrv: ProductsService,
    private cartSrv: CartService){}

  ngOnInit(){
    this.productSrv.getProducts().subscribe((products) => this.products = products.products);
  }

  addToCart(){
    this.cartSrv.addProduct();
  }
}
