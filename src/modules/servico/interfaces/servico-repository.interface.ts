import { Servico } from "../servico.entity";
import { IServico } from "./servico.interface";

export interface IServicoRepository {
  create(produto: IServico, instanceTransaction?: any, incude?: any): Promise<Servico>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options: object): Promise<Servico[]>;
  findById(id: number): Promise<Servico | null>;
  update(id: number, data: IServico, instanceTransaction?: any): Promise<Servico | null>;
}
