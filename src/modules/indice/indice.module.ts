import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { AuthMiddleware } from "../../shared/middlewares/auth.middleware";
import { DatabaseModule } from "../database/database.module";
import { IndiceTaxaModule } from "../indice_taxa/indice_taxa.module";

import {
  IndiceController,
  indiceProvider,
  IndiceRepository,
  IndiceService,
  repositoryProvider,
} from "./";

@Module({
  controllers: [ IndiceController ],
  imports: [ DatabaseModule, IndiceTaxaModule ],
  providers: [
    IndiceRepository,
    indiceProvider,
    IndiceService,
    repositoryProvider,
  ],
})
export class IndiceModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: "/indices", method: RequestMethod.GET },
        { path: "/indices", method: RequestMethod.POST },
        { path: "/indices/:id", method: RequestMethod.GET },
        { path: "/indices/:id", method: RequestMethod.PUT },
        { path: "/indices/:id", method: RequestMethod.DELETE },
      );
  }
}
