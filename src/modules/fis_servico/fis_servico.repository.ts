import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { FisServico } from "./fis_servico.entity";
import { IFisServico, IFisServicoRepository } from "./interfaces/index";

@Injectable()
export class FisServicoRepository implements IFisServicoRepository {
  constructor(
    @Inject("FisServicoModel") private readonly fisServicoRepository: typeof FisServico,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<FisServico[]> {
    return await this.fisServicoRepository.findAll<FisServico>(options);
  }

  public async findById(id: number): Promise<FisServico | null> {
    return await this.fisServicoRepository.findById<FisServico>(id);
  }

  public async create(produto: IFisServico): Promise<FisServico> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.fisServicoRepository.create<FisServico>(produto, {
            returning: true,
            transaction,
        });
      });
    } catch (error) {
      throw new MessageCodeError("generic:onCreate");
    }
  }

  public async update(id: number, data: IFisServico): Promise<FisServico | null> {
    return await this.sequelizeInstance.transaction(async (transaction) => {
      const  produto = await this.fisServicoRepository.findById<FisServico>(id, {
        transaction,
      });

      if (!produto) {
        throw new MessageCodeError("generic:onUpdate");
      }

      return await FisServico.update(data, {where: {id}, transaction});
    });
  }

  public async delete(id: number): Promise<void> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.fisServicoRepository.destroy({
          transaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("generic:onDelete");
    }
  }
}
