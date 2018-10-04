import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesParametro: { [messageCode: string]: IMessages } = {
    "parametro:create:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao criar o parâmetro no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O Parâmetro não pode ser criado",
    },

    "parametro:valida:pct_parametro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Parâmetro não encontrado no banco de dados",
      solucao: "Informe um parâmetro vãlido",
      tipo: "BadRequest",
      titulo: "Parâmetro não encontrado",
    },

    "parametro:valida:parametro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma parâmetro válido",
      solucao: "Preencha o campo parâmetro",
      tipo: "BadRequest",
      titulo: "O Parâmetro não pode ser vazio",
    },

    "parametro:valida:descricao": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma descrição válida",
      solucao: "Preencha o campo descrição",
      tipo: "BadRequest",
      titulo: "A Descrição não pode ser vazio",
    },

    "parametro:valida:codigo": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um código válido",
      solucao: "Preencha o campo código",
      tipo: "BadRequest",
      titulo: "O Código não pode ser vazio",
    },

    "parametro:valida:dominio": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um domínio válido",
      solucao: "Preencha o campo domínio",
      tipo: "BadRequest",
      titulo: "O domínio não pode ser vazio",
    },

    "parametro:valida:valor": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um valor válido",
      solucao: "Preencha o campo valor",
      tipo: "BadRequest",
      titulo: "O Valor não pode ser vazio",
    },

    "parametro:update:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao atualizar o parâmetro no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O parâmetro não pode ser atualizado",
    },

    "parametro:delete:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao excluir o parâmetro no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O parâmetro não pode ser excluido",
    },
};
