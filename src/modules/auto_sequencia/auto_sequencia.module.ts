import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { DatabaseModule } from "../database/database.module";

import {
  AutoSequenciaRepository,
  AutoSequenciaService,
  modelProvider,
  repositoryProvider,
} from "./";

@Module({
  controllers: [],
  imports: [DatabaseModule],
  providers: [
    AutoSequenciaRepository,
    modelProvider,
    AutoSequenciaService,
    repositoryProvider,
  ],
})
export class AutoSequenciaModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply();
  }
}
