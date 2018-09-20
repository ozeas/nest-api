import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IServico, IServicoRepository } from "./interfaces";
import { Servico } from "./servico.entity";

/* tslint:disable:no-var-requires */

const moment = require("moment");

@Injectable()
export class ServicoRepository implements IServicoRepository {
  constructor(
    @Inject("ServicoModel") private readonly servicoRepository: typeof Servico,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<Servico[]> {
    return await this.servicoRepository.findAll<Servico>(options);
  }

  public async findById(id: number): Promise<Servico | null> {
    return await this.servicoRepository.findById<Servico>(id);
  }

  public async create(servico: IServico, instanceTransaction?: any): Promise<Servico> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.servicoRepository.create<Servico>(servico, {
            returning: true,
            transaction: !instanceTransaction ? transaction : instanceTransaction,
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IServico, instanceTransaction?: any): Promise<Servico | null> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        const  servico = await this.servicoRepository.findById<Servico>(id);

        if (!servico) {
          throw new MessageCodeError("servico:valida:servico");
        }
        data = {
          ...data,
          ...{log_atualizacao: moment().format("MM-DD-YYYY HH:mm:ss:SSS")},
        };
        return await this.servicoRepository.update(data, {
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
        return await this.servicoRepository.destroy({
          transaction: !instanceTransaction ? transaction : instanceTransaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("servico:delete:erro");
    }
  }
}
