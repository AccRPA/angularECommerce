import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
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
    PaginatorModule,
    SkeletonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  products$: Observable<ProductModel[] | undefined> | undefined;
  first: number;
  rows: number;
  page: number;
  total:number;
  rowsPerPage = [10, 20, 30];
  showLoader: boolean = false;

  constructor(private productSrv: ProductsService,
    private cartSrv: CartService){
      this.first = this.productSrv.getPagination()?.first;
      this.rows = this.productSrv.getPagination()?.rows;
      this.page = this.productSrv.getPagination()?.page;
      this.total = this.productSrv.getPagination()?.pageCount;
    }

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
    this.productSrv.setPagination({
      first: this.first,
      rows: this.rows,
      page: this.page,
      pageCount: this.productSrv.getPagination()?.pageCount
    });
    this.setProducts();
  }
  
  private setProducts(){
    this.products$ = this.productSrv.getCacheProducts(this.rows, this.rows * this.page, this.page);
  }
}
