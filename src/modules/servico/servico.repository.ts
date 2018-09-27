import { Inject, Injectable } from "@nestjs/common";
import { BaseRepository } from "../shared/model/base.repository";
import { IServicoRepository } from "./interfaces";
import { Servico } from "./servico.entity";

@Injectable()
export class ServicoRepository extends BaseRepository<Servico> implements IServicoRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("ServicoModel") private readonly servicoRepository: typeof Servico,
  ) {
    super(sequelizeInstance, Servico);
  }
}
