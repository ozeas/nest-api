import { Inject, Injectable } from "@nestjs/common";
import { VendaItem } from "../venda_item/venda_item.entity";
import { IProdutoService } from "./interfaces/produto-service.interface";

@Injectable()
export class ProdutoService implements IProdutoService {
  constructor(
    @Inject("ProdutoRepository") private readonly repository,
  ) {}

  public async getAll(options?: any) {
    options.include = [VendaItem];
    return await this.repository.findAll(options);
  }

  public async get(id: number) {
    return await this.repository.findById(id);
  }

  public async create(produto: object) {
    try {
      return await this.repository.create(produto);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, produto: object) {
    try {
      return await this.repository.update(id, produto);
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: number) {
    try {
      return await this.repository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
