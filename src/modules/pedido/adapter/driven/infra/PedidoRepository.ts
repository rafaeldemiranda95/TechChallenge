import { IPedidoRepository } from '../../../core/applications/ports/IPedidoRepository';
import { Pedido } from '../../../core/domain/models/Pedido';
import { prisma } from '../../../../../config/database';
import { Usuario } from '../../../../usuario/core/domain/models/Usuario';
import { Produto } from '../../../../produto/core/domain/models/Produto';
import { PedidoProduto } from '../../../core/domain/models/PedidoProduto';
import { Fila } from '../../../core/domain/models/Fila';
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
      await prisma.fila.update({
        where: {
          id: id,
        },
        data: {
          status: status,
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
  async listar() {
    try {
      let pedidos = await prisma.pedido.findMany();

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
          tempoEspera: item.tempoEspera,
          total: item.total,
          usuarioId: item.usuarioId ? item.usuarioId : 0,
          produtos: produtos,
        });
      }

      return pedidosObj;
    } catch (error: any) {}
  }
  async salvar(pedido: Pedido): Promise<void> {
    try {
      let pedidoInsert = await prisma.pedido.create({
        data: {
          status: pedido.status,
          tempoEspera: pedido.tempoEspera,
          total: pedido.total,
          usuarioId: pedido.usuario.id,
        },
      });

      for (let pedidoProduto of pedido.produto) {
        if (pedidoProduto.id != undefined) {
          await prisma.pedidoProduto.create({
            data: {
              pedidoId: pedidoInsert.id,
              produtoId: pedidoProduto.id,
              quantidade: 2,
            },
          });
        }
      }

      pedido.id = pedidoInsert.id;
      await this.enviarParaFila(pedido);
    } catch (error: any) {
      console.log(error);
    }
  }
}
