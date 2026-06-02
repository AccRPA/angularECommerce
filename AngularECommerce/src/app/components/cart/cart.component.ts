import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cart',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    ButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent {

  public total$: Observable<number>;
  public productsInBasket$: Observable<ProductModel[]>;

  constructor(private cartSrv: CartService){
    this.total$ = this.cartSrv.counterBs$;
    this.productsInBasket$ = this.cartSrv.productsBs$;
  }

  onDeleteProductInBasket(idInBasket: number){
    this.cartSrv.removeProduct(idInBasket);
  }
}
