import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IGrupoServicoService } from "./interfaces";

@Injectable()
export class GrupoServicoService extends BaseService implements IGrupoServicoService {
  constructor(@Inject("GrupoServicoRepository") protected readonly repository) {
    super(repository);
  }
}
