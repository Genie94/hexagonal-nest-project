import { IQuery } from '@nestjs/cqrs';
import { GetAllAccountPort } from 'src/user/domain/port/in/get-all-account.port';

export class GetAllAccountQuery implements IQuery, GetAllAccountPort {}
