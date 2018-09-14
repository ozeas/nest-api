import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IVendaItem, IVendaItemRepository } from "./interfaces/index";
import { VendaItem } from "./venda_item.entity";

@Injectable()
export class VendaItemRepository implements IVendaItemRepository {
  constructor(
    @Inject("VendaItemModel") private readonly vendaItemRepository: typeof VendaItem,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<VendaItem[]> {
    return await this.vendaItemRepository.findAll<VendaItem>(options);
  }

  public async findById(id: number): Promise<VendaItem | null> {
    return await this.vendaItemRepository.findById<VendaItem>(id);
  }

  public async create(vendaItem: IVendaItem): Promise<VendaItem> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.vendaItemRepository.create<VendaItem>(vendaItem, {
            returning: true,
            transaction,
        });
      });
    } catch (error) {
      throw new MessageCodeError("generic:onCreate");
    }
  }

  public async update(id: number, data: IVendaItem): Promise<VendaItem | null> {
    return await this.sequelizeInstance.transaction(async (transaction) => {
      const  vendaItem = await this.vendaItemRepository.findById<VendaItem>(id, {
        transaction,
      });

      if (!vendaItem) {
        throw new MessageCodeError("generic:onUpdate");
      }

      return await VendaItem.update(data, {where: {id}, transaction});
    });
  }

  public async delete(id: number): Promise<void> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.vendaItemRepository.destroy({
          transaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("generic:onDelete");
    }
  }
}
