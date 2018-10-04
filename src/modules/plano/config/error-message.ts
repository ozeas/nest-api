import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesPlano: { [messageCode: string]: IMessages } = {
    "plano:create:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao criar o plano no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O plano não pode ser criado",
    },

    "plano:notfound": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Plano não encontrado no banco de dados",
      solucao: "Informe um plano vãlido",
      tipo: "BadRequest",
      titulo: "Plano não encontrado",
    },

    "plano:valida:int_empresa_id": {
        codigo: HttpStatus.BAD_REQUEST,
        motivo: "É preciso informar uma filial válida",
        solucao: "Preencha o campo filial",
        tipo: "BadRequest",
        titulo: "A filial não pode ser vazia",
    },

    "plano:valida:descricao": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma descrição válida",
      solucao: "Preencha o campo descrição",
      tipo: "BadRequest",
      titulo: "A Descrição não pode ser vazio",
    },

    "plano:valida:valor_servico": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar valor serviço válido",
      solucao: "Preencha o campo valor serviço",
      tipo: "BadRequest",
      titulo: "O valor serviço não pode ser vazio",
    },

    "plano:valida:valor_desconto": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar valor desconto válido",
      solucao: "Preencha o campo valor desconto",
      tipo: "BadRequest",
      titulo: "O valor desconto não pode ser vazio",
    },

    "plano:valida:valor_total": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar valor total válido",
      solucao: "Preencha o campo valor total",
      tipo: "BadRequest",
      titulo: "O valor total não pode ser vazio",
    },

    "plano:valida:desativado": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar se o plano está ativo",
      solucao: "Preencha o campo desativado",
      tipo: "BadRequest",
      titulo: "O campo desativado não pode ser vazio",
    },

    "plano:update:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao atualizar o plano no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O plano não pode ser atualizado",
    },

    "plano:delete:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao excluir o plano no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O plano não pode ser excluido",
    },

    "plano:valida:quantidadeitens": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Plano deve ter no mínimo um item de serviço associado",
      solucao: "Adicione um serviço ao item",
      tipo: "BadRequest",
      titulo: "O plano deve conter pelo menos um item de serviço",
    },

    "plano:erro:valorservico": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "O valor do serviço é diferente da soma dos valores bruto dos itens",
      solucao: "Verifique os valores dos serviços aplicados nos itens",
      tipo: "BadRequest",
      titulo: "O valor do serviço deve ser igual a soma dos valores brutos dos itens",
    },

    "plano:erro:valordesconto": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "O valor de desconto é diferente da soma dos descontos nos itens",
      solucao: "Verifique os valores de descontos aplicados nos itens",
      tipo: "BadRequest",
      titulo: "O valor de desconto deve ser igual a soma dos descontos nos itens",
    },

    "plano:erro:valortotal": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "O valor total é diferente da soma dos totais nos itens",
      solucao: "Verifique os valores totais dos itens adicionados",
      tipo: "BadRequest",
      titulo: "O valor total deve ser igual a soma dos totais nos itens",
    },
};
