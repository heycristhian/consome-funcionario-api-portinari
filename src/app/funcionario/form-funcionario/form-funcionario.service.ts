import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:8080/heycristhian-service/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FormFuncionarioService {
  
  constructor(private http: HttpClient) { }

  enviarPost(nome: string, cpf: string, dataNascimento: string, descricaoCargo: string) {
    return this.http.post(url, {nome, cpf, dataNascimento, descricaoCargo})
  }
  
      

}