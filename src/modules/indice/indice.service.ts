import { Inject, Injectable } from "@nestjs/common";
import { IIndiceService } from "./interfaces";

@Injectable()
export class IndiceService implements IIndiceService {
  constructor(@Inject("IndiceRepository") private readonly repository) {}

  public async getAll(options?: any) {
    return await this.repository.findAll(options);
  }

  public async get(id: number) {
    return await this.repository.findById(id);
  }

  public async create(indice: object, instanceTransaction?: any) {
    try {
      return await this.repository.create(indice, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, indice: object, instanceTransaction?: any) {
    try {
      return await this.repository.update(id, indice, instanceTransaction);
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
