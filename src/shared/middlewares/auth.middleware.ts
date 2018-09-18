import { Injectable, NestMiddleware } from "@nestjs/common";
import * as jwt from "jsonwebtoken";
import { UsuarioPerfil } from "../../modules/users/user.entity";
import { errorMessagesConfig } from "../config/error-message";

/**
 * Injectable
 */
@Injectable()

export class AuthMiddleware implements NestMiddleware {
    /**
     * Resolves auth middleware
     * @returns Request JSON | Next
     */
    public resolve() {
        return async (req, res, next) => {
            if (this.verificaHeaders(req)) {
                const token = (req.headers.authorization as string).split(" ")[1];

                const decoded = this.decodificaToken(token);
                if (!decoded) {
                    return res.status(403).json(this.error);
                }

                const perfil = await this.obtemPerfil(decoded);
                if (!perfil) {
                    return res.status(403).json(this.error);
                }

                req.perfil = {roles: perfil};
                next();
            } else {
                return res.status(403).json(this.error);
            }
        };
    }

    /**
     * Gets error
     *
     * @returns Object
     */
    public get error() {
        return errorMessagesConfig["request:unauthorized"];
    }

    /**
     * Decodificas token
     * @param token
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
     * @returns true if headers
     */
    public verificaHeaders(req): boolean {
        return req.headers.authorization && (req.headers.authorization as string).split(" ")[0] === "Bearer";
    }

    /**
     * Obtems perfil
     * @param decoded
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
