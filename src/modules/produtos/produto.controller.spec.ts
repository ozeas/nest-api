import { Test } from '@nestjs/testing';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

describe('ProdutoModule', () => {
  describe('ProdutoService', () => {
    let produtoController: ProdutoController;
    let produtoService: ProdutoService;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        controllers: [ProdutoController],
        providers: [ProdutoService]
      }).compile();

      produtoService = module.get<ProdutoService>(ProdutoService);
      produtoController = module.get<ProdutoController>(ProdutoController);
    });

    describe('getAll()', () => {
      it('deve retornar um array', async () => {
        const result = ['test'];
        jest.spyOn(produtoService, 'getAll').mockImplementation(() => result);

        expect(await produtoService.getAll()).toBe(result);
      });
    });

  });
});