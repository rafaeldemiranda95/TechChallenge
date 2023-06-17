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
        return;
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
      let usuario = new Usuario(nome, email, cpf, 'administrador', senha);
      await new UsuarioService().cadastraAdministrador(usuario, res);
      res.status(200).send('Usuário cadastrado com sucesso');
    } catch (error: any) {
        console.log(error);
    }
  }

//   async autenticaUsuario(email: string, senha: string, res: any) {
//     try {
//       let usuario = new Usuario('', email, '', '', senha);
//       await new UsuarioService().autenticaUsuario(usuario, res);
//     } catch (error: any) {
//       console.log(error);
//     }
//   }
}
