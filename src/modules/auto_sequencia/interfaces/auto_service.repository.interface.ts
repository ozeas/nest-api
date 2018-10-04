import { AutoSequencia } from "../auto_sequencia.entity";
import { IAutoSequencia } from "./auto_sequencia.interface";

export interface IAutoSequenciaRepository {
  create(produto: IAutoSequencia, instanceTransaction?: any): Promise<AutoSequencia>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options: object): Promise<AutoSequencia[]>;
  findById(id: number): Promise<AutoSequencia | null>;
  update(id: number, data: IAutoSequencia, instanceTransaction?: any): Promise<AutoSequencia | null>;
}
