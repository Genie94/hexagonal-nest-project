import { Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAccountCommand } from './adaptor/in/message/create-account.commnad';
import { GetAccountQuery } from './adaptor/in/message/get-account.query';
import { GetAllAccountQuery } from './adaptor/in/message/get-all-account.query';

@Controller('user')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create() {
    const command = new CreateAccountCommand(1212);
    return this.commandBus.execute(command);
  }

  @Get()
  async getCount() {
    const query = new GetAccountQuery('111');
    const test = await this.queryBus.execute(query);
    console.log({ test });
    return test;
  }

  @Get('all')
  async getAll() {
    const query = new GetAllAccountQuery();

    return await this.queryBus.execute(query);
  }
}
