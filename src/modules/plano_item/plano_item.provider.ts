import { PlanoItem } from "./plano_item.entity";
import { PlanoItemRepository } from "./plano_item.repository";

export const planoItemProvider = {
  provide: "PlanoItemModel",
  useValue: PlanoItem,
};

export const repositoryProvider = {
  provide: "PlanoItemRepository",
  useClass: PlanoItemRepository,
};
