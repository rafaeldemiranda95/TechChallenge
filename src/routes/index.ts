import express from 'express';
import { UsuarioController } from '../modules/usuario/adapter/driver/UsuarioController';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('OK');
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

// router.post('/autenticaUsuario', async (req, res) => {
//   let email = req.body.email;
//   let senha = req.body.senha;

//   let usuarioController = new UsuarioController();
//   let usuario = await usuarioController.autenticaUsuario(email, senha, res);
//   // let token = usuario.token;
//   // res.status(200).send('Usuário cadastrado com sucesso');
// });

export default router;
