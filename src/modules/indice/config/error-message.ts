import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesIndice: { [messageCode: string]: IMessages } = {
    "indice:create:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao criar o indíce no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O Serviço não pode ser criado",
    },

    "indice:valida:indice": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Indíce não encontrado no banco de dados",
      solucao: "Informe um indíce vãlido",
      tipo: "BadRequest",
      titulo: "Indíce não encontrado",
    },

    "indice:valida:int_empresa_id": {
        codigo: HttpStatus.BAD_REQUEST,
        motivo: "É preciso informar uma filial válida",
        solucao: "Preencha o campo filial",
        tipo: "BadRequest",
        titulo: "A filial não pode ser vazia",
    },

    "indice:valida:taxas": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar pelo menos uma taxa de indíce",
      solucao: "Preencha o campo taxa de indíce",
      tipo: "BadRequest",
      titulo: "É preciso informar uma taxa de indíce",
    },

    "indice:valida:log_pct_usuario_id": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um usuário válido",
      solucao: "Informe um usuário válido",
      tipo: "BadRequest",
      titulo: "O usuário não pode ser vazio",
    },

    "indice:update:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao atualizar o indíce no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O indíce não pode ser atualizado",
    },

    "indice:valida:datareajusterepetida": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Não pode haver indíce com duas datas de reajuste iguais",
      solucao: "Verifique as datas de reajuste do indíce",
      tipo: "BadRequest",
      titulo: "Indíce com datas de reajuste iguais",
    },

    "indice:delete:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao excluir o indíce no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O indíce não pode ser excluido",
    },
};
