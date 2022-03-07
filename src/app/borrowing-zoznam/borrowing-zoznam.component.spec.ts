import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingZoznamComponent } from './borrowing-zoznam.component';

describe('BorrowingZoznamComponent', () => {
  let component: BorrowingZoznamComponent;
  let fixture: ComponentFixture<BorrowingZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowingZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
