import { Produto } from "../../domain/Produto";
export interface IProdutoRepository {
  salvar(produto: Produto): Promise<Produto>;
}
