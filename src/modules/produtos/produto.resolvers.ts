import { ParseIntPipe } from "@nestjs/common";
import {
    Args,
    Mutation,
    Query,
    Resolver,
    Subscription,
} from "@nestjs/graphql";
import { IProduto } from "./interfaces/produto.interface";
import { Produto } from "./produto.entity";
import { ProdutoService } from "./produto.service";

@Resolver("Produto")
export class ProdutoResolvers {
    constructor(private readonly produtoService: ProdutoService) {}

    @Query("produtos")
    public async produtos(
        @Args("descricao") descricao: string,
        @Args("limit") limit = 100,
        @Args("offset") offset = 0,
    ): Promise<Produto[]> {
        const where: any = {};
        if (descricao) {
            where.descricao = { $like: `%${descricao}%` };
        }

        return await this.produtoService.getAll({
            limit,
            offset,
            order: [
                ["id", "ASC"],
            ],
            where,
        });
    }

    @Query("produto")
    public async findOneById(@Args("id", ParseIntPipe) id: number): Promise<IProduto> {
        return await this.produtoService.get(id);
    }
}
