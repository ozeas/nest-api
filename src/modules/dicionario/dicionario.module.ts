import {
  Module,
  RequestMethod,
} from "@nestjs/common";
import {MiddlewareConsumer} from "@nestjs/common/interfaces/middleware";
import {AuthMiddleware} from "../../shared/middlewares/auth.middleware";
import {DicionarioController} from "./dicionario.controller";
import {DicionarioService} from "./dicionario.service";

@Module({
  controllers: [DicionarioController],
  providers: [DicionarioService],
})
export class DicionarioModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes(
      {path: "/dicionario/:dicionario", method: RequestMethod.GET},
    );
  }
}
