/* tslint:disable:variable-name */
import {
  BeforeValidate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { Base } from "../shared/model/base.entity";

const tableOptions: IDefineOptions = {
  tableName: "srv_indice_taxa",
  timestamps: false,
};

@Table(tableOptions)
export class IndiceTaxa extends Base {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.NUMERIC,
    unique: true,
  })
  public id: number;

  @Column({
    allowNull: false,
  })
  public src_indice: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 4),
  })
  public aliquota: number;

  @Column({
    allowNull: false,
  })
  public reajuste_data: Date;

  @Column({
    allowNull: false,
  })
  public reajuste_positivo: boolean;

  @Column
  public log_pct_usuario_id: number;
}
