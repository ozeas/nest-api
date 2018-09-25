import { Plano } from "../plano.entity";
import { IPlano } from "./plano.interface";

export interface IPlanoRepository {
  create(data: IPlano, instanceTransaction?: any): Promise<Plano>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options: object): Promise<Plano[]>;
  findById(id: number): Promise<Plano | null>;
  update(id: number, data: IPlano, instanceTransaction?: any): Promise<Plano | null>;
}
