import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
import { DatabaseModule } from "../database/database.module";

import {
  modelProvider,
  ParametroRepository,
  ParametroService,
  repositoryProvider,
} from "./";

@Module({
  controllers: [],
  imports: [DatabaseModule],
  providers: [
    ParametroRepository,
    modelProvider,
    ParametroService,
    repositoryProvider,
  ],
})
export class ParametroModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply();
  }
}
