import {
  Module,
  Request,
  RequestMapping,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { PassportModule } from "@nestjs/passport";
import { DatabaseModule } from "../database/database.module";
import { repositoryVendaItemProvide, vendaItemProvider } from "./venda_item.provider";
import { VendaItemRepository } from "./venda_item.repository";
import { VendaItemResolvers } from "./venda_item.resolvers";
import { VendaItemService } from "./venda_item.service";

@Module({
  controllers: [],
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: "bearer" }),
  ],
  providers: [
    VendaItemRepository,
    vendaItemProvider,
    VendaItemService,
    repositoryVendaItemProvide,
    VendaItemResolvers,
  ],
})
export class VendaItemModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        { path: "/venda_item", method: RequestMethod.GET },
        { path: "/venda_item", method: RequestMethod.POST},
        { path: "/venda_item/:id", method: RequestMethod.PUT},
        { path: "/venda_item/:id", method: RequestMethod.DELETE },
      );
  }
}
