import { HttpStatus } from "@nestjs/common";
import {IMessages} from "shared/config/interfaces/message.interface";

export const successMessageGrupoServico: { [messageCode: string]: IMessages } = {
  "gruposervico:create:ok": {
    codigo: HttpStatus.OK,
    motivo: "Grupo de serviço criado com sucesso",
    solucao: "",
    tipo: "Created",
    titulo: "Grupo de serviço criado com sucesso",
  },
  "gruposervico:delete:ok": {
    codigo: HttpStatus.OK,
    motivo: "Grupo de serviço excluído com sucesso",
    solucao: "",
    tipo: "Deleted",
    titulo: "Grupo de serviço excluído com sucesso",
  },
  "gruposervico:update:ok": {
    codigo: HttpStatus.OK,
    motivo: "Grupo de serviço atualizado com sucesso",
    solucao: "",
    tipo: "Updated",
    titulo: "Grupo de serviço atualizado com sucesso",
  },
};
