import { UsuarioPerfil } from "./user.entity";

export const usersProvider = {
    provide: "UserRepository",
    useValue: UsuarioPerfil,
};
