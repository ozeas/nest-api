import { Test } from "@nestjs/testing";
import {DicionarioService} from "../dicionario.service";

describe("DicionarioModule", () => {
  describe("DicionarioService", () => {
    let dicionarioService: DicionarioService;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        providers: [DicionarioService],
      }).compile();

      dicionarioService = module.get<DicionarioService>(DicionarioService);
    });

    describe("get()", () => {
      const dicionarios = [
        "grupoServico",
        "indiceTaxa",
        "indice",
        "plano",
        "planoItem",
        "servico",
      ];

      dicionarios.forEach((dicionario) => {
        it(`Deve retorar um array de dicionario para ${dicionario}`, async () => {
          const expected = dicionarioService.get(dicionario);
          expect(expected.length).toBeGreaterThanOrEqual(1);
        });
      });

      it("Deve retornar array vazio para dicionario inexistente", () => {
        const indice = "test99";
        const expected = dicionarioService.get(indice);
        expect(expected.length).toEqual(0);
      });

    });
  });
});
