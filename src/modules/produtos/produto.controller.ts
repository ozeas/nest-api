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
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiForbiddenResponse, ApiResponse } from "@nestjs/swagger";
import * as Message from "../../shared/messages/message-code-success";
import { ProdutoService } from "./produto.service";
import {
  CreateProdutoValidate,
  UpdateProdutoValidate,
} from "./validators";

@Controller()
@Catch(HttpException)
// @UseGuards(AuthGuard())
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @ApiResponse({ status: 200, description: "Produto[{}]" })
  @Get("produtos")
  public async index(@Res() res, @Query() options) {
    const produtos = await this.produtoService.getAll(options);
    return res.status(HttpStatus.OK).json(produtos);
  }

  @ApiResponse({ status: 201, description: "Criado com sucesso"})
  @ApiForbiddenResponse({ description: "Houve um erro ao criar o objeto"})
  @Post("produtos")
  public async create(@Res() res, @Body() produto: CreateProdutoValidate) {
    try {
      await this.produtoService.create(produto);
      return res.status(HttpStatus.CREATED).json(Message.CRIADO);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }

  @ApiResponse({ status: 200, description: "Produto{}" })
  @Get("produtos/:id")
  public async show(@Res() res, @Param("id") id: number) {
    const produto = await this.produtoService.get(id);
    return res.status(HttpStatus.OK).json(produto);
  }

  @ApiResponse({ status: 200, description: "Atualizado com sucesso"})
  @ApiForbiddenResponse({description: "Houve um erro ao editar os dados"})
  @Put("produtos/:id")
  public async update(@Res() res, @Body() produto: UpdateProdutoValidate, @Param("id") id: number) {
    try {
      await this.produtoService.update(id, produto);
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
      await this.produtoService.delete(id);
      return res.status(HttpStatus.ACCEPTED).json(Message.DELETADO);
    } catch (error) {
      return res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }
}
