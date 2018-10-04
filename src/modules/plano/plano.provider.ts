import { Plano } from "./plano.entity";
import { PlanoRepository } from "./plano.repository";

export const modelProvider = {
  provide: "PlanoModel",
  useValue: Plano,
};

export const repositoryProvider = {
  provide: "PlanoRepository",
  useClass: PlanoRepository,
};
