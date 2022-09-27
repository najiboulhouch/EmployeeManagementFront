import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementListComponent } from './payement-list.component';

describe('PayementListComponent', () => {
  let component: PayementListComponent;
  let fixture: ComponentFixture<PayementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
