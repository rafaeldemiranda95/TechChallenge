import { Usuario } from "../../domain/Usuario";
export interface IUsuarioRepository {
    salvar(usuario: Usuario): Promise<Usuario>;
 }