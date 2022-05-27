import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ID } from 'src/user/domain/core/model.core';
import { ProfileModel } from 'src/user/domain/model/profile.model';
import { ProfileRepositoryPort } from 'src/user/domain/port/out/profile.repository';
import { Repository } from 'typeorm';
import { Profile } from '../entity/profile.entity';
@Injectable()
export class ProfileRepository implements ProfileRepositoryPort {
  constructor(
    @InjectRepository(Profile)
    private readonly repository: Repository<Profile>,
  ) {}
  findAll(): Promise<ProfileModel[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: ID): Promise<ProfileModel> {
    throw new Error('Method not implemented.');
  }
  save(model: ProfileModel): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
