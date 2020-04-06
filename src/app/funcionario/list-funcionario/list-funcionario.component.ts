import { Component, OnInit } from '@angular/core';
import { ListFuncionarioService } from './list-funcionario.service';
import { Funcionario } from '../model/model-funcionario';
import { PoTableColumn } from '@portinari/portinari-ui';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})

export class ListFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = []

  columns: Array<PoTableColumn>;
  
  constructor(private funcionarioService: ListFuncionarioService) { }

  ngOnInit() {
    this.funcionarioService.ListFuncionario()
    .subscribe(func => {
      this.funcionarios = func;
      console.log(func);
    });

    this.columns = this.funcionarioService.getColumns();
  }

}
