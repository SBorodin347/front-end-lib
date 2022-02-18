import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

class FormConrol extends AbstractControl {
  patchValue(value: any, options?: Object): void {
  }

  reset(value?: any, options?: Object): void {
  }

  setValue(value: any, options?: Object): void {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priklad2';
  cenaKs: number = 0;
  mnozstvo: number = 0;
  spolu: number = 0;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      cenaKs: new FormControl(),
      mnozstvo: new FormControl()
    } )
  }

  public pracuj(): void{
    alert("Ahoj!");
  }
  public pisem1(e:any): void{
    this.cenaKs = e.target.value;
  }
  public pisem2(e:any): void {
    this.mnozstvo = e.target.value;
  }
}
