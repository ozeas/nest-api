/* tslint:disable:variable-name */

import {
  AfterValidate,
  BeforeValidate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { Indice } from "../indice/indice.entity";
import { Base } from "../shared/model/base.entity";

const tableOptions: IDefineOptions = {
  tableName: "srv_indice_taxa",
  timestamps: false,
};

@Table(tableOptions)
export class IndiceTaxa extends Base {
  @BeforeValidate
  public static validaRequeridos(instance: IndiceTaxa) {
    const requeridos = [
      "aliquota",
      "reajuste_data",
      "reajuste_positivo",
    ];

    requeridos.forEach((requerido) => {
      if (!instance[requerido]) {
        throw new MessageCodeError(`indice:valida:${requerido}`);
      }
    });
  }

  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.NUMERIC,
    unique: true,
  })
  public id: number;

  @ForeignKey(() => Indice)
  @Column({
    allowNull: false,
  })
  public srv_indice_id: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 4),
  })
  public aliquota: number;

  @Column({
    allowNull: false,
  })
  public reajuste_data: string;

  @Column({
    allowNull: false,
  })
  public reajuste_positivo: boolean;

  @Column
  public log_pct_usuario_id: number;

  @BelongsTo(() => Indice, { onDelete: "cascade"})
  public indice: Indice;
}
