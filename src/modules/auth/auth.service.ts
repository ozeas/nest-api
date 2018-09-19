/* tslint:disable */
import { Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

/**
 * Injectable
 */
@Injectable()
export class AuthService {
    /**
     * Options  of auth service
     */
    private _options = {
        algorithm: "HS256",
        expiresIn: "2 days",
        jwtid: process.env.JWT_ID || "",
    };

    /**
     * Gets options
     */
    get options() {
        return this._options;
    }

    /**
     * Sets options
     */
    set options(value) {
        this._options.algorithm = value.algorithm;
    }

    /**
     * Signs auth service
     * @returns sign
     */
    public async sign(): Promise<string> {
        const payload = {
            int_empresa_id: 1,
            pct_usuario_perfil_id: 7062,
        };
        return await jwt.sign(payload, process.env.JWT_KEY || "", this._options);
    }
}
