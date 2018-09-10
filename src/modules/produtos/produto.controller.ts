import { 
  Body, 
  Query, 
  Controller, 
  Delete, 
  Get, 
  HttpStatus, 
  Param, 
  Post, 
  Put, 
  Res, 
  HttpException,
  Catch,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProdutoService } from './produto.service';
import { ProdutoValidate } from './validators/produto-dto';
import * as Message from '../../shared/messages/message-code-success';

@Controller()
@Catch(HttpException)
// @UseGuards(AuthGuard())
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('produtos')
  public async index(@Res() res, @Query() options) {
    const produtos = await this.produtoService.getAll(options);
    return res.status(HttpStatus.OK).json(produtos);
  }

  @Post('produtos')
  public async create(@Res() res, @Body() produto: ProdutoValidate) {
    await this.produtoService.create(produto);
    return res.status(HttpStatus.CREATED).json(Message.CRIADO);
  }

  @Get('produtos/:id')
  public async show(@Res() res, @Param('id') id: number) {
    const produto = await this.produtoService.get(id);
    return res.status(HttpStatus.OK).json(produto);
  }

  @Put('produtos/:id')
  public async update(@Res() res, @Body() produto, @Param('id') id: number) {
    await this.produtoService.update(id, produto);
    return res.status(HttpStatus.OK).json(Message.ATUALIZADO);
  }

  @Delete('produtos/:id')
  public async delete(@Res() res, @Param('id') id: number) {
    await this.produtoService.delete(id);
    return res.status(HttpStatus.OK).send();
  }
}