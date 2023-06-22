import express from 'express';
import { ProdutoController } from '../modules/produto/adapter/driver/ProdutoController';
import { UsuarioController } from '../modules/usuario/adapter/driver/UsuarioController';
import { autenticacaoMiddleware } from '../modules/usuario/adapter/middleware/autenticacao.middleware';
import { UsuarioService } from '../modules/usuario/core/applications/services/UsuarioService';
const router = express.Router();
const usuarioService = new UsuarioService();
router.get('/', (req, res) => {
  res.status(200).send('OK');
});

router.post('/cadastroProduto', async (req, res) => {
  let nome = req.body.nome;
  let categoria = req.body.categoria;
  let preco = req.body.preco;
  let descricao = req.body.descricao;
  let imagem = req.body.imagem;

  const produtoController = new ProdutoController();
  let produtoCadastrado = await produtoController.cadastrarProduto(
    nome,
    categoria,
    preco,
    descricao,
    imagem,
    res
  );
  res.status(200).send(produtoCadastrado);
});

router.get('/exibeProdutos', autenticacaoMiddleware(usuarioService), async (req, res) => {
  const produtoController = new ProdutoController();
  let listaDeProdutos = await produtoController.exibirProdutos(res);
  res.status(200).send(listaDeProdutos);
});

router.get('/exibeProdutosPorId', async (req, res) => {
  let id = req.body.id;
  const produtoController = new ProdutoController();
  let listaDeProdutos = await produtoController.exibirProdutoPorId(id, res);
  res.status(200).send(listaDeProdutos);
});

router.get('/exibeProdutosPorCategoria', async (req, res) => {
  let categoria = req.body.categoria;
  const produtoController = new ProdutoController();
  let listaDeProdutos = await produtoController.exibirProdutoPorCategoria(
    categoria,
    res
  );
  res.status(200).send(listaDeProdutos);
});

router.post('/alteraProduto', async (req, res) => {
  let id = req.body.id;
  let nome = req.body.nome;
  let categoria = req.body.categoria;
  let preco = req.body.preco;
  let descricao = req.body.descricao;
  let imagem = req.body.imagem;

  const produtoController = new ProdutoController();
  let produtoCadastrado = await produtoController.alterarProduto(
    id,
    nome,
    categoria,
    preco,
    descricao,
    imagem,
    res
  );
  res.status(200).send(produtoCadastrado);
});

router.post('/apagarProduto', async (req, res) => {
  let id = req.body.id;
  const produtoController = new ProdutoController();
  await produtoController.apagarProduto(id, res);
});

router.post('/cadastroCliente', async (req, res) => {
  let nome = req.body.nome;
  let email = req.body.email;
  let cpf = req.body.cpf;

  let usuarioController = new UsuarioController();
  await usuarioController.cadastrarCliente(nome, email, cpf, res);
});

router.post('/cadastroAdministrador', async (req, res) => {
  let nome = req.body.nome;
  let email = req.body.email;
  let cpf = req.body.cpf;
  let senha = req.body.senha;

  let usuarioController = new UsuarioController();
  await usuarioController.cadastrarAdministrador(nome, email, cpf, senha, res);
});

router.post('/autenticaUsuarioAdministrador', async (req, res) => {
  let email = req.body.email;
  let senha = req.body.senha;

  let usuarioController = new UsuarioController();
  let usuario = await usuarioController.autenticaAdminstrador(
    email,
    senha,
    res
  );
  // let token = usuario.token;
  // res.status(200).send('Usuário cadastrado com sucesso');
});

router.post('/autenticaCliente', async (req, res) => {
  let cpf = req.body.cpf;
  let usuarioController = new UsuarioController();
  let usuario = await usuarioController.autenticaCliente(cpf, res);
});

export default router;
