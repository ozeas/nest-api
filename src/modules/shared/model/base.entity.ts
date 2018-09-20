/* tslint:disable:variable-name */
/* tslint:disable:no-var-requires */

const moment = require("moment");

import {
  BeforeCreate,
  BeforeSave,
  BeforeUpdate,
  Column,
  Model } from "sequelize-typescript";

export class Base extends Model<Base> {
  @BeforeCreate
  public static setDatesCreate(instance: Base) {
    instance.log_criacao = moment().format("MM-DD-YYYY HH:mm");
    instance.log_atualizacao = moment().format("MM-DD-YYYY HH:mm");
  }

  @BeforeUpdate
  public static setDateUpdate(instance: Base) {
    instance.log_atualizacao = moment().format("MM-DD-YYYY HH:mm");
  }

  @Column
  public log_criacao: string;

  @Column
  public log_atualizacao: string;
}
