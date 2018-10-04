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
import {
  RotinasCodigos,
  successMessage } from "./config";
import { IndiceService } from "./indice.service";

/**
 * Controller
 */
@Controller()
@Catch(HttpException)
export class IndiceController {
  /**
   * Creates an instance of grupo servico controller.
   * @param indiceService
   */
  constructor(private readonly indiceService: IndiceService) {}

  /**
   * Apis response
   * @param res
   * @param options
   * @returns Array de indices
   */
  @ApiResponse({ status: 200, description: "[Indice]"})
  @Roles(RotinasCodigos.LISTAR)
  @Get("indices")
  public async all(@Res() res, @Query() options) {
    const indice = await this.indiceService.getAll(options);
    return res.status(HttpStatus.OK).json(indice);
  }

  @ApiResponse({status: 201, description: "Indíce criado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao criar o indíce"})
  @Roles(RotinasCodigos.INCLUIR)
  @Post("indices")
  public async create(@Res() res, @Req() req, @Body() indice) {
    try {
      await this.indiceService.create(indice);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
    return res.status(HttpStatus.CREATED)
              .json(successMessage["indice:create:ok"]);
  }

  /**
   * Apis response
   * @param res
   * @param id
   * @description Retorna um indíce
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "Indíce" })
  @Roles(RotinasCodigos.LISTAR)
  @Get("indices/:id")
  public async show(@Res() res, @Param("id") id: number) {
    const servico = await this.indiceService.get(id);
    return res.status(HttpStatus.OK).json(servico);
  }

  /**
   * Apis response
   * @param res
   * @param req
   * @param servico
   * @param id
   * @description Atualiza um indíce
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "Atualizado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao editar os dados"})
  @Roles(RotinasCodigos.EDITAR)
  @Put("indices/:id")
  public async update(@Res() res, @Req() req, @Body() servico, @Param("id") id: number) {
    try {
      await this.indiceService.update(id, servico);
      return res.status(HttpStatus.OK).json(successMessage["indice:update:ok"]);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }

  /**
   * Apis response
   * @param res
   * @param id
   * @description Exclui um serviço
   * @returns JSON
   */
  @ApiResponse({ status: 202, description: "Excluído com sucesso"})
  @ApiForbiddenResponse({ description: "Houve um erro ao excluir os dados" })
  @Roles(RotinasCodigos.EXCLUIR)
  @Delete("indices/:id")
  public async delete(@Res() res, @Param("id") id: number) {
    try {
      await this.indiceService.delete(id);
      return res.status(HttpStatus.ACCEPTED).json(successMessage["indice:delete:ok"]);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }

}
