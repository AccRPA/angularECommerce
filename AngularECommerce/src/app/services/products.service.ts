import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { ProductDetailsModel } from '../models/product-details.model';
import { ProductModel } from '../models/product.model';
import { PageEventModel } from '../models/pageEvent.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private cacheProducts: ProductModel[] = [];
  private pagination: PageEventModel = {
    first: 0,
    rows: 10,
    page: 0,
    pageCount: 194
  };

  constructor(private httpClient: HttpClient) { }

  getProducts(limit: number, skip: number): Observable<ProductModel[] | undefined>{
    return this.httpClient.get<ProductsModel>('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip)
    .pipe(
      map((response: ProductsModel) => {
        this.setCacheProducts(response.products);
        return response.products;
      })
    );
  }

  getProductDetails(id: string): Observable<ProductDetailsModel>{
    return this.httpClient.get<ProductDetailsModel>('https://dummyjson.com/products/' + id);
  }

  setCacheProducts(products: ProductModel[] | undefined){
    if (products?.length){
      this.cacheProducts.push(...products);
    }
  }

  getCacheProducts(limit: number, skip: number): Observable<ProductModel[] | undefined>{
    const result = this.cacheProducts.slice(skip, skip + limit);
    if (!result?.length){
      return this.getProducts(limit, skip);
    }
    return of(result);
  }

  clearCacheProducts(){
    this.cacheProducts = [];
  }

  setPagination(page: PageEventModel){
    if (this.pagination.rows !== page.rows){
      this.clearCacheProducts();
    }
    this.pagination = page;
  }

  getPagination(){
    return this.pagination;
  }
}
