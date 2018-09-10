import  {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions: IDefineOptions = {
  timestamps: false,
  tableName: 'produto'
} as IDefineOptions;

@Table(tableOptions)
export class Produto extends Model<Produto> {
  @Column({
    type: DataType.NUMERIC,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  })
  public id: number;

  @Column({
    type: DataType.CHAR(40)
  })
  public descricao: string

  @Column({
    type: DataType.DECIMAL(11, 2)
  })
  public valor: number

  @Column({
    type: DataType.DECIMAL(11, 2)
  })
  public estoque: number
}
