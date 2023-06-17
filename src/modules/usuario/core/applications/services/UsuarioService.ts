import { Usuario } from '../../domain/models/Usuario';
import { UsuarioRepository } from '../../../adapter/driven/infra/UsuarioRepository';
export class UsuarioService {
  async cadastraUsuario(usuario: Usuario, res: any) {
    try {
      await new UsuarioRepository().salvar(usuario);
    } catch (error: any) {
      let errorType = JSON.parse(error.message);
      if (errorType.code == 'P2002') {
        return res.status(400).send(`${errorType.field} já cadastrado`);
      }
    }
  }

  async cadastraAdministrador(usuario: Usuario, res: any) {
    try {
      await new UsuarioRepository().salvar(usuario);
    } catch (error: any) {
      let errorType = JSON.parse(error.message);
      if (errorType.code == 'P2002') {
        return res.status(400).send(`${errorType.field} já cadastrado`);
      }
      throw new Error(error);
    }
  }

  // async autenticaUsuario(usuario: Usuario, res: any) {
  //   try {
  //     let usuarioAutenticado = await new UsuarioRepository().autenticar(usuario);
  //     if (usuarioAutenticado) {
  //       res.status(200).send(usuarioAutenticado.token);
  //     } else {
  //       res.status(400).send('Usuário ou senha inválidos');
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // }
}
