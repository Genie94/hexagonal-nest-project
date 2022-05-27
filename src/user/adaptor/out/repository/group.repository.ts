import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ID } from 'src/user/domain/core/model.core';
import { GroupModel } from 'src/user/domain/model/group.model';
import { GroupRepositoryPort } from 'src/user/domain/port/out/group.repository';
import { Repository } from 'typeorm';
import { Group } from '../entity/group.entity';
@Injectable()
export class GroupRepository implements GroupRepositoryPort {
  constructor(
    @InjectRepository(Group)
    private readonly repository: Repository<Group>,
  ) {}
  findAll(): Promise<GroupModel[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: ID): Promise<GroupModel> {
    throw new Error('Method not implemented.');
  }
  save(model: GroupModel): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
