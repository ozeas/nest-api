import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
import { DatabaseModule } from "../database/database.module";

import {
  modelProvider,
  PlanoController,
  PlanoRepository,
  PlanoService,
  repositoryProvider,
} from "./";

@Module({
  controllers: [ PlanoController ],
  imports: [ DatabaseModule ],
  providers: [
    PlanoRepository,
    modelProvider,
    PlanoService,
    repositoryProvider,
  ],
})
export class PlanoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        {path: "/planos", method: RequestMethod.GET},
        { path: "/planos", method: RequestMethod.POST},
        { path: "/planos/:id", method: RequestMethod.GET},
        { path: "/planos/:id", method: RequestMethod.PUT},
        { path: "/planos/:id", method: RequestMethod.DELETE },
      );
  }
}
