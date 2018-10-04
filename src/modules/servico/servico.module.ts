import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
import { DatabaseModule } from "../database/database.module";

import {
  modelProvider as autoSequenciaModelProvider,
  repositoryProvider as autoSequenciaRepositoryProvider,
} from "../auto_sequencia";

import {
  repositoryProvider,
  ServicoController,
  servicoProvider,
  ServicoRepository,
  ServicoService,
} from "./";

@Module({
  controllers: [ServicoController],
  imports: [DatabaseModule],
  providers: [
    ServicoRepository,
    servicoProvider,
    ServicoService,
    repositoryProvider,
    autoSequenciaRepositoryProvider,
    autoSequenciaModelProvider,
  ],
})
export class ServicoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes(
      {path: "/servicos", method: RequestMethod.GET},
      { path: "/servicos", method: RequestMethod.POST},
      { path: "/servicos/:id", method: RequestMethod.GET},
      { path: "/servicos/:id", method: RequestMethod.PUT},
      { path: "/servicos/:id", method: RequestMethod.DELETE },
    );
  }
}
