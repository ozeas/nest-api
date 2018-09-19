/* tslint:disable */
import { indiceTaxaConfi } from "./indice_taxa.config";

export const indiceConfig = [
  [
    {
      "nomeCampo": "descricao",
      "titulo": "Descrição",
      "subtitulo": "Descrição do plano",
      "valorPadrao": null,
      "editavel": false,
      "obrigatorio": true,
      "visivel": true,
      "tipoDado": "texto",
      "ordem": 0,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "descricao",
      "include": null,
      "views": [
        "viewInsert",
        "viewUpdate",
        "viewVisualizacao",
        "viewListagem"
      ],
      "expandOdata": false,
      "selectOdata": false,
      "noFilter": false,
      "conditionSql": false,
      "conditionSqlIfTrue": null,
      "conditionSqlIfFalse": null,
      "filtro": null,
      "componente": {
        "tamanhoMaximo": 40,
        "tamanhoMinimo": 0,
        "formato": "texto",
        "tipo": "textEdit",
        "typeId": "Framework.DataValidations.TextEditAttribute, FrameWork, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
      },
      "dicionario": null,
      "enumList": null
    },
    {
      "nomeCampo": "desativado",
      "titulo": "Desativado",
      "subtitulo": "Desativado, quando desativado não pode ser utilizado para movimentações",
      "valorPadrao": null,
      "editavel": true,
      "obrigatorio": true,
      "visivel": true,
      "tipoDado": null,
      "ordem": 0,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "desativado",
      "include": null,
      "views": [
        "viewInsert",
        "viewUpdate",
        "viewVisualizacao",
        "viewListagem"
      ],
      "expandOdata": false,
      "selectOdata": true,
      "noFilter": false,
      "conditionSql": false,
      "conditionSqlIfTrue": null,
      "conditionSqlIfFalse": null,
      "filtro": null,
      "componente": {
        "tipo": "checkBox"
      },
      "dicionario": null,
      "enumList": null
    },
    {
      "nomeCampo": "logCriacao",
      "titulo": "Criação",
      "subtitulo": "Data de criação do registro",
      "valorPadrao": null,
      "editavel": true,
      "obrigatorio": false,
      "visivel": true,
      "tipoDado": "data",
      "ordem": 0,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "log_criacao",
      "include": null,
      "views": [
        "viewListagem"
      ],
      "expandOdata": false,
      "selectOdata": true,
      "noFilter": false,
      "conditionSql": false,
      "conditionSqlIfTrue": null,
      "conditionSqlIfFalse": null,
      "filtro": null,
      "componente": {
        "tipo": "dateEdit",
        "typeId": "Framework.DataValidations.DataEditAttribute, FrameWork, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
      },
      "dicionario": null,
      "enumList": null
    },
    {
      "nomeCampo": "logAtualizacao",
      "titulo": "Últ. Atualização",
      "subtitulo": "Data e hora da última atualização sofrida pelo registro",
      "valorPadrao": null,
      "editavel": true,
      "obrigatorio": false,
      "visivel": true,
      "tipoDado": "datahora",
      "ordem": 0,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "log_atualizacao",
      "include": null,
      "views": [
        "viewListagem"
      ],
      "expandOdata": false,
      "selectOdata": true,
      "noFilter": false,
      "conditionSql": false,
      "conditionSqlIfTrue": null,
      "conditionSqlIfFalse": null,
      "filtro": null,
      "componente": {
        "tipo": "dateEdit",
        "typeId": "Framework.DataValidations.DataEditAttribute, FrameWork, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
      },
      "dicionario": null,
      "enumList": null
    },
    {
      "nomeCampo": "logPctUsuarioId",
      "titulo": "Últ. Usuário",
      "subtitulo": "Último usuário a alterar o registro",
      "valorPadrao": null,
      "editavel": true,
      "obrigatorio": false,
      "visivel": true,
      "tipoDado": "inteiro",
      "ordem": 6,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "logPctUsuarioId",
      "include": null,
      "views": [
        "viewListagem",
        "viewFiltro",
        "viewInsert",
        "viewUpdate",
        "viewVisualizacao"
      ],
      "expandOdata": false,
      "selectOdata": true,
      "noFilter": false,
      "conditionSql": false,
      "conditionSqlIfTrue": null,
      "conditionSqlIfFalse": null,
      "filtro": null,
      "componente": {
        "tipo": "spinEdit",
        "typeId": "Framework.DataValidations.SpinEditAttribute, FrameWork, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
      },
      "dicionario": null,
      "enumList": null
    }
  ],
  indiceTaxaConfi[0],
];