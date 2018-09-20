import { Injectable, NestMiddleware } from "@nestjs/common";
import * as jwt from "jsonwebtoken";
import { UsuarioPerfil } from "../../modules/users/user.entity";
import { errorMessagesConfig } from "../config/error-message";

/* tslint:disable:no-console */

/**
 * Injectable
 */
@Injectable()

export class AuthMiddleware implements NestMiddleware {
    /**ss
     * Resolves auth middleware
     * @description middleware de validação do token jwt
     * @returns Request JSON | Next
     */
    public resolve() {
        return async (req, res, next) => {
            if (this.verificaHeaders(req)) {
                const token = (req.headers.authorization as string).split(" ")[1];

                const decoded: any = this.decodificaToken(token);
                if (!decoded) {
                    return res.status(403).json(this.error);
                }

                const perfil = await this.obtemPerfil(decoded);
                if (!perfil) {
                    return res.status(403).json(this.error);
                }

                req.perfil = {
                    roles: perfil,
                };

                req.body.pct_usuario_id = decoded.pct_usuario_id;
                req.body.int_empresa_id = decoded.int_empresa_id;

                next();
            } else {
                return res.status(403).json(this.error);
            }
        };
    }

    /**
     * Gets error
     *
     * @description retorna mensagem padrão de error
     * @returns Object
     */
    public get error() {
        return errorMessagesConfig["request:unauthorized"];
    }

    /**
     * Decodificas token
     * @param token JWT
     * @description verifica a validade e decodifica o token
     * @returns Object
     * @throws Invalid token
     */
    public decodificaToken(token) {
        try {
           return jwt.verify(token, process.env.JWT_KEY || "");
        } catch (error) {
            return false;
        }
    }

    /**
     * Verificas headers
     * @param req
     * @description verifica a existência de token jwt bearer no header
     * @returns true if headers
     */
    public verificaHeaders(req): boolean {
        if (!req.headers.authorization) {
            return false;
        }

        const bearer = (req.headers.authorization as string).split(" ")[0] === "Bearer";
        return req.headers.authorization && bearer;
    }

    /**
     * Obtems perfil
     * @param decoded
     * @description tenta obter perfil do usuários a partir dos dado do token
     * @returns UsuarioPerfil | null
     */
    public async obtemPerfil(decoded): Promise<UsuarioPerfil[]> {
        return await UsuarioPerfil.findAll<UsuarioPerfil>({
            raw: true,
            where: {
                int_empresa_id: decoded.int_empresa_id,
                pct_usuario_perfil_id: decoded.pct_usuario_perfil_id,
            },
        });
    }
}
