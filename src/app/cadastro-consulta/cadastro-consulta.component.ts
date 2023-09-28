import { Component } from '@angular/core';
import { AgendamentosService } from '../services/agendamentos.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Agendamento } from '../models/agendamento';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
})
export class CadastroConsultaComponent {

  form = this.fb.group({
    key: this.fb.control<string|null>(null),
    keyUsuario: this.fb.control<string|null>(null),
    data: this.fb.control<Date|null>(null, [Validators.required]),
    local: this.fb.control<string|null>(null, [Validators.required]),
    descricao: this.fb.control<string|null>(null, [Validators.required, Validators.minLength(10)]),
  });

  constructor(private service:AgendamentosService, private fb:FormBuilder, private _snackBar: MatSnackBar){}


  salvar(){
    if(this.form.invalid){
      this._snackBar.open("Campos obrigatórios não informados","");
    }

    var registro = {...this.form.value} as any;
    registro.data = registro.data.toString();

    console.log(this.form.value);

    this.service.submit(registro).subscribe(resp => {
      console.log(resp);
    });
  }
}
