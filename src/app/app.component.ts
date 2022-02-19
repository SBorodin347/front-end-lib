import { Component, QueryList, ViewChildren, ElementRef} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

class FormControl extends AbstractControl {
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

  public dec2bin(){
    return (this.dec >>> 0).toString(2);
  }

  bin: number = 0;
  id: any;

  checkCheckBoxvalue(event: any){
    this.id = event.target.id;
    if(event.target.checked) {
      this.bin = parseInt(event.target.value);
      this.dec += this.bin;
    }else{
      this.bin = parseInt(event.target.value);
      this.dec -= this.bin;
    }
    // console.log(event.target.id);
    // this.id = document.getElementById('B1');
    // console.log(this.id.value); //value podla ID
  }

  public prevod(): void{
    let array = [];
    let binary = this.dec2bin();
    binary = binary.split("").reverse().join(""); // You need to reverse the string to get the power of 2 corresponding
    for(let i = binary.length - 1; i >= 0; i--){
      if(binary[i] == "1"){
        array.push(Math.pow(2, i));
      }
    }
    console.log(array); // Check the array

    for(let i = array.length - 1; i >= 0; i--){
      let element = <HTMLInputElement> document.getElementById(array[i].toString());
      let val = parseInt(element.value);
      console.log(i, val);
      // console.log(i, element);
      if(array[i] == val){
        element.checked = true;
        console.log(array[i], val);
      }
    }
  }

  @ViewChildren("checkboxes")
  checkboxes!: QueryList<ElementRef>;

  public reset() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.dec = 0;
  }

}
