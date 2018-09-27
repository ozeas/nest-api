import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IServicoService } from "./interfaces";

@Injectable()
export class ServicoService extends BaseService implements IServicoService {
  constructor(@Inject("ServicoRepository") protected readonly repository) {
    super(repository);
  }
}
