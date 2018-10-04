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
  GrupoServicoController,
  grupoServicoProvider,
  GrupoServicoRepository,
  GrupoServicoService,
  repositoryProvide,
} from "./";

@Module({
  controllers: [GrupoServicoController],
  imports: [DatabaseModule],
  providers: [
    GrupoServicoRepository,
    grupoServicoProvider,
    GrupoServicoService,
    repositoryProvide,
  ],
})
export class GrupoServicoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {path: "/gruposervicos", method: RequestMethod.GET},
        { path: "/gruposervicos", method: RequestMethod.POST},
        { path: "/gruposervicos/:id", method: RequestMethod.GET},
        { path: "/gruposervicos/:id", method: RequestMethod.PUT},
        { path: "/gruposervicos/:id", method: RequestMethod.DELETE },
      );
  }
}
