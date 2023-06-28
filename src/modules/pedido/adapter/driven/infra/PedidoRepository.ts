import { IPedidoRepository } from '../../../core/applications/ports/IPedidoRepository';
import { Pedido } from '../../../core/domain/models/Pedido';
import { prisma } from '../../../../../config/database';
import { Usuario } from '../../../../usuario/core/domain/models/Usuario';
import { Produto } from '../../../../produto/core/domain/models/Produto';
import { PedidoProduto } from '../../../core/domain/models/PedidoProduto';
export class PedidoRepository implements IPedidoRepository {
  async salvar(pedido: Pedido): Promise<void> {
    await prisma.pedido.create({
      data: {
        status: pedido.status,
        tempoEspera: pedido.tempoEspera,
        usuario: {
          connect: {
            id: pedido.usuario.id,
          },
        }
        produtos:{
          create: pedido.produto.map((produto: Produto) => {
            return {
              produto: {
                connect: {
                  id: produto.id,
                },
              },
              quantidade: produto.quantidade,
            };
          })
        }
      }
    });
  }
}
