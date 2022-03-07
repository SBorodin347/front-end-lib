import {CustomerZoznamComponent} from "./customer-zoznam.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";

describe('CustomerZoznamComponent', () => {
  let component: CustomerZoznamComponent;
  let fixture: ComponentFixture<CustomerZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerZoznamComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
