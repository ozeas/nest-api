import { HttpStatus } from "@nestjs/common";
import {IMessages} from "shared/config/interfaces/message.interface";

export const successMessage: { [messageCode: string]: IMessages } = {
  "indice:create:ok": {
    codigo: HttpStatus.OK,
    motivo: "Indíce criado com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Indíce criado com sucesso",
  },
  "indice:delete:ok": {
    codigo: HttpStatus.OK,
    motivo: "Indíce excluído com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Indíce excluído com sucesso",
  },
  "indice:update:ok": {
    codigo: HttpStatus.OK,
    motivo: "Indíce atualizado com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Indíce atualizado com sucesso",
  },
};
