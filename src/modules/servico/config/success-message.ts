import { HttpStatus } from "@nestjs/common";
import {IMessages} from "shared/config/interfaces/message.interface";

export const successMessageServico: { [messageCode: string]: IMessages } = {
  "servico:create:ok": {
    codigo: HttpStatus.OK,
    motivo: "Grupo de serviço criado com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Grupo de serviço criado com sucesso",
  },
  "servico:delete:ok": {
    codigo: HttpStatus.OK,
    motivo: "Grupo de serviço excluído com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Grupo de serviço excluído com sucesso",
  },
  "servico:update:ok": {
    codigo: HttpStatus.OK,
    motivo: "Grupo de serviço atualizado com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Grupo de serviço atualizado com sucesso",
  },
};
