import { Component, Input } from '@angular/core';
import { ProductDetailsModel } from '../../models/product-details.model';

@Component({
  selector: 'product-details-review',
  imports: [],
  templateUrl: './product-details-review.component.html',
  styleUrl: './product-details-review.component.sass'
})
export class ProductDetailsReviewComponent {
  @Input() details: ProductDetailsModel | undefined;
}
