import { ID } from '../core/model.core';
import { UseCase } from '../core/usecase.core';
import { AccountModel } from '../model/account.model';
import { GetAccountPort } from '../port/in/get-account.port';
import { AccountRepositoryPort } from '../port/out/account.repository';

export class GetAccountUseCase
  implements UseCase<GetAccountPort, AccountModel>
{
  constructor(protected readonly accountRepo: AccountRepositoryPort) {}
  execute(port: GetAccountPort): Promise<AccountModel> {
    return this.accountRepo.findById(ID.generateID(port.accountId));
  }
}
