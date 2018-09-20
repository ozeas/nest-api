import { GrupoServico } from "./grupo_servico.entity";
import { GrupoServicoRepository } from "./grupo_servico.repository";

export const grupoServicoProvider = {
  provide: "GrupoServicoModel",
  useValue: GrupoServico,
};

export const repositoryProvide = {
  provide: "GrupoServicoRepository",
  useClass: GrupoServicoRepository,
};
