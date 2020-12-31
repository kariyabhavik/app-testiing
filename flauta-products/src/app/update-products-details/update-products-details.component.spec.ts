import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductsDetailsComponent } from './update-products-details.component';

describe('UpdateProductsDetailsComponent', () => {
  let component: UpdateProductsDetailsComponent;
  let fixture: ComponentFixture<UpdateProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
