import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesGrupoServico: { [messageCode: string]: IMessages } = {
    "gruposervico:create:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao criar o grupo de serviço no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "Grupo de serviço não pode ser criado",
    },

    "gruposervico:valida:gruposervico": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Grupo de serviço não encontrado no banco de dados",
      solucao: "Informe um grupo de serviço vãlido",
      tipo: "BadRequest",
      titulo: "Grupo de serviço não encontrado",
    },

    "gruposervico:valida:descricao": {
        codigo: HttpStatus.BAD_REQUEST,
        motivo: "É preciso informar um valor válido no campo descrição",
        solucao: "Preencha o campo descrição",
        tipo: "BadRequest",
        titulo: "Descrição não pode ser vazio",
    },

    "gruposervico:valida:prefixo": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um valor válido no campo descrição",
      solucao: "Preencha o campo prefixo",
      tipo: "BadRequest",
      titulo: "Prefixo não pode ser vazio",
    },

    "gruposervico:update:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao atualizar o grupo de serviço no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "Grupo de serviço não pode ser atualizado",
    },

    "gruposervico:delete:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao excluir o grupo de serviço no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "Grupo de serviço não pode ser excluido",
    },
};
