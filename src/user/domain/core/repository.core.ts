import { ID, Model } from './model.core';

export interface Repository<T extends Model> {
  findById(id: ID): Promise<T>;
  findAll(): Promise<T[]>;
  save(model: T): Promise<boolean>;
}
