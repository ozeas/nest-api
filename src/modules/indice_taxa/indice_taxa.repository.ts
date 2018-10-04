import { Inject, Injectable } from "@nestjs/common";
import { BaseRepository } from "../shared/model/base.repository";
import { IndiceTaxa } from "./indice_taxa.entity";
import { IIndiceTaxaRepository } from "./interfaces";

@Injectable()
export class IndiceTaxaRepository extends BaseRepository<IndiceTaxa> implements IIndiceTaxaRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("IndiceTaxaModel") private readonly indiceTaxaRepository: typeof IndiceTaxa,
  ) {
    super(sequelizeInstance, IndiceTaxa);
  }
}
