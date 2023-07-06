import { PedidoRepository } from '../../../adapter/driven/infra/PedidoRepository';
import { ProdutoRepository } from '../../../../produto/adapter/driven/infra/ProdutoRepository';
import { Pedido } from '../../domain/models/Pedido';
export class PedidoService {
  async enviarPedido(pedido: Pedido) {
    await this.calcularTotalPedido(pedido);
    await this.calcularTempoPreparo(pedido);
    let response = await new PedidoRepository().salvar(pedido);
    return response;
  }

  async listarPedidos(): Promise<any> {
    return await new PedidoRepository().listar();
  }

  async listaFilas(): Promise<any> {
    return await new PedidoRepository().listagemFilas();
  }

  async trocarStatusFila(id: number, status: string): Promise<void> {
    await new PedidoRepository().trocarStatusFila(id, status);
  }

  async calcularTotalPedido(pedido: Pedido): Promise<number> {
    let total = 0;
    for (let item of pedido.produto) {
      if (item.id != undefined) {
        let produto = await new ProdutoRepository().exibirPorId(item.id);
        total += produto.preco * item.quantidade;
      }
    }
    pedido.total = total;
    return total;
  }

  async calcularTempoPreparo(pedido: Pedido): Promise<number> {
    let tempo = 0;
    for (let item of pedido.produto) {
      if (item.id != undefined) {
        let produto = await new ProdutoRepository().exibirPorId(item.id);
        console.log(produto);
        if (produto.tempoPreparo)
          tempo += produto.tempoPreparo * item.quantidade;
      }
    }
    pedido.tempoEspera = tempo;
    return tempo;
  }
}
