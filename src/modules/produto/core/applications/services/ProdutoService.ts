import { ProdutoRepository } from '../../../adapter/driven/infra/ProdutoRepository';
export class ProdutoService {
  async cadastrarProduto(produto: any, res: any) {
    try {
      await new ProdutoRepository().salvar(produto);
    } catch (error: any) {
      let errorType = JSON.parse(error.message);
      if (errorType.code == 'P2002') {
        res.status(400).send(`${errorType.field} já cadastrado`);
      }
    }
  }

  async listarProdutos(res: any) {
    try {
      let produtos = await new ProdutoRepository().exibirLista();
      res.status(200).send(produtos);
    } catch (error: any) {
      console.log(error);
    }
  }

  async listarProdutoPorId(id: number, res: any) {
    try {
      let produto = await new ProdutoRepository().exibirPorId(id);
      res.status(200).send(produto);
    } catch (error: any) {
      console.log(error);
    }
  }

  async listarProdutoPorCategoria(categoria: string, res: any) {
    try {
      let produto = await new ProdutoRepository().exibirPorCategoria(categoria);
      res.status(200).send(produto);
    } catch (error: any) {
      console.log(error);
    }
  }

  async alterarProduto(produto: any, res: any) {
    try {
      await new ProdutoRepository().alterar(produto);
    } catch (error: any) {
      console.log(error);
    }
  }

  async apagarProduto(id: number, res: any) {
    try {
      await new ProdutoRepository().apagar(id);
    } catch (error: any) {
      console.log(error);
    }
  }
}
