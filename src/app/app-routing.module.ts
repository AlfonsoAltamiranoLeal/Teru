import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Coponesntes
import { HeadComponent } from './head/head.component';
/**  */
const routes: Routes = [
  { path: 'head' , component: HeadComponent},
  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
