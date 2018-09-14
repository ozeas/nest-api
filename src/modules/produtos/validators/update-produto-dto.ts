import { ApiModelProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
} from "class-validator";

export class UpdateProdutoValidate {
  @ApiModelProperty({
    maximum: 40,
    required: false,
  })
  @IsNotEmpty()
  @MaxLength(40, {
    message: "Descrição não deve ser maior que 40 caracters.",
  })
  public descricao?: string;

  @ApiModelProperty({
    required: false,
  })
  @IsNotEmpty()
  @IsNumber()
  public valor?: number;

  @ApiModelProperty({
    required: false,
  })
  @IsNotEmpty()
  @IsNumber()
  public estoque?: number;
}
