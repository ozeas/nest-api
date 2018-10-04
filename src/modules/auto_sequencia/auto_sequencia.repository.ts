import { Inject, Injectable } from "@nestjs/common";
import { Transaction } from "sequelize";

import { BaseRepository } from "../shared/model/base.repository";
import { AutoSequencia } from "./auto_sequencia.entity";
import { IAutoSequenciaRepository } from "./interfaces";

import { MessageCodeError } from "../../shared/errors/message-code-error";

@Injectable()
export class AutoSequenciaRepository extends BaseRepository<AutoSequencia> implements IAutoSequenciaRepository {
  constructor(
    @Inject("SequelizeInstance") public readonly sequelizeInstance,
    @Inject("AutoSequenciaModel") private readonly autoSequenciaRepository: typeof AutoSequencia,
  ) {
    super(sequelizeInstance, AutoSequencia);
  }

  public async gerarSequencia(empresaId: number, identificador: any, instanceTransaction?: any) {
    try {
        if (!empresaId) {
          throw new MessageCodeError(`autoservico:valida:filial`);
        }

        if (!identificador) {
          throw new MessageCodeError(`autoservico:valida:identificador`);
        }
        const query = `
            SELECT [id], [int_empresa_id], [identificador], [sequencia] FROM [pct_autosequencia] AS [AutoSequencia]
            WITH (UPDLOCK, ROWLOCK)
            WHERE
              [AutoSequencia].[identificador] = N'${identificador.identificador}'
              AND [AutoSequencia].[int_empresa_id] = ${empresaId}
            ORDER BY [AutoSequencia].[id] OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;
        `;
        let autoSequencia = await this.sequelizeInstance.query(query);
        autoSequencia = autoSequencia[0][0];

        let sequencia = 1;
        let proximo: number;
        if (!autoSequencia) {
          proximo = sequencia + 1;
          autoSequencia = await this.autoSequenciaRepository.create({
            identificador: identificador.identificador,
            int_empresa_id: empresaId,
            sequencia: proximo,
           }, {transaction: instanceTransaction});

          return `${identificador.prefixo}${this.formataCodigo(sequencia)}`;
        }

        sequencia = autoSequencia.sequencia;
        proximo = parseInt(sequencia.toString(), 10) + 1;
        const model = await this.autoSequenciaRepository.findOne({
          transaction: instanceTransaction,
          where: { id: autoSequencia.id },
        });
        await model.update({
          sequencia: proximo,
        }, {transaction: instanceTransaction, validate: false});

        return `${identificador.prefixo}${this.formataCodigo(sequencia)}`;
    } catch (error) {
      throw error;
    }
  }

  protected formataCodigo(sequencia: number) {
    const quantidadeCaracteres = sequencia.toString().length;
    const adicionais = 3 - quantidadeCaracteres;
    let quantidadeZeros = "";
    for (let i = 0; i < adicionais; i++) {
      quantidadeZeros += `0`;
    }

    return `${quantidadeZeros}${sequencia}`;
  }
}
