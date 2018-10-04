import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IPlanoService } from "./interfaces";

@Injectable()
export class PlanoService extends BaseService implements IPlanoService {
  constructor(@Inject("PlanoRepository") protected readonly repository) {
    super(repository);
  }
}
