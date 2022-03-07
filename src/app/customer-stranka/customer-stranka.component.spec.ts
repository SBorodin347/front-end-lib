import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CustomerStrankaComponent} from "./customer-stranka.component";


describe('CustomerStrankaComponent', () => {
  let component: CustomerStrankaComponent;
  let fixture: ComponentFixture<CustomerStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerStrankaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
