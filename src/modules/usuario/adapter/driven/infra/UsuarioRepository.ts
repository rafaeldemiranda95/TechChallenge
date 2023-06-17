import { IUsuarioRepository } from '../../../core/applications/ports/IUsuarioRepository';
import { Usuario } from '../../../core/domain/models/Usuario';
import { prisma } from '../../../../../config/database';
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

export class UsuarioRepository implements IUsuarioRepository {
  async autenticar(usuario: Usuario): Promise<string | undefined> {
    let getUsuarioDb = await prisma.usuario.findUnique({
      where: {
        email: usuario.email,
      },
    });

    if (getUsuarioDb) {
      let validaSenha = bcrypt.compareSync(usuario.senha, getUsuarioDb.senha);
      if (validaSenha) {
        let token = jwt.sign({ id: getUsuarioDb.id }, process.env.JWT_SECRET, {
          expiresIn: 86400,
        });
        await prisma.usuario.update({
          where: { id: getUsuarioDb.id },
          data: { token: token },
        });

        return token;
      }
    } else {
      return undefined;
    }

    return undefined;
  }
  async salvar(usuario: Usuario): Promise<Usuario> {
    return prisma.usuario
      .create({
        data: {
          nome: usuario.nome,
          email: usuario.email,
          cpf: usuario.cpf,
          tipo: usuario.tipo,
          senha:
            usuario.senha == undefined
              ? null
              : bcrypt.hashSync(usuario.senha, 10),
        },
      })
      .then((usuario: any) => {
        return usuario;
      })
      .catch((error: any) => {
        let errorType = JSON.stringify({
          code: error.code,
          field: error.meta.target[0],
        });
        throw new Error(errorType);
      });
  }
}
