import { Pedido } from '../../core/domain/models/Pedido';
import { PedidoService } from '../../core/applications/services/PedidoService';
import { ItensPedido } from '../../core/domain/models/ItensPedido';
import { Response } from 'express';
import { obterValoresToken } from '../../../usuario/core/domain/valueObjects/obterValoresToken';
export class PedidoController {
  async enviarPedido(
    token: any,
    produto: Array<ItensPedido>,
    res: Response
  ) {
    let valores = new obterValoresToken();
    let usuario: any = valores.obterInformacoesToken(token);
    if(usuario == undefined){
      res.status(401).send('Token inválido!');
      return;
    }
    let pedido: Pedido = new Pedido(usuario, produto);
    await new PedidoService().enviarPedido(pedido);
  }

  async listaPedidos(res: Response) {
    let pedidos = await new PedidoService().listarPedidos();
    res.status(200).send(pedidos);
  }
  async listaFilas(res: Response) {
    let filas = await new PedidoService().listaFilas();
    res.status(200).send(filas);
  }
  async trocarStatusFila(id: number, status: string, res: Response) {
    await new PedidoService().trocarStatusFila(id, status);
    res.status(200).send('Status da fila trocado com sucesso!');
  }
}
