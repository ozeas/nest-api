import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { PlanoItem } from "../plano_item";
import { BaseRepository } from "../shared/model/base.repository";
import { IPlano, IPlanoRepository } from "./interfaces";
import { Plano } from "./plano.entity";

/* tslint:disable:no-var-requires */
const moment = require("moment");

@Injectable()
export class PlanoRepository extends BaseRepository<Plano> implements IPlanoRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("PlanoModel") private readonly planoRepository: typeof Plano,
  ) {
    super(sequelizeInstance, Plano);
  }

  public async findById(id: number): Promise<Plano | null> {
    return await super.findById(id, {include: [PlanoItem]});
  }

  public async create(data: IPlano, instanceTransaction?: any): Promise<Plano> {
    try {
      return await super.create(data, instanceTransaction, [PlanoItem]);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IPlano, instanceTransaction?: any): Promise<Plano | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const plano = await this.planoRepository.findById<Plano>(id, {include: [PlanoItem]});

        if (!plano) {
          throw new MessageCodeError("plano:notfound");
        }

        instanceTransaction = instanceTransaction ? transaction : instanceTransaction;
        if (data.itens) {
          plano.itens.forEach(async (item) => {
            await item.destroy({transaction: instanceTransaction});
          });

          data.itens.forEach(async (item) => {
            await PlanoItem.create({
              ...item,
              ...{srv_plano_id: plano.id},
            }, {transaction: instanceTransaction});
          });
        }

        data = this.addCurrentTime(data, "log_atualizacao");
        return await plano.update(data, {
            transaction: instanceTransaction,
            where: {id},
          },
        );
      });
    } catch (error) {
      throw error;
    }
  }

  private addCurrentTime(data, campo) {
    data[campo] = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
    return {
      ...data,
    };
  }
}
