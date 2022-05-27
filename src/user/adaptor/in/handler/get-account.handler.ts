import { Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAccountUseCase } from 'src/user/domain/usecase/get-account.usecase';
import { AccountRepository } from '../../out/repository/account.repository';
import { GetAccountQuery } from '../message/get-account.query';

@Injectable()
@QueryHandler(GetAccountQuery)
export class GetAccountHandler
  extends GetAccountUseCase
  implements IQueryHandler<GetAccountQuery>
{
  constructor(protected readonly accountRepo: AccountRepository) {
    super(accountRepo);
  }
}
