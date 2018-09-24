import { HttpStatus } from "@nestjs/common";
import { IMessages } from "./interfaces/message.interface";

import {
    errorMessagesGrupoServico,
    errorMessagesIndice,
    errorMessagesIndiceTaxa,
    errorMessagesServico,
} from "../../modules/shared/errors";

export const errorMessagesConfig: { [messageCode: string]: IMessages } = {
    "generic:notFound": {
        codigo: HttpStatus.NOT_FOUND,
        motivo: "Objeto não encontrado no banco de dados",
        solucao: "Informe um dados válido",
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
    ...errorMessagesIndiceTaxa,
};
