import { IsNumber } from "class-validator";
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  Length,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";

const tableOptions: IDefineOptions = {
  tableName: "fis_servico",
  timestamps: false,
} as IDefineOptions;

@Table(tableOptions)
export class FisServico extends Model<FisServico> {
  @Length({ min: 1, max: 40 })
  @Column({
    primaryKey: true,
    type: DataType.CHAR(40),
  })
  public codigo: string;

  @Length({ min: 1, max: 40 })
  @Column({
    type: DataType.CHAR(40),
  })
  public descricao: string;
}
