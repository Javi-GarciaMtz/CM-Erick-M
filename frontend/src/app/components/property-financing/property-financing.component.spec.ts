import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFinancingComponent } from './property-financing.component';

describe('PropertyFinancingComponent', () => {
  let component: PropertyFinancingComponent;
  let fixture: ComponentFixture<PropertyFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyFinancingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
