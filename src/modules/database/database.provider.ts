import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "../../shared/index";

import { FisServico } from "../fis_servico/fis_servico.entity";
import { GrupoServico } from "../grupo_servico/grupo_servico.entity";
import { UsuarioPerfil } from "../users/user.entity";

export const databaseProvider = {
    provide: "SequelizeInstance",
    useFactory: () => {
        let config;
        switch (process.env.NODE_ENV) {
            case "prod":
            case "production":
                config = databaseConfig.production;
            case "dev":
            case "development":
                config = databaseConfig.development;
            default:
                config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);

        sequelize.addModels([
            FisServico,
            UsuarioPerfil,
            GrupoServico,
        ]);

        // sequelize.addModels([__dirname + "/modules/**/*.entity.ts"]);
        return sequelize;
    },
};
