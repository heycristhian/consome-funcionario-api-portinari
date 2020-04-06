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
    {label: 'Início', action: this.onClick.bind(this) },
    {label: 'Cadastrar', action: this.onClick.bind(this)},
    {label: 'Consultar', action: this.onClick.bind(this)}
  ];

  constructor(private router: Router) { }

  private onClick() {
    this.router.navigateByUrl('list-funcionarios');
  }

}
