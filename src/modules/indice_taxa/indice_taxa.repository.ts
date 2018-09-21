import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IndiceTaxa } from "./indice_taxa.entity";
import { IIndiceTaxa, IIndiceTaxaRepository } from "./interfaces";

/* tslint:disable:no-var-requires */

const moment = require("moment");

@Injectable()
export class IndiceTaxaRepository implements IIndiceTaxaRepository {
  constructor(
    @Inject("IndiceTaxaModel") private readonly indiceTaxaRepository: typeof IndiceTaxa,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<IndiceTaxa[]> {
    return await this.indiceTaxaRepository.findAll<IndiceTaxa>(options);
  }

  public async findById(id: number): Promise<IndiceTaxa | null> {
    return await this.indiceTaxaRepository.findById<IndiceTaxa>(id);
  }

  public async create(indiceTaxa: IIndiceTaxa, instanceTransaction?: any): Promise<IndiceTaxa> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.indiceTaxaRepository.create<IndiceTaxa>(indiceTaxa, {
            returning: true,
            transaction: !instanceTransaction ? transaction : instanceTransaction,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IIndiceTaxa, instanceTransaction?: any): Promise<IndiceTaxa | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const  indiceTaxa = await this.indiceTaxaRepository.findById<IndiceTaxa>(id);

        if (!indiceTaxa) {
          throw new MessageCodeError("indicetaxa:valida:indicetaxa");
        }
        data = this.addCurrentTime(data, "log_atualizacao");
        return await this.indiceTaxaRepository.update(data, {
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
        return await this.indiceTaxaRepository.destroy({
          transaction: !instanceTransaction ? transaction : instanceTransaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("indicetaxa:delete:erro");
    }
  }

  private addCurrentTime(data, campo) {
    data[campo] = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
    return {
      ...data,
    };
  }
}
