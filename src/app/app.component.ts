import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {label: 'Consultar', action: this.onClick.bind(this, 'list-funcionarios')},
    {label: 'Cadastrar', action: this.onClick.bind(this, 'form-funcionario')}
  ];

  constructor(private router: Router) { }

  private onClick(url: string) {
    this.router.navigateByUrl(url);
  }

}
