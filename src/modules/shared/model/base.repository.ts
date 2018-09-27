import { Model } from "sequelize-typescript";
import { MessageCodeError } from "../../../shared/errors/message-code-error";

/* tslint:disable:no-var-requires */
const moment = require("moment");

export abstract class BaseRepository<T> {
  protected sequelizeInstance: any;
  private model: any;
  constructor(
    sequelizeInstance: any,
    model: any,
  ) {
    this.model = model;
    this.sequelizeInstance = sequelizeInstance;
  }

  public async findAll(options?: any, include = []): Promise<T[]> {
    options = {
      ...options,
      include,
    };
    return this.model.findAll(options);
  }

  public async findById(id: number, options = {}): Promise<T | null> {
    return await this.model.findById(id, options);
  }

  public async create(model: any, instanceTransaction?: any, include = []) {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const options = {
          include,
          returning: true,
          transaction: !instanceTransaction ? transaction : instanceTransaction,
        };
        return await this.model.create(model, options);
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: any, instanceTransaction?: any, options = {}): Promise<T | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const modelInstance = await this.model.findById(id);
        if (!modelInstance) {
          throw new MessageCodeError("generic:notFound");
        }

        data = {
          ...data,
          ...{log_atualizacao: moment().format("MM-DD-YYYY HH:mm:ss:SSS")},
        };

        options = {
          ...options,
          transaction: !instanceTransaction ? transaction : instanceTransaction,
        };

        return await modelInstance.update(data, options);
      });
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: number, instanceTransaction?: any): Promise<void> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const modelInstance = await this.model.findById(id);
        if (!modelInstance) {
          throw new MessageCodeError("generic:notFound");
        }

        return await modelInstance.destroy({
          transaction: !instanceTransaction ? transaction : instanceTransaction,
          where: {id},
        });
      });
    } catch (error) {
      throw new MessageCodeError("generic:error:delete");
    }
  }
}
