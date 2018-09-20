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
import { RotinasCodigos, successMessageGrupoServico } from "./config";
import { GrupoServicoService } from "./grupo_servico.service";

/**
 * Controller
 */
@Controller()
@Catch(HttpException)
export class GrupoServicoController {

  /**
   * Creates an instance of grupo servico controller.
   * @param grupoServicoService GrupoServicoService
   */
  constructor(private readonly grupoServicoService: GrupoServicoService) {}

  /**
   * Apis response
   * @param res @Res()
   * @param options @Query()
   * @description Retorna uma lista de grupo de serviço
   * @returns Array de grupo de serviço
   */
  @ApiResponse({ status: 200, description: "[GrupoServico]"})
  @Roles(RotinasCodigos.LISTAR)
  @Get("gruposervicos")
  public async all(@Res() res, @Query() options) {
    const grupoServico = await this.grupoServicoService.getAll(options);
    return res.status(HttpStatus.OK).json(grupoServico);
  }

  /**
   * Apis response
   * @param res
   * @param gruposervico
   * @description Cria um grupo de serviço
   * @returns JSON
   */
  @ApiResponse({status: 201, description: "Grupo de serviço criado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao criar o grupo de serviço"})
  @Roles(RotinasCodigos.INCLUIR)
  @Post("gruposervicos")
  public async create(@Res() res, @Req() req, @Body() gruposervico) {
    try {
      await this.grupoServicoService.create(gruposervico);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
    return res.status(HttpStatus.CREATED)
              .json(successMessageGrupoServico["gruposervico:create:ok"]);
  }

  /**
   * Apis response
   * @param res
   * @param id
   * @description Retorna um grupo de serviço
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "GrupoServico" })
  @Roles(RotinasCodigos.LISTAR)
  @Get("gruposervicos/:id")
  public async show(@Res() res, @Param("id") id: number) {
    const gruposervico = await this.grupoServicoService.get(id);
    return res.status(HttpStatus.OK).json(gruposervico);
  }

  /**
   * Apis response
   * @param res
   * @param gruposervico
   * @param id
   * @description Atualiza um grupo de serviço
   * @returns JSON
   */
  @ApiResponse({ status: 200, description: "Atualizado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao editar os dados"})
  @Roles(RotinasCodigos.EDITAR)
  @Put("gruposervicos/:id")
  public async update(@Res() res, @Req() req, @Body() gruposervico, @Param("id") id: number) {
    try {
      await this.grupoServicoService.update(id, gruposervico);
      return res.status(HttpStatus.OK).json(successMessageGrupoServico["gruposervico:update:ok"]);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }

  /**
   * Apis response
   * @param res
   * @param id
   * @description Exclui um grupo de serviço
   * @returns JSON
   */
  @ApiResponse({ status: 202, description: "Excluído com sucesso"})
  @ApiForbiddenResponse({ description: "Houve um erro ao excluir os dados" })
  @Roles(RotinasCodigos.EXCLUIR)
  @Delete("gruposervicos/:id")
  public async delete(@Res() res, @Param("id") id: number) {
    try {
      await this.grupoServicoService.delete(id);
      return res.status(HttpStatus.ACCEPTED).json(successMessageGrupoServico["gruposervico:delete:ok"]);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }
}
