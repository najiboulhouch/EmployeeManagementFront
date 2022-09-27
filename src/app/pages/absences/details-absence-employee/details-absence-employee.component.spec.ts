import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAbsenceEmployeeComponent } from './details-absence-employee.component';

describe('DetailsAbsenceEmployeeComponent', () => {
  let component: DetailsAbsenceEmployeeComponent;
  let fixture: ComponentFixture<DetailsAbsenceEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAbsenceEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAbsenceEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
