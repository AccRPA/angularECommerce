import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCommentsComponent } from './product-details-comments.component';

describe('ProductDetailsCommentsComponent', () => {
  let component: ProductDetailsCommentsComponent;
  let fixture: ComponentFixture<ProductDetailsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
