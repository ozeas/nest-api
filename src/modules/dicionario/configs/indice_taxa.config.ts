/* tslint:disable */
export const indiceTaxaConfi = [
  [
    {
      "nomeCampo": "aliquota",
      "titulo": "Alíquota",
      "subtitulo": "Alíquota do índice",
      "valorPadrao": null,
      "editavel": true,
      "obrigatorio": false,
      "visivel": true,
      "tipoDado": null,
      "ordem": 0,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "aliquota",
      "include": null,
      "views": [
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
        "tipo": "percentualEdit",
        "casasDecimais": 2,
        "ocultarSeparadorCasas": false,
        "valorMinimo": 0,
        "valorMaximo": 0
      },
      "dicionario": null,
      "enumList": null
    },
    {
      "nomeCampo": "reajusteData",
      "titulo": "Data reajuste",
      "subtitulo": "Data de referência do reajuste",
      "valorPadrao": null,
      "editavel": true,
      "obrigatorio": true,
      "visivel": true,
      "tipoDado": "datahora",
      "ordem": 5,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "reajusteData",
      "include": null,
      "views": [
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
        "tipo": "dateEdit",
        "typeId": "Framework.DataValidations.DataEditAttribute, FrameWork, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
      },
      "dicionario": null,
      "enumList": null
    },
    {
      "nomeCampo": "reajustePositivo",
      "titulo": "Reajuste positivo",
      "subtitulo": "Indica se o reajuste é positivo ou negativo",
      "valorPadrao": null,
      "editavel": true,
      "obrigatorio": true,
      "visivel": true,
      "tipoDado": null,
      "ordem": 0,
      "isChavePrimaria": false,
      "isChaveEstrangeira": false,
      "nomeColuna": "reajustePositovo",
      "include": null,
      "views": [
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
        "tipo": "checkBox"
      },
      "dicionario": null,
      "enumList": null
    }
  ]
];