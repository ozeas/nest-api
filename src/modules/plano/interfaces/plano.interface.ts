export interface IPlano {
  id?: number;
  int_empresa_id?: number;
  descricao?: string;
  descricao_detalhada?: string;
  valor_servico?: number;
  valor_desconto?: number;
  valor_total?: number;
  desativado?: boolean;
}
