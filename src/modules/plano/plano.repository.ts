import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { PlanoItem } from "../plano_item";
import { IPlano, IPlanoRepository } from "./interfaces";
import { Plano } from "./plano.entity";

/* tslint:disable:no-var-requires */
const moment = require("moment");

@Injectable()
export class PlanoRepository implements IPlanoRepository {
  constructor(
    @Inject("PlanoModel") private readonly model: typeof Plano,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<Plano[]> {
    return await this.model.findAll<Plano>(options);
  }

  public async findById(id: number): Promise<Plano | null> {
    return await this.model.findById<Plano>(id);
  }

  public async create(data: IPlano, instanceTransaction?: any): Promise<Plano> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        this.validaItens(data);
        return await this.model.create<Plano>(data, {
            include: [PlanoItem],
            returning: true,
            transaction: !instanceTransaction ? transaction : instanceTransaction,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IPlano, instanceTransaction?: any): Promise<Plano | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const plano = await this.model.findById<Plano>(id);

        if (!plano) {
          throw new MessageCodeError("plano:valida:plano");
        }
        data = this.addCurrentTime(data, "log_atualizacao");
        return await plano.update(data, {
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
        return await this.model.destroy({
          transaction: !instanceTransaction ? transaction : instanceTransaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("plano:delete:erro");
    }
  }

  private addCurrentTime(data, campo) {
    data[campo] = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
    return {
      ...data,
    };
  }

  private validaItens(data) {
    if (!data.itens) {
      throw new MessageCodeError("plano:valida:quantidadeitens");
    }
    return true;
  }
}
