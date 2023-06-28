import { Pedido } from '../../core/domain/models/Pedido';
import { PedidoService } from '../../core/applications/services/PedidoService';
import { Usuario } from '../../../usuario/core/domain/models/Usuario';
import { Produto } from '../../../produto/core/domain/models/Produto';
import { Response } from 'express';
import { obterValoresToken } from '../../../usuario/core/domain/valueObjects/obterValoresToken';
export class PedidoController {
  async enviarPedido(
    token: any,
    produtos: Array<Produto>,
    tempoEspera: number,
    res: Response
  ) {
    let usuario: any = new obterValoresToken(token);
    let pedido: Pedido = new Pedido(usuario, produtos, tempoEspera);
    await new PedidoService().enviarPedido(pedido);
  }
}
