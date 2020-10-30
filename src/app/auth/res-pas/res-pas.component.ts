import { Component, OnInit } from '@angular/core';
// FormControl y VAlidaciones
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-res-pas',
  templateUrl: './res-pas.component.html',
  styleUrls: ['./res-pas.component.scss']
})
export class ResPasComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  Send = true;
  constructor() { }

  Color(): boolean{
    this.Send = !this.Send;
    return this.Send;
  }

  ngOnInit(): void {
  }

}
