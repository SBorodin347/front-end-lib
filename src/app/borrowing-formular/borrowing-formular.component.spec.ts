import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingFormularComponent } from './borrowing-formular.component';

describe('BorrowingFormularComponent', () => {
  let component: BorrowingFormularComponent;
  let fixture: ComponentFixture<BorrowingFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
