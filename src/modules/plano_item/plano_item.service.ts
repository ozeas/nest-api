import { Inject, Injectable } from "@nestjs/common";
import { IPanoItemService } from "./interfaces";

@Injectable()
export class PlanoItemService implements IPanoItemService {
  constructor(@Inject("PlanoItemRepository") private readonly repository) {}

  public async getAll(options?: any) {
    return await this.repository.findAll(options);
  }

  public async get(id: number) {
    return await this.repository.findById(id);
  }

  public async create(data: object, instanceTransaction?: any) {
    try {
      return await this.repository.create(data, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: object, instanceTransaction?: any) {
    try {
      return await this.repository.update(id, data, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: number, instanceTransaction?: any) {
    try {
      return await this.repository.delete(id, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }
}
