import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private counterValue = 0;
  private counterBs = new BehaviorSubject<number>(this.counterValue);

  constructor() { }

  getCounter(){
    return this.counterBs;
  }

  addProduct(){
    this.counterBs.next(++this.counterValue);
  }

  removeProduct(){
    this.counterBs.next(--this.counterValue);
  }
}
