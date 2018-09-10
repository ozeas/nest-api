import { IsNotEmpty, MaxLength, IsNumber } from 'class-validator';

export class ProdutoValidate {
  @IsNotEmpty()
  @MaxLength(40, {
    message: "Descrição não deve ser maior que 40 caracters."
  })
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsNotEmpty()
  @IsNumber()
  estoque: number;
}