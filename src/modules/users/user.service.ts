import { Inject, Injectable } from "@nestjs/common";
import { IUserService } from "./interfaces/user-service.interface";
import { UsuarioPerfil } from "./user.entity";

@Injectable()
export class UserService implements IUserService {
    constructor(
        @Inject("UserRepository") private readonly userRepository: typeof UsuarioPerfil,
        @Inject("SequelizeInstance") private readonly sequelizeInstance,
    ) {}

    public async findAll(options: {}): Promise<UsuarioPerfil[] | null> {
        return await this.userRepository.findAll<UsuarioPerfil>(options);
    }
}
