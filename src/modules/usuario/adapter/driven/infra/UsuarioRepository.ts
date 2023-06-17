import { IUsuarioRepository } from '../../../core/applications/ports/IUsuarioRepository';
import { Usuario } from '../../../core/domain/models/Usuario';
import { prisma } from '../../../../../config/database';
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

export class UsuarioRepository implements IUsuarioRepository {
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
              : crypto.createHash('sha256').update(usuario.senha).digest('hex'),
        },
      })
      .then((usuario: any) => {
        return usuario;
      })
      .catch((error: any) => {
        let errorType = JSON.stringify({ code: error.code, field: error.meta.target[0] });
        throw new Error(errorType);
      });
  }
}
