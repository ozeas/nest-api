import {
    CanActivate,
    ExecutionContext,
    HttpException,
    Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { errorMessagesConfig } from "../../shared/config/error-message";

/**
 * Injectable
 *
 * @description Classe co lógica de filtro para permissão permissão de rotina
 */
@Injectable()
export class RolesGuard implements CanActivate {

    /**
     * Creates an instance of roles guard.
     * @param reflector
     */
    constructor(private readonly reflector: Reflector) {}

    /**
     * Determines whether activate can
     * @param context
     * @description obtém o código da rotina e verifica no perfil do usuário
     * @returns true if activate
     */
    public canActivate(context: ExecutionContext): boolean {
        const regras = this.reflector.get<string>("roles", context.getHandler());

        if (!regras) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const perfil = request.perfil;
        const permissao = this.verificaPermissao(perfil, regras);

        if (!(perfil && perfil.roles && permissao)) {
            throw new HttpException(
                errorMessagesConfig["request:unauthorized:routine"],
                403,
            );
        }
    }

    /**
     * Verificas permissao
     * @param perfil
     * @param regras
     * @description verifica se a regra existe no perfil informado
     * @returns true if permissao
     */
    public verificaPermissao(perfil, regras): boolean {
        return perfil.roles.find((role) => regras.includes(role.pct_rotina_rotina));
    }
}
