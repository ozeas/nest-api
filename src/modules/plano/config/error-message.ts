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

    "plano:valida:plano": {
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
};
