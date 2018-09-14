import { Inject, Injectable } from "@nestjs/common";
import { MessageCodeError } from "../../shared/errors/message-code-error";
import { IProduto, IProdutoRepository } from "./interfaces/index";
import { Produto } from "./produto.entity";

@Injectable()
export class ProdutoRepository implements IProdutoRepository {
  constructor(
    @Inject("ProdutoModel") private readonly produtoRepository: typeof Produto,
    @Inject("SequelizeInstance") private readonly sequelizeInstance,
  ) {}

  public async findAll(options: any): Promise<Produto[]> {
    return await this.produtoRepository.findAll<Produto>(options);
  }

  public async findById(id: number): Promise<Produto | null> {
    return await this.produtoRepository.findById<Produto>(id);
  }

  public async create(produto: IProduto): Promise<Produto> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.produtoRepository.create<Produto>(produto, {
            returning: true,
            transaction,
        });
      });
    } catch (error) {
      throw new MessageCodeError("generic:onCreate");
    }
  }

  public async update(id: number, data: IProduto): Promise<Produto | null> {
    return await this.sequelizeInstance.transaction(async (transaction) => {
      const  produto = await this.produtoRepository.findById<Produto>(id, {
        transaction,
      });

      if (!produto) {
        throw new MessageCodeError("generic:onUpdate");
      }

      return await Produto.update(data, {where: {id}, transaction});
    });
  }

  public async delete(id: number): Promise<void> {
    try {
      return await this.sequelizeInstance.transaction(async (transaction) => {
        return await this.produtoRepository.destroy({
          transaction,
          where: { id },
        });
      });
    } catch (error) {
      throw new MessageCodeError("generic:onDelete");
    }
  }
}
