export interface IGrupoServico {
  id?: number;
  int_empresa_id?: number;
  descricao: string;
  prefixo: string;
  desativado?: boolean;
  log_atualizacao?: string;
}
