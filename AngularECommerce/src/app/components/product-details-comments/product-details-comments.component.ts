import { Component, Input } from '@angular/core';
import { ProductDetailsModel } from '../../models/product-details.model';

@Component({
  selector: 'product-details-comments',
  imports: [],
  templateUrl: './product-details-comments.component.html',
  styleUrl: './product-details-comments.component.sass'
})
export class ProductDetailsCommentsComponent {
  @Input() details: ProductDetailsModel | undefined;
}
