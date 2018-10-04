import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IAutoSequenciaService } from "./interfaces";

@Injectable()
export class AutoSequenciaService extends BaseService implements IAutoSequenciaService {
  constructor(@Inject("AutoSequenciaRepository") protected readonly repository) {
    super(repository);
  }
}
