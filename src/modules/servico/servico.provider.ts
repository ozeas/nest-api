import { Servico } from "./servico.entity";
import { ServicoRepository } from "./servico.repository";

export const servicoProvider = {
  provide: "ServicoModel",
  useValue: Servico,
};

export const repositoryProvider = {
  provide: "ServicoRepository",
  useClass: ServicoRepository,
};
