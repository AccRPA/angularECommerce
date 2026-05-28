import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProductDetailsModel } from '../../models/product-details.model';

@Component({
  selector: 'app-product-details',
  imports: [
    JsonPipe,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.sass'
})
export class ProductDetailsComponent implements OnInit {

  public productDetail$: Observable<ProductDetailsModel> | undefined;

  constructor(private route: ActivatedRoute,
    private productSrv: ProductsService){
  }

  ngOnInit(){
    // get the id from the url
    this.route.params.subscribe(params => {
      this.productDetail$ = this.productSrv.getProductDetails(params['id']);
    });
  }
}
