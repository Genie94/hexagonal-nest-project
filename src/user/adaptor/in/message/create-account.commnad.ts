import { ICommand } from '@nestjs/cqrs';
import { CreateAccountPort } from 'src/user/domain/port/in/create-account.port';

export class CreateAccountCommand implements ICommand, CreateAccountPort {
  constructor(readonly accountCode: number) {}
}
