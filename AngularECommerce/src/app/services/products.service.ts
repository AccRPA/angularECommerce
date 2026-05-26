import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ProductsModel } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductsModel>{
    return this.httpClient.get<ProductsModel>('https://dummyjson.com/products')
    .pipe(
      map((response) => response)
    );
  }
}
