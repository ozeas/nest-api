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
  Res,
} from "@nestjs/common";
import { ApiForbiddenResponse, ApiResponse } from "@nestjs/swagger";
// import * as Message from "../../shared/messages/message-code-success";
import { RotinasCodigos } from "../../shared/config/rotinas-codigos";
import { Roles } from "../auth/roles.decorator";
import { FisServicoService } from "./fis_servico.service";

@Controller()
@Catch(HttpException)
export class FisServicoController {
  constructor(private readonly fisServicoService: FisServicoService) {}

  @ApiResponse({ status: 200, description: "Fis Servico[{}]" })
  @Get("fisservicos")
  @Roles(RotinasCodigos.servico.LIST_ALL)
  public async index(@Res() res, @Query() options) {
    const fisServico = await this.fisServicoService.getAll(options);
    return res.status(HttpStatus.OK).json(fisServico);
  }

 /*  @ApiResponse({ status: 201, description: "Criado com sucesso"})
  @ApiForbiddenResponse({ description: "Houve um erro ao criar o objeto"})
  @Post("fis_servico")
  public async create(@Res() res, @Body() produto: CreateProdutoValidate) {
    try {
      await this.fisServicoService.create(produto);
      return res.status(HttpStatus.CREATED).json(Message.CRIADO);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }

  @ApiResponse({ status: 200, description: "Produto{}" })
  @Get("produtos/:id")
  public async show(@Res() res, @Param("id") id: number) {
    const produto = await this.fisServicoService.get(id);
    return res.status(HttpStatus.OK).json(produto);
  }

  @ApiResponse({ status: 200, description: "Atualizado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao editar os dados"})
  @Put("produtos/:id")
  public async update(@Res() res, @Body() produto: UpdateProdutoValidate, @Param("id") id: number) {
    try {
      await this.fisServicoService.update(id, produto);
      return res.status(HttpStatus.OK).json(Message.ATUALIZADO);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }

  @ApiResponse({ status: 202, description: "Excluído com sucesso"})
  @ApiForbiddenResponse({ description: "Houve um erro ao excluir os dados" })
  @Delete("produtos/:id")
  public async delete(@Res() res, @Param("id") id: number) {
    try {
      await this.fisServicoService.delete(id);
      return res.status(HttpStatus.ACCEPTED).json(Message.DELETADO);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  } */
}
