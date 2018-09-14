import { Produto } from "./produto.entity";
import { ProdutoRepository } from "./produto.repository";

export const produtoProvider = {
  provide: "ProdutoModel",
  useValue: Produto,
};

export const repositoryProvide = {
  provide: "ProdutoRepository",
  useClass: ProdutoRepository,
};
