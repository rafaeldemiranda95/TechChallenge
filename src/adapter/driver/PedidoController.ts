import { Pedido } from '../../core/domain/models/Pedido';
import { PedidoService } from '../../core/applications/services/PedidoService';
import { ItensPedido } from '../../core/domain/models/ItensPedido';
import { Response } from 'express';
import { ObterValoresToken } from '../../core/domain/valueObjects/obterValoresToken';
export class PedidoController {
  async enviarPedido(token: any, produto: Array<ItensPedido>, res: Response) {
    try {
      let valores = new ObterValoresToken();
      let usuario: any = await valores.obterInformacoesToken(token);
      if (usuario == undefined) {
        res.status(401).send('Token inválido!');
        return;
      }
      let pedido: Pedido = new Pedido(usuario, produto);
      let response = await new PedidoService().enviarPedido(pedido);
      return response;
    } catch (error) {
      res.status(400).send('Erro ao enviar pedido');
    }
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
  async statusPagamentoPedido(id: number, res: Response) {
    let statusPagamento = await new PedidoService().statusPagamentoPedido(id);
    res.status(200).send(statusPagamento);
  }
}
