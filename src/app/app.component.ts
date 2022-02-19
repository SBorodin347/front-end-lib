import { Component, QueryList, ViewChildren, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DECIMAL TO BINARY (a naopak)';
  dec: number = 0;
  bin: number = 0;
  id: any;

  // PREVOD DO BIN
  public dec2bin(){
    return (this.dec >>> 0).toString(2);
  }

  // ZMENA NA ZAKLADE CHECKBOXOV (BIN >> DEC)
  public checkCheckBoxvalue(event: any){
    this.id = event.target.id;
    if(event.target.checked) {
      this.bin = parseInt(event.target.value);
      this.dec += this.bin;
    }else{
      this.bin = parseInt(event.target.value);
      this.dec -= this.bin;
    }
  }

  // ZMENA NA ZAKLADE INPUTU (DEC >> BIN)
  public prevod(): void{
    let array = [];
    let binary = this.dec2bin();
    binary = binary.split("").reverse().join(""); // reverse
    for(let i = binary.length - 1; i >= 0; i--){
      if(binary[i] == "1"){
        array.push(Math.pow(2, i));
      }
    }

    for(let i = array.length - 1; i >= 0; i--){
      let element = <HTMLInputElement> document.getElementById(array[i].toString());
      let val = parseInt(element.value);
      if(array[i] == val){
        element.checked = true;
        // console.log(array[i], val);
      }
    }
  }

  @ViewChildren("checkboxes")
  checkboxes!: QueryList<ElementRef>;

  // RESET CHECKBOXOV A DEC
  public reset() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.dec = 0;
  }

}
