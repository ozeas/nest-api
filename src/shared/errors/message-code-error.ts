import { errorMessagesConfig } from "../config/error-message";
import { IMessages } from "../config/interfaces/message.interface";

export class MessageCodeError extends Error {
    public messageCode: string;
    public codigo: number;
    public titulo: string;
    public solucao: string;
    public tipo: string;
    public motivo: string;

    constructor(messageCode: string) {
        super();

        const errorMessageConfig = this.getMessageFromMessageCode(messageCode);
        if (!errorMessageConfig) {
            throw new Error("Unable to find message code error.");
        }

        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.codigo = errorMessageConfig.codigo;
        this.messageCode = messageCode;
        this.titulo = errorMessageConfig.titulo;
        this.motivo = errorMessageConfig.motivo;
        this.solucao = errorMessageConfig.solucao;
        this.tipo = errorMessageConfig.tipo;
    }

    /**
     * @description: Find the error config by the given message code.
     * @param {string} messageCode
     * @return {IMessages}
     */
    private getMessageFromMessageCode(messageCode: string): IMessages {
        let errorMessageConfig: IMessages;
        const code = `${messageCode}`;
        errorMessageConfig = errorMessagesConfig[code];
        if (!errorMessageConfig) {
            errorMessageConfig = {
                codigo: 400,
                motivo: "Erro não mapeada pelo sistema",
                solucao: "Repita a operação ou contate o suporte",
                tipo: "notFound",
                titulo: "Erro não mapeada pelo sistema",
            };
        }

        return errorMessageConfig;
    }
}
