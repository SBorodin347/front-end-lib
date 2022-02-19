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

  //ULOHA 1
  dec: number = 0;
  public prevod(e:any): void{
    this.dec = e.target.value;
  }

  public dec2bin(){
    return (this.dec >>> 0).toString(2);
  }

  bin: number = 0;
  checkCheckBoxvalue(event: any){
    if(event.target.checked) {
      this.bin = parseInt(event.target.value);
      this.dec += this.bin;
      console.log(this.bin);
    }
    console.log(event.target.checked)
  }



}
