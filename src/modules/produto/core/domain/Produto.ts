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
    imagem: string
  ) {
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
  }
}
