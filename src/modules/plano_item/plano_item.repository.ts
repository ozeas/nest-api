import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IPlanoItem, IPlanoItemRepository } from "./interfaces";
import { PlanoItem } from "./plano_item.entity";

/* tslint:disable:no-var-requires */
const moment = require("moment");

@Injectable()
export class PlanoItemRepository implements IPlanoItemRepository {
  constructor(
    @Inject("PlanoItemModel") private readonly planoItemRepository: typeof PlanoItem,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<PlanoItem[]> {
    return await this.planoItemRepository.findAll<PlanoItem>(options);
  }

  public async findById(id: number): Promise<PlanoItem | null> {
    return await this.planoItemRepository.findById<PlanoItem>(id);
  }

  public async create(data: IPlanoItem, instanceTransaction?: any): Promise<PlanoItem> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.planoItemRepository.create<PlanoItem>(data, {
            returning: true,
            transaction: !instanceTransaction ? transaction : instanceTransaction,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IPlanoItem, instanceTransaction?: any): Promise<PlanoItem | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const planoItem = await this.planoItemRepository.findById<PlanoItem>(id);

        if (!planoItem) {
          throw new MessageCodeError("planoitem:valida:planoitem");
        }
        return await planoItem.update(data, {
            transaction: !instanceTransaction ? transaction : instanceTransaction,
            validate: false,
            where: {id},
          },
        );
      });
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: number, instanceTransaction?: any): Promise<void> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.planoItemRepository.destroy({
          transaction: !instanceTransaction ? transaction : instanceTransaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("planoitem:delete:erro");
    }
  }
}
