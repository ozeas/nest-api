import {
  Body,
  Catch,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from "@nestjs/common";
import { ApiForbiddenResponse, ApiResponse } from "@nestjs/swagger";
import { Roles } from "../auth/roles.decorator";
import { RotinasCodigos, successMessagePlano } from "./config";
import { PlanoService } from "./plano.service";

@Controller()
@Catch(HttpException)
export class PlanoController {
  constructor(private readonly service: PlanoService) {}

  /**
   * Apis response
   * @param res
   * @param options
   * @description Retorna um array de planos
   * @returns [Plano]
   */
  @ApiResponse({ status: 200, description: "[Plano]"})
  @Roles(RotinasCodigos.LISTAR)
  @Get("planos")
  public async all(@Res() res, @Query() options) {
    const plano = await this.service.getAll(options);
    return res.status(HttpStatus.OK).json(plano);
  }

  /**
   * Apis response
   * @param res
   * @param req
   * @param plano
   * @description Cria um plano
   * @returns JSON
   */
  @ApiResponse({status: 201, description: "Plano criado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao criar o plano"})
  @Roles(RotinasCodigos.INCLUIR)
  @Post("planos")
  public async create(@Res() res, @Req() req, @Body() plano) {
    try {
      await this.service.create(plano);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
    return res.status(HttpStatus.CREATED)
              .json(successMessagePlano["plano:create:ok"]);
  }

  /**
   * Apis response
   * @param res
   * @param id
   * @description Retorna um plano
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "Plano" })
  @Roles(RotinasCodigos.LISTAR)
  @Get("planos/:id")
  public async show(@Res() res, @Param("id") id: number) {
    const plano = await this.service.get(id);
    return res.status(HttpStatus.OK).json(plano);
  }

  /**
   * Apis response
   * @param res
   * @param req
   * @param plano
   * @param id
   * @description Atualiza um plano
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "Atualizado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao editar os dados"})
  @Roles(RotinasCodigos.EDITAR)
  @Put("planos/:id")
  public async update(@Res() res, @Req() req, @Body() plano, @Param("id") id: number) {
    try {
      await this.service.update(id, plano);
      return res.status(HttpStatus.OK).json(successMessagePlano["plano:update:ok"]);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }

  /**
   * Apis response
   * @param res
   * @param id
   * @description Exclui um plano
   * @returns JSON
   */
  @ApiResponse({ status: 202, description: "Excluído com sucesso"})
  @ApiForbiddenResponse({ description: "Houve um erro ao excluir os dados" })
  @Roles(RotinasCodigos.EXCLUIR)
  @Delete("planos/:id")
  public async delete(@Res() res, @Param("id") id: number) {
    try {
      await this.service.delete(id);
      return res.status(HttpStatus.ACCEPTED).json(successMessagePlano["plano:delete:ok"]);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }
}
