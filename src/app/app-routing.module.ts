import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PruevasComponent } from 'src/app/pruevas/pruevas.component';

/**  */
const routes: Routes = [
  {  path: 'pruevas', component: PruevasComponent},
  {  path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
