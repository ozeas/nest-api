import { FisServico } from "./fis_servico.entity";
import { FisServicoRepository } from "./fis_servico.repository";

export const fisServicoProvider = {
  provide: "FisServicoModel",
  useValue: FisServico,
};

export const repositoryProvide = {
  provide: "FisServicoRepository",
  useClass: FisServicoRepository,
};
