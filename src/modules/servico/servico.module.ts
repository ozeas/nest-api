import {
  Module,
  Request,
  RequestMapping,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
import { DatabaseModule } from "../database/database.module";

import {
  ServicoController,
  servicoProvider,
  ServicoRepository,
  ServicoService,
  repositoryProvider
} from "./";

@Module({
  controllers: [ServicoController],
  imports: [DatabaseModule],
  providers: [
    ServicoRepository,
    servicoProvider,
    ServicoService,
    repositoryProvider,
  ],
})
export class ServicoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes(
      {path: "/servicos", method: RequestMethod.GET},
      { path: "/servicos", method: RequestMethod.POST},
      { path: "/servicos/:id", method: RequestMethod.PUT},
      { path: "/servicos/:id", method: RequestMethod.DELETE },
    );
  }
}
