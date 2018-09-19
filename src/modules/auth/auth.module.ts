import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";



/**
 * Module
 *
 * @description Módulo com lógicas de validação e filtros
 */
@Module({
  controllers: [AuthController],
  imports: [],
  providers: [AuthService],
})
export class AuthModule {}
