import { Inject, Injectable } from "@nestjs/common";
import { IVendaItemService } from "./interfaces/venda_item-service.interface";

@Injectable()
export class VendaItemService implements IVendaItemService {
  constructor(
    @Inject("VendaItemRepository") private readonly repository,
  ) {}

  public async getAll(options?: object) {
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
