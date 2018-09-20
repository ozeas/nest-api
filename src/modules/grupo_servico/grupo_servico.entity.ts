/* tslint:disable:variable-name */
import {
  BeforeValidate,
  Column,
  DataType,
  Length,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { Base } from "../shared/model/base.entity";

const tableOptions: IDefineOptions = {
  tableName: "srv_grupo_servico",
  timestamps: false,
};

@Table(tableOptions)
export class GrupoServico extends Base {
  @BeforeValidate
  public static validateRequireds(instance: GrupoServico) {
    const requeridos = [
      "descricao",
      "prefixo",
    ];

    requeridos.forEach((requerido) => {
      if (!instance[requerido]) {
        throw new MessageCodeError(`servico:valida:${requerido}`);
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

  @Column
  public int_empresa_id: number;

  @Length({ min: 1, max: 40 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(40),
  })
  public descricao: string;

  @Length({ min: 1, max: 15 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(15),
  })
  public prefixo: string;

  @Column({
    allowNull: false,
    defaultValue: false,
    type: DataType.BOOLEAN,
  })
  public desativado: boolean;

  @Column
  public pct_usuario_id: number;
}
