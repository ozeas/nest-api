/* tslint:disable:variable-name */
import {
  BeforeValidate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Length,
  Model,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";

const tableOptions: IDefineOptions = {
  tableName: "pct_autosequencia",
  timestamps: false,
};

@Table(tableOptions)
export class AutoSequencia extends Model<AutoSequencia> {
  @BeforeValidate
  public static validaRequeridos(instance: AutoSequencia) {
    const requeridos = [
      "int_empresa_id",
      "identificador",
    ];

    requeridos.forEach((requerido) => {
      if (!instance[requerido]) {
        throw new MessageCodeError(`autoservico:valida:${requerido}`);
      }
    });
  }

  @BeforeValidate
  public static async validaSequencia(instance: AutoSequencia) {
    const sequencia = await AutoSequencia.findOne({where: {
      identificador: instance.identificador,
      sequencia: instance.sequencia,
    }});
    if (sequencia) {
      throw new MessageCodeError(`autoservico:valida:jaexiste`);
    }
  }

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
  public int_empresa_id: number;

  @Length({min: 1, max: 40})
  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  public identificador: string;

  @Column({
    allowNull: false,
    defaultValue: 0,
    type: DataType.NUMERIC,
  })
  public sequencia: number;

}
