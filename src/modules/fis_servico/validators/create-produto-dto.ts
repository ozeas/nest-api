import { ApiModelProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
} from "class-validator";

export class CreateProdutoValidate {
  @ApiModelProperty({
    maximum: 40,
    required: true,
  })
  @IsNotEmpty()
  @MaxLength(40, {
    message: "Descrição não deve ser maior que 40 caracters.",
  })
  public descricao: string;

  @ApiModelProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  public valor: number;

  @ApiModelProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  public estoque: number;
}
