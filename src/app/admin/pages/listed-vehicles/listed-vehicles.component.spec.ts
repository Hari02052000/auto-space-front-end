import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedVehiclesComponent } from './listed-vehicles.component';

describe('ListedVehiclesComponent', () => {
  let component: ListedVehiclesComponent;
  let fixture: ComponentFixture<ListedVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListedVehiclesComponent]
    });
    fixture = TestBed.createComponent(ListedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
