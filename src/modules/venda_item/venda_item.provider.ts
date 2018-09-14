import { VendaItem } from "./venda_item.entity";
import { VendaItemRepository } from "./venda_item.repository";

export const vendaItemProvider = {
  provide: "VendaItemModel",
  useValue: VendaItem,
};

export const repositoryVendaItemProvide = {
  provide: "VendaItemRepository",
  useClass: VendaItemRepository,
};
