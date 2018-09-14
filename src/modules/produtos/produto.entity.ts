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
import { VendaItem } from "../venda_item/venda_item.entity";

const tableOptions: IDefineOptions = {
  tableName: "produto",
  timestamps: false,
} as IDefineOptions;

@Table(tableOptions)
export class Produto extends Model<Produto> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.NUMERIC,
    unique: true,
  })
  public id: number;

  @Length({ min: 1, max: 40 })
  @Column({
    type: DataType.CHAR(40),
  })
  public descricao: string;

  @IsNumber()
  @Column({
    type: DataType.DECIMAL(11, 2),
  })
  public valor: number;

  @IsNumber()
  @Column({
    type: DataType.DECIMAL(11, 2),
  })
  public estoque: number;

  @HasMany(() => VendaItem)
  public vendaItens: VendaItem[];
}
