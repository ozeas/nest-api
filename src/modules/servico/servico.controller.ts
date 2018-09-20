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
export class GrupoServicoController {
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
  @Get("servicos")
  public async all(@Res() res, @Query() options) {
    const servico = await this.servicoService.getAll(options);
    return res.status(HttpStatus.OK).json(servico);
  }

  
}
