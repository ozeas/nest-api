import { Module, RequestMethod, Request, RequestMapping } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { PassportModule } from '@nestjs/passport';


import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { produtoProvider, repositoryProvide } from './produto.provider';
import { Produto } from './produto.entity';
import { ProdutoRepository } from './produto.repository';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  providers: [
    ProdutoRepository,
    produtoProvider,
    ProdutoService,
    repositoryProvide
  ],
  controllers: [ProdutoController]

})
export class ProdutoModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        { path: '/produtos', method: RequestMethod.GET },
        { path: '/produtos', method: RequestMethod.POST},
        { path: '/produtos/:id', method: RequestMethod.PUT},
        { path: '/produtos/:id', method: RequestMethod.DELETE }
      );
  }
}