import { UseCase } from '../core/usecase.core';
import { AccountModel } from '../model/account.model';
import { GetAllAccountPort } from '../port/in/get-all-account.port';
import { AccountRepositoryPort } from '../port/out/account.repository';

export class GetAllAccountUseCase
  implements UseCase<GetAllAccountPort, AccountModel[]>
{
  constructor(protected readonly accountRepo: AccountRepositoryPort) {}
  execute(): Promise<AccountModel[]> {
    return this.accountRepo.findAll();
  }
}
