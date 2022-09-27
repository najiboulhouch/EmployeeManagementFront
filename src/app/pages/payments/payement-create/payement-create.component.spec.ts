import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementCreateComponent } from './payement-create.component';

describe('PayementCreateComponent', () => {
  let component: PayementCreateComponent;
  let fixture: ComponentFixture<PayementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayementCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
