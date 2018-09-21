/* tslint:disable:variable-name */
/* tslint:disable:no-var-requires */

const moment = require("moment");

import {
  BeforeBulkUpdate,
  BeforeCreate,
  BeforeSave,
  Column,
  Model } from "sequelize-typescript";

export class Base extends Model<Base> {
  @BeforeCreate
  public static setDatesCreate(instance: Base) {
    instance.log_criacao = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
    instance.log_atualizacao = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
  }

  @BeforeBulkUpdate
  public static setDateUpdate(instance: Base) {
    instance.log_atualizacao = moment().format("MM-DD-YYYY HH:mm:ss:SSS");
  }

  @Column
  public log_criacao: string;

  @Column
  public log_atualizacao: string;
}
