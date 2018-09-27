import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "../shared/model/base.service";
import { IPanoItemService } from "./interfaces";

@Injectable()
export class PlanoItemService extends BaseService implements IPanoItemService {
  constructor(@Inject("PlanoItemRepository") protected readonly repository) {
    super(repository);
  }
}
