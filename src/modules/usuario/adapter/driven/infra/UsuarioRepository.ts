import { IUsuarioRepository } from "../../../core/applications/ports/IUsuarioRepository";
import { Usuario } from "../../../core/domain/Usuario";
import { prisma } from "../../../../../config/database";
class UsuarioRepository implements IUsuarioRepository{
    async salvar(usuario: Usuario): Promise<Usuario> {
        prisma.usuario.create({
            data: {
                nome: usuario.nome,
                email: usuario.email,
                senha: usuario.senha,
                cpf: usuario.cpf
            }
        }).then((usuario:any) => {
            return usuario;
        });

        return usuario;
    }
}