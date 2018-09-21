import { Test } from "@nestjs/testing";
import { DatabaseModule } from "../../database/database.module";
import { databaseProvider } from "../../database/database.provider";
import * as provider from "../grupo_servico.provider";

import {GrupoServicoService} from "../grupo_servico.service";

describe("GrupoServiçoModule", () => {
  describe("GrupoServiceService", () => {
    let grupoServicoService: GrupoServicoService;
    let gruposervicos = [];

    beforeAll(async () => {
      gruposervicos = [
        {
          descricao: "Grupo serviço teste",
          id: 5000,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR",
        },
        {
          descricao: "Grupo serviço teste",
          id: 5001,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR",
        },
        {
          descricao: "Grupo serviço teste",
          id: 5002,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR",
        },
        {
          descricao: "Grupo serviço teste",
          id: 5003,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR",
        },
        {
          descricao: "Grupo serviço teste",
          id: 5004,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR",
        },
        {
          descricao: "Grupo serviço teste",
          id: 5005,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR",
        },
        {
          descricao: "Grupo serviço teste",
          id: 5006,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR",
        },
      ];

      const module = await Test.createTestingModule({
        imports: [
          DatabaseModule,
        ],
        providers: [
          databaseProvider,
          GrupoServicoService,
          provider.grupoServicoProvider,
          provider.repositoryProvide,
        ],
      }).compile();

      grupoServicoService = module.get<GrupoServicoService>(GrupoServicoService);

      await gruposervicos.forEach(async (grupo) => {
        await grupoServicoService.create(grupo);
      });
    });

    afterAll(async () => {
      await gruposervicos.forEach(async (grupo) => {
        await grupoServicoService.delete(grupo.id);
      });
      await grupoServicoService.delete(555);
    });

    describe("GrupoServicoService", () => {

      it("Deve retornar um array de grupos de serviços", async () => {
        const expected = await grupoServicoService.getAll({});
        expect(expected.length).toBeGreaterThan(1);
      });

      it("Deve retornar um grupo de serviço", async () => {
        const expected = await grupoServicoService.get(gruposervicos[0].id);
        expect(expected).toEqual(expect.objectContaining(gruposervicos[0]));
      });

      it("Deve criar um grupo de serviço", async () => {
        const grupo = {
          descricao: "Grupo serviço teste",
          id: 555,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          prefixo: "PR5",
        };
        await grupoServicoService.create(grupo);
        const expected = await grupoServicoService.get(grupo.id);
        expect(Object.keys(expected).length).toEqual(7);
      });

      it("Deve retornar erro ao criar grupo de serviço vazio", async () => {
        let expected = false;
        try {
          await grupoServicoService.create({});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar grupo de serviço sem descrição", async () => {
        let expected = false;
        const grupo = {
          prefixo: "PR11313",
        };
        try {
          await grupoServicoService.create(grupo);
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve retornar erro ao criar grupo de serviço sem prefixo", async () => {
        let expected = false;
        const grupo = {
          descricao: "Grupo serviço 456786",
        };
        try {
          await grupoServicoService.create(grupo);
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve alterar um grupo de serviço", async () => {
        const newGrupo = {
          descricao: "Grupo serviço Alterado",
          prefixo: "PR55555",
        };

        await grupoServicoService.update(gruposervicos[3].id, newGrupo);
        const expected = await grupoServicoService.get(gruposervicos[3].id);
        expect(expected).toEqual(expect.objectContaining(newGrupo));
      });

      it("Deve retornar erro ao alterar grupo de serviço inexistente", async () => {
        let expected = false;
        try {
          await grupoServicoService.update(-1, {});
        } catch (error) {
          expected = error.motivo;
        }
        expect(expected).toBeTruthy();
      });

      it("Deve excluir um grupo de serviço", async () => {
        const id = gruposervicos[2].id;
        await grupoServicoService.delete(id);
        const expected = await grupoServicoService.get(id);
        expect(expected).toBe(null);
      });

    });
  });
});
