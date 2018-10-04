import { AutoSequencia } from "./auto_sequencia.entity";
import { AutoSequenciaRepository } from "./auto_sequencia.repository";

export const modelProvider = {
  provide: "AutoSequenciaModel",
  useValue: AutoSequencia,
};

export const repositoryProvider = {
  provide: "AutoSequenciaRepository",
  useClass: AutoSequenciaRepository,
};
