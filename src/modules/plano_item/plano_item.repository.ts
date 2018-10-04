import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { BaseRepository } from "../shared/model/base.repository";
import { IPlanoItem, IPlanoItemRepository } from "./interfaces";
import { PlanoItem } from "./plano_item.entity";

@Injectable()
export class PlanoItemRepository extends BaseRepository<PlanoItem> implements IPlanoItemRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("PlanoItemModel") private readonly planoItemRepository: typeof PlanoItem,
  ) {
    super(sequelizeInstance, PlanoItem);
  }

  public async update(id: number, data: IPlanoItem, transaction?: any, options ?: any): Promise<PlanoItem | null> {
    try {
      const planoItem = await this.planoItemRepository.findById<PlanoItem>(id);

      if (!planoItem) {
        throw new MessageCodeError("planoitem:valida:planoitem");
      }

      options = {
        validate: false,
        where: {id},
      };
      return await super.update(id, data, transaction, options);
    } catch (error) {
      throw error;
    }
  }
}
