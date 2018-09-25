import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IndiceTaxa } from "../indice_taxa/indice_taxa.entity";
import { Indice } from "./indice.entity";
import { IIndice, IIndiceRepository } from "./interfaces";

/* tslint:disable:no-var-requires */

const moment = require("moment");

@Injectable()
export class IndiceRepository implements IIndiceRepository {
  constructor(
    @Inject("IndiceModel") private readonly indiceRepository: typeof Indice,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<Indice[]> {
    options = {
      ...options,
      include: [IndiceTaxa],
    };
    return await this.indiceRepository.findAll<Indice>(options);
  }

  public async findById(id: number): Promise<Indice | null> {
    const options = {
      include: [IndiceTaxa],
    };
    return await this.indiceRepository.findById<Indice>(id, options);
  }

  public async create(indice: IIndice, instanceTransaction?: any): Promise<Indice> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        indice = this.setUsuario(indice);
        this.validaDataReajuste(indice);
        await this.indiceRepository.create<Indice>(indice, {
            include: [IndiceTaxa],
            returning: true,
            transaction: !instanceTransaction ? transaction : instanceTransaction,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IIndice, instanceTransaction?: any): Promise<Indice | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const  indice = await this.indiceRepository.findById<Indice>(id);

        if (!indice) {
          throw new MessageCodeError("indice:valida:indice");
        }

        data = this.addCurrentTime(data, "log_atualizacao");
        data = this.setUsuario(data, "alterar");
        this.validaDataReajuste(data, "alterar");

        if (indice.taxas) {
          indice.taxas.forEach(async (taxa) => {
            await taxa.destroy();
          });
        }

        if (data.taxas) {
          data.taxas.forEach(async (taxa) => {
            await IndiceTaxa.create({
              ...taxa,
              ...{srv_indice_id: indice.id},
            }, {transaction});
          });
        }

        await indice.update(data, {
            returning: true,
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
        return await this.indiceRepository.destroy({
          transaction: !instanceTransaction ? transaction : instanceTransaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("indice:delete:erro");
    }
  }

  private addCurrentTime(data, campo) {
    data[campo] = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
    return {
      ...data,
    };
  }

  private setUsuario(indice: any, action = "criar") {
    if (action !== "criar" && !indice.taxas) {
      return indice;
    }

    if (!indice.log_pct_usuario_id) {
      throw new MessageCodeError("indice:valida:log_pct_usuario_id");
    }

    if (!indice.taxas || typeof indice.taxas !== "object" || !indice.taxas.length) {
      throw new MessageCodeError("indice:valida:taxas");
    }

    indice.taxas.forEach((taxa) => {
      taxa.log_pct_usuario_id = indice.log_pct_usuario_id;
    });
    return indice;
  }

  private validaDataReajuste(indice: any, action = "criar") {
    if (action !== "criar" && !indice.taxas) {
      return true;
    }

    if (!indice.taxas || typeof indice.taxas !== "object" || !indice.taxas.length) {
      throw new MessageCodeError("indice:valida:taxas");
    }

    const comprimento = indice.taxas.length;
    for (let i = 0; i < comprimento; i++) {
      for (let j = (i + 1); j < comprimento; j++) {
        if (indice.taxas[i].reajuste_data === indice.taxas[j].reajuste_data) {
          throw new MessageCodeError("indice:valida:datareajusterepetida");
        }
      }
    }
  }
}
