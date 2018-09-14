import { HttpStatus } from "@nestjs/common";
import { IErrorMessages } from "./interfaces/error-message.interface";

export const errorMessagesConfig: { [messageCode: string]: IErrorMessages } = {
    "generic:notFound": {
        errorMessage: "Objeto não encontrado",
        httpStatus: HttpStatus.NOT_FOUND,
        type: "notFound",
        userMessage: "",
    },
    "generic:onCreate": {
        errorMessage: "Houve um erro ao criar o objeto.",
        httpStatus: HttpStatus.BAD_REQUEST,
        type: "onCreate",
        userMessage: "",
    },
    "generic:onDelete": {
        errorMessage: "Houve um erro ao excluir o objeto.",
        httpStatus: HttpStatus.BAD_REQUEST,
        type: "onDelete",
        userMessage: "",
    },
    "generic:onUpdate": {
        errorMessage: "Houve um erro ao editar o objeto.",
        httpStatus: HttpStatus.BAD_REQUEST,
        type: "onUpdate",
        userMessage: "",
    },
    "request:unauthorized": {
        errorMessage: "Acesso não autorizado.",
        httpStatus: HttpStatus.UNAUTHORIZED,
        type: "unauthorized",
        userMessage: "Acesso não autorizado.",
    },
};
