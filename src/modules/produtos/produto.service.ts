import { Inject, Injectable } from '@nestjs/common';
import { IProdutoService } from './interfaces/produto-service.interface';

@Injectable()
export class ProdutoService implements IProdutoService {
  constructor(
    @Inject('ProdutoRepository') private readonly _repository
  ) {}

  public async getAll(options?: Object) {
    return await this._repository.findAll(options);
  }

  public async getOne(options: Object) {
    return await this._repository.findAll(options);
  }

  public async get(id: number) {
    return await this._repository.findById(id);
  }

  public async create(produto: Object) {
    return await this._repository.create(produto);
  }

  public async update(id: number, produto: object) {
    return await this._repository.update(id, produto);
  }

  public async delete(id: number) {
    return await this._repository.delete(id);
  }
}

