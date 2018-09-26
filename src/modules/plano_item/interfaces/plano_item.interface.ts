export interface IPlanoItem {
  id?: number;
  srv_plano_id?: number;
  srv_servico_id?: number;
  quantidade?: number;
  valor_bruto?: number;
  valor_desconto?: number;
  valor_total?: number;
  data_hora_inclusao?: string;
}
