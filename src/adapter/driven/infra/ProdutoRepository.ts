import { prisma } from '../../../config/database';
import { Produto } from '../../../core/domain/models/Produto';
import { IProdutoRepository } from '../../../core/applications/ports/IProdutoRepository';

export class ProdutoRepository implements IProdutoRepository {
  async exibirLista(): Promise<Produto[]> {
    const produtos = prisma.produto
      .findMany()
      .then((produtos: any) => produtos);
    return produtos;
  }

  async exibirPorCategoria(categoria: string): Promise<Produto[]> {
    const produtos = prisma.produto
      .findMany({
        where: {
          categoria: categoria,
        },
      })
      .then((produtos: any) => produtos);

    return produtos;
  }

  async exibirPorId(id: number): Promise<Produto> {
    const produto = prisma.produto
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((produto: any) => produto);

    return produto;
  }

  async salvar(produto: Produto): Promise<Produto | undefined> {
    try {
      let returnProduto = prisma.produto
        .create({
          data: {
            nome: produto.nome,
            categoria: produto.categoria,
            preco: produto.preco,
            descricao: produto.descricao,
            imagem: produto.imagem,
          },
        })
        .then((produto: any) => {
          return produto;
        })
        .catch((error: any) => {
          console.log(error);
        });

      return returnProduto;
    } catch (error) {
      console.log('error  ==>>  ', error);
    }
  }

  async alterar(produto: Produto): Promise<Produto> {
    let returnProduto = prisma.produto
      .update({
        where: {
          id: produto.id,
        },
        data: {
          nome: produto.nome,
          categoria: produto.categoria,
          preco: produto.preco,
          descricao: produto.descricao,
          imagem: produto.imagem,
        },
      })
      .then((produto: any) => produto);

    return returnProduto;
  }

  async apagar(id: number): Promise<Produto> {
    const produto = prisma.produto
      .delete({
        where: {
          id: id,
        },
      })
      .then((produto: any) => produto);
    return produto;
  }
}
