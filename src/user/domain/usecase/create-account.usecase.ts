import { UseCase } from '../core/usecase.core';
import { AccountModel } from '../model/account.model';
import { CreateAccountPort } from '../port/in/create-account.port';
import { AccountRepositoryPort } from '../port/out/account.repository';

export class CreateAccountUseCase
  implements UseCase<CreateAccountPort, boolean>
{
  constructor(protected readonly accountRepo: AccountRepositoryPort) {}
  execute(port: CreateAccountPort): Promise<boolean> {
    const account = AccountModel.new(port.accountCode);
    return this.accountRepo.save(account);
  }
}
