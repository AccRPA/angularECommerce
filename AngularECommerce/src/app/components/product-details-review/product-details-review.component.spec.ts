import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsReviewComponent } from './product-details-review.component';

describe('ProductDetailsReviewComponent', () => {
  let component: ProductDetailsReviewComponent;
  let fixture: ComponentFixture<ProductDetailsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
