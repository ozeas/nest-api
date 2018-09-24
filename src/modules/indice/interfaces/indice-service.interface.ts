export interface IIndiceService {
  create(data: object, instanceTransaction?: any);
  delete(id: number, instanceTransaction?: any);
  getAll(options: object);
  get(id: number);
  update(id: number, data: object, instanceTransaction?: any);
}
