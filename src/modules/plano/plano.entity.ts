/* tslint:disable:variable-name */
import {
  BeforeValidate,
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Length,
  Table,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { PlanoItem } from "../plano_item";
import { Base } from "../shared/model/base.entity";

const tableOptions: IDefineOptions = {
  tableName: "srv_plano",
  timestamps: false,
};

@Table(tableOptions)
export class Plano extends Base {

  @BeforeValidate
  public static validaRequeridos(instance: Plano) {
    const requeridos = [
      "int_empresa_id",
      "descricao",
      "valor_servico",
      "valor_desconto",
      "valor_total",
      "log_pct_usuario_id",
    ];

    requeridos.forEach((requerido) => {
      if (instance[requerido] === undefined) {
        throw new MessageCodeError(`plano:valida:${requerido}`);
      }
    });
  }

  @BeforeValidate
  public static validaValorServico(instance: Plano) {
    if (!instance.itens || !instance.itens.length) {
      throw new MessageCodeError("plano:valida:quantidadeitens");
    }

    let total = 0;
    instance.itens.forEach((item) => {
      total += item.valor_bruto;
    });

    if (total !== instance.valor_servico) {
      throw new MessageCodeError("plano:erro:valorservico");
    }
  }

  @BeforeValidate
  public static validaValorDesconto(instance: Plano) {
    if (!instance.itens || !instance.itens.length) {
      throw new MessageCodeError("plano:valida:quantidadeitens");
    }

    let total = 0;
    instance.itens.forEach((item) => {
      total += item.valor_desconto;
    });

    if (total !== instance.valor_desconto) {
      throw new MessageCodeError("plano:erro:valordesconto");
    }
  }

  @BeforeValidate
  public static validaValorTotal(instance: Plano) {
    if (!instance.itens || !instance.itens.length) {
      throw new MessageCodeError("plano:valida:quantidadeitens");
    }

    let total = 0;
    instance.itens.forEach((item) => {
      total += item.valor_total;
    });

    if (total !== instance.valor_total) {
      throw new MessageCodeError("plano:erro:valortotal");
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

  @Length({ min: 1, max: 40 })
  @Column({
    allowNull: false,
    type: DataType.CHAR(60),
  })
  public descricao: string;

  @Length({ min: 0, max: 200 })
  @Column({
    allowNull: true,
    type: DataType.CHAR(200),
  })
  public descricao_detalhada: string;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 2),
  })
  public valor_servico: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 2),
  })
  public valor_desconto: number;

  @Column({
    allowNull: false,
    type: DataType.DECIMAL(12, 2),
  })
  public valor_total: number;

  @Column({
    allowNull: false,
    defaultValue: false,
    type: DataType.BOOLEAN,
  })
  public desativado: boolean;

  @Column
  public log_pct_usuario_id: number;

  @HasMany(() => PlanoItem)
  public itens: PlanoItem[];
}
