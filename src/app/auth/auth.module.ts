import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

// Importando modulo de ngModel para uso de formularios
import { FormsModule} from '@angular/forms';

// FormControl
import { ReactiveFormsModule } from '@angular/forms';

// matirial
import {MaterialModule} from '../material/material.module';
import { InicioCComponent } from './inicio-c/inicio-c.component';
import { IconoComponent } from './icono/icono.component';
import { RestoreComponent } from './restore/restore.component';
import { FootComponent } from './foot/foot.component';
import { ResPasComponent } from './res-pas/res-pas.component';
import { PassEnvComponent } from './pass-env/pass-env.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { RestablishedComponent } from './restablished/restablished.component';



@NgModule({
  declarations: [
    LoginComponent,
    InicioCComponent,
    IconoComponent,
    RestoreComponent,
    FootComponent,
    ResPasComponent,
    PassEnvComponent,
    NewPassComponent,
    RestablishedComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
