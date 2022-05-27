import { AccountModel } from 'src/user/domain/model/account.model';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Account')
export class Account {
  @PrimaryColumn()
  accountId: string;
  @Column()
  userNo: number;

  toModel() {
    const model = AccountModel.new(this.userNo);
    return model;
  }
  static fromModel(model: AccountModel) {
    const entity = new Account();
    entity.accountId = model.getID();
    entity.userNo = model.getAccountCode();
    return entity;
  }
}
