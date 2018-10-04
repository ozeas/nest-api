import { Test } from "@nestjs/testing";
import { ServicoService } from "../";
import { DatabaseModule } from "../../database/database.module";
import { databaseProvider } from "../../database/database.provider";
import * as provider from "../servico.provider";

import {
  modelProvider as autoSequenciaModelProvider,
  repositoryProvider as autoSequenciaRepositoryProvider,
} from "../../auto_sequencia";

describe("ServiceModule", () => {
  describe("ServicoService", () => {
    let servicoService: ServicoService;
    let servicos = [];

    beforeAll(async () => {
      servicos = [
        {
          desativado: false,
          descricao: "Servico 01",
          id: 6000,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          srv_grupo_servico_id: 5,
          valor: 150.78,
        },
        {
          desativado: false,
          descricao: "Servico 01",
          id: 6001,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          srv_grupo_servico_id: 5,
          valor: 150.78,
        },
        {
          desativado: false,
          descricao: "Servico 01",
          id: 6002,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          srv_grupo_servico_id: 5,
          valor: 150.78,
        },
        {
          desativado: false,
          descricao: "Servico 01",
          id: 6003,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          srv_grupo_servico_id: 5,
          valor: 150.78,
        },
        {
          desativado: false,
          descricao: "Servico 01",
          id: 6004,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          srv_grupo_servico_id: 5,
          valor: 150.78,
        },
      ];

      const module = await Test.createTestingModule({
        imports: [ DatabaseModule ],
        providers: [
          databaseProvider,
          ServicoService,
          provider.servicoProvider,
          provider.repositoryProvider,
          autoSequenciaRepositoryProvider,
          autoSequenciaModelProvider,
        ],
      }).compile();

      servicoService = module.get<ServicoService>(ServicoService);

      for (const servico of servicos) {
        await servicoService.create(servico);
      }
    });

    afterAll(async () => {
      servicos.push({id: 9001});
      for (const servico of servicos) {
        await servicoService.delete(servico.id);
      }
    });

    describe("ServicoService", () => {

      it("Deve retornar um array de serviços", async () => {
        const expected = await servicoService.getAll({});
        expect(expected.length).toBeGreaterThanOrEqual(1);
      });

      it("Deve retornar um serviço", async () => {
        const expected = await servicoService.get(6001);
        expect(expected.id).toEqual(6001);
      });

      it("Deve criar um serviço", async () => {
        const servico = {
          desativado: false,
          descricao: "Servico 9000",
          id: 9001,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          srv_grupo_servico_id: 5,
          valor: 150.78,
        };
        await servicoService.create(servico);
        const expected = await servicoService.get(servico.id);
        expect(expected).toEqual(expect.objectContaining(servico));
      });

      it("Deve retornar erro ao criar serviço vazio", async () => {
        let expected = false;
        try {
          await servicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar serviço sem filial", async () => {
        let expected = false;
        try {
          const servico = {
            desativado: false,
            descricao: "Servico 9000",
            id: 9001,
            log_pct_usuario_id: 1,
            srv_grupo_servico_id: 5,
            valor: 150.78,
          };
          await servicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar serviço sem grupo de serviço", async () => {
        let expected = false;
        try {
          const servico = {
            desativado: false,
            descricao: "Servico 9000",
            id: 9001,
            int_empresa_id: 1,
            log_pct_usuario_id: 1,
            valor: 150.78,
          };
          await servicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar serviço sem codigo", async () => {
        let expected = false;
        try {
          const servico = {
            desativado: false,
            descricao: "Servico 9000",
            id: 9001,
            int_empresa_id: 1,
            log_pct_usuario_id: 1,
            srv_grupo_servico_id: 5,
            valor: 150.78,
          };
          await servicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar serviço sem descrição", async () => {
        let expected = false;
        try {
          const servico = {
            desativado: false,
            id: 9001,
            int_empresa_id: 1,
            log_pct_usuario_id: 1,
            srv_grupo_servico_id: 5,
            valor: 150.78,
          };
          await servicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar serviço sem valor", async () => {
        let expected = false;
        try {
          const servico = {
            desativado: false,
            descricao: "Servico 9000",
            id: 9001,
            int_empresa_id: 1,
            log_pct_usuario_id: 1,
            srv_grupo_servico_id: 5,
          };
          await servicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar serviço com valor menor que zero", async () => {
        let expected = false;
        try {
          const servico = {
            desativado: false,
            descricao: "Servico 9000",
            id: 9001,
            int_empresa_id: 1,
            log_pct_usuario_id: 1,
            srv_grupo_servico_id: 5,
            valor: -10,
          };
          await servicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve alterar um de serviço", async () => {
        const newServico = {
          codigo: "PR5",
          descricao: "Serviço Alterado",
        };

        await servicoService.update(servicos[3].id, newServico);
        const expected = await servicoService.get(servicos[3].id);
        const newExpected = Object.assign({}, {
          codigo: expected.codigo,
          descricao: expected.descricao,
        });
        expect(newServico).toEqual(expect.objectContaining(newExpected));
      });
    });

    it("Deve retornar erro ao alterar serviço inexistente", async () => {
      let expected = false;
      try {
        await servicoService.update(-1, {});
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve excluir um serviço", async () => {
      await servicoService.delete(9001);
      const expected = await servicoService.get(9001);
      expect(expected).toBe(null);
    });
  });
});
