import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementUpdateComponent } from './payement-update.component';

describe('PayementUpdateComponent', () => {
  let component: PayementUpdateComponent;
  let fixture: ComponentFixture<PayementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
