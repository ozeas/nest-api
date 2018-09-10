import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { PassportModule } from '@nestjs/passport';
//import { UserModule } from '../users/user.module';

@Module({
  //imports: [UserModule],
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  providers: [AuthService, HttpStrategy]
})
export class AuthModule {}