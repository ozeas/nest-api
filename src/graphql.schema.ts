export class Produto {
    id?: number;
    descricao?: string;
    estoque?: number;
    valor?: number;
    vendaItens?: VendaItem[];
}

export class IQuery {
    produtos(descricao?: string, limit?: number, offset?: number): Produto[] | Promise<Produto[]> {
    }

    produto(id?: string): Produto | Promise<Produto> {
    }

    vendaItens(venda_id?: number, limit?: number, offset?: number): VendaItem[] | Promise<VendaItem[]> {
    }

    vendaItem(id?: string): VendaItem | Promise<VendaItem> {
    }
}

export class VendaItem {
    id?: number;
    venda_id?: number;
    produto_id?: number;
    unitario?: string;
    quantidade?: string;
    total?: string;
}
