import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: ProductModel[] = [];
  private productsBs = new BehaviorSubject<ProductModel[]>([]);
  public productsBs$ = this.productsBs.asObservable();
  
  private counterBs = new BehaviorSubject<number>(0);
  public counterBs$ = this.counterBs.asObservable();

  private totalBs = new BehaviorSubject<number>(0);
  public totalBs$ = this.totalBs.asObservable();

  constructor() { }

  getCounter(){
    return this.counterBs;
  }

  addProduct(product: ProductModel){
    // add an unique oid
    product.idInBasket = this.products.length + 1;
    this.products.push(product);
    this.updateObservables();
  }

  removeProduct(idInBasket: number){
    const index = this.products.findIndex(elem => elem.idInBasket === idInBasket);
    if (index >= 0){
      this.products = [...this.products.slice(0, index), ...this.products.slice(index + 1)];
      this.updateObservables();
    }
  }

  private updateObservables(){
    this.productsBs.next(this.products);
    this.counterBs.next(this.products.length);
    this.totalBs.next(this.products.reduce((accumulator, item) => {
      accumulator += item.price;
      return accumulator;
    }, 0))
  }
}
