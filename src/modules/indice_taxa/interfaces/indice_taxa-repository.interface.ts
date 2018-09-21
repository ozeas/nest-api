import { IndiceTaxa } from "../indice_taxa.entity";
import { IIndiceTaxa } from "./indice_taxa.interface";

export interface IIndiceTaxaRepository {
  create(produto: IIndiceTaxa, instanceTransaction?: any): Promise<IndiceTaxa>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options: object): Promise<IndiceTaxa[]>;
  findById(id: number): Promise<IndiceTaxa | null>;
  update(id: number, data: IIndiceTaxa, instanceTransaction?: any): Promise<IndiceTaxa | null>;
}
