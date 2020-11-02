import { Component, OnInit } from '@angular/core';
// FormControl y VAlidaciones
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent implements OnInit {

  contrasena = new FormControl('', [Validators.required, Validators.minLength(8)]);
  repetirContrasena = new FormControl('', [Validators.required, Validators.minLength(8)]);

  passOnOff = true;
  passOnOff2 = true;
  Show = 'Show';
  Show2 = 'Show';
  Pass1 = '';
  Pass2 = '';
  Iguales = false;

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


  ComparaPass(): boolean{
    console.log( this.Pass1.length );
    for ( let i = this.Pass1.length ; i > 0; i-- ){
      console.log( 'ws' );
      console.log(i);
      if (this.Pass1[(i - 1)] !== this.Pass2[(i - 1)]){
        console.log(this.Iguales);
        return this.Iguales = true;
      }
    }
    console.log(this.Iguales);
    return this.Iguales = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
