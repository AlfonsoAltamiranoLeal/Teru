import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material  */
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  exports : [MatSliderModule]
})
export class SharedModule { }

