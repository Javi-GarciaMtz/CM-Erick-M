import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTypesAmenitiesComponent } from './property-types-amenities.component';

describe('PropertyTypesAmenitiesComponent', () => {
  let component: PropertyTypesAmenitiesComponent;
  let fixture: ComponentFixture<PropertyTypesAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyTypesAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTypesAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
