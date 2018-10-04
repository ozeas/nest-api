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
import { RotinasCodigos, successMessageServico } from "./config";
import { ServicoService } from "./servico.service";

/**
 * Controller
 */
@Controller()
@Catch(HttpException)
export class ServicoController {
  /**
   * Creates an instance of grupo servico controller.
   * @param servicoService
   */
  constructor(private readonly servicoService: ServicoService) {}

  /**
   * Apis response
   * @param res
   * @param options
   * @returns Array de serviços
   */
  @ApiResponse({ status: 200, description: "[Servico]"})
  // @Roles(RotinasCodigos.LISTAR)
  @Get("servicos")
  public async all(@Res() res, @Query() options) {
    const servico = await this.servicoService.getAll(options);
    return res.status(HttpStatus.OK).json(servico);
  }

  /**
   * Apis response
   * @param res
   * @param req
   * @param servico
   * @description Cria um serviço
   * @returns JSON
   */
  @ApiResponse({status: 201, description: "Serviço criado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao criar o serviço"})
  // @Roles(RotinasCodigos.INCLUIR)
  @Post("servicos")
  public async create(@Res() res, @Req() req, @Body() servico) {
    try {
      await this.servicoService.create(servico);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
    return res.status(HttpStatus.CREATED)
              .json(successMessageServico["servico:create:ok"]);
  }

  /**
   * Apis response
   * @param res
   * @param id
   * @description Retorna um serviço
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "Servico" })
  // @Roles(RotinasCodigos.LISTAR)
  @Get("servicos/:id")
  public async show(@Res() res, @Param("id") id: number) {
    const servico = await this.servicoService.get(id);
    return res.status(HttpStatus.OK).json(servico);
  }

  /**
   * Apis response
   * @param res
   * @param req
   * @param servico
   * @param id
   * @description Atualiza um serviço
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "Atualizado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao editar os dados"})
  @Roles(RotinasCodigos.EDITAR)
  @Put("servicos/:id")
  public async update(@Res() res, @Req() req, @Body() servico, @Param("id") id: number) {
    try {
      await this.servicoService.update(id, servico);
      return res.status(HttpStatus.OK).json(successMessageServico["servico:update:ok"]);
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
  @Delete("servicos/:id")
  public async delete(@Res() res, @Param("id") id: number) {
    try {
      await this.servicoService.delete(id);
      return res.status(HttpStatus.ACCEPTED).json(successMessageServico["servico:delete:ok"]);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }
}
