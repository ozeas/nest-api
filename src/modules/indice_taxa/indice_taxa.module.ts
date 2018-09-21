import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
import { DatabaseModule } from "../database/database.module";

import {
  indiceTaxaProvider,
  IndiceTaxaRepository,
  IndiceTaxaService,
  repositoryProvider,
} from "./";

@Module({
  controllers: [],
  imports: [DatabaseModule],
  providers: [
    IndiceTaxaRepository,
    indiceTaxaProvider,
    IndiceTaxaService,
    repositoryProvider,
  ],
})
export class IndiceTaxaModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware);
  }
}
