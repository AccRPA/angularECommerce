import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { ProductDetailsModel } from '../models/product-details.model';
import { response } from 'express';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductModel[] | undefined>{
    return this.httpClient.get<ProductsModel>('https://dummyjson.com/products?limit=0&skip=0')
    .pipe(
      map((response: ProductsModel) => response.products)
    );
  }

  getProductDetails(id: string): Observable<ProductDetailsModel>{
    return this.httpClient.get<ProductDetailsModel>('https://dummyjson.com/products/' + id);
  }
}
