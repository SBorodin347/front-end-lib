import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingFormPopupComponent } from './borrowing-form-popup.component';

describe('WindowComponent', () => {
  let component: BorrowingFormPopupComponent;
  let fixture: ComponentFixture<BorrowingFormPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingFormPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
