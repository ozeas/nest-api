import { ApiModelProperty } from "@nestjs/swagger";
import {
  IsOptional,
} from "class-validator";

export class SearchProdutoValidate {
  @ApiModelProperty({
    maximum: 40,
    required: false,
  })
  @IsOptional()
  public descricao?: string;

  @ApiModelProperty({
    required: false,
  })
  @IsOptional()
  public valor?: number;

  @ApiModelProperty({
    required: false,
  })
  @IsOptional()
  public estoque?: number;
}
