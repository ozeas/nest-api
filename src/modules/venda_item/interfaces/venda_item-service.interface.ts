export interface IVendaItemService {
  create(data: object);
  delete(id: number);
  getAll(options: object);
  get(id: number);
  update(id: number, data: object);
}
