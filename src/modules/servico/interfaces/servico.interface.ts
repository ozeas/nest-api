export interface IServico {
  id?: number;
  int_empresa_id?: number;
  srv_grupo_servico_id?: number;
  descricao?: string;
  valor?: number;
  desativado?: boolean;
  log_atualizacao?: string;
}
