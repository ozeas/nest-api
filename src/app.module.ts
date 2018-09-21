import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./modules/auth/auth.guard";
import { AuthModule } from "./modules/auth/auth.module";
import { DicionarioModule } from "./modules/dicionario/dicionario.module";
import { FisServicoModule } from "./modules/fis_servico/fis_servico.module";
import { GrupoServicoModule } from "./modules/grupo_servico/grupo_servico.module";
import { ServicoModule } from "./modules/servico/servico.module";
import { UserModule } from "./modules/users/user.module";

@Module({
    controllers: [],
    imports: [
        DicionarioModule,
        FisServicoModule,
        GrupoServicoModule,
        AuthModule,
        ServicoModule,
        UserModule,
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class ApplicationModule {}
