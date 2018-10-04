import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { BaseRepository } from "../shared/model/base.repository";
import { IParametroRepository } from "./interfaces";
import { Parametro } from "./parametro.entity";

@Injectable()
export class ParametroRepository extends BaseRepository<Parametro> {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("ParametroModel") private readonly parametroRepository: typeof Parametro,
  ) {
    super(sequelizeInstance, Parametro);
  }
}
