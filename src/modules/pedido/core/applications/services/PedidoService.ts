import { PedidoRepository } from '../../../adapter/driven/infra/PedidoRepository';
import { Pedido } from '../../domain/models/Pedido';
export class PedidoService {
  async enviarPedido(pedido:Pedido) {
    await new PedidoRepository().salvar(pedido);
  }

  async listarPedidos(): Promise<any> {
    return await new PedidoRepository().listar();
  }
}
