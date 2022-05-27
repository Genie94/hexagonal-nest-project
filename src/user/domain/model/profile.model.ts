import { Model, ID } from '../core/model.core';

export class ProfileModel extends Model {
  private constructor(
    private readonly name: string,
    private readonly accountId: ID,
    private readonly groupId: ID,
    private readonly roleId: ID,
    private readonly penaltyId: ID,
  ) {
    super();
    this.name = name;
    this.accountId = accountId;
    this.groupId = groupId;
    this.roleId = roleId;
    this.penaltyId = penaltyId;
  }
  public static new() {
    return new ProfileModel(
      '최원진',
      ID.generateID('test'),
      ID.generateID('test'),
      ID.generateID('test'),
      ID.generateID('test'),
    );
  }
}
