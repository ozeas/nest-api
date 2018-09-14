import { Sequelize } from "sequelize-typescript";
import { databaseConfig } from "../../shared/index";
// import { User } from "../users/user.entity";
import { Produto } from "../produtos/produto.entity";
import { VendaItem } from "../venda_item/venda_item.entity";

export const databaseProvider = {
    provide: "SequelizeInstance",
    useFactory: () => {
        let config;
        switch (process.env.NODE_ENV) {
            case "prod":
            case "production":
                // config = databaseConfig.production;
                config = databaseConfig.development;
            case "dev":
            case "development":
                config = databaseConfig.development;
            default:
                config = databaseConfig.development;
        }

        const sequelize = new Sequelize(config);

        sequelize.addModels([ Produto, VendaItem ]);

        // sequelize.addModels([User]);
        /* await sequelize.sync(); add this if you want to sync model and DB.*/
        // sequelize.sync();
        return sequelize;
    },
};
