import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMasterPlanComponent } from './property-master-plan.component';

describe('PropertyMasterPlanComponent', () => {
  let component: PropertyMasterPlanComponent;
  let fixture: ComponentFixture<PropertyMasterPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyMasterPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyMasterPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
