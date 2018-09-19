import * as dicionarios from "./configs";

export class DicionarioService {
  public get(dicionario) {
    if (this.map[dicionario]) {
      return this.map[dicionario];
    }
    return [];
  }

  public get map() {
    return {
      grupoServico: dicionarios.grupoServico,
      indice: dicionarios.indiceConfig,
      indiceTaxa: dicionarios.indiceTaxaConfi,
      plano: dicionarios.planoConfig,
      planoItem: dicionarios.planoItemConfig,
      servico: dicionarios.servicoConfig,
    };
  }
}
