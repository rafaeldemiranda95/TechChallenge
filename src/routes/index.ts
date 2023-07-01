import express from 'express';
import { ProdutoController } from '../modules/produto/adapter/driver/ProdutoController';
import { UsuarioController } from '../modules/usuario/adapter/driver/UsuarioController';
import { autenticacaoMiddleware } from '../modules/usuario/adapter/middleware/autenticacao.middleware';
import { UsuarioService } from '../modules/usuario/core/applications/services/UsuarioService';
import { PedidoController } from '../modules/pedido/adapter/driver/PedidoController';
import { verificaTipoUsuario } from '../modules/usuario/adapter/middleware/verificaTipoUsuario.middlaware';
const router = express.Router();
const usuarioService = new UsuarioService();
router.get('/', (req, res) => {
  res.status(200).send('OK');
});

router.post(
  '/cadastroProduto',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
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
  }
);

router.get(
  '/exibeProdutos',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    const produtoController = new ProdutoController();
    let listaDeProdutos = await produtoController.exibirProdutos(res);
    res.status(200).send(listaDeProdutos);
  }
);

router.get(
  '/exibeProdutosPorId',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    let id = req.body.id;
    const produtoController = new ProdutoController();
    let listaDeProdutos = await produtoController.exibirProdutoPorId(id, res);
    res.status(200).send(listaDeProdutos);
  }
);

router.get(
  '/exibeProdutosPorCategoria',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    let categoria = req.body.categoria;
    const produtoController = new ProdutoController();
    let listaDeProdutos = await produtoController.exibirProdutoPorCategoria(
      categoria,
      res
    );
    res.status(200).send(listaDeProdutos);
  }
);

router.post(
  '/alteraProduto',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
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
  }
);

router.post(
  '/apagarProduto',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    let id = req.body.id;
    const produtoController = new ProdutoController();
    await produtoController.apagarProduto(id, res);
  }
);

router.post('/cadastroCliente', async (req, res) => {
  let nome = req.body.nome;
  let email = req.body.email;
  let cpf = req.body.cpf;

  let usuarioController = new UsuarioController();
  await usuarioController.cadastrarCliente(nome, email, cpf, res);
});

router.post(
  '/cadastroAdministrador',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let cpf = req.body.cpf;
    let senha = req.body.senha;

    let usuarioController = new UsuarioController();
    await usuarioController.cadastrarAdministrador(
      nome,
      email,
      cpf,
      senha,
      res
    );
  }
);

router.post('/autenticaUsuarioAdministrador', async (req, res) => {
  let email = req.body.email;
  let senha = req.body.senha;

  let usuarioController = new UsuarioController();
  await usuarioController.autenticaAdminstrador(email, senha, res);
});

router.post('/autenticaCliente', async (req, res) => {
  let cpf = req.body.cpf;
  let usuarioController = new UsuarioController();
  await usuarioController.autenticaCliente(cpf, res);
});

router.post('/enviarPedido', async (req, res) => {
  let token = req.headers.authorization;
  let produto = req.body.produtos;
  let tempoEspera = req.body.tempoEspera;
  let total = req.body.total;

  let pedidoController = new PedidoController();
  await pedidoController.enviarPedido(token, produto, tempoEspera, total, res);
  res.status(200).send('Pedido enviado com sucesso!');
});

router.get(
  '/listarPedidos',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    let pedidoController = new PedidoController();
    await pedidoController.listaPedidos(res);
  }
);

router.get(
  '/listarFilas',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    let pedidoController = new PedidoController();
    await pedidoController.listaFilas(res);
  }
);

router.post(
  '/trocarStatusFila',
  autenticacaoMiddleware(usuarioService),
  async (req, res) => {
    let id = req.body.id;
    let status = req.body.status;
    let pedidoController = new PedidoController();
    await pedidoController.trocarStatusFila(id, status, res);
  }
);

export default router;
