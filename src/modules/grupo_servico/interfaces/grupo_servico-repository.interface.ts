import { GrupoServico } from "../grupo_servico.entity";
import { IGrupoServico } from "./index";

export interface IGrupoServicoRepository {
  create(produto: IGrupoServico, instanceTransaction?: any): Promise<GrupoServico>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options?: object): Promise<GrupoServico[]>;
  findById(id: number): Promise<GrupoServico | null>;
  update(id: number, data: IGrupoServico, instanceTransaction?: any): Promise<GrupoServico | null>;
}
