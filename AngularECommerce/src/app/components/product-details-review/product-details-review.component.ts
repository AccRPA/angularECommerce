import { Component, Input } from '@angular/core';
import { ProductDetailsModel } from '../../models/product-details.model';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-details-review',
  imports: [   
    FormsModule, 
    RatingModule
  ],
  templateUrl: './product-details-review.component.html',
  styleUrl: './product-details-review.component.sass'
})
export class ProductDetailsReviewComponent {
  @Input() details: ProductDetailsModel | undefined;
}
