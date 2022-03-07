import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingStrankaComponent } from './borrowing-stranka.component';

describe('BorrowingStrankaComponent', () => {
  let component: BorrowingStrankaComponent;
  let fixture: ComponentFixture<BorrowingStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
