import { Usuario } from '../../domain/models/Usuario';
export interface IUsuarioRepository {
  salvar(usuario: Usuario): Promise<Usuario>;
//   autenticar(usuario: Usuario): Promise<Usuario>;
}
