import { Inject, Injectable } from "@nestjs/common";
import { IGrupoServicoService } from "./interfaces";

@Injectable()
export class GrupoServicoService implements IGrupoServicoService {
  constructor(@Inject("GrupoServicoRepository") private readonly repository) {}

  public async getAll(options?: any) {
    return await this.repository.findAll(options);
  }

  public async get(id: number) {
    return await this.repository.findById(id);
  }

  public async create(gruposervico: object, instanceTransaction?: any) {
    try {
      return await this.repository.create(gruposervico, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, gruposervico: object, instanceTransaction?: any) {
    try {
      return await this.repository.update(id, gruposervico, instanceTransaction);
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
