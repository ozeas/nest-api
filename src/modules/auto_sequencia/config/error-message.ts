import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesAutoSequencia: { [messageCode: string]: IMessages } = {
  "autosequencia:create:erro": {
    codigo: HttpStatus.BAD_REQUEST,
    motivo: "Houve um erro ao criar a sequência no banco de dados",
    solucao: "Contate o suporte",
    tipo: "BadRequest",
    titulo: "A sequência não pode ser criado",
  },

  "autosequencia:valida:int_empresa_id": {
    codigo: HttpStatus.BAD_REQUEST,
    motivo: "É preciso informar uma filial válida",
    solucao: "Preencha o campo filial",
    tipo: "BadRequest",
    titulo: "A filial não pode ser vazia",
  },

  "servico:valida:identificador": {
    codigo: HttpStatus.BAD_REQUEST,
    motivo: "É preciso informar um identificador válido",
    solucao: "Preencha o campo identificador",
    tipo: "BadRequest",
    titulo: "O identificador não pode ser vazio",
  },

  "autosequencia:valida:jaexiste": {
    codigo: HttpStatus.BAD_REQUEST,
    motivo: "Essa sequência ja existe no banco de dados",
    solucao: "Contate o suporte",
    tipo: "BadRequest",
    titulo: "A sequência não pode ser criado",
  },
};
