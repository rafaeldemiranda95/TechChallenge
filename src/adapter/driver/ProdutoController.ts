import { Produto } from '../../core/domain/models/Produto';
import { ProdutoService } from '../../core/applications/services/ProdutoService';
export class ProdutoController {
  async cadastrarProduto(
    nome: string,
    categoria: string,
    preco: number,
    descricao: string,
    imagem: string,
    res: any
  ) {
    let produto = new Produto(nome, categoria, preco, descricao, imagem);
    let produtoService = new ProdutoService();
    await produtoService.cadastrarProduto(produto, res);
    // res.status(200).send('Produto cadastrado com sucesso');
  }
  async exibirProdutos(res: any) {
    let produtoService = new ProdutoService();
    await produtoService.listarProdutos(res);
  }
  async exibirProdutoPorId(id: number, res: any) {
    let produtoService = new ProdutoService();
    await produtoService.listarProdutoPorId(id, res);
  }
  async exibirProdutoPorCategoria(categoria: string, res: any) {
    let produtoService = new ProdutoService();
    await produtoService.listarProdutoPorCategoria(categoria, res);
  }
  async alterarProduto(
    id: number,
    nome: string,
    categoria: string,
    preco: number,
    descricao: string,
    imagem: string,
    res: any
  ) {
    let produto = new Produto(nome, categoria, preco, descricao, imagem, id);
    let produtoService = new ProdutoService();
    await produtoService.alterarProduto(produto, res);
  }
  async apagarProduto(id: number, res: any) {
    let produtoService = new ProdutoService();
    await produtoService.apagarProduto(id, res);
  }
}
