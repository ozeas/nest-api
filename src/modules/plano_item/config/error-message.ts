import { HttpStatus } from "@nestjs/common";
import { IMessages } from "shared/config/interfaces/message.interface";

export const errorMessagesPlanoItem: { [messageCode: string]: IMessages } = {
    "planoitem:create:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao criar o item de plano no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O Item de plano não pode ser criado",
    },

    "planoitem:valida:planoitem": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Item de plano não encontrado no banco de dados",
      solucao: "Informe um item de plano vãlido",
      tipo: "BadRequest",
      titulo: "Item de plano não encontrado",
    },

    "planoitem:valida:srv_plano_id": {
        codigo: HttpStatus.BAD_REQUEST,
        motivo: "É preciso informar uma plano válido",
        solucao: "Informe um plano válido",
        tipo: "BadRequest",
        titulo: "O plano não pode ser vazio",
    },

    "planoitem:valida:srv_servico_id": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um serviço válido",
      solucao: "Preencha o campo serviço",
      tipo: "BadRequest",
      titulo: "O Serviço não pode ser vazio",
    },

    "planoitem:valida:quantidade": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar uma válida",
      solucao: "Preencha o campo quantidade",
      tipo: "BadRequest",
      titulo: "A quantidade não pode ser vazia",
    },

    "planoitem:erro:quantidade": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "A quantidade deve ser um valor inteiro",
      solucao: "Informe um valor inteiro para o campo quantidade",
      tipo: "BadRequest",
      titulo: "O campo quantidade deve ser um valor inteiro",
    },

    "planoitem:valida:valor_bruto": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um valor bruto válido",
      solucao: "Preencha o campo valor bruto",
      tipo: "BadRequest",
      titulo: "Valor bruto não pode ser vazio",
    },

    "planoitem:valida:valor_desconto": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um desconto válido",
      solucao: "Preencha o campo desconto",
      tipo: "BadRequest",
      titulo: "O desconto não pode ser vazio",
    },

    "planoitem:valida:valor_total": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar um total válido",
      solucao: "Preencha o campo valor total",
      tipo: "BadRequest",
      titulo: "O total não pode ser vazio",
    },

    "planoitem:erro:valortotal": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "O valor total não está de acordo com a quantidade e desconto aplicados",
      solucao: "Verifique os valores de desconto e quantidade dos itens adicionados",
      tipo: "BadRequest",
      titulo: "Valor total não calculado corretamente",
    },

    "planoitem:valida:data_hora_incluscao": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso informar a dara hora de inclusão",
      solucao: "Preencha o campo data hora de inclusão",
      tipo: "BadRequest",
      titulo: "Data hora de inclusão não pode ser vazio",
    },

    "planoitem:update:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao atualizar o item de plano no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O item de plano não pode ser atualizado",
    },

    "planoitem:delete:erro": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "Houve um erro ao excluir o item de plano no banco de dados",
      solucao: "Contate o suporte",
      tipo: "BadRequest",
      titulo: "O serviço não pode ser excluido",
    },

    "planoitem:servico:quantidade": {
      codigo: HttpStatus.BAD_REQUEST,
      motivo: "É preciso incluir pelo menos um serviço no plano",
      solucao: "Inclua um serviço no plano",
      tipo: "BadRequest",
      titulo: "O plano deve ter pelo menos um serviço incluído",
    },
};
