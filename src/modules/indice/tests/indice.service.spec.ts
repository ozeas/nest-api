/* tslint:disable:object-literal-sort-keys */
import { Test } from "@nestjs/testing";
import { IndiceService } from "../";
import { DatabaseModule } from "../../database/database.module";
import { databaseProvider } from "../../database/database.provider";
import * as provider from "../indice.provider";

describe("IndiceModule", () => {
  describe("IndiceService", () => {
    let indiceService: IndiceService;
    let indices = [];

    beforeAll(async () => {
      indices = [
        {
          desativado: false,
          descricao: "INDICE 1008",
          id: -1008,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          taxas: [
              {
                  aliquota: 1000,
                  log_pct_usuario_id: 1,
                  reajuste_data: "2018-09-30",
                  reajuste_positivo: true,
              },
              {
                  aliquota: 1000,
                  reajuste_data: "2018-09-20",
                  reajuste_positivo: true,
                  log_pct_usuario_id: 1,
              },
          ],
        },
        {
          desativado: false,
          descricao: "INDICE 1009",
          id: -1009,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          taxas: [
              {
                  aliquota: 1000,
                  log_pct_usuario_id: 1,
                  reajuste_data: "2018-09-30",
                  reajuste_positivo: true,
              },
              {
                  aliquota: 1000,
                  reajuste_data: "2018-09-20",
                  reajuste_positivo: true,
                  log_pct_usuario_id: 1,
              },
          ],
        },
        {
          desativado: false,
          descricao: "INDICE 1010",
          id: -10010,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          taxas: [
              {
                  aliquota: 1000,
                  log_pct_usuario_id: 1,
                  reajuste_data: "2018-09-30",
                  reajuste_positivo: true,
              },
              {
                  aliquota: 1000,
                  reajuste_data: "2018-09-20",
                  reajuste_positivo: true,
                  log_pct_usuario_id: 1,
              },
          ],
        },
      ];

      const module = await Test.createTestingModule({
        imports: [ DatabaseModule ],
        providers: [
          databaseProvider,
          IndiceService,
          provider.indiceProvider,
          provider.repositoryProvider,
        ],
      }).compile();

      indiceService = module.get<IndiceService>(IndiceService);

      indices.forEach(async (indice) => {
        await indiceService.create(indice);
      });
    });

    afterAll(async () => {
      indices.forEach( async (indice) => {
        await indiceService.delete(indice.id);
      });
    });

    it("Deve retornar um array de indices", async () => {
      const expected = await indiceService.getAll({});
      expect(expected.length).toBeGreaterThanOrEqual(1);
    });

    it("Deve retornar um indice", async () => {
      const expected = await indiceService.get(indices[0].id);
      expect(expected.id).toEqual(indices[0].id);
    });

    it("Deve criar um indice", async () => {
      const indice = {
        desativado: false,
        descricao: "INDICE 1008",
        id: -10050,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        taxas: [
            {
                aliquota: 1000,
                log_pct_usuario_id: 1,
                reajuste_data: "2018-09-30",
                reajuste_positivo: true,
            },
            {
                aliquota: 1000,
                reajuste_data: "2018-09-20",
                reajuste_positivo: true,
                log_pct_usuario_id: 1,
            },
        ],
      };
      await indiceService.create(indice);
      const expected = await indiceService.get(indice.id);
      expect(expected.id).toEqual(indice.id);
      await indiceService.delete(indice.id);
    });

    it("Deve retornar erro ao criar indíce vazio", async () => {
      let expected = false;
      try {
        await indiceService.create({});
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar indíce sem descricao", async () => {
      let expected = false;
      const indice = Object.assign({}, indices[0]);
      delete indice.descricao;
      try {
        await indiceService.create(indice);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar indíce sem filial", async () => {
      let expected = false;
      const indice = Object.assign({}, indices[0]);
      delete indice.int_empresa_id;
      try {
        await indiceService.create(indice);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar indíce sem taxas", async () => {
      let expected = false;
      const indice = Object.assign({}, indices[0]);
      delete indice.taxas;
      try {
        await indiceService.create(indice);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });
  });
});
