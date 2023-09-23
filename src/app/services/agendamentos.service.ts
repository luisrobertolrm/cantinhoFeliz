import { Injectable } from '@angular/core';
import { Database, child, list, push, ref, remove } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  constructor(private database: Database){}

  private carregar(): Observable<any[]> {

    var agendamentosRef:any[] = [];

    var retorno = new Observable<any[]>(obs => {

      list(child(ref(this.database), "agendamentos")).subscribe((resp: any) => {
        resp.forEach((el: any) => {
          agendamentosRef?.push({ key: el.snapshot.key, ...el.snapshot.val() });
        });

        return agendamentosRef;
      });

    });

    return retorno;
  }

  submit(value: Agendamento) {
    push(ref(this.database, "agendamentos"), value).then(resp => {
      this.carregar();
    });
  }

  excluir(item: Agendamento) {
    remove(ref(this.database, "agendamentos/" + item.key)).then(resp => {
      this.carregar();
    });
  }
}
