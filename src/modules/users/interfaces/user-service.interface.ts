import { UsuarioPerfil } from "../user.entity";

export interface IUserService {
    findAll(options: {}): Promise<UsuarioPerfil[] | null>;
}
