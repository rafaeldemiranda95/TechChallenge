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
    total: number,
    res: Response
  ) {
    let valores = new obterValoresToken();
    let usuario: any = valores.obterInformacoesToken(token);
    console.log(usuario)
    let pedido: Pedido = new Pedido(usuario, produto, tempoEspera, total);
    await new PedidoService().enviarPedido(pedido);
  }

  async listaPedidos(res: Response) {
    let pedidos = await new PedidoService().listarPedidos();
    res.status(200).send(pedidos);
  }
}
