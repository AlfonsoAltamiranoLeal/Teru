import { Component, OnInit } from '@angular/core';
// FormControl y VAlidaciones
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {

  pass = new FormControl('', [Validators.required]);
  pass2 = new FormControl('', [Validators.required]);

  passOnOff = true;
  passOnOff2 = true;
  Reset = true;
  Show = 'Show';
  Show2 = 'Show';
  Pass = true;
  Pass2 = true;
  PassSt = '';
  PassSt2 = '';

  lookPass(): boolean {
    this.passOnOff = !this.passOnOff;
    if ( this.passOnOff === false)
    {
      this.Show = 'Hide';
    }else{
      this.Show = 'Show';
    }

    return this.passOnOff;
  }

  lookPass2(): boolean {
    this.passOnOff2 = !this.passOnOff2;
    if ( this.passOnOff2 === false)
    {
      this.Show2 = 'Hide';
    }else{
      this.Show2 = 'Show';
    }

    return this.passOnOff2;
  }

  Color(): boolean{
    this.Reset = !this.Reset;
    return this.Reset;
  }

  ComparaPass(): boolean{
    if ( this.PassSt.length < 8){
      return this.Pass = !this.Pass;
    }
    for ( let i: number = this.PassSt.length ; i === 0; i-- ){
      if (this.PassSt[i] !== this.PassSt2[i]){
        return this.Pass2 = false;
      }
    }
    this.Pass = true;
    this.Pass2 = true;
    if ( this.Pass === true && this.Pass2 === true){
      return true;
    }else{
      return false;
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
