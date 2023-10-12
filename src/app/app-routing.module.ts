import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'consulta-cadastro', pathMatch:'full'},
  {path:'consulta-cadastro',loadChildren: () => import('./private/private.module').then(s => s.PrivateModule) },
  {path:'aut',loadChildren: () => import('./auth/auth.module').then(s => s.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
