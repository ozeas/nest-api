import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IndiceTaxa } from "../indice_taxa/indice_taxa.entity";
import { BaseRepository } from "../shared/model/base.repository";
import { Indice } from "./indice.entity";
import { IIndice, IIndiceRepository } from "./interfaces";

/* tslint:disable:no-var-requires */
const moment = require("moment");

@Injectable()
export class IndiceRepository extends BaseRepository<Indice> implements IIndiceRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("IndiceModel") private readonly indiceRepository: typeof Indice,
  ) {
    super(sequelizeInstance, Indice);
  }

  public async findAll(options?: any): Promise<Indice[]> {
    return await super.findAll(options, [IndiceTaxa]);
  }

  public async findById(id: number): Promise<Indice | null> {
    return await super.findById(id, {include: [IndiceTaxa]});
  }

  public async create(indice: IIndice, instanceTransaction?: any): Promise<Indice> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        indice = this.setUsuario(indice);
        this.validaDataReajuste(indice);

        await super.create(indice, transaction, [IndiceTaxa]);
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

        if (data.taxas && data.taxas.length) {
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
