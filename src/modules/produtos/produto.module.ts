import {
  Module,
  Request,
  RequestMapping,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { PassportModule } from "@nestjs/passport";
import { DatabaseModule } from "../database/database.module";
import { ProdutoController } from "./produto.controller";
import { produtoProvider, repositoryProvide } from "./produto.provider";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoResolvers } from "./produto.resolvers";
import { ProdutoService } from "./produto.service";

@Module({
  controllers: [ProdutoController],
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: "bearer" }),
  ],
  providers: [
    ProdutoRepository,
    produtoProvider,
    ProdutoService,
    repositoryProvide,
    ProdutoResolvers,
  ],
})
export class ProdutoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        { path: "/produtos", method: RequestMethod.GET },
        { path: "/produtos", method: RequestMethod.POST},
        { path: "/produtos/:id", method: RequestMethod.PUT},
        { path: "/produtos/:id", method: RequestMethod.DELETE },
      );
  }
}
