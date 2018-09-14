import { Module } from "@nestjs/common";
// import { UserModule } from "./modules/users/user.module";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AuthModule } from "./modules/auth/auth.module";
import { ProdutoModule } from "./modules/produtos/produto.module";
import { VendaItemModule } from "./modules/venda_item/venda_item.module";

@Module({
    controllers: [],
    imports: [
        ProdutoModule,
        AuthModule,
        GraphQLModule.forRoot({
            debug: false,
            definitions: {
                outputAs: "class",
                path: join(process.cwd(), "src/graphql.schema.ts"),
            },
            installSubscriptionHandlers: true,
            playground: true,
            typePaths: ["./**/*.graphql"],
        }),
        VendaItemModule,
    ],
})
export class ApplicationModule {}
