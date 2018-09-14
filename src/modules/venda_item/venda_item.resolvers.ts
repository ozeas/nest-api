/* tslint:disable:variable-name */
import { ParseIntPipe } from "@nestjs/common";
import {
    Args,
    Mutation,
    Query,
    Resolver,
    Subscription,
} from "@nestjs/graphql";
import { IVendaItem } from "./interfaces/venda_item.interface";
import { VendaItem } from "./venda_item.entity";
import { VendaItemService } from "./venda_item.service";

@Resolver("VendaItem")
export class VendaItemResolvers {
    constructor(private readonly vendaItemService: VendaItemService) {}

    @Query()
    public async vendaItens(
        @Args("venda_id") venda_id?: number,
        @Args("limit") limit = 100,
        @Args("offset") offset = 0,
    ): Promise<VendaItem[]> {
        const where: any = {};
        if (venda_id) {
            where.venda_id = { $like: `%${venda_id}%` };
        }

        return await this.vendaItemService.getAll({
            limit,
            offset,
            order: [
                ["id", "ASC"],
            ],
            where,
        });
    }

    @Query("vendaItem")
    public async findOneById(@Args("id", ParseIntPipe) id: number): Promise<IVendaItem> {
        return await this.vendaItemService.get(id);
    }
}
