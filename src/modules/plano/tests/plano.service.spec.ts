import iconv from "iconv-lite";
import encodings from "iconv-lite/encodings";

import { Test } from "@nestjs/testing";
import { PlanoService } from "../";
import { DatabaseModule } from "../../database/database.module";
import { databaseProvider } from "../../database/database.provider";
import * as provider from "../plano.provider";

iconv.encode = encodings;

/* tslint:disable:object-literal-sort-keys */
describe("PlanoModule", () => {
  describe("PlanoServico", () => {
    let planoService: PlanoService;
    let planos = [];
    beforeAll(async () => {
      planos = [
        {
          id: 100000,
          descricao: "plano teste 01",
          descricao_detalhada: "",
          valor_desconto: 100,
          valor_servico: 300,
          valor_total: 200,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          itens: [
            {
              srv_servico_id: 9000003,
              quantidade: 1,
              valor_bruto: 150,
              valor_desconto: 50,
              valor_total: 100,
            },
            {
              srv_servico_id: 9000003,
              quantidade: 1,
              valor_bruto: 150,
              valor_desconto: 50,
              valor_total: 100,
            },
          ],
        },
        {
          id: 100001,
          descricao: "plano teste 02",
          descricao_detalhada: "",
          valor_desconto: 100,
          valor_servico: 300,
          valor_total: 200,
          int_empresa_id: 1,
          log_pct_usuario_id: 1,
          itens: [
            {
              srv_servico_id: 9000003,
              quantidade: 1,
              valor_bruto: 150,
              valor_desconto: 50,
              valor_total: 100,
            },
            {
              srv_servico_id: 9000003,
              quantidade: 1,
              valor_bruto: 150,
              valor_desconto: 50,
              valor_total: 100,
            },
          ],
        },
      ];
      const module = await Test.createTestingModule({
        imports: [ DatabaseModule ],
        providers: [
          databaseProvider,
          PlanoService,
          provider.modelProvider,
          provider.repositoryProvider,
        ],
      }).compile();

      planoService = await module.get<PlanoService>(PlanoService);
      for (const plano of planos) {
        await planoService.create(plano);
      }
    });

    afterAll(async () => {
      planos.push({id: 1000010});
      planos.push({id: 2000000});
      for (const plano of planos) {
        await planoService.delete(plano.id);
      }
    });

    it("Deve retornar um array de planos", async () => {
      const expected = await planoService.getAll({});
      expect(expected.length).toBeGreaterThan(1);
    });

    it("Deve retornar um plano", async () => {
      const expected = await planoService.get(planos[0].id);
      expect(expected.id).toEqual(planos[0].id);
    });

    it("Deve criar um plano", async () => {
      const plano = {
        id: 1000010,
        descricao: "plano teste 02",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      await planoService.create(plano);
      const expected = await planoService.get(plano.id);
      expect(expected.id).toEqual(plano.id);
    });

    it("Deve retornar erro ao criar plano vazio", async () => {
      let expected = false;
      try {
        await planoService.create({});
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar plano sem filial", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      delete plano.int_empresa_id;
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar plano sem descricao", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      delete plano.descricao;
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar plano sem valor de serviço", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      delete plano.valor_servico;
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar plano sem valor de desconto", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      delete plano.valor_desconto;
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar plano sem valor total", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      delete plano.valor_total;
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar plano sem itens", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar erro ao criar plano com itens vazio", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com valor de serviço calculado diferente", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 0,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com desconto calculado diferente", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 0,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com valor total calculado diferente", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 0,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com item sem serviço", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com item sem quantidade", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com item tendo quantidade fracionada", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1.5,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com item sem valor bruto", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com item sem valor bruto", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 100,
        valor_servico: 300,
        valor_total: 200,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_desconto: 50,
            valor_total: 100,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com item sem valor desconto", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 0,
        valor_servico: 300,
        valor_total: 300,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_total: 150,
          },
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 0,
            valor_total: 150,
          },
        ],
      };
      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com item sem valor total", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 0,
        valor_servico: 300,
        valor_total: 300,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 0,
          },
        ],
      };

      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve retornar error ao criar plano com valor total de item errado", async () => {
      let expected = false;
      const plano = {
        id: 2000000,
        descricao: "plano teste 01",
        descricao_detalhada: "",
        valor_desconto: 0,
        valor_servico: 150,
        valor_total: 0,
        int_empresa_id: 1,
        log_pct_usuario_id: 1,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 0,
            valor_total: 0,
          },
        ],
      };

      try {
        await planoService.create(plano);
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve alterar um plano", async () => {
      const plano = {
        descricao: "Nova descrição",
      };

      await planoService.update(planos[0].id, plano);
      const expected = await planoService.get(planos[0].id);
      expect(expected.descricao).toEqual(plano.descricao);
    });

    it("Deve alterar os itens de um plano", async () => {
      const plano = {
        valor_desconto: 50,
        valor_servico: 150,
        valor_total: 100,
        itens: [
          {
            srv_servico_id: 9000003,
            quantidade: 1,
            valor_bruto: 150,
            valor_desconto: 50,
            valor_total: 100,
          },
        ],
      };

      await planoService.update(planos[0].id, plano);
      const expected = await planoService.get(planos[0].id);
      expect(expected.itens.length).toEqual(plano.itens.length);
    });

    it("Deve retornar erro ao alterar plano inexistente", async () => {
      let expected = false;
      try {
        await planoService.update(-1, {});
      } catch (error) {
        expected = error.motivo;
      }
      expect(expected).toBeTruthy();
    });

    it("Deve excluir um plano", async () => {
      await planoService.delete(1000010);
      const expected = await planoService.get(1000010);
      expect(expected).toBe(null);
    });
  });
});
