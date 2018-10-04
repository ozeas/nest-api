import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IParametroService } from "./interfaces";

@Injectable()
export class ParametroService extends BaseService implements IParametroService {
  constructor(@Inject("ParametroRepository") protected readonly repository) {
    super(repository);
  }
}
