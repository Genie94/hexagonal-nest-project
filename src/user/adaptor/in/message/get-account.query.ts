import { IQuery } from '@nestjs/cqrs';
import { GetAccountPort } from 'src/user/domain/port/in/get-account.port';

export class GetAccountQuery implements IQuery, GetAccountPort {
  constructor(readonly accountId: string) {}
}
