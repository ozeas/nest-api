import { Module } from '@nestjs/common';
// import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProdutoModule } from './modules/produtos/produto.module';

@Module({
    imports: [ProdutoModule, AuthModule],
    controllers: []
})
export class ApplicationModule {}
