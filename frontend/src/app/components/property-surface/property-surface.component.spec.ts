import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySurfaceComponent } from './property-surface.component';

describe('PropertySurfaceComponent', () => {
  let component: PropertySurfaceComponent;
  let fixture: ComponentFixture<PropertySurfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySurfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
