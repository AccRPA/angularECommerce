import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ProductDetailsModel } from '../../models/product-details.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'product-details-info',
  imports: [
    CommonModule,
    CurrencyPipe,
    ButtonModule,
    PanelModule,
  ],
  templateUrl: './product-details-info.component.html',
  styleUrl: './product-details-info.component.sass'
})
export class ProductDetailsInfoComponent {
  @Input() details: ProductDetailsModel | undefined;

  constructor(private cartSrv: CartService){}

  addToCart(){
    this.cartSrv.addProduct();
  }
}
