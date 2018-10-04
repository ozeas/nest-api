import { Parametro } from "./parametro.entity";
import { ParametroRepository } from "./parametro.repository";

export const modelProvider = {
  provide: "ParametroModel",
  useValue: Parametro,
};

export const repositoryProvider = {
  provide: "ParametroRepository",
  useClass: ParametroRepository,
};
