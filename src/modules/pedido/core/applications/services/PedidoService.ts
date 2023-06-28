import { PedidoRepository } from '../../../adapter/driven/infra/PedidoRepository';
import { Pedido } from '../../domain/models/Pedido';
export class PedidoService {
  async enviarPedido(pedido:Pedido) {
    await new PedidoRepository().salvar(pedido);
  }
}
