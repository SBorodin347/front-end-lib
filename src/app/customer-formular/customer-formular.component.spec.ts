import {CustomerFormularComponent} from "./customer-formular.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";


describe('CustomerFormularComponent', () => {
  let component: CustomerFormularComponent;
  let fixture: ComponentFixture<CustomerFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFormularComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture: TestBed.createComponent(CustomerFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
