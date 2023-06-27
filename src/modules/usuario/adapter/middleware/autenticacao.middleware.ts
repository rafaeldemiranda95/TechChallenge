import { UsuarioService } from '../../core/applications/services/UsuarioService';
import { Request, Response, NextFunction } from 'express';

export function autenticacaoMiddleware(usuarioService: UsuarioService) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ error: 'Token de autenticação não fornecido.' });
    }

    const estaAutenticado = await usuarioService.validarToken(token);

    if (!estaAutenticado) {
      return res.status(401).json({ error: 'Token inválido.' });
    } else {
      next();
    }
  };
}
