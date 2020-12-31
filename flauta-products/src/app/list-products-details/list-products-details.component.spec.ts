import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsDetailsComponent } from './list-products-details.component';

describe('ListProductsDetailsComponent', () => {
  let component: ListProductsDetailsComponent;
  let fixture: ComponentFixture<ListProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
