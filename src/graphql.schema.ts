export class Produto {
    id?: number;
    descricao?: string;
    estoque?: number;
    valor?: number;
    vendaItens?: VendaItem[];
}

export abstract class IQuery {
    abstract produtos(descricao?: string, limit?: number, offset?: number): Produto[] | Promise<Produto[]>;

    abstract produto(id?: string): Produto | Promise<Produto>;

    abstract vendaItens(venda_id?: number, limit?: number, offset?: number): VendaItem[] | Promise<VendaItem[]>;

    abstract vendaItem(id?: string): VendaItem | Promise<VendaItem>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class VendaItem {
    id?: number;
    venda_id?: number;
    produto_id?: number;
    unitario?: string;
    quantidade?: string;
    total?: string;
}
