import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesServico: { [messageCode: string]: IMessages } = {
    "servico:create:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao criar o serviço no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O Serviço não pode ser criado",
    },

    "servico:valida:servico": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Grupo de serviço não encontrado no banco de dados",
      solucao: "Informe um grupo de serviço vãlido",
      tipo: "BadRequest",
      titulo: "Serviço não encontrado",
    },

    "servico:valida:int_empresa_id": {
        codigo: HttpStatus.BAD_REQUEST,
        motivo: "É preciso informar uma filial válida",
        solucao: "Preencha o campo filial",
        tipo: "BadRequest",
        titulo: "A filial não pode ser vazia",
    },

    "servico:valida:srv_grupo_servico_id": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um grupo de serviço válido",
      solucao: "Preencha o campo grupo de serviço",
      tipo: "BadRequest",
      titulo: "O Grupo de serviço não pode ser vazio",
    },

    "servico:valida:codigo": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um código válido",
      solucao: "Preencha o campo código",
      tipo: "BadRequest",
      titulo: "O Código não pode ser vazio",
    },

    "servico:valida:descricao": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma descrição válida",
      solucao: "Preencha o campo descrição",
      tipo: "BadRequest",
      titulo: "A Descrição não pode ser vazio",
    },

    "servico:valida:valor": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um valor válido",
      solucao: "Preencha o campo valor",
      tipo: "BadRequest",
      titulo: "O Valor não pode ser vazio",
    },

    "servico:valida:valor:conteudo": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um valor válido",
      solucao: "Preencha o campo valor",
      tipo: "BadRequest",
      titulo: "O Valor não pode ser vazio",
    },

    "servico:valida:prefixo": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um valor válido no campo descrição",
      solucao: "Preencha o campo prefixo",
      tipo: "BadRequest",
      titulo: "Prefixo não pode ser vazio",
    },

    "servico:update:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao atualizar o serviço no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O serviço não pode ser atualizado",
    },

    "servico:delete:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao excluir o serviço no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O serviço não pode ser excluido",
    },
};
