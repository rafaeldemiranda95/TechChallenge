export class Usuario {
    nome: string;
    email: string;
    cpf: string;
    tipo?: string;
    senha?: string;
    token?: string;

  constructor(nome:string, email:string, cpf:string, tipo?:string, senha?:string, token?:string) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.tipo = tipo;
    this.senha = senha;
    this.token = token;
  }
  
}