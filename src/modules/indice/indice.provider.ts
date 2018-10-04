import { Indice } from "./indice.entity";
import { IndiceRepository } from "./indice.repository";

export const indiceProvider = {
  provide: "IndiceModel",
  useValue: Indice,
};

export const repositoryProvider = {
  provide: "IndiceRepository",
  useClass: IndiceRepository,
};
