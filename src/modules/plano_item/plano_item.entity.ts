/* tslint:disable:variable-name */
/* tslint:disable:no-var-requires */
const moment = require("moment");
import {
  AfterValidate,
  BeforeBulkCreate,
  BeforeValidate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";

import { Plano } from "../plano/plano.entity";
import { Servico } from "../servico/servico.entity";

const tableOptions: IDefineOptions = {
  tableName: "srv_plano_item",
  timestamps: false,
};

@Table(tableOptions)
export class PlanoItem extends Model<PlanoItem> {
  @BeforeValidate
  public static validaRequeridos(instance: PlanoItem) {
    const requeridos = [
      "srv_plano_id",
      "srv_servico_id",
      "quantidade",
      "valor_bruto",
      "valor_desconto",
      "valor_total",
    ];

    requeridos.forEach((requerido) => {
      if (instance[requerido] === undefined) {
        throw new MessageCodeError(`planoitem:valida:${requerido}`);
      }
    });
  }

  @BeforeValidate
  public static validaQuantidade(instance: PlanoItem) {
    const numberReg = /^-?[0-9]+$/;
    if (!numberReg.test(instance.quantidade.toString())) {
      throw new MessageCodeError("planoitem:erro:quantidade");
    }
  }

  @BeforeValidate
  public static validaValorTotal(instance: PlanoItem) {
    const total = (instance.quantidade * instance.valor_bruto) - instance.valor_desconto;

    if (instance.valor_total !== total) {
      throw new MessageCodeError("planoitem:erro:valortotal");
    }
  }

  @BeforeValidate
  public static defineHoraInclusao(instance: PlanoItem) {
    instance.data_hora_inclusao = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
  }

  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.NUMERIC,
    unique: true,
  })
  public id: number;

  @ForeignKey(() => Plano)
  @Column({
    type: DataType.NUMERIC,
  })
  public srv_plano_id: number;

  @ForeignKey(() => Servico)
  @Column({
    type: DataType.NUMERIC,
  })
  public srv_servico_id: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 4),
  })
  public quantidade: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 4),
  })
  public valor_bruto: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 4),
  })
  public valor_desconto: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 4),
  })
  public valor_total: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  public data_hora_inclusao: string;

  @BelongsTo(() => Servico)
  public servico: Servico;

  @BelongsTo(() => Plano)
  public plano: Plano;
}
