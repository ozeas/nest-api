import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IIndiceService } from "./interfaces";

@Injectable()
export class IndiceService extends BaseService implements IIndiceService {
  constructor(@Inject("IndiceRepository") protected readonly repository) {
    super(repository);
  }
}
