export abstract class BaseService {
  protected repository: any;

  constructor(repository: any) {
    this.repository = repository;
  }

  public async getAll(options?: any) {
    return await this.repository.findAll(options);
  }

  public async get(id: number) {
    return await this.repository.findById(id);
  }

  public async create(servico: object, instanceTransaction?: any) {
    try {
      return await this.repository.create(servico, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, servico: object, instanceTransaction?: any) {
    try {
      return await this.repository.update(id, servico, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: number, instanceTransaction?: any) {
    try {
      return await this.repository.delete(id, instanceTransaction);
    } catch (error) {
      throw error;
    }
  }
}
