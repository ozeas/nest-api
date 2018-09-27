import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { BaseRepository } from "../shared/model/base.repository";
import { IPlanoItem, IPlanoItemRepository } from "./interfaces";
import { PlanoItem } from "./plano_item.entity";

/* tslint:disable:no-var-requires */
/* tslint:disable:max-line-length */
const moment = require("moment");

@Injectable()
export class PlanoItemRepository extends BaseRepository<PlanoItem> implements IPlanoItemRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("PlanoItemModel") private readonly planoItemRepository: typeof PlanoItem,
  ) {
    super(sequelizeInstance, PlanoItem);
  }

  public async update(id: number, data: IPlanoItem, instanceTransaction?: any, options ?: any): Promise<PlanoItem | null> {
    try {
      const planoItem = await this.planoItemRepository.findById<PlanoItem>(id);

      if (!planoItem) {
        throw new MessageCodeError("planoitem:valida:planoitem");
      }

      options = {
        validate: false,
        where: {id},
      };
      return await super.update(id, data, instanceTransaction, options);
    } catch (error) {
      throw error;
    }
  }
}
