import { PlanoItem } from "../plano_item.entity";
import { IPlanoItem } from "./plano_item.interface";

export interface IPlanoItemRepository {
  create(planoItem: IPlanoItem, instanceTransaction?: any): Promise<PlanoItem>;
  delete(id: number, instanceTransaction?: any): Promise<void>;
  findAll(options: object): Promise<PlanoItem[]>;
  findById(id: number): Promise<PlanoItem | null>;
  update(id: number, data: IPlanoItem, instanceTransaction?: any, options?: any): Promise<PlanoItem | null>;
}
