import { FisServico } from "../fis_servico.entity";
import { IFisServico } from "../interfaces/index";

export interface IFisServicoRepository {
  create(produto: IFisServico): Promise<FisServico>;
  delete(id: number): Promise<void>;
  findAll(options: object): Promise<FisServico[]>;
  findById(id: number): Promise<FisServico | null>;
  update(id: number, data: IFisServico): Promise<FisServico | null>;
}
