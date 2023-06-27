import { Produto } from "../../domain/Produto";
export interface IProdutoRepository {
  salvar(produto: Produto): Promise<Produto | undefined>;
  exibirLista(): Promise<Produto[]>;
  exibirPorCategoria(categoria: string): Promise<Produto[]>;
  exibirPorId(id: number): Promise<Produto>;
  alterar(produto: Produto): Promise<Produto>;
  apagar(id: number): Promise<Produto>;
}
