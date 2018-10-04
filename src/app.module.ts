import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./modules/auth/auth.guard";
import { AuthModule } from "./modules/auth/auth.module";
import { AutoSequenciaModule } from "./modules/auto_sequencia/auto_sequencia.module";
import { DicionarioModule } from "./modules/dicionario/dicionario.module";
import { GrupoServicoModule } from "./modules/grupo_servico/grupo_servico.module";
import { IndiceModule } from "./modules/indice/indice.module";
import { PlanoModule } from "./modules/plano/plano.module";
import { ServicoModule } from "./modules/servico/servico.module";
import { UserModule } from "./modules/users/user.module";

@Module({
    controllers: [],
    imports: [
        AuthModule,
        AutoSequenciaModule,
        DicionarioModule,
        GrupoServicoModule,
        IndiceModule,
        PlanoModule,
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
