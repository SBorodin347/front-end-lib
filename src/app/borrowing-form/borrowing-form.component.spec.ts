import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingFormComponent } from './borrowing-form.component';

describe('BorrowingFormularComponent', () => {
  let component: BorrowingFormComponent;
  let fixture: ComponentFixture<BorrowingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
