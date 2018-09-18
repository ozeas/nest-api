import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { MessageCodeError } from "../../shared/index";
import { UsuarioPerfil } from "../users/user.entity";

/* tslint:disable */

@Injectable()
export class AuthService {
    private _options = {
        algorithm: "HS256",
        expiresIn: "2 days",
        jwtid: process.env.JWT_ID || "",
    };

    get options() {
        return this._options;
    }

    set options(value) {
        this._options.algorithm = value.algorithm;
    }

    public async sign(): Promise<string> {
        const payload = {
            int_empresa_id: 1,
            pct_usuario_perfil_id: 7062,
        };

        console.log();

        return await jwt.sign(payload, process.env.JWT_KEY || "", this._options);
    }
}
