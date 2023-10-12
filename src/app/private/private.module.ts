import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossoTrabalhoComponent } from './nosso-trabalho/nosso-trabalho.component';
import { GaleriaComponent } from './galeria/galeria.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CadastroConsultaComponent,
    QuemSomosComponent,
    NossoTrabalhoComponent,
    GaleriaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
  ]
})
export class PrivateModule { }
