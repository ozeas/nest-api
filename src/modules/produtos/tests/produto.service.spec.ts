/* tslint:disable:no-console */
import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../database/database.module";
import { databaseProvider } from "../../database/database.provider";
import { ProdutoController } from "../produto.controller";
import * as provider from "../produto.provider";
import { ProdutoService } from "../produto.service";

describe("ProdutoModule", () => {
  let produtoService: ProdutoService;
  let produtoController: ProdutoController;
  const produtos = [
    {
      descricao: "Drone Test Beta Cross",
      estoque: 30.1,
      id: 500,
      valor: 3200,
    }, {
      descricao: "Mavic 2 Pro",
      estoque: 10,
      id: 600,
      valor: 3000.99,
    }, {
      descricao: "Mni mi Pro",
      estoque: 7,
      id: 800,
      valor: 200,
    }, {
      descricao: "Spark Pro",
      estoque: 2,
      id: 900,
      valor: 350,
    }, {
      descricao: "MacBook Pro 2017",
      estoque: 15,
      id: 100,
      valor: 1200,
  },
];

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [ ProdutoController ],
        imports: [
          DatabaseModule,
        ],
        providers: [
          databaseProvider,
          ProdutoService,
          provider.produtoProvider,
          provider.repositoryProvide,
        ],
      }).compile();

    produtoService = module.get<ProdutoService>(ProdutoService);
    produtoController = module.get<ProdutoController>(ProdutoController);

    produtos.forEach(async (produto) => {
      await produtoService.create(produto);
    });
    console.log("[------------Ambiente configurado-----------]");
  });

  afterAll(async () => {
    produtos.forEach(async (produto) => {
      await produtoService.delete(produto.id);
    });
    await produtoService.delete(9000);
    console.log("[------------Ambiente limpo-----------]");
  });

  describe("ProdutoService", () => {
    it("Deve retornar um array de produtos", async () => {
      const expected = await produtoService.getAll({});
      expect(expected.length).toBeGreaterThan(1);
    });

    it("Deve retornar um produto", async () => {
      const expected = await produtoService.get(produtos[0].id);
      expect(expected).toEqual(expect.objectContaining(produtos[0]));
    });

    it("Deve criar um produto", async () => {
      const produto = {
        descricao: "Camisa do Vasco Oficial",
        estoque: 500,
        id: 9000,
        valor: 120.78,
      };
      await produtoService.create(produto);
      const expected = await produtoService.get(produto.id);
      expect(expected).toEqual(expect.objectContaining(produto));
    });

    it("Deve retornar erro ao criar produto vazio", async () => {
      let message = false;
      try {
        await produtoService.create(Object);
      } catch (error) {
        message = error.errorMessage;
      }
      expect(message).toBeTruthy();
    });

    it("Deve alterar um produto", async () => {
      const newProduto = {
        descricao: "Camisa do Brasil",
        estoque: 1000,
      };

      await produtoService.update(produtos[0].id, newProduto);
      const expected = await produtoService.get(produtos[0].id);

      expect(expected).toEqual(expect.objectContaining(newProduto));
    });

    it("Deve retornar erro ao alterar produto inexistente", async () => {
      let message = false;
      try {
        await produtoService.update(-1, {});
      } catch (error) {
        message = error.errorMessage;
      }
      expect(message).toBeTruthy();
    });

    it("Deve excluir um produto", async () => {
      const id = produtos[2].id;
      await produtoService.delete(id);

      const expected = await produtoService.get(id);
      expect(expected).toBe(null);
    });
  });
});
