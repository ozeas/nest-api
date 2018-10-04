/* tslint:disable:variable-name */
import {
  BeforeValidate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Length,
  Scopes,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IndiceTaxa } from "../indice_taxa/indice_taxa.entity";
import { Base } from "../shared/model/base.entity";

const tableOptions: IDefineOptions = {
  tableName: "srv_indice",
  timestamps: false,
};

@Table(tableOptions)
export class Indice extends Base {
  @BeforeValidate
  public static validaRequeridos(instance: Indice) {
    const requeridos = [
      "int_empresa_id",
      "descricao",
    ];

    requeridos.forEach((requerido) => {
      if (!instance[requerido]) {
        throw new MessageCodeError(`indice:valida:${requerido}`);
      }
    });
  }

  @Column({
    allowNull: false,
  })
  public int_empresa_id: number;

  @Length({ min: 1, max: 60 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(60),
  })
  public descricao: string;

  @Column({
    allowNull: false,
    defaultValue: false,
    type: DataType.BOOLEAN,
  })
  public desativado: boolean;

  @Column
  public log_pct_usuario_id: number;

  @HasMany(() => IndiceTaxa)
  public taxas: IndiceTaxa[];
}
