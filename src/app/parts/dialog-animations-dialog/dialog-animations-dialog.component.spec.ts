import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnimationsDialogComponent } from './dialog-animations-dialog.component';

describe('DialogAnimationsDialogComponent', () => {
  let component: DialogAnimationsDialogComponent;
  let fixture: ComponentFixture<DialogAnimationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnimationsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAnimationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
