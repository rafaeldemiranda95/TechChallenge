import { cpf } from 'cpf-cnpj-validator'; 

export class CPF {
    public readonly value: boolean;
  
    constructor(value: string) {
        this.value = this.isValidCPF(value);
    }
  
    private isValidCPF(value: string): boolean {
        return cpf.isValid(value);
    }
  }