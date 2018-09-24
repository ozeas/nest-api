import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesIndiceTaxa: { [messageCode: string]: IMessages } = {
    "indicetaxa:create:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao criar a taxa de indíce no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O Serviço não pode ser criado",
    },

    "indice:valida:indice": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Indíce não encontrada no banco de dados",
      solucao: "Informe uma indíce válida",
      tipo: "BadRequest",
      titulo: "Indíce não encontrado",
    },

    "indice:valida:srv_indice_id": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma indíce válido",
      solucao: "Preencha o campo indíce",
      tipo: "BadRequest",
      titulo: "O indíce não pode ser vazia",
    },

    "indice:valida:aliquota": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma alíquota válida",
      solucao: "Preencha o campo alíquota",
      tipo: "BadRequest",
      titulo: "A alíquota não pode ser vazia",
    },

    "indice:valida:reajuste_data": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma data de reajuste válida",
      solucao: "Preencha o campo data de reajuste",
      tipo: "BadRequest",
      titulo: "A data de reajuste não pode ser vazia",
    },

    "indice:valida:reajuste_positivo": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma reajuste positivo válido",
      solucao: "Preencha o campo reajuste positivo",
      tipo: "BadRequest",
      titulo: "A reajuste positivo não pode ser vazio",
    },

    "indice:valida:int_empresa_id": {
        codigo: HttpStatus.BAD_REQUEST,
        motivo: "É preciso informar uma filial válida",
        solucao: "Preencha o campo filial",
        tipo: "BadRequest",
        titulo: "A filial não pode ser vazia",
    },

    "indice:update:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao atualizar a taxa de indíce no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "A taxa de indíce não pode ser atualizado",
    },

    "indice:delete:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao excluir a taxa de indíce no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "A taxa de indíce não pode ser excluido",
    },
};
