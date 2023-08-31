import { IPedidoRepository } from '../../../core/applications/ports/IPedidoRepository';
import { Pedido } from '../../../core/domain/models/Pedido';
import { prisma } from '../../../../../config/database';
import { ListagemPedidos } from '../../../core/domain/models/ListagemPedidos';
export class PedidoRepository implements IPedidoRepository {
  async listagemFilas(): Promise<any> {
    try {
      let listaFila = await prisma.fila.findMany();
      return listaFila;
    } catch (error: any) {
      console.log('error', error);
    }
  }
  async trocarStatusFila(id: number, status: string): Promise<void> {
    // recebido
    // em preparação
    // pronto
    // finalizado

    try {
      let fila = await prisma.fila.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });
      await prisma.pedido.update({
        where: {
          id: fila.pedidoId,
        },
        data: {
          status: fila.status,
        },
      });
    } catch (error: any) {
      console.log('error', error);
    }
  }
  async enviarParaFila(pedido: Pedido): Promise<void> {
    try {
      await prisma.fila.create({
        data: {
          pedidoId: pedido.id ? pedido.id : 0,
          status: pedido.status,
          usuarioId: pedido.usuario.id,
        },
      });
    } catch (error: any) {
      console.log('error', error);
    }
  }
  async listarPorStatus(status: string[]): Promise<any> {
    try {
      let listaPedidos = await prisma.pedido.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
        where: {
          status: { in: status },
        },
      });
      return listaPedidos;
    } catch (error: any) {
      console.log('error', error);
    }
  }
  async listar() {
    try {
      let pedidos = await prisma.pedido.findMany({
        where: {
          AND: [
            {
              status: {
                not: 'Finalizado',
              },
            },
            {
              status: {
                not: 'finalizado',
              },
            },
          ],
        },
      });
      let pedidoProduto = await prisma.pedidoProduto.findMany();
      let pedidosObj: ListagemPedidos[] = [];
      for (let item of pedidos) {
        let produtos: Array<any> = [];
        for (let item2 of pedidoProduto) {
          if (item.id == item2.pedidoId) {
            let produto = await prisma.produto.findUnique({
              where: {
                id: item2.produtoId,
              },
            });
            produtos.push(produto);
          }
        }
        pedidosObj.push({
          id: item.id,
          status: item.status,
          usuarioId: item.usuarioId ? item.usuarioId : 0,
          produtos: produtos,
          tempoEspera: item.tempoEspera ? item.tempoEspera : 0,
          total: item.total ? item.total : 0,
        });
      }
      let pronto = pedidosObj.filter(
        (el) => el.status.toUpperCase() == 'PRONTO'
      );
      let recebido = pedidosObj.filter(
        (el) => el.status.toUpperCase() == 'RECEBIDO'
      );
      let emPreparação = pedidosObj.filter(
        (el) => el.status.toUpperCase() == 'EM PREPARAÇÃO'
      );
      let returnPedidosObj = pronto.concat(emPreparação, recebido);
      return returnPedidosObj;
      // return pedidosObj;
    } catch (error: any) {}
  }
  async salvar(pedido: Pedido): Promise<any> {
    try {
      let pedidoInsert = await prisma.pedido.create({
        data: {
          status: pedido.status,
          usuarioId: pedido.usuario.id,
          total: pedido.total,
          tempoEspera: pedido.tempoEspera,
        },
      });

      for (let pedidoProduto of pedido.produto) {
        if (pedidoProduto.id != undefined) {
          await prisma.pedidoProduto.create({
            data: {
              pedidoId: pedidoInsert.id,
              produtoId: pedidoProduto.id,
              quantidade: pedidoProduto.quantidade,
            },
          });
        }
      }

      pedido.id = pedidoInsert.id;
      await this.enviarParaFila(pedido);
      await this.criarPagamento(pedido);
      let retorno = {
        tempoEspera: pedido.tempoEspera,
        status: pedido.status,
        codigo: pedido.id,
      };
      return retorno;
    } catch (error: any) {
      console.log(error);
    }
  }
  async criarPagamento(pedido: Pedido): Promise<void> {
    try {
      await prisma.pagamento.create({
        data: {
          pedidoId: pedido.id ? pedido.id : 0,
          valor: pedido.total ? pedido.total : 0,
          status: 'Pendente',
          usuarioId: pedido.usuario.id,
        },
      });
    } catch (error: any) {
      console.log('error', error);
    }
  }
}
