import { PedidoRepository } from '../../../adapter/driven/infra/PedidoRepository';
import { Pedido } from '../../domain/models/Pedido';
export class PedidoService {
  async enviarPedido(pedido:Pedido) {
    await new PedidoRepository().salvar(pedido);
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
}
