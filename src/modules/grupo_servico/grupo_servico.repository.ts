import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { GrupoServico } from "./grupo_servico.entity";
import { IGrupoServico, IGrupoServicoRepository } from "./interfaces/index";

/* tslint:disable:no-var-requires */

const moment = require("moment");

@Injectable()
export class GrupoServicoRepository implements IGrupoServicoRepository {
  constructor(
    @Inject("GrupoServicoModel") private readonly grupoServicoRepository: typeof GrupoServico,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<GrupoServico[]> {
    return await this.grupoServicoRepository.findAll<GrupoServico>(options);
  }

  public async findById(id: number): Promise<GrupoServico | null> {
    return await this.grupoServicoRepository.findById<GrupoServico>(id);
  }

  public async create(gruposervico: IGrupoServico, instanceTransaction?: any): Promise<GrupoServico> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.grupoServicoRepository.create<GrupoServico>(gruposervico, {
            returning: true,
            transaction: !instanceTransaction ? transaction : instanceTransaction,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IGrupoServico, instanceTransaction?: any): Promise<GrupoServico | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const  gruposervico = await this.grupoServicoRepository.findById<GrupoServico>(id);

        if (!gruposervico) {
          throw new MessageCodeError("gruposervico:valida:gruposervico");
        }
        data = {
          ...data,
          ...{log_atualizacao: moment().format("MM-DD-YYYY HH:mm:ss:SSS")},
        };
        return await this.grupoServicoRepository.update(data, {
            transaction: !instanceTransaction ? transaction : instanceTransaction,
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
        return await this.grupoServicoRepository.destroy({
          transaction: !instanceTransaction ? transaction : instanceTransaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("gruposervico:delete:erro");
    }
  }
}
