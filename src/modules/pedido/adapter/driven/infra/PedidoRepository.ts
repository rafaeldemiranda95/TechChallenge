import { IPedidoRepository } from '../../../core/applications/ports/IPedidoRepository';
import { Pedido } from '../../../core/domain/models/Pedido';
import { prisma } from '../../../../../config/database';
export class PedidoRepository implements IPedidoRepository {
  async salvar(pedido: Pedido): Promise<void> {
    
  }
}
