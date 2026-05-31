import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductDetailsModel } from '../../models/product-details.model';
import { GalleriaModule } from 'primeng/galleria';
import { SkeletonModule } from 'primeng/skeleton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart.service';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-product-details',
  imports: [
    AsyncPipe,
    RouterLink,
    FormsModule,
    GalleriaModule,
    SkeletonModule,
    CurrencyPipe,
    RatingModule,
    ButtonModule,
    PanelModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.sass'
})
export class ProductDetailsComponent implements OnInit {

  public productDetail$: Observable<ProductDetailsModel> | undefined;
  private subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
    private productSrv: ProductsService,
    private cartSrv: CartService){
  }

  ngOnInit(){
    // get the id from the url
    this.subscription = this.route.params.subscribe(params => {
      this.productDetail$ = this.productSrv.getProductDetails(params['id']);
    });
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

  addToCart(){
    this.cartSrv.addProduct();
  }
}
