import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../database/database.module";
import { databaseProvider } from "../../database/database.provider";
import * as provider from "../servico.provider";
import { ServicoService } from "../";

describe("ServiceModule", () => {
  describe("ServicoService", () => {
    let servicoService: ServicoService;
    let servicos = [];

    beforeAll(async () => {
      const module = await Test.createTestingModule({
        imports: [ DatabaseModule ],
        providers: [
          databaseProvider,
          ServicoService,
          provider.repositoryProvider,
          provider.repositoryProvider,
        ],
      }).compile();

      servicoService = module.get<ServicoService>(ServicoService);

      servicos.forEach(async (servico) => {
        await servicoService.create(servico);
      });
    });

    afterAll(async () => {
      servicos.forEach((servico) => {
        servicoService.delete(servico.id);
      });
    });
  });
});
