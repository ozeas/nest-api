import {
  Catch,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Res,
} from "@nestjs/common";

import {ApiResponse} from "@nestjs/swagger";
import {DicionarioService} from "./dicionario.service";

@Controller()
@Catch(HttpException)
export class DicionarioController {
  constructor(private readonly dicionarioService: DicionarioService) {}

  @ApiResponse({status: 200, description: "[Dicionario]"})
  @Get("dicionario/:dicionario")
  public async index(@Res() res, @Param("dicionario") dicionario: string) {
    return res.status(HttpStatus.OK).json(this.dicionarioService.get(dicionario));
  }
}
