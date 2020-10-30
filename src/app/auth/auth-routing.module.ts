import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Componentes
import { LoginComponent } from './login/login.component';
import { RestoreComponent } from './restore/restore.component';
import { PassEnvComponent } from './pass-env/pass-env.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { RestablishedComponent } from './restablished/restablished.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'restore', component: RestoreComponent},
  {path: 'sent', component: PassEnvComponent},
  {path: 'new-pass', component: NewPassComponent},
  {path: 'res', component: RestablishedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
