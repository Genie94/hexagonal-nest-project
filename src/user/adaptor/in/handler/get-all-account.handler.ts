import { Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllAccountUseCase } from 'src/user/domain/usecase/get-all-account.usecase';
import { AccountRepository } from '../../out/repository/account.repository';
import { GetAllAccountQuery } from '../message/get-all-account.query';

@Injectable()
@QueryHandler(GetAllAccountQuery)
export class GetAllAccountHandler
  extends GetAllAccountUseCase
  implements IQueryHandler<GetAllAccountQuery>
{
  constructor(protected readonly accountRepo: AccountRepository) {
    super(accountRepo);
  }
}
