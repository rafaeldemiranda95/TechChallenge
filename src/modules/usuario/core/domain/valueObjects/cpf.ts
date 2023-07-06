import { cpf } from 'cpf-cnpj-validator'; 

export class Cpf {
    public readonly value: boolean;
  
    constructor(value: string) {
        this.value = this.validaCPF(value);
    }
  
    private validaCPF(value: string): boolean {
        return cpf.isValid(value);
    }
  }