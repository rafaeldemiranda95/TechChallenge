import { Usuario } from '../../domain/models/Usuario';
import { UsuarioRepository } from '../../../adapter/driven/infra/UsuarioRepository';
export class UsuarioService {
  async cadastraUsuario(usuario: Usuario, res: any) {
    try {
      await new UsuarioRepository().salvar(usuario);
    } catch (error: any) {
      let errorType = JSON.parse(error.message);
      if (errorType.code == 'P2002') {
        res.status(400).send(`${errorType.field} já cadastrado`);
      }
    }
  }

  async cadastraAdministrador(usuario: Usuario, res: any) {
    try {
      await new UsuarioRepository().salvar(usuario);
    } catch (error: any) {
      let errorType = JSON.parse(error.message);
      if (errorType.code == 'P2002') {
        throw new Error(errorType.field);
      }
    }
  }

  async autenticaUsuario(usuario: Usuario, res: any) {
    try {
      let verificaUsuario = await new UsuarioRepository().autenticar(usuario);
      if (verificaUsuario == undefined) {
        res.status(400).send('Usuário não encontrado');
      }else{
        res.status(200).send(verificaUsuario);
      }
    } catch (error: any) {
      console.log(error);
    }
  }
}
