import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components/lib/components/po-dynamic/po-dynamic-form/po-dynamic-form-field.interface';
import { PoNotificationService, PoDynamicFormFieldChanged } from '@portinari/portinari-ui';
import { FormFuncionarioService } from './form-funcionario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent implements OnInit { 
  
  funcionario = { }

  fields: Array<PoDynamicFormField> = [
    { property: 'nome', required: true, minLength: 4, maxLength: 50, gridColumns: 6, gridSmColumns: 12 },
    { property: 'dataNascimento',
      required: true,
      label: 'Data de nascimento',
      type: 'date',
      gridColumns: 6,
      gridSmColumns: 12
    },
    { property: 'cpf', label: 'CPF', required: true, mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: true },
    { property: 'descricaoCargo', gridColumns: 6, required: true, options: [
      { label: 'DESENVOLVEDOR', value: 'DESENVOLVEDOR' },
      { label: 'ANALISTA I', value: 'ANALISTA I' },
      { label: 'ANALISTA II', value: 'ANALISTA II' },
    ]},
   
   
  ];

  constructor(public poNotification: PoNotificationService, 
    private registerService: FormFuncionarioService,
    private router: Router) { }

  ngOnInit() {
  }

  salvar(funcionario) {
    this.registerService.enviarPost(
      funcionario.nome,
      funcionario.cpf,
      funcionario.dataNascimento,
      funcionario.descricaoCargo
    ).subscribe(
      () => this.router.navigateByUrl('/list-funcionarios'),
      err => {
        console.log(err);
      }
      );
    this.poNotification.success('Funcionário cadastrado com sucesso!');
  }

  

}
