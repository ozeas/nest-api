import { Model } from 'sequelize-typescript';

export class Base extends Model<Base>{
  public async findAll(): Promise<Array<Base>> {
    return this.findAll();
  }
}