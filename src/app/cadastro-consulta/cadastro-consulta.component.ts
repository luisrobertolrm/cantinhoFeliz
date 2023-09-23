import { Component } from '@angular/core';
import { AgendamentosService } from '../services/agendamentos.service';
import { FormBuilder } from '@angular/forms';
import { Agendamento } from '../models/agendamento';


@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
})
export class CadastroConsultaComponent {

  form = this.fb.group({
    key: this.fb.control<string|null>(null),
    keyUsuario: this.fb.control<string|null>(null),
    data: this.fb.control<Date|null>(null),
    local: this.fb.control<string|null>(null),
    descricao: this.fb.control<string|null>(null),
  });

  constructor(private service:AgendamentosService, private fb:FormBuilder){}


  salvar(){
    console.log("teste");
    this.service.submit({data: new Date(), descricao:"teste", keyUsuario:"1", local:"teste"} as Agendamento);
  }
}
