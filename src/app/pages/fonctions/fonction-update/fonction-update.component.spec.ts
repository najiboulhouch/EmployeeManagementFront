import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionUpdateComponent } from './fonction-update.component';

describe('FonctionUpdateComponent', () => {
  let component: FonctionUpdateComponent;
  let fixture: ComponentFixture<FonctionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonctionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonctionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
