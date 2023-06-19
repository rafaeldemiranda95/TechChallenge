import { ProdutoRepository } from "../driven/infra/ProdutoRepository";
import { Produto } from "./../../core/domain/Produto";

export class PodutoController {
  cadastrarProduto(
    nome: string,
    categoria: string,
    preco: number,
    descricao: string,
    imagem: string
  ) {
    let produto = new Produto(nome, categoria, preco, descricao, imagem);
    let produtoRepository = new ProdutoRepository();
    let produtoReturn = produtoRepository.salvar(produto);

    return produtoReturn;
  }
  exibirProdutos() {
    let produtoRepository = new ProdutoRepository();
    let listaProdutos = produtoRepository.exibirProdutos();
    return listaProdutos;
  }
  alterarProduto() {}
  apagarProduto() {}
}
