import { Inject, Injectable } from "@nestjs/common";
import { BaseRepository } from "../shared/model/base.repository";
import { IServicoRepository } from "./interfaces";
import { Servico } from "./servico.entity";

import { GrupoServico } from "../grupo_servico";

@Injectable()
export class ServicoRepository extends BaseRepository<Servico> implements IServicoRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("ServicoModel") private readonly servicoRepository: typeof Servico,
    @Inject("AutoSequenciaRepository") private readonly autoSequenciaRepository,
  ) {
    super(sequelizeInstance, Servico);
  }

  public async create(model: any, instanceTransaction?: any, include = []) {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        instanceTransaction = !instanceTransaction ? transaction : instanceTransaction;

        const {grupo_servico} = await this.servicoRepository.findOne({
          include: [GrupoServico],
          transaction: instanceTransaction,
          where: {
            srv_grupo_servico_id: model.srv_grupo_servico_id,
          },
        });

        const identificador = {
          identificador: `SRV_SERVICO.${grupo_servico.prefixo}`,
          prefixo: grupo_servico.prefixo,
        };
        const filial = model.int_empresa_id;
        const codigo = await this.autoSequenciaRepository.gerarSequencia(filial, identificador, instanceTransaction);

        model.codigo = codigo;
        return await super.create(model, instanceTransaction);
      });
    } catch (error) {
      throw error;
    }
  }
}
