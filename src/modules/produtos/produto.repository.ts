import { Inject, Injectable } from '@nestjs/common';
import { Produto } from './produto.entity';
import { IProdutoRepository, IProduto } from './interfaces/index';
import { MessageCodeError } from '../../shared/errors/message-code-error';

@Injectable()
export class ProdutoRepository implements IProdutoRepository {
  constructor(
    @Inject('ProdutoModel') private readonly produtoRepository: typeof Produto,
    @Inject('SequelizeInstance') private readonly sequelizeInstance    
  ) {}

  public async findAll(options: Object): Promise<Array<Produto>> {
    let filtro = {where: options};
    if (!options) {
      filtro = null;
    }
    return await this.produtoRepository.findAll<Produto>(filtro);
  }

  public async findOne(options: Object): Promise<Produto | null> {
    const where = { where: options };
    return await this.produtoRepository.findOne<Produto>(where);
  }

  public async findById(id: number): Promise<Produto | null> {
    return await this.produtoRepository.findById<Produto>(id);
  }

  public async create(produto: IProduto): Promise<Produto> {
    return await this.sequelizeInstance.transaction(async transaction => {
      return await this.produtoRepository.create<Produto>(produto, {
          returning: true,
          transaction
      });
    });
  }

  public async update(id: number, data: IProduto): Promise<Produto | null> {
    return await this.sequelizeInstance.transaction(async transaction => {
      let  produto = await this.produtoRepository.findById<Produto>(id, {
          transaction
      });

      if (!produto) {
        throw new MessageCodeError('generic:notFound');
      }

      return await Produto.update(data, {where: {id: id}, transaction: transaction});
    });
  }

  public async delete(id: number): Promise<void> {
    return await this.sequelizeInstance.transaction(async transaction => {
      return await this.produtoRepository.destroy({
          where: { id },
          transaction
      });
    });
  }
}

