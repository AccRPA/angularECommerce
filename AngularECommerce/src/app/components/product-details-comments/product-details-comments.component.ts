import { Component, Input } from '@angular/core';
import { ProductDetailsModel } from '../../models/product-details.model';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'product-details-comments',
  imports: [
    FormsModule,
    CardModule,
    RatingModule
  ],
  templateUrl: './product-details-comments.component.html',
  styleUrl: './product-details-comments.component.sass'
})
export class ProductDetailsCommentsComponent {
  @Input() details: ProductDetailsModel | undefined;
}
