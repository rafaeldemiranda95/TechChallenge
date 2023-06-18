import { Usuario } from '../../domain/models/Usuario';
export interface IUsuarioRepository {
  salvar(usuario: Usuario): Promise<Usuario>;
  autenticar(usuario: Usuario): Promise<string | undefined>;
  validarToken(token: string): Promise<boolean | undefined>;
  renovarToken(token: string): Promise<string | undefined>;
}
