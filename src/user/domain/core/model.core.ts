import { v4 as uuid } from 'uuid';

export class ID {
  private readonly value: string;
  private constructor(value: string) {
    this.value = value;
  }
  public static generateID(id?: string): ID {
    return new ID(id ? id : uuid());
  }
  public getID() {
    return this.value;
  }
}

export class Model {
  private readonly id: ID;
  protected constructor() {
    this.id = ID.generateID();
  }
  public getID() {
    return this.id.getID();
  }
}
