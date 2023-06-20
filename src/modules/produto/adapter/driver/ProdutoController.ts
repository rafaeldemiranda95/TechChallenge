import { Produto } from './../../core/domain/Produto';
import { ProdutoService } from '../../core/applications/services/ProdutoService';
export class ProdutoController {
  async cadastrarProduto(
    nome: string,
    categoria: string,
    preco: number,
    descricao: string,
    imagem: string
  ) {}
  async exibirProdutos() {}
  async alterarProduto() {}
  async apagarProduto() {}
}
