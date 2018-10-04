import { Indice } from "../indice.entity";
import { IIndice } from "./indice.interface";

export interface IIndiceRepository {
  create(indice: IIndice, instanceTransaction?: any): Promise<Indice>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options: object): Promise<Indice[]>;
  findById(id: number): Promise<Indice | null>;
  update(id: number, data: IIndice, instanceTransaction?: any): Promise<Indice | null>;
}
