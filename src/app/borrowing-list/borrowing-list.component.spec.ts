import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingListComponent } from './borrowing-list.component';

describe('BorrowingZoznamComponent', () => {
  let component: BorrowingListComponent;
  let fixture: ComponentFixture<BorrowingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
