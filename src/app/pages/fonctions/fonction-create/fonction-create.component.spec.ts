import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionCreateComponent } from './fonction-create.component';

describe('FonctionCreateComponent', () => {
  let component: FonctionCreateComponent;
  let fixture: ComponentFixture<FonctionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonctionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonctionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
