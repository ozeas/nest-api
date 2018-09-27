import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IIndiceTaxaService } from "./interfaces";

@Injectable()
export class IndiceTaxaService extends BaseService implements IIndiceTaxaService {
  constructor(@Inject("IndiceTaxaRepository") protected readonly repository) {
    super(repository);
  }
}
