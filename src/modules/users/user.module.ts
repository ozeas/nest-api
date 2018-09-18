import { Module, RequestMethod } from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces/middleware";
import { DatabaseModule } from "../database/database.module";
import { usersProvider } from "./user.provider";
import { UserService } from "./user.service";

@Module({
    controllers: [],
    imports: [DatabaseModule],
    providers: [UserService, usersProvider],
})
export class UserModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply();
    }
}
