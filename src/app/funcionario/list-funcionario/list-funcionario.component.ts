import { Component, OnInit } from '@angular/core';
import { ListFuncionarioService } from './list-funcionario.service';
import { Funcionario } from '../model/model-funcionario';
import { PoTableColumn } from '@portinari/portinari-ui';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})

export class ListFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []
  funcionario: Funcionario;
  func: Observable<Funcionario[]>

  columns: Array<PoTableColumn>;

  constructor(private funcionarioService: ListFuncionarioService) { }

  ngOnInit() {
    this.funcionarioService.ListFuncionario()
      .subscribe(func => {
        this.funcionarios = func;

        for (const funcionario of this.funcionarios) {
          funcionario.descricaoCargo = funcionario.cargo.descricao;
        }

      });

    this.columns = this.funcionarioService.getColumns();
  }

}
