import {
  Module,
  Request,
  RequestMapping,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
import { DatabaseModule } from "../database/database.module";
import { FisServicoController } from "./fis_servico.controller";
import { fisServicoProvider, repositoryProvide } from "./fis_servico.provider";
import { FisServicoRepository } from "./fis_servico.repository";
import { FisServicoService } from "./fis_servico.service";

@Module({
  controllers: [FisServicoController],
  imports: [
    DatabaseModule,
  ],
  providers: [
    FisServicoRepository,
    fisServicoProvider,
    FisServicoService,
    repositoryProvide,
  ],
})
export class FisServicoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: "/servicos", method: RequestMethod.GET },
        /*{ path: "/produtos", method: RequestMethod.POST},
        { path: "/produtos/:id", method: RequestMethod.PUT},
        { path: "/produtos/:id", method: RequestMethod.DELETE }, */
      );
  }
}
