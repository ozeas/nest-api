/* tslint:disable:variable-name */
import {
  BeforeValidate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Length,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { Base } from "../shared/model/base.entity";

const tableOptions: IDefineOptions = {
  tableName: "pct_parametro",
  timestamps: false,
};

@Table(tableOptions)
export class Parametro extends Base {
  @BeforeValidate
  public static validaRequeridos(instance: Parametro) {
    const requeridos = [
      "parametro",
      "descricao",
      "codigo",
      "dominio",
      "valor",
    ];

    requeridos.forEach((requerido) => {
      if (!instance[requerido]) {
        throw new MessageCodeError(`parametro:valida:${requerido}`);
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

  @Length({min: 1, max: 5})
  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  public parametro: string;

  @Length({ min: 1, max: 250 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(250),
  })
  public descricao: string;

  @Length({ min: 1, max: 100 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(250),
  })
  public dominio: string;

  @Length({ min: 1, max: 100 })
  @Column({
    allowNull: true,
    type: DataType.CHAR(250),
  })
  public valor: string;
}
