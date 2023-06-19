import express from "express";
import { PodutoController } from "../modules/produto/adapter/driver/ProdutoController";
// import logger from "../config/logger";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("OK");
});

router.post("/cadastroProduto", async (req, res) => {
  let nome = req.body.nome;
  let categoria = req.body.categoria;
  let preco = req.body.preco;
  let descricao = req.body.descricao;
  let imagem = req.body.imagem;

  // const toString = `nome: ${nome}, categoria: ${categoria}, preço: ${preco}, descrição: ${descricao}, imagem: ${imagem}`;
  // console.log(toString);

  const produtoController = new PodutoController();
  let produtoCadastrado = await produtoController.cadastrarProduto(
    nome,
    categoria,
    preco,
    descricao,
    imagem
  );

  res.status(200).send(produtoCadastrado);
});

router.get("/exibeProdutos", async (req, res) => {
  const produtoController = new PodutoController();
  let listaDeProdutos = await produtoController.exibirProdutos();
  res.status(200).send(listaDeProdutos);
});

export default router;
