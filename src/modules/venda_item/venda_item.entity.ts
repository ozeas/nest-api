
/* tslint:disable:variable-name */
import { IsNumber } from "class-validator";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { Produto } from "../produtos/produto.entity";

const tableOptions: IDefineOptions = {
  tableName: "venda_item",
  timestamps: false,
} as IDefineOptions;

@Table(tableOptions)
export class VendaItem extends Model<VendaItem> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.NUMERIC,
    unique: true,
  })
  public id: number;

  @Column({
    type: DataType.NUMERIC,
  })
  public venda_id: number;

  @Column({
    type: DataType.DECIMAL(11, 2),
  })
  public unitario: number;

  @Column({
    type: DataType.DECIMAL(11, 2),
  })
  public quantidade: number;

  @Column({
    type: DataType.DECIMAL(11, 2),
  })
  public total: number;

  @ForeignKey(() => Produto)
  @Column
  public produto_id: number;

  @BelongsTo(() => Produto)
  public produto: Produto;
}
