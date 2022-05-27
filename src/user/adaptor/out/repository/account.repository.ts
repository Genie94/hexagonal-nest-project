import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ID } from 'src/user/domain/core/model.core';
import { AccountModel } from 'src/user/domain/model/account.model';
import { AccountRepositoryPort } from 'src/user/domain/port/out/account.repository';
import { Repository } from 'typeorm';
import { Account } from '../entity/account.entity';

@Injectable()
export class AccountRepository implements AccountRepositoryPort {
  constructor(
    @InjectRepository(Account)
    private readonly repository: Repository<Account>,
  ) {}
  async findAll(): Promise<AccountModel[]> {
    const models = await this.repository.find();
    return models.map((model) => model.toModel());
  }
  async findById(id: ID): Promise<AccountModel> {
    const model = await this.repository.findOneBy({ accountId: id.getID() });
    return model ? model.toModel() : AccountModel.new(-1);
  }
  async save(model: AccountModel): Promise<boolean> {
    try {
      await this.repository.save(Account.fromModel(model));
    } catch (e) {
      return false;
    }
    return true;
  }
}
