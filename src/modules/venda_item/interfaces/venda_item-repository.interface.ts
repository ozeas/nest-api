import { IVendaItem } from "../interfaces/index";
import { VendaItem } from "../venda_item.entity";

export interface IVendaItemRepository {
  create(vendaItem: IVendaItem): Promise<VendaItem>;
  delete(id: number): Promise<void>;
  findAll(options: object): Promise<VendaItem[]>;
  findById(id: number): Promise<VendaItem | null>;
  update(id: number, data: IVendaItem): Promise<VendaItem | null>;
}
