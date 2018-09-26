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
import { GrupoServico } from "../grupo_servico/grupo_servico.entity";
import { PlanoItem } from "../plano_item";
import { Base } from "../shared/model/base.entity";

const tableOptions: IDefineOptions = {
  tableName: "srv_servico",
  timestamps: false,
};

@Table(tableOptions)
export class Servico extends Base {
  @BeforeValidate
  public static validaRequeridos(instance: Servico) {
    const requeridos = [
      "int_empresa_id",
      "srv_grupo_servico_id",
      "codigo",
      "descricao",
      "valor",
    ];

    requeridos.forEach((requerido) => {
      if (!instance[requerido]) {
        throw new MessageCodeError(`servico:valida:${requerido}`);
      }
    });
  }

  @BeforeValidate
  public static validaValor(instance: Servico) {
    if (instance.valor < 0) {
      throw new MessageCodeError(`servico:valida:valor:conteudo`);
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

  @ForeignKey(() => GrupoServico)
  @Column({
    allowNull: false,
  })
  public srv_grupo_servico_id: number;

  @Length({ min: 1, max: 20 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(20),
  })
  public codigo: string;

  @Length({ min: 1, max: 60 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(60),
  })
  public descricao: string;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 2),
  })
  public valor: number;

  @Column({
    allowNull: false,
    defaultValue: false,
    type: DataType.BOOLEAN,
  })
  public desativado: boolean;

  @Column
  public log_pct_usuario_id: number;

  @BelongsTo(() => GrupoServico)
  public grupo_servico: GrupoServico;

  @HasMany(() => PlanoItem)
  public planoItens: PlanoItem[];
}
