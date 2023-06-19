import { UsuarioService } from '../../core/applications/services/UsuarioService';
import { Usuario } from '../../core/domain/models/Usuario';
import { CPF } from '../../core/domain/valueObjects/cpf';
export class UsuarioController {
  async cadastrarCliente(nome: string, email: string, cpf: string, res: any) {
    try {
      let usuarioService = new UsuarioService();
      let cpfObj = new CPF(cpf);
      if (cpfObj.value) {
        let usuario = new Usuario(nome, email, cpf);
        await usuarioService.cadastraUsuario(usuario, res);
        res.status(200).send('Usuário cadastrado com sucesso');
      } else {
        res.status(400).send('CPF inválido');
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  async cadastrarAdministrador(
    nome: string,
    email: string,
    cpf: string,
    senha: string,
    res: any
  ) {
    try {
      let cpfObj = new CPF(cpf);
      if (cpfObj.value) {
        let usuario = new Usuario(nome, email, cpf, 'administrador', senha);
        await new UsuarioService().cadastraAdministrador(usuario, res);
        res.status(200).send('Usuário cadastrado com sucesso');
      } else {
        res.status(400).send('CPF inválido');
      }
    } catch (error: any) {
      res.status(400).send(`${error.message} já cadastrado`);
    }
  }

  async autenticaAdminstrador(email: string, senha: string, res: any) {
    try {
      let usuario = new Usuario('', email, '', '', senha);
      await new UsuarioService().autenticaAdministrador(usuario, res);
    } catch (error: any) {
      console.log(error);
    }
  }
  async autenticaCliente(cpf: string, res: any) {
    try {
      let usuario = new Usuario('', '', cpf, '');
      await new UsuarioService().autenticaCliente(usuario, res);
    } catch (error: any) {
      console.log(error);
    }
  }
}
