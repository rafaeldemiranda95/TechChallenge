export class Produto {
  id?: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: string;

  constructor(
    nome: string,
    categoria: string,
    preco: number,
    descricao: string,
    imagem: string,
    id?: number
  ) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.id = id;
  }
}
