import { HttpStatus } from "@nestjs/common";
import {IMessages} from "shared/config/interfaces/message.interface";

export const successMessagePlano: { [messageCode: string]: IMessages } = {
  "servico:create:ok": {
    codigo: HttpStatus.OK,
    motivo: "Plano criado com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Plano criado com sucesso",
  },
  "servico:delete:ok": {
    codigo: HttpStatus.OK,
    motivo: "Plano excluído com sucesso",
    solucao: "",
    tipo: "Deleted",
    titulo: "Plano excluído com sucesso",
  },
  "servico:update:ok": {
    codigo: HttpStatus.OK,
    motivo: "Plano atualizado com sucesso",
    solucao: "",
    tipo: "Updated",
    titulo: "Plano atualizado com sucesso",
  },
};
