import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';

const routes: Routes = [
  { path: 'list-funcionarios', component: ListFuncionarioComponent },
  //{ path: '', component: ListFuncionarioComponent },
  //{ path: 'register-funcionario', component:  },
  { path: '**', component: ListFuncionarioComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
