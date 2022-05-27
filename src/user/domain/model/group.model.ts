import { Model } from '../core/model.core';

export class GroupModel extends Model {
  private readonly name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
}
