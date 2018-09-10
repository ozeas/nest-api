import { Produto } from '../produto.entity';
import { IProduto } from '../interfaces/index';

export interface IProdutoRepository {
  findAll(options: Object): Promise<Array<Produto>>,
  findOne(options: Object): Promise<Produto | null>,
  findById(id: number): Promise<Produto | null>,
  create(produto: IProduto): Promise<Produto>,
  update(id: number, data: IProduto): Promise<Produto | null>,
  delete(id: number): Promise<void>
}