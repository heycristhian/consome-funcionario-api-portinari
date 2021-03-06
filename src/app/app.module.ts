import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui/'
import { RouterModule } from '@angular/router';
import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { AppRoutingModule } from './app-routing.module';
import { FormFuncionarioComponent } from './funcionario/form-funcionario/form-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFuncionarioComponent,
    FormFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
