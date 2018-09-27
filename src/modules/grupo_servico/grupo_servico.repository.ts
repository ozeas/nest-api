import { Inject, Injectable } from "@nestjs/common";
import { BaseRepository } from "../shared/model/base.repository";
import { GrupoServico } from "./grupo_servico.entity";
import { IGrupoServicoRepository } from "./interfaces/index";

@Injectable()
export class GrupoServicoRepository extends BaseRepository<GrupoServico> implements IGrupoServicoRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("GrupoServicoModel") private readonly grupoServicoRepository: typeof GrupoServico,
  ) {
    super(sequelizeInstance, GrupoServico);
  }
}
