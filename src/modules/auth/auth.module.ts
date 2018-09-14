import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { HttpStrategy } from "./http.strategy";
// import { UserModule } from "../users/user.module";

@Module({
  // imports: [UserModule],
  imports: [
    PassportModule.register({ defaultStrategy: "bearer" }),
  ],
  providers: [AuthService, HttpStrategy],
})
export class AuthModule {}
