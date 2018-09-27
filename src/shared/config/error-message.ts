import { HttpStatus } from "@nestjs/common";
import { IMessages } from "./interfaces/message.interface";

import {
    errorMessagesGrupoServico,
    errorMessagesIndice,
    errorMessagesIndiceTaxa,
    errorMessagesPlano,
    errorMessagesPlanoItem,
    errorMessagesServico,
} from "../../modules/shared/errors";

export const errorMessagesConfig: { [messageCode: string]: IMessages } = {
    "generic:error:delete": {
        codigo: HttpStatus.NOT_FOUND,
        motivo: "Não foi possível excluir o recurso no banco de dados",
        solucao: "Verifique as dependências do objeto ou contate o suporte",
        tipo: "notDeleted",
        titulo: "Recurso não excluído",
    },
    "generic:notFound": {
        codigo: HttpStatus.NOT_FOUND,
        motivo: "Objeto não encontrado no banco de dados",
        solucao: "Informe um identificador válido para o objeto",
        tipo: "notFound",
        titulo: "Objeto não encontrado",
    },
    "request:unauthorized": {
        codigo: HttpStatus.UNAUTHORIZED,
        motivo: "Acesso não autorizado.",
        solucao: "Informe um login válido",
        tipo: "unauthorized",
        titulo: "Acesso não autorizado.",
    },
    "request:unauthorized:routine": {
        codigo: HttpStatus.FORBIDDEN,
        motivo: "Este usuário não tem permissão para executar essa ação.",
        solucao: "Contate o administrador do sistema.",
        tipo: "forbidden",
        titulo: "Sem permissão.",
    },

    ...errorMessagesGrupoServico,
    ...errorMessagesServico,
    ...errorMessagesIndice,
    ...errorMessagesPlano,
    ...errorMessagesPlanoItem,
    ...errorMessagesIndiceTaxa,
};
