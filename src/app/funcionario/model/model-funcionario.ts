import { Cargo } from './model-cargo';


export interface Funcionario {

    nome:string;
    cpf:string;
    cargo: Cargo;
    descricaoCargo:string;
}