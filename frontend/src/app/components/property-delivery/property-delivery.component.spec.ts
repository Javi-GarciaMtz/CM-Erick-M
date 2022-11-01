import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDeliveryComponent } from './property-delivery.component';

describe('PropertyDeliveryComponent', () => {
  let component: PropertyDeliveryComponent;
  let fixture: ComponentFixture<PropertyDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
