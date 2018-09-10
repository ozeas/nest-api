import { Produto } from '../produto.entity';
import { IProduto } from '../interfaces/index';

export interface IProdutoService { 
  getAll(options: Object),
  getOne(options: Object),
  get(id: number),
  create(data: Object),
  update(id: number, data: Object),
  delete(id: number)
}