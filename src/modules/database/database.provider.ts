import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "../../shared/index";

import { FisServico } from "../fis_servico/fis_servico.entity";
import { GrupoServico } from "../grupo_servico/grupo_servico.entity";
import { Indice } from "../indice/indice.entity";
import { IndiceTaxa } from "../indice_taxa/indice_taxa.entity";
import { Plano } from "../plano/plano.entity";
import { PlanoItem } from "../plano_item/plano_item.entity";
import { Servico } from "../servico/servico.entity";
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
            GrupoServico,
            Indice,
            IndiceTaxa,
            Plano,
            PlanoItem,
            Servico,
            UsuarioPerfil,
        ]);

        // sequelize.addModels([__dirname + "/modules/**/*.entity.ts"]);
        return sequelize;
    },
};
