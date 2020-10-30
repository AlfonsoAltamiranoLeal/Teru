import { Component, OnInit } from '@angular/core';
// FormControl y VAlidaciones
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-c',
  templateUrl: './inicio-c.component.html',
  styleUrls: ['./inicio-c.component.scss']
})

export class InicioCComponent implements OnInit {

   // FormControl

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);

  passOnOff = true;
  Message = true;
  Show = 'Show';

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

  cleerMessage(): boolean{
    this.Message = !this.Message;
    return this.Message;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
