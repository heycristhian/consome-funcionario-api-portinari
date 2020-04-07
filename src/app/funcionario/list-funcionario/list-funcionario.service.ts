import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../model/model-funcionario';
import { PoTableColumn } from '@portinari/portinari-ui';

@Injectable({
  providedIn: 'root'
})
export class ListFuncionarioService {

  constructor(private http: HttpClient) { }

  ListFuncionario() {
    return this.http
      .get<Funcionario[]>("http://localhost:8080/heycristhian-service/funcionarios");

  }

  getFuncionario(parametro: string) {
    return this.http
      .get<Object[]>("http://localhost:8080/heycristhian-service/funcionarios?consulta=" + parametro);

  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'nome', label: "Nome" },
      { property: 'cpf', label: "CPF" },
      { property: 'descricaoCargo', label: "Cargo" },
    ];
  }
}
