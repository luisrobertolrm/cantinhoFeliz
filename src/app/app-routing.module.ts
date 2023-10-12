import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'consulta-cadastro', pathMatch:'full'},
  {path:'consulta-cadastro', component: DashboardComponent},
  {path:'aut',loadChildren: () => import('./auth/auth.module').then(s => s.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
