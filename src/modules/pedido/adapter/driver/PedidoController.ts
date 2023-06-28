import { Pedido } from '../../core/domain/models/Pedido';
import { PedidoService } from '../../core/applications/services/PedidoService';
import { Usuario } from '../../../usuario/core/domain/models/Usuario';
import { Produto } from '../../../produto/core/domain/models/Produto';
import { Response } from 'express';
import { obterValoresToken } from '../../../usuario/core/domain/valueObjects/obterValoresToken';
export class PedidoController {
  async enviarPedido(
    token: any,
    produto: Array<Produto>,
    tempoEspera: number,
    res: Response
  ) {
    let valores = new obterValoresToken();
    let usuario: any = valores.obterInformacoesToken(token);
    let pedido: Pedido = new Pedido(usuario, produto, tempoEspera);
    await new PedidoService().enviarPedido(pedido);
  }
}
