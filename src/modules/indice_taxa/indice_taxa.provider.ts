import { IndiceTaxa } from "./indice_taxa.entity";
import { IndiceTaxaRepository } from "./indice_taxa.repository";

export const indiceTaxaProvider = {
  provide: "IndiceTaxaModel",
  useValue: IndiceTaxa,
};

export const repositoryProvider = {
  provide: "IndiceTaxaRepository",
  useClass: IndiceTaxaRepository,
};
