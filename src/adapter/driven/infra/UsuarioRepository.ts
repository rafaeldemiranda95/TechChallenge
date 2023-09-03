import { IUsuarioRepository } from '../../../core/applications/ports/IUsuarioRepository';
import { Usuario } from '../../../core/domain/models/Usuario';
import { prisma } from '../../../config/database';
import { VerificaSenha } from '../../../core/domain/valueObjects/VerificaSenha';
import { GerarHash } from '../../../core/domain/valueObjects/GerarHash';
var jwt = require('jsonwebtoken');

export class UsuarioRepository implements IUsuarioRepository {
  async obterUsuarioPorId(id: number): Promise<Usuario | undefined> {
    try {
      let usuario = await prisma.usuario.findUnique({
        where: { id: id },
      });
      if (usuario) {
        return new Usuario(
          usuario.nome,
          usuario.email,
          usuario.cpf,
          usuario.tipo,
          undefined,
          undefined,
          usuario.id
        );
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async renovarToken(token: string): Promise<string | undefined> {
    let getUsuarioDb = await prisma.usuario.findUnique({
      where: {
        token: token,
      },
    });
    if (getUsuarioDb) {
      let token = jwt.sign({ id: getUsuarioDb.id }, process.env.JWT_SECRET, {
        expiresIn: null,
      });
      await prisma.usuario.update({
        where: { id: getUsuarioDb.id },
        data: { token: token },
      });
      return token;
    } else {
      return undefined;
    }
  }

  async validarToken(token: string): Promise<boolean | undefined> {
    let getUsuarioDb = await prisma.usuario.findUnique({
      where: {
        token: token,
      },
    });
    if (getUsuarioDb) {
      return true;
    } else {
      return false;
    }
  }

  async autenticaAdministrador(usuario: Usuario): Promise<string | undefined> {
    let getUsuarioDb = await prisma.usuario.findUnique({
      where: {
        email: usuario.email,
      },
    });

    if (getUsuarioDb) {
      if (usuario.senha != undefined && getUsuarioDb.senha != undefined) {
        let validaSenha = new VerificaSenha(usuario.senha, getUsuarioDb.senha);
        if (validaSenha) {
          let token = jwt.sign(
            {
              id: getUsuarioDb.id,
              nome: getUsuarioDb.nome,
              email: getUsuarioDb.email,
              tipo: getUsuarioDb.tipo,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: '365d',
            }
          );
          await prisma.usuario.update({
            where: { id: getUsuarioDb.id },
            data: { token: token },
          });

          return token;
        }
      } else {
        return undefined;
      }
    }

    return undefined;
  }

  async autenticaCliente(usuario: Usuario): Promise<string | undefined> {
    try {
      let getUsuarioDb = await prisma.usuario.findUnique({
        where: {
          cpf: usuario.cpf,
        },
      });
      if (getUsuarioDb) {
        let token = jwt.sign(
          {
            id: getUsuarioDb.id,
            nome: getUsuarioDb.nome,
            email: getUsuarioDb.email,
            tipo: getUsuarioDb.tipo,
            cpf: getUsuarioDb.cpf,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '365d',
          }
        );
        await prisma.usuario.update({
          where: { id: getUsuarioDb.id },
          data: { token: token },
        });
        return token;
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async salvar(usuario: Usuario): Promise<Usuario> {
    let gerarSenha = new GerarHash();
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
              : await gerarSenha.gerarHash(usuario.senha),
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
