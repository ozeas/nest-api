/* tslint:disable:variable-name */
import {
    BeforeCreate,
    BeforeValidate,
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    Model,
    Table,
    UpdatedAt,
} from "sequelize-typescript";
import { IDefineOptions } from "sequelize-typescript/lib/interfaces/IDefineOptions";

const tableOptions: IDefineOptions = {
    tableName: "pct_usuario_perfil_rotina",
    timestamp: false,
} as IDefineOptions;

@Table(tableOptions)
export class UsuarioPerfil extends Model<UsuarioPerfil> {
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
        type: DataType.NUMERIC,
    })
    public int_empresa_id;

    @Column({
        allowNull: false,
        type: DataType.NUMERIC,
    })
    public pct_usuario_perfil_id;

    @Column({
        allowNull: false,
        type: DataType.NUMERIC,
    })
    public pct_rotina_rotina;
}
