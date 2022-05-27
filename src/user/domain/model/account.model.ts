import { Model } from '../core/model.core';

export class AccountModel extends Model {
  private constructor(private readonly accountCode: number) {
    super();
    this.accountCode = accountCode;
  }
  getAccountCode() {
    return this.accountCode;
  }
  static new(accountCode: number) {
    return new AccountModel(accountCode);
  }
}
