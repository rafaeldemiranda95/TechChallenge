import { Usuario } from '../models/Usuario';

const jwt = require('jsonwebtoken');

export class obterValoresToken {
  // private readonly usuario: Usuario;
  // constructor(token: string) {
  //   this.usuario = this.obterInformacoesToken(token);
  // }

  public obterInformacoesToken(token: string): Usuario {
    let informacoes = jwt.verify(token, process.env.JWT_SECRET);
    if (informacoes) {
      let usuario = new Usuario(
        informacoes.nome,
        informacoes.email,
        informacoes.cpf,
        informacoes.tipo,
        informacoes.senha,
        informacoes.token
      );
      return usuario;
    } else {
      throw new Error('Token inválido');
    }
  }
}
