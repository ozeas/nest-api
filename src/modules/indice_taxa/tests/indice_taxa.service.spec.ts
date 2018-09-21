import { Test } from "@nestjs/testing";
import { IndiceTaxaService} from "../";
import { DatabaseModule } from "../../database/database.module";
import { databaseProvider } from "../../database/database.provider";
import * as provider from "../indice_taxa.provider";

describe("IndiceTaxaModule", () => {
  let indiceTaxaService: IndiceTaxaService;
  let indiceTaxas = [];

  beforeAll(async () => {
    indiceTaxas = [
      {
        aliquota: 156.78,
        id: 5000,
        log_pct_usuario_id: 1,
        reajuste_data: "2018-09-12",
        reajuste_positivo: true,
        srv_indice: 1,
      },
      {
        aliquota: 156.78,
        id: 5001,
        log_pct_usuario_id: 1,
        reajuste_data: "2018-09-12",
        reajuste_positivo: false,
        srv_indice: 1,
      },
      {
        aliquota: 156.78,
        id: 5002,
        log_pct_usuario_id: 1,
        reajuste_data: "2018-09-12",
        reajuste_positivo: true,
        srv_indice: 1,
      },
      {
        aliquota: 156.78,
        id: 5003,
        log_pct_usuario_id: 1,
        reajuste_data: "2018-09-12",
        reajuste_positivo: false,
        srv_indice: 1,
      },
      {
        aliquota: 156.78,
        id: 5004,
        log_pct_usuario_id: 1,
        reajuste_data: "2018-09-12",
        reajuste_positivo: true,
        srv_indice: 1,
      },
    ];
    const module = await Test.createTestingModule({
      imports: [ DatabaseModule ],
      providers: [
        databaseProvider,
        IndiceTaxaService,
        provider.indiceTaxaProvider,
        provider.repositoryProvider,
      ],
    }).compile();

    indiceTaxaService = module.get<IndiceTaxaService>(IndiceTaxaService);

    indiceTaxas.forEach( async (indice) => {
      await indiceTaxaService.create(indice);
    });
  });

  afterAll(async () => {
    indiceTaxas.forEach( async (indice) => {
      await indiceTaxaService.delete(indice.id);
    });
  });

  describe("IndiceTaxaService", () => {
    it("Deve retornar um array de serviços", async () => {
      const expected = await indiceTaxaService.getAll({});
      expect(expected.length).toBeGreaterThanOrEqual(1);
    });

    it("Deve retornar um serviço", async () => {
      const expected = await indiceTaxaService.get(indiceTaxas[0].id);
      expect(Object.keys(expected).length).toEqual(7);
    });
  });

});
