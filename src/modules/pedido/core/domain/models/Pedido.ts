import { Usuario } from '../../../../usuario/core/domain/models/Usuario';
import { Produto } from '../../../../produto/core/domain/models/Produto';
export class Pedido {
  id?: number;
  usuario: Usuario;
  produto: Produto[];
  status: string;
  tempoEspera: number;
  total: number;

  constructor(usuario: Usuario, produto: Produto[], tempoEspera: number, total:number, id?: number) {
    this.produto = produto;
    this.usuario = usuario;
    this.status = 'Recebido';
    this.tempoEspera = tempoEspera;
    this.total = total;
    this.id = id;
  }
}