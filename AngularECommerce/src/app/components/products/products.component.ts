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
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-products',
  imports: [    
    FormsModule, 
    ButtonModule,
    CardModule,
    RouterModule,
    AsyncPipe,
    PaginatorModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  products$: Observable<ProductModel[] | undefined> | undefined;
  first: number = 0;
  rows: number = 10;
  page: number = 0;
  rowsPerPage = [10, 20, 30];

  constructor(private productSrv: ProductsService,
    private cartSrv: CartService){}

  ngOnInit(){
    this.setProducts();
  }

  addToCart(){
    this.cartSrv.addProduct();
  }

  onPageChange(event: PaginatorState){
    this.first = event.first || 0;
    this.rows = event.rows || 0;
    this.page = event.page || 0;
    this.setProducts();
  }
  
  private setProducts(){
    this.products$ = this.productSrv.getProducts(this.rows, this.rows * this.page);
  }
}
