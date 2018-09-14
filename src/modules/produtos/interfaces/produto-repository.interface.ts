import { IProduto } from "../interfaces/index";
import { Produto } from "../produto.entity";

export interface IProdutoRepository {
  create(produto: IProduto): Promise<Produto>;
  delete(id: number): Promise<void>;
  findAll(options: object): Promise<Produto[]>;
  findById(id: number): Promise<Produto | null>;
  update(id: number, data: IProduto): Promise<Produto | null>;
}
