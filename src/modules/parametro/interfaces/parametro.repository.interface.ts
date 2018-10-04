
import { Parametro } from "../parametro.entity";
import { IParametro } from "./parametro.interface";

export interface IParametroRepository {
  create(parametro: IParametro, instanceTransaction?: any, incude?: any): Promise<Parametro>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options: object): Promise<Parametro[]>;
  findById(id: number): Promise<Parametro | null>;
  update(id: number, data: IParametro, instanceTransaction?: any): Promise<Parametro | null>;
}
