import { HttpStatus } from "@nestjs/common";

export interface IMessages {
  tipo: string;
  codigo: HttpStatus;
  motivo: string;
  solucao: string;
  titulo: string;
}
