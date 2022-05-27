import { Injectable } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAccountUseCase } from 'src/user/domain/usecase/create-account.usecase';
import { AccountRepository } from '../../out/repository/account.repository';
import { CreateAccountCommand } from '../message/create-account.commnad';

@Injectable()
@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler
  extends CreateAccountUseCase
  implements ICommandHandler<CreateAccountCommand>
{
  constructor(protected readonly accountRepo: AccountRepository) {
    super(accountRepo);
  }
}
