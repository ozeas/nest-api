import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { DatabaseModule } from "../database/database.module";

import {
  planoItemProvider,
  PlanoItemRepository,
  PlanoItemService,
  repositoryProvider,
} from "./";

@Module({
  controllers: [],
  imports: [ DatabaseModule ],
  providers: [
    planoItemProvider,
    PlanoItemRepository,
    PlanoItemService,
    repositoryProvider,
  ],
})
export class PlanoItemModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply();
  }
}
